"use server";

import { Resend } from "resend";

import { supabaseAdmin } from "@/lib/supabase/admin";
import { requestStaffingSchema } from "@/lib/validations/request-staffing";

const resend = new Resend(process.env.RESEND_API_KEY);

const notificationEmails =
  process.env.CAREFIFY_NOTIFICATION_EMAILS
    ?.split(",")
    .map((email) => email.trim())
    .filter(Boolean) ?? [];

const fromEmail = process.env.RESEND_FROM_EMAIL;

export type RequestStaffingState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitRequestStaffing(
  _previousState: RequestStaffingState,
  formData: FormData,
): Promise<RequestStaffingState> {
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable.");

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }

  if (notificationEmails.length === 0) {
    console.error(
      "Missing CAREFIFY_NOTIFICATION_EMAILS environment variable.",
    );

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }

  if (!fromEmail) {
    console.error("Missing RESEND_FROM_EMAIL environment variable.");

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }

  const rawData = {
    organizationName: formData.get("organizationName"),
    contactName: formData.get("contactName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    staffingRole: formData.get("staffingRole"),
    staffingNeed: formData.get("staffingNeed"),
    location: formData.get("location"),
    approximateStaffCount: formData.get("approximateStaffCount"),
    details: formData.get("details"),
    consent: formData.get("consent"),
  };

  const validation = requestStaffingSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      success: false,
      message: "Please check the form and correct the highlighted fields.",
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const data = validation.data;

  const { data: request, error: insertError } = await supabaseAdmin
    .from("staffing_requests")
    .insert({
      organization_name: data.organizationName,
      contact_name: data.contactName,
      email: data.email,
      phone: data.phone,
      staffing_role: data.staffingRole,
      staffing_need: data.staffingNeed,
      location: data.location,
      approximate_staff_count: data.approximateStaffCount,
      details: data.details || null,
      consent_given: true,
    })
    .select("id")
    .single();

  if (insertError || !request) {
    console.error("Failed to create staffing request:", insertError);

    return {
      success: false,
      message:
        "We couldn't submit your request right now. Please try again.",
    };
  }

  const { error: emailError } = await resend.emails.send({
    from: fromEmail,
    to: notificationEmails,
    replyTo: data.email,
    subject: `New staffing request — ${data.organizationName}`,
    text: [
      "A new staffing request has been submitted.",
      "",
      `Request ID: ${request.id}`,
      "",
      "Organization",
      `Name: ${data.organizationName}`,
      `Contact: ${data.contactName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      "",
      "Staffing need",
      `Role: ${data.staffingRole}`,
      `Need: ${data.staffingNeed}`,
      `Location: ${data.location}`,
      `Approximate staff count: ${
        data.approximateStaffCount ?? "Not provided"
      }`,
      "",
      "Additional details",
      data.details || "None provided",
    ].join("\n"),
  });

  if (emailError) {
    console.error(
      `Staffing request ${request.id} was saved, but the notification email failed:`,
      emailError,
    );
  }

  return {
    success: true,
    message: "We've received your staffing request.",
  };
}