import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  FileText,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

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
  experience_level: string;
  experience_summary: string | null;
  preferred_area: string | null;
  document_name: string | null;
  document_path: string | null;
  created_at: string;
};

type ApplicationPageProps = {
  params: Promise<{
    id: string;
  }>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-CA", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function DetailItem({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) {
  return (
    <div>
      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
        {label}
      </p>

      <p className="mt-2 font-sans text-sm leading-6 text-[#172033]/75">
        {value || "Not provided"}
      </p>
    </div>
  );
}

export default async function ApplicationDetailPage({
  params,
}: ApplicationPageProps) {
  const { id } = await params;

  const { data: application, error } = await supabaseAdmin
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
        experience_level,
        experience_summary,
        preferred_area,
        document_name,
        document_path,
        created_at
      `,
    )
    .eq("id", id)
    .single();

  if (error || !application) {
    if (error) {
      console.error("Failed to load professional application:", error);
    }

    notFound();
  }

  const record = application as Application;

  let documentUrl: string | null = null;

  if (record.document_path) {
    const { data, error: signedUrlError } = await supabaseAdmin.storage
      .from("professional-documents")
      .createSignedUrl(record.document_path, 60 * 10);

    if (signedUrlError) {
      console.error(
        "Failed to create application document URL:",
        signedUrlError,
      );
    } else {
      documentUrl = data.signedUrl;
    }
  }

  return (
    <div className="space-y-10">
      {/* Back navigation */}
      <Link
        href="/admin/applications"
        className="inline-flex items-center gap-2 font-sans text-sm text-[#172033]/50 transition-colors hover:text-[#1B2D5B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2D5B] focus-visible:ring-offset-4"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to applications
      </Link>

      {/* Header */}
      <section className="border-b border-[#1B2D5B]/10 pb-10">
        <Eyebrow>Professional application</Eyebrow>

        <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="font-display text-4xl font-medium tracking-[-0.04em] text-[#1B2D5B] sm:text-5xl">
              {record.first_name} {record.last_name}
            </h1>

            <p className="mt-3 font-sans text-base text-[#172033]/55">
              {record.professional_role}
            </p>
          </div>

          <div className="lg:text-right">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/35">
              Submitted
            </p>

            <p className="mt-2 font-sans text-sm text-[#172033]/60">
              {formatDate(record.created_at)}
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        {/* Application information */}
        <div className="space-y-6">
          <section className="rounded-2xl border border-[#1B2D5B]/10 bg-[#FBF8F3] p-6 sm:p-8">
            <div className="border-b border-[#1B2D5B]/10 pb-5">
              <Eyebrow>Personal information</Eyebrow>
            </div>

            <div className="mt-7 grid gap-7 sm:grid-cols-2">
              <DetailItem
                label="First name"
                value={record.first_name}
              />

              <DetailItem
                label="Last name"
                value={record.last_name}
              />

              <DetailItem
                label="Email"
                value={record.email}
              />

              <DetailItem
                label="Phone"
                value={record.phone}
              />

              <DetailItem
                label="Location"
                value={record.location}
              />
            </div>
          </section>

          <section className="rounded-2xl border border-[#1B2D5B]/10 bg-[#FBF8F3] p-6 sm:p-8">
            <div className="border-b border-[#1B2D5B]/10 pb-5">
              <Eyebrow>Professional information</Eyebrow>
            </div>

            <div className="mt-7 grid gap-7 sm:grid-cols-2">
              <DetailItem
                label="Professional role"
                value={record.professional_role}
              />

              <DetailItem
                label="Experience"
                value={record.experience_level}
              />

              <DetailItem
                label="Preferred area"
                value={record.preferred_area}
              />
            </div>

            <div className="mt-8 border-t border-[#1B2D5B]/10 pt-7">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
                Experience summary
              </p>

              <p className="mt-3 whitespace-pre-wrap font-sans text-sm leading-7 text-[#172033]/70">
                {record.experience_summary || "Not provided"}
              </p>
            </div>
          </section>
        </div>

        {/* Contact + document */}
        <aside className="space-y-6">
          <section className="rounded-2xl border border-[#1B2D5B]/10 bg-[#E8F0EA] p-6">
            <Eyebrow>Contact</Eyebrow>

            <div className="mt-6 space-y-4">
              <a
                href={`mailto:${record.email}`}
                className="flex items-start gap-3 font-sans text-sm text-[#172033]/70 transition-colors hover:text-[#1B2D5B]"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#1B2D5B]" />

                <span className="break-all">{record.email}</span>
              </a>

              {record.phone && (
                <a
                  href={`tel:${record.phone}`}
                  className="flex items-start gap-3 font-sans text-sm text-[#172033]/70 transition-colors hover:text-[#1B2D5B]"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#1B2D5B]" />

                  <span>{record.phone}</span>
                </a>
              )}

              <div className="flex items-start gap-3 font-sans text-sm text-[#172033]/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1B2D5B]" />

                <span>{record.location}</span>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-[#1B2D5B]/10 bg-[#FBF8F3] p-6">
            <Eyebrow>Application document</Eyebrow>

            {record.document_path && record.document_name ? (
              <div className="mt-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F0EA] text-[#1B2D5B]">
                    <FileText className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="break-words font-sans text-sm font-medium text-[#172033]">
                      {record.document_name}
                    </p>

                    <p className="mt-1 font-sans text-xs text-[#172033]/40">
                      Private document
                    </p>
                  </div>
                </div>

                {documentUrl ? (
                  <a
                    href={documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1B2D5B] px-5 py-3 font-sans text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#17264B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2D5B] focus-visible:ring-offset-2"
                  >
                    View document
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <p className="mt-5 rounded-xl bg-[#F5EFE6] px-4 py-3 font-sans text-xs leading-5 text-[#172033]/50">
                    The document exists, but a temporary viewing link could
                    not be generated.
                  </p>
                )}
              </div>
            ) : (
              <p className="mt-6 font-sans text-sm leading-6 text-[#172033]/50">
                No application document was provided.
              </p>
            )}
          </section>
        </aside>
      </div>
    </div>
  );
}

