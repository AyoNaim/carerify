import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Eyebrow } from "@/components/ui/eyebrow";
import { supabaseAdmin } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

type StaffingRequest = {
  id: string;
  organization_name: string;
  contact_name: string;
  email: string;
  phone: string;
  staffing_role: string;
  staffing_need: string;
  location: string;
  approximate_staff_count: number | null;
  details: string | null;
  created_at: string;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default async function AdminStaffingRequestsPage() {
  const { data: requests, error } = await supabaseAdmin
    .from("staffing_requests")
    .select(
      `
        id,
        organization_name,
        contact_name,
        email,
        phone,
        staffing_role,
        staffing_need,
        location,
        approximate_staff_count,
        details,
        created_at
      `,
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load staffing requests:", error);
  }

  const records = (requests as StaffingRequest[] | null) ?? [];

  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="max-w-3xl">
        <Eyebrow>Healthcare organizations</Eyebrow>

        <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-4xl font-medium tracking-[-0.04em] text-[#1B2D5B] sm:text-5xl">
              Staffing requests.
            </h1>

            <p className="mt-4 max-w-2xl font-sans text-base leading-7 text-[#172033]/60">
              Review requests from healthcare organizations looking for
              staffing support.
            </p>
          </div>

          <div className="shrink-0">
            <span className="font-display text-3xl tracking-[-0.03em] text-[#1B2D5B]">
              {records.length}
            </span>

            <span className="ml-2 font-sans text-sm text-[#172033]/45">
              {records.length === 1 ? "request" : "requests"}
            </span>
          </div>
        </div>
      </section>

      {/* Requests */}
      <section>
        {error ? (
          <div className="rounded-2xl border border-red-900/10 bg-red-50 p-6">
            <p className="font-sans text-sm font-medium text-red-900">
              We couldn't load the staffing requests right now.
            </p>

            <p className="mt-1 font-sans text-sm text-red-900/60">
              Please refresh the page and try again.
            </p>
          </div>
        ) : records.length === 0 ? (
          <div className="rounded-2xl border border-[#1B2D5B]/10 bg-[#FBF8F3] px-6 py-16 text-center">
            <p className="font-display text-2xl tracking-[-0.03em] text-[#1B2D5B]">
              No staffing requests yet.
            </p>

            <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-6 text-[#172033]/50">
              New requests from healthcare organizations will appear here
              once submitted.
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
                      Organization
                    </th>

                    <th className="px-6 py-4 text-left font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
                      Staffing need
                    </th>

                    <th className="px-6 py-4 text-left font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
                      Role
                    </th>

                    <th className="px-6 py-4 text-left font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
                      Location
                    </th>

                    <th className="px-6 py-4 text-left font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
                      Staff
                    </th>

                    <th className="px-6 py-4 text-right font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
                      Submitted
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#1B2D5B]/10">
                  {records.map((request) => (
                    <tr
                      key={request.id}
                      className="group transition-colors hover:bg-[#E8F0EA]/45"
                    >
                      <td className="px-6 py-5">
                        <Link
                          href={`/admin/staffing-requests/${request.id}`}
                          className="group/link block"
                        >
                          <p className="font-sans text-sm font-semibold text-[#172033] group-hover/link:text-[#1B2D5B]">
                            {request.organization_name}
                          </p>

                          <p className="mt-1 font-sans text-xs text-[#172033]/45">
                            {request.contact_name} · {request.email}
                          </p>
                        </Link>
                      </td>

                      <td className="px-6 py-5">
                        <p className="max-w-[190px] font-sans text-sm text-[#172033]/65">
                          {request.staffing_need}
                        </p>
                      </td>

                      <td className="px-6 py-5">
                        <p className="font-sans text-sm text-[#172033]/70">
                          {request.staffing_role}
                        </p>
                      </td>

                      <td className="px-6 py-5">
                        <p className="max-w-[180px] truncate font-sans text-sm text-[#172033]/60">
                          {request.location}
                        </p>
                      </td>

                      <td className="px-6 py-5">
                        <p className="font-sans text-sm text-[#172033]/60">
                          {request.approximate_staff_count ?? "—"}
                        </p>
                      </td>

                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <time
                            dateTime={request.created_at}
                            className="font-sans text-xs text-[#172033]/40"
                          >
                            {formatDate(request.created_at)}
                          </time>

                          <ArrowUpRight className="h-4 w-4 text-[#172033]/25 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1B2D5B]" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="divide-y divide-[#1B2D5B]/10 lg:hidden">
              {records.map((request) => (
                <Link
                  key={request.id}
                  href={`/admin/staffing-requests/${request.id}`}
                  className="block p-5 transition-colors hover:bg-[#E8F0EA]/45"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-sans text-sm font-semibold text-[#172033]">
                        {request.organization_name}
                      </p>

                      <p className="mt-1 truncate font-sans text-xs text-[#172033]/45">
                        {request.contact_name} · {request.email}
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
                        {request.staffing_role}
                      </p>
                    </div>

                    <div>
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#172033]/35">
                        Need
                      </p>

                      <p className="mt-1 font-sans text-sm text-[#172033]/70">
                        {request.staffing_need}
                      </p>
                    </div>

                    <div>
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#172033]/35">
                        Location
                      </p>

                      <p className="mt-1 truncate font-sans text-sm text-[#172033]/70">
                        {request.location}
                      </p>
                    </div>

                    <div>
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#172033]/35">
                        Staff
                      </p>

                      <p className="mt-1 font-sans text-sm text-[#172033]/70">
                        {request.approximate_staff_count ?? "Not specified"}
                      </p>
                    </div>
                  </div>

                  <time
                    dateTime={request.created_at}
                    className="mt-5 block font-sans text-xs text-[#172033]/35"
                  >
                    Submitted {formatDate(request.created_at)}
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

