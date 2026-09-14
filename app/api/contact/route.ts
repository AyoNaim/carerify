import { NextResponse } from "next/server";
import { Resend } from "resend";

import { supabaseAdmin } from "@/lib/supabase/admin";
import {
  contactSchema,
  type ContactInput,
} from "@/lib/validations/contact";

export const runtime = "nodejs";

export type ContactState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    const notificationEmails =
      process.env.CAREFIFY_NOTIFICATION_EMAILS
        ?.split(",")
        .map((email) => email.trim())
        .filter(Boolean) ?? [];

    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!resendApiKey) {
      console.error(
        "Missing RESEND_API_KEY environment variable.",
      );

      return NextResponse.json<ContactState>(
        {
          success: false,
          message:
            "Something went wrong. Please try again later.",
        },
        { status: 500 },
      );
    }

    if (notificationEmails.length === 0) {
      console.error(
        "Missing CAREFIFY_NOTIFICATION_EMAILS environment variable.",
      );

      return NextResponse.json<ContactState>(
        {
          success: false,
          message:
            "Something went wrong. Please try again later.",
        },
        { status: 500 },
      );
    }

    if (!fromEmail) {
      console.error(
        "Missing RESEND_FROM_EMAIL environment variable.",
      );

      return NextResponse.json<ContactState>(
        {
          success: false,
          message:
            "Something went wrong. Please try again later.",
        },
        { status: 500 },
      );
    }

    const body = await request.json();

    const rawData = {
      name: String(body.name ?? ""),
      email: String(body.email ?? ""),
      organization: String(body.organization ?? ""),
      inquiryType: String(body.inquiryType ?? ""),
      message: String(body.message ?? ""),
      consent: body.consent === "on" ? "on" : "",
    };

    const validation = contactSchema.safeParse(rawData);

    if (!validation.success) {
      return NextResponse.json<ContactState>(
        {
          success: false,
          message:
            "Please check the form and correct the highlighted fields.",
          errors:
            validation.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data: ContactInput = validation.data;

    const { data: inquiry, error: insertError } =
      await supabaseAdmin
        .from("contact_messages")
        .insert({
          name: data.name,
          email: data.email,
          organization: data.organization || null,
          inquiry_type: data.inquiryType,
          message: data.message,
          consent_given: true,
        })
        .select("id")
        .single();

    if (insertError || !inquiry) {
      console.error(
        "Failed to create contact inquiry:",
        insertError,
      );

      return NextResponse.json<ContactState>(
        {
          success: false,
          message:
            "We couldn't send your message right now. Please try again.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    const { error: emailError } =
      await resend.emails.send({
        from: fromEmail,
        to: notificationEmails,
        replyTo: data.email,
        subject: `New contact inquiry — ${data.inquiryType}`,
        text: [
          "A new contact inquiry has been submitted.",
          "",
          `Inquiry ID: ${inquiry.id}`,
          "",
          "Contact",
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Organization: ${
            data.organization || "Not provided"
          }`,
          "",
          "Inquiry",
          `Type: ${data.inquiryType}`,
          "",
          "Message",
          data.message,
        ].join("\n"),
      });

    if (emailError) {
      console.error(
        `Contact inquiry ${inquiry.id} was saved, but the notification email failed:`,
        emailError,
      );
    }

    return NextResponse.json<ContactState>(
      {
        success: true,
        message:
          "Your message has been received. We'll be in touch as soon as we can.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json<ContactState>(
      {
        success: false,
        message:
          "We couldn't send your message right now. Please try again.",
      },
      { status: 500 },
    );
  }
}