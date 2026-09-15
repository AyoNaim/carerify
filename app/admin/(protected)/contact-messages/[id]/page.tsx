import Link from "next/link";
import { notFound } from "next/navigation";

import { supabaseAdmin } from "@/lib/supabase/admin";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ArrowUpRight } from "@/components/ui/arrow";

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

type ContactMessagePageProps = {
  params: Promise<{
    id: string;
  }>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-CA", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(date));
}

function formatInquiryType(value: string) {
  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default async function ContactMessageDetailPage({
  params,
}: ContactMessagePageProps) {
  const { id } = await params;

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
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error("Failed to load contact message:", error);
    notFound();
  }

  if (!data) {
    notFound();
  }

  const message = data as ContactMessage;

  return (
    <section className="space-y-8">
      {/* Back */}
      <Link
        href="/admin/contact-messages"
        className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#1B2D5B]/60 transition-colors hover:text-[#1B2D5B] focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#1B2D5B] focus-visible:ring-offset-2"
      >
        <span aria-hidden="true">←</span>
        Back to contact messages
      </Link>

      {/* Header */}
      <div className="border-b border-[#1B2D5B]/10 pb-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Eyebrow>Contact message</Eyebrow>

            <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-[#1B2D5B] sm:text-5xl">
              {message.name}
            </h1>

            <p className="mt-3 font-sans text-sm text-[#172033]/50">
              Received {formatDate(message.created_at)}
            </p>
          </div>

          <span className="inline-flex w-fit rounded-full bg-[#E8F0EA] px-4 py-2 font-sans text-xs font-semibold text-[#1B2D5B]">
            {formatInquiryType(message.inquiry_type)}
          </span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        {/* Message */}
        <div className="rounded-2xl border border-[#1B2D5B]/10 bg-[#FBF8F3] p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#172033]/40">
                Message
              </p>

              <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-[#1B2D5B]">
                Enquiry details
              </h2>
            </div>
          </div>

          <div className="mt-8 border-t border-[#1B2D5B]/10 pt-7">
            <p className="whitespace-pre-wrap font-sans text-sm leading-7 text-[#172033]/75 sm:text-base">
              {message.message}
            </p>
          </div>
        </div>

        {/* Sender */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-[#1B2D5B]/10 bg-[#FBF8F3] p-6">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#172033]/40">
              Sender
            </p>

            <div className="mt-5 space-y-5">
              <div>
                <p className="font-sans text-xs text-[#172033]/40">Name</p>
                <p className="mt-1 font-sans text-sm font-medium text-[#172033]">
                  {message.name}
                </p>
              </div>

              <div>
                <p className="font-sans text-xs text-[#172033]/40">Email</p>

                <a
                  href={`mailto:${message.email}`}
                  className="mt-1 block break-all font-sans text-sm font-medium text-[#1B2D5B] underline decoration-[#1B2D5B]/20 underline-offset-4 transition-colors hover:decoration-[#1B2D5B] focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#1B2D5B]"
                >
                  {message.email}
                </a>
              </div>

              {message.organization && (
                <div>
                  <p className="font-sans text-xs text-[#172033]/40">
                    Organization
                  </p>

                  <p className="mt-1 font-sans text-sm font-medium text-[#172033]">
                    {message.organization}
                  </p>
                </div>
              )}

              <div>
                <p className="font-sans text-xs text-[#172033]/40">
                  Enquiry type
                </p>

                <p className="mt-1 font-sans text-sm font-medium text-[#172033]">
                  {formatInquiryType(message.inquiry_type)}
                </p>
              </div>
            </div>
          </div>

          <a
            href={`mailto:${message.email}?subject=${encodeURIComponent(
              `Re: ${formatInquiryType(message.inquiry_type)}`,
            )}`}
            className="group flex w-full items-center justify-between rounded-2xl bg-[#1B2D5B] px-5 py-4 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#152449] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2D5B] focus-visible:ring-offset-2"
          >
            <span className="font-sans text-sm font-semibold">
              Reply via email
            </span>

            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowUpRight />
            </span>
          </a>
        </aside>
      </div>
    </section>
  );
}

