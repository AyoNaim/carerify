import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { supabaseAdmin } from "@/lib/supabase/admin";
import { Eyebrow } from "@/components/ui/eyebrow";

export const dynamic = "force-dynamic";

type RecentApplication = {
  id: string;
  first_name: string;
  last_name: string;
  professional_role: string;
  created_at: string;
};

type RecentStaffingRequest = {
  id: string;
  organization_name: string;
  staffing_role: string;
  created_at: string;
};

type RecentContactMessage = {
  id: string;
  name: string;
  inquiry_type: string;
  created_at: string;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function StatCard({
  label,
  value,
  href,
  description,
}: {
  label: string;
  value: number;
  href: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-[#1B2D5B]/10 bg-[#FBF8F3] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1B2D5B]/20 hover:shadow-[0_18px_45px_rgba(23,32,51,0.07)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#172033]/45">
            {label}
          </p>

          <p className="mt-5 font-display text-4xl font-medium tracking-[-0.04em] text-[#1B2D5B]">
            {value}
          </p>

          <p className="mt-2 font-sans text-sm text-[#172033]/50">
            {description}
          </p>
        </div>

        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1B2D5B]/10 text-[#1B2D5B]/60 transition-all duration-300 group-hover:border-[#1B2D5B]/20 group-hover:bg-[#E8F0EA] group-hover:text-[#1B2D5B]">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

export default async function AdminOverviewPage() {
  const [
    applicationsResult,
    staffingRequestsResult,
    contactMessagesResult,
    recentApplicationsResult,
    recentStaffingRequestsResult,
    recentContactMessagesResult,
  ] = await Promise.all([
    supabaseAdmin
      .from("professional_applications")
      .select("id", { count: "exact", head: true }),

    supabaseAdmin
      .from("staffing_requests")
      .select("id", { count: "exact", head: true }),

    supabaseAdmin
      .from("contact_messages")
      .select("id", { count: "exact", head: true }),

    supabaseAdmin
      .from("professional_applications")
      .select(
        "id, first_name, last_name, professional_role, created_at",
      )
      .order("created_at", { ascending: false })
      .limit(5),

    supabaseAdmin
      .from("staffing_requests")
      .select("id, organization_name, staffing_role, created_at")
      .order("created_at", { ascending: false })
      .limit(5),

    supabaseAdmin
      .from("contact_messages")
      .select("id, name, inquiry_type, created_at")
      .order("created_at", { ascending: false })
      .limit(5),
  ]);

  const errors = [
    applicationsResult.error,
    staffingRequestsResult.error,
    contactMessagesResult.error,
    recentApplicationsResult.error,
    recentStaffingRequestsResult.error,
    recentContactMessagesResult.error,
  ].filter(Boolean);

  if (errors.length > 0) {
    console.error("Admin dashboard data error:", errors);
  }

  const applicationCount = applicationsResult.count ?? 0;
  const staffingRequestCount = staffingRequestsResult.count ?? 0;
  const contactMessageCount = contactMessagesResult.count ?? 0;

  const applications =
    (recentApplicationsResult.data as RecentApplication[] | null) ?? [];

  const staffingRequests =
    (recentStaffingRequestsResult.data as RecentStaffingRequest[] | null) ?? [];

  const contactMessages =
    (recentContactMessagesResult.data as RecentContactMessage[] | null) ?? [];

  const activity = [
    ...applications.map((application) => ({
      id: `application-${application.id}`,
      type: "Application",
      title: `${application.first_name} ${application.last_name}`,
      detail: application.professional_role,
      date: application.created_at,
      href: "/admin/applications",
    })),

    ...staffingRequests.map((request) => ({
      id: `staffing-${request.id}`,
      type: "Staffing request",
      title: request.organization_name,
      detail: request.staffing_role,
      date: request.created_at,
      href: "/admin/staffing-requests",
    })),

    ...contactMessages.map((message) => ({
      id: `contact-${message.id}`,
      type: "Contact message",
      title: message.name,
      detail: message.inquiry_type,
      date: message.created_at,
      href: "/admin/contact-messages",
    })),
  ]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    )
    .slice(0, 8);

  return (
    <div className="space-y-12">
      {/* Page introduction */}
      <section className="max-w-3xl">
        <Eyebrow>Administration</Eyebrow>

        <h1 className="mt-5 font-display text-4xl font-medium tracking-[-0.04em] text-[#1B2D5B] sm:text-5xl">
          A clear view of what needs your attention.
        </h1>

        <p className="mt-5 max-w-2xl font-sans text-base leading-7 text-[#172033]/60 sm:text-lg">
          Review professional applications, staffing requests, and messages
          from organizations and healthcare professionals.
        </p>
      </section>

      {/* Summary */}
      <section
        aria-label="Dashboard summary"
        className="grid gap-4 md:grid-cols-3"
      >
        <StatCard
          label="Applications"
          value={applicationCount}
          description="Healthcare professionals"
          href="/admin/applications"
        />

        <StatCard
          label="Staffing requests"
          value={staffingRequestCount}
          description="From healthcare organizations"
          href="/admin/staffing-requests"
        />

        <StatCard
          label="Messages"
          value={contactMessageCount}
          description="Contact enquiries"
          href="/admin/contact-messages"
        />
      </section>

      {/* Recent activity */}
      <section>
        <div className="flex items-end justify-between gap-6 border-b border-[#1B2D5B]/10 pb-4">
          <div>
            <Eyebrow>Recent activity</Eyebrow>

            <h2 className="mt-3 font-display text-2xl font-medium tracking-[-0.03em] text-[#1B2D5B]">
              The latest conversations and submissions.
            </h2>
          </div>
        </div>

        {activity.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-display text-xl text-[#1B2D5B]">
              Nothing here yet.
            </p>

            <p className="mt-2 font-sans text-sm text-[#172033]/50">
              New applications, requests, and messages will appear here.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-[#1B2D5B]/10">
            {activity.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group grid gap-3 py-5 transition-colors sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="truncate font-sans text-sm font-semibold text-[#172033]">
                      {item.title}
                    </p>

                    <span className="font-sans text-xs text-[#172033]/35">
                      {item.type}
                    </span>
                  </div>

                  <p className="mt-1 truncate font-sans text-sm text-[#172033]/50">
                    {item.detail}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-6 sm:justify-end">
                  <time
                    dateTime={item.date}
                    className="font-sans text-xs text-[#172033]/40"
                  >
                    {formatDate(item.date)}
                  </time>

                  <ArrowUpRight className="h-4 w-4 text-[#172033]/30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1B2D5B]" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

