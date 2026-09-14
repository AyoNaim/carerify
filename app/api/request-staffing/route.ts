import { NextResponse } from "next/server";
import { Resend } from "resend";

import { supabaseAdmin } from "@/lib/supabase/admin";
import { requestStaffingSchema } from "@/lib/validations/request-staffing";

export async function POST(request: Request) {
  try {
    /*
     * Check required environment variables.
     */
    const resendApiKey = process.env.RESEND_API_KEY;

    const notificationEmails =
      process.env.CAREFIFY_NOTIFICATION_EMAILS
        ?.split(",")
        .map((email) => email.trim())
        .filter(Boolean) ?? [];

    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");

      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong. Please try again later.",
        },
        { status: 500 },
      );
    }

    if (notificationEmails.length === 0) {
      console.error(
        "Missing CAREFIFY_NOTIFICATION_EMAILS environment variable.",
      );

      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong. Please try again later.",
        },
        { status: 500 },
      );
    }

    if (!fromEmail) {
      console.error("Missing RESEND_FROM_EMAIL environment variable.");

      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong. Please try again later.",
        },
        { status: 500 },
      );
    }

    /*
     * Read the JSON request body.
     */
    const body = await request.json();

    /*
     * Convert incoming values into the shape expected
     * by the validation schema.
     */
    const rawData = {
      organizationName: String(body.organizationName ?? ""),
      contactName: String(body.contactName ?? ""),
      email: String(body.email ?? ""),
      phone: String(body.phone ?? ""),
      staffingRole: String(body.staffingRole ?? ""),
      staffingNeed: String(body.staffingNeed ?? ""),
      location: String(body.location ?? ""),
      approximateStaffCount: String(
        body.approximateStaffCount ?? "",
      ),
      details: String(body.details ?? ""),
      consent: body.consent === "on" ? "on" : "",
    };

    /*
     * Validate before touching Supabase.
     */
    const validation = requestStaffingSchema.safeParse(rawData);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please check the form and correct the highlighted fields.",
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = validation.data;

    /*
     * Insert the validated request into Supabase.
     */
    const { data: requestRecord, error: insertError } =
      await supabaseAdmin
        .from("staffing_requests")
        .insert({
          organization_name: data.organizationName,
          contact_name: data.contactName,
          email: data.email,
          phone: data.phone,
          staffing_role: data.staffingRole,
          staffing_need: data.staffingNeed,
          location: data.location,
          approximate_staff_count:
            data.approximateStaffCount,
          details: data.details || null,
          consent_given: true,
        })
        .select("id")
        .single();

    if (insertError || !requestRecord) {
      console.error(
        "Failed to create staffing request:",
        insertError,
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "We couldn't submit your request right now. Please try again.",
        },
        { status: 500 },
      );
    }

    /*
     * Send the notification email after the database
     * insert succeeds.
     */
    const resend = new Resend(resendApiKey);

    const { error: emailError } = await resend.emails.send({
      from: fromEmail,
      to: notificationEmails,
      replyTo: data.email,
      subject: `New staffing request — ${data.organizationName}`,
      text: [
        "A new staffing request has been submitted.",
        "",
        `Request ID: ${requestRecord.id}`,
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

    /*
     * The database submission succeeded even if the
     * notification email failed.
     */
    if (emailError) {
      console.error(
        `Staffing request ${requestRecord.id} was saved, but the notification email failed:`,
        emailError,
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "We've received your staffing request.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Request staffing API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't submit your request right now. Please try again.",
      },
      { status: 500 },
    );
  }
}