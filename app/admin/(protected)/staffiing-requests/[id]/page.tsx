import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

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

type StaffingRequestPageProps = {
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
  value: string | number | null;
}) {
  return (
    <div>
      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
        {label}
      </p>

      <p className="mt-2 font-sans text-sm leading-6 text-[#172033]/75">
        {value === null || value === "" ? "Not provided" : value}
      </p>
    </div>
  );
}

export default async function StaffingRequestDetailPage({
  params,
}: StaffingRequestPageProps) {
  const { id } = await params;

  const { data: request, error } = await supabaseAdmin
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
    .eq("id", id)
    .single();

  if (error || !request) {
    if (error) {
      console.error("Failed to load staffing request:", error);
    }

    notFound();
  }

  const record = request as StaffingRequest;

  return (
    <div className="space-y-10">
      {/* Back navigation */}
      <Link
        href="/admin/staffing-requests"
        className="inline-flex items-center gap-2 font-sans text-sm text-[#172033]/50 transition-colors hover:text-[#1B2D5B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2D5B] focus-visible:ring-offset-4"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to staffing requests
      </Link>

      {/* Header */}
      <section className="border-b border-[#1B2D5B]/10 pb-10">
        <Eyebrow>Staffing request</Eyebrow>

        <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="max-w-3xl font-display text-4xl font-medium tracking-[-0.04em] text-[#1B2D5B] sm:text-5xl">
              {record.organization_name}
            </h1>

            <p className="mt-3 font-sans text-base text-[#172033]/55">
              {record.staffing_role}
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
        {/* Request details */}
        <div className="space-y-6">
          <section className="rounded-2xl border border-[#1B2D5B]/10 bg-[#FBF8F3] p-6 sm:p-8">
            <div className="border-b border-[#1B2D5B]/10 pb-5">
              <Eyebrow>What they need</Eyebrow>
            </div>

            <div className="mt-7 grid gap-7 sm:grid-cols-2">
              <DetailItem
                label="Staffing role"
                value={record.staffing_role}
              />

              <DetailItem
                label="Staffing need"
                value={record.staffing_need}
              />

              <DetailItem
                label="Location"
                value={record.location}
              />

              <DetailItem
                label="Approximate staff"
                value={record.approximate_staff_count}
              />
            </div>

            <div className="mt-8 border-t border-[#1B2D5B]/10 pt-7">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
                Additional details
              </p>

              <p className="mt-3 whitespace-pre-wrap font-sans text-sm leading-7 text-[#172033]/70">
                {record.details || "No additional details were provided."}
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-[#1B2D5B]/10 bg-[#FBF8F3] p-6 sm:p-8">
            <div className="border-b border-[#1B2D5B]/10 pb-5">
              <Eyebrow>Request context</Eyebrow>
            </div>

            <div className="mt-7">
              <p className="font-sans text-sm leading-7 text-[#172033]/65">
                This request was submitted by{" "}
                <span className="font-semibold text-[#172033]">
                  {record.contact_name}
                </span>{" "}
                on behalf of{" "}
                <span className="font-semibold text-[#172033]">
                  {record.organization_name}
                </span>
                .
              </p>

              <p className="mt-4 font-sans text-sm leading-7 text-[#172033]/55">
                The next step is to understand the organization&apos;s needs
                and determine the appropriate staffing support.
              </p>
            </div>
          </section>
        </div>

        {/* Contact information */}
        <aside>
          <section className="rounded-2xl border border-[#1B2D5B]/10 bg-[#E8F0EA] p-6">
            <Eyebrow>Contact person</Eyebrow>

            <h2 className="mt-4 font-display text-2xl font-medium tracking-[-0.03em] text-[#1B2D5B]">
              {record.contact_name}
            </h2>

            <div className="mt-7 space-y-4">
              <a
                href={`mailto:${record.email}`}
                className="flex items-start gap-3 font-sans text-sm text-[#172033]/70 transition-colors hover:text-[#1B2D5B]"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#1B2D5B]" />

                <span className="break-all">{record.email}</span>
              </a>

              <a
                href={`tel:${record.phone}`}
                className="flex items-start gap-3 font-sans text-sm text-[#172033]/70 transition-colors hover:text-[#1B2D5B]"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#1B2D5B]" />

                <span>{record.phone}</span>
              </a>

              <div className="flex items-start gap-3 font-sans text-sm text-[#172033]/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1B2D5B]" />

                <span>{record.location}</span>
              </div>
            </div>

            <div className="mt-7 border-t border-[#1B2D5B]/10 pt-6">
              <a
                href={`mailto:${record.email}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1B2D5B] px-5 py-3 font-sans text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#17264B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2D5B] focus-visible:ring-offset-2"
              >
                Contact organization
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
