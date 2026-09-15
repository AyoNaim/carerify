import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";

import { Eyebrow } from "@/components/ui/eyebrow";
import { supabaseAdmin } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

type Application = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  location: string;
  professional_role: string;
  years_experience: string;
  experience_summary: string | null;
  preferred_area: string | null;
  document_name: string | null;
  created_at: string;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default async function AdminApplicationsPage() {
  const { data: applications, error } = await supabaseAdmin
    .from("professional_applications")
    .select(
      `
        id,
        first_name,
        last_name,
        email,
        phone,
        location,
        professional_role,
        years_experience,
        experience_summary,
        preferred_area,
        document_name,
        created_at
      `,
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load professional applications:", error);
  }

  const records = (applications as Application[] | null) ?? [];

  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="max-w-3xl">
        <Eyebrow>Healthcare professionals</Eyebrow>

        <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-4xl font-medium tracking-[-0.04em] text-[#1B2D5B] sm:text-5xl">
              Professional applications.
            </h1>

            <p className="mt-4 max-w-2xl font-sans text-base leading-7 text-[#172033]/60">
              Review people who have expressed interest in joining the
              CareRify healthcare network.
            </p>
          </div>

          <div className="shrink-0">
            <span className="font-display text-3xl tracking-[-0.03em] text-[#1B2D5B]">
              {records.length}
            </span>

            <span className="ml-2 font-sans text-sm text-[#172033]/45">
              {records.length === 1 ? "application" : "applications"}
            </span>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section>
        {error ? (
          <div className="rounded-2xl border border-red-900/10 bg-red-50 p-6">
            <p className="font-sans text-sm font-medium text-red-900">
              We couldn't load the applications right now.
            </p>

            <p className="mt-1 font-sans text-sm text-red-900/60">
              Please refresh the page and try again.
            </p>
          </div>
        ) : records.length === 0 ? (
          <div className="rounded-2xl border border-[#1B2D5B]/10 bg-[#FBF8F3] px-6 py-16 text-center">
            <p className="font-display text-2xl tracking-[-0.03em] text-[#1B2D5B]">
              No applications yet.
            </p>

            <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-6 text-[#172033]/50">
              New healthcare professional applications will appear here once
              they are submitted.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-[#1B2D5B]/10 bg-[#FBF8F3]">
            {/* Desktop table */}
            <div className="hidden overflow-x-auto lg:block">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#1B2D5B]/10">
                    <th className="px-6 py-4 text-left font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
                      Applicant
                    </th>

                    <th className="px-6 py-4 text-left font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
                      Role
                    </th>

                    <th className="px-6 py-4 text-left font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
                      Experience
                    </th>

                    <th className="px-6 py-4 text-left font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
                      Location
                    </th>

                    <th className="px-6 py-4 text-left font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
                      Resume
                    </th>

                    <th className="px-6 py-4 text-right font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
                      Submitted
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#1B2D5B]/10">
                  {records.map((application) => (
                    <tr
                      key={application.id}
                      className="group cursor-pointer transition-colors hover:bg-[#E8F0EA]/45"
                    >
                      <td className="px-6 py-5">
                        <Link
                          href={`/admin/applications/${application.id}`}
                          className="group/link block"
                        >
                          <p className="font-sans text-sm font-semibold text-[#172033] group-hover/link:text-[#1B2D5B]">
                            {application.first_name} {application.last_name}
                          </p>

                          <p className="mt-1 font-sans text-xs text-[#172033]/45">
                            {application.email}
                          </p>
                        </Link>
                      </td>

                      <td className="px-6 py-5">
                        <p className="font-sans text-sm text-[#172033]/70">
                          {application.professional_role}
                        </p>
                      </td>

                      <td className="px-6 py-5">
                        <p className="font-sans text-sm text-[#172033]/70">
                          {application.years_experience}
                        </p>
                      </td>

                      <td className="px-6 py-5">
                        <p className="max-w-[180px] truncate font-sans text-sm text-[#172033]/60">
                          {application.location}
                        </p>
                      </td>

                      <td className="px-6 py-5">
                        {application.document_name ? (
                          <span className="inline-flex items-center gap-2 font-sans text-xs font-medium text-[#1B2D5B]">
                            <FileText className="h-4 w-4" />
                            Available
                          </span>
                        ) : (
                          <span className="font-sans text-xs text-[#172033]/35">
                            Not provided
                          </span>
                        )}
                      </td>

                      <td className="px-6 py-5 text-right">
                        <Link
                          href={`/admin/applications/${application.id}`}
                          className="group/link flex items-center justify-end gap-3"
                        >
                          <time
                            dateTime={application.created_at}
                            className="font-sans text-xs text-[#172033]/40"
                          >
                            {formatDate(application.created_at)}
                          </time>

                          <ArrowUpRight className="h-4 w-4 text-[#172033]/25 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-[#1B2D5B]" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="divide-y divide-[#1B2D5B]/10 lg:hidden">
              {records.map((application) => (
                <Link
                  key={application.id}
                  href={`/admin/applications/${application.id}`}
                  className="block p-5 transition-colors hover:bg-[#E8F0EA]/45"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-sans text-sm font-semibold text-[#172033]">
                        {application.first_name} {application.last_name}
                      </p>

                      <p className="mt-1 truncate font-sans text-xs text-[#172033]/45">
                        {application.email}
                      </p>
                    </div>

                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#172033]/30" />
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#172033]/35">
                        Role
                      </p>

                      <p className="mt-1 font-sans text-sm text-[#172033]/70">
                        {application.professional_role}
                      </p>
                    </div>

                    <div>
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#172033]/35">
                        Experience
                      </p>

                      <p className="mt-1 font-sans text-sm text-[#172033]/70">
                        {application.years_experience}
                      </p>
                    </div>

                    <div>
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#172033]/35">
                        Location
                      </p>

                      <p className="mt-1 truncate font-sans text-sm text-[#172033]/70">
                        {application.location}
                      </p>
                    </div>

                    <div>
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#172033]/35">
                        Resume
                      </p>

                      <p className="mt-1 font-sans text-sm text-[#172033]/70">
                        {application.document_name
                          ? "Available"
                          : "Not provided"}
                      </p>
                    </div>
                  </div>

                  <time
                    dateTime={application.created_at}
                    className="mt-5 block font-sans text-xs text-[#172033]/35"
                  >
                    Submitted {formatDate(application.created_at)}
                  </time>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

