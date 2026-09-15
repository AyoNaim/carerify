import Link from "next/link";

import { supabaseAdmin } from "@/lib/supabase/admin";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Arrow } from "@/components/ui/arrow";

export const dynamic = "force-dynamic";

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  organization: string | null;
  inquiry_type: string;
  message: string;
  created_at: string;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-CA", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
}

function formatInquiryType(value: string) {
  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function truncateMessage(message: string, length = 100) {
  if (message.length <= length) return message;
  return `${message.slice(0, length).trim()}…`;
}

export default async function ContactMessagesPage() {
  const { data, error } = await supabaseAdmin
    .from("contact_messages")
    .select(
      `
        id,
        name,
        email,
        organization,
        inquiry_type,
        message,
        created_at
      `,
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load contact messages:", error);

    return (
      <section className="space-y-8">
        <div>
          <Eyebrow>Contact messages</Eyebrow>

          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-[#1B2D5B] sm:text-5xl">
            Contact messages
          </h1>

          <p className="mt-4 max-w-2xl font-sans text-sm leading-7 text-[#172033]/60 sm:text-base">
            Messages submitted through the CareRify contact form.
          </p>
        </div>

        <div className="rounded-2xl border border-red-900/10 bg-white p-6">
          <p className="font-sans text-sm text-red-900">
            We couldn&apos;t load contact messages right now. Please try again.
          </p>
        </div>
      </section>
    );
  }

  const messages = (data ?? []) as ContactMessage[];

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Eyebrow>Contact messages</Eyebrow>

          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-[#1B2D5B] sm:text-5xl">
            Contact messages
          </h1>

          <p className="mt-4 max-w-2xl font-sans text-sm leading-7 text-[#172033]/60 sm:text-base">
            Review enquiries and messages submitted through the CareRify
            website.
          </p>
        </div>

        <div className="rounded-full border border-[#1B2D5B]/10 bg-[#FBF8F3] px-4 py-2">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#1B2D5B]/60">
            {messages.length} {messages.length === 1 ? "message" : "messages"}
          </span>
        </div>
      </div>

      {messages.length === 0 ? (
        <div className="rounded-2xl border border-[#1B2D5B]/10 bg-[#FBF8F3] px-6 py-16 text-center">
          <p className="font-display text-2xl font-semibold tracking-[-0.03em] text-[#1B2D5B]">
            No contact messages yet.
          </p>

          <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-6 text-[#172033]/55">
            New messages submitted through the website will appear here.
          </p>
        </div>
      ) : (
        <>
          {/* Desktop */}
          <div className="hidden overflow-hidden rounded-2xl border border-[#1B2D5B]/10 bg-[#FBF8F3] lg:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse">
                <thead>
                  <tr className="border-b border-[#1B2D5B]/10">
                    <th className="px-6 py-4 text-left font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
                      Sender
                    </th>

                    <th className="px-6 py-4 text-left font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
                      Enquiry
                    </th>

                    <th className="px-6 py-4 text-left font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
                      Message
                    </th>

                    <th className="px-6 py-4 text-left font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
                      Received
                    </th>

                    <th className="px-6 py-4">
                      <span className="sr-only">View</span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {messages.map((message) => (
                    <tr
                      key={message.id}
                      className="group border-b border-[#1B2D5B]/8 last:border-b-0"
                    >
                      <td className="px-6 py-5">
                        <div>
                          <p className="font-sans text-sm font-semibold text-[#172033]">
                            {message.name}
                          </p>

                          <p className="mt-1 text-xs text-[#172033]/50">
                            {message.email}
                          </p>

                          {message.organization && (
                            <p className="mt-1 text-xs text-[#172033]/40">
                              {message.organization}
                            </p>
                          )}
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <span className="inline-flex rounded-full bg-[#E8F0EA] px-3 py-1.5 font-sans text-xs font-medium text-[#1B2D5B]">
                          {formatInquiryType(message.inquiry_type)}
                        </span>
                      </td>

                      <td className="max-w-[360px] px-6 py-5">
                        <p className="font-sans text-sm leading-6 text-[#172033]/65">
                          {truncateMessage(message.message)}
                        </p>
                      </td>

                      <td className="whitespace-nowrap px-6 py-5">
                        <p className="font-sans text-xs text-[#172033]/55">
                          {formatDate(message.created_at)}
                        </p>
                      </td>

                      <td className="px-6 py-5 text-right">
                        <Link
                          href={`/admin/contact-messages/${message.id}`}
                          aria-label={`View message from ${message.name}`}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1B2D5B]/10 text-[#1B2D5B] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1B2D5B]/20 hover:bg-[#E8F0EA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2D5B] focus-visible:ring-offset-2"
                        >
                          <Arrow direction="right" size="sm" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile */}
          <div className="space-y-3 lg:hidden">
            {messages.map((message) => (
              <Link
                key={message.id}
                href={`/admin/contact-messages/${message.id}`}
                className="group block rounded-2xl border border-[#1B2D5B]/10 bg-[#FBF8F3] p-5 transition-all duration-200 hover:border-[#1B2D5B]/20 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2D5B] focus-visible:ring-offset-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="font-sans text-sm font-semibold text-[#172033]">
                      {message.name}
                    </p>

                    <p className="mt-1 truncate font-sans text-xs text-[#172033]/50">
                      {message.email}
                    </p>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#1B2D5B]/10 text-[#1B2D5B] transition-colors group-hover:bg-[#E8F0EA]">
                    <Arrow direction="right" size="sm" />
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-full bg-[#E8F0EA] px-3 py-1.5 font-sans text-[11px] font-medium text-[#1B2D5B]">
                    {formatInquiryType(message.inquiry_type)}
                  </span>

                  <span className="font-sans text-[11px] text-[#172033]/40">
                    {formatDate(message.created_at)}
                  </span>
                </div>

                <p className="mt-4 font-sans text-sm leading-6 text-[#172033]/60">
                  {truncateMessage(message.message, 140)}
                </p>

                {message.organization && (
                  <p className="mt-3 font-sans text-xs text-[#172033]/40">
                    {message.organization}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
