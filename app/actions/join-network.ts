"use server";

import { Resend } from "resend";

import { supabaseAdmin } from "@/lib/supabase/admin";
import {
  joinNetworkSchema,
  type JoinNetworkInput,
} from "@/lib/validations/join-network";

const resend = new Resend(process.env.RESEND_API_KEY);

const notificationEmails =
  process.env.CAREFIFY_NOTIFICATION_EMAILS
    ?.split(",")
    .map((email) => email.trim())
    .filter(Boolean) ?? [];

const fromEmail = process.env.RESEND_FROM_EMAIL;

const DOCUMENT_BUCKET = "professional-documents";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

const ALLOWED_FILE_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export type JoinNetworkState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitJoinNetwork(
  _previousState: JoinNetworkState,
  formData: FormData,
): Promise<JoinNetworkState> {
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
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    location: formData.get("location"),
    professionalRole: formData.get("professionalRole"),
    yearsExperience: formData.get("yearsExperience"),
    experienceSummary: formData.get("experienceSummary"),
    preferredArea: formData.get("preferredArea"),
    consent: formData.get("consent"),
    privacyAcknowledged: formData.get("privacyAcknowledged"),
  };

  const validation = joinNetworkSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      success: false,
      message: "Please check the form and correct the highlighted fields.",
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const data: JoinNetworkInput = validation.data;

  /*
   * Optional document upload.
   *
   * The form can submit without a document.
   * If a file is provided, validate it before touching Supabase.
   */
  const document = formData.get("document");

  let uploadedDocumentPath: string | null = null;
  let uploadedDocumentName: string | null = null;

  if (document instanceof File && document.size > 0) {
    if (document.size > MAX_FILE_SIZE) {
      return {
        success: false,
        message: "Your document must be 5 MB or smaller.",
        errors: {
          document: ["Your document must be 5 MB or smaller."],
        },
      };
    }

    if (!ALLOWED_FILE_TYPES.has(document.type)) {
      return {
        success: false,
        message: "Please upload a PDF or Word document.",
        errors: {
          document: ["Please upload a PDF or Word document."],
        },
      };
    }

    /*
     * Generate a storage-safe filename.
     *
     * We deliberately don't use the applicant's email or other
     * personal information in the storage path.
     */
    const extension =
      document.type === "application/pdf"
        ? "pdf"
        : document.type ===
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          ? "docx"
          : "doc";

    const storageFileName = `${crypto.randomUUID()}.${extension}`;

    const storagePath = `applications/${storageFileName}`;

    const fileBuffer = Buffer.from(await document.arrayBuffer());

    const { error: uploadError } = await supabaseAdmin.storage
      .from(DOCUMENT_BUCKET)
      .upload(storagePath, fileBuffer, {
        contentType: document.type,
        upsert: false,
      });

    if (uploadError) {
      console.error("Failed to upload professional document:", uploadError);

      return {
        success: false,
        message:
          "We couldn't upload your document. Please try again or submit without it.",
        errors: {
          document: [
            "We couldn't upload your document. Please try again.",
          ],
        },
      };
    }

    uploadedDocumentPath = storagePath;
    uploadedDocumentName = document.name;
  }

  /*
   * Save the application only after the document upload succeeds.
   *
   * This prevents us from creating an application record that points
   * to a document that was never successfully uploaded.
   */
  const { data: application, error: insertError } = await supabaseAdmin
    .from("professional_applications")
    .insert({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,
      location: data.location,
      professional_role: data.professionalRole,
      years_experience: data.yearsExperience,
      experience_summary: data.experienceSummary,
      preferred_area: data.preferredArea,
      document_path: uploadedDocumentPath,
      document_name: uploadedDocumentName,
      consent_given: true,
      privacy_acknowledged: true,
    })
    .select("id")
    .single();

  if (insertError || !application) {
    console.error(
      "Failed to create professional application:",
      insertError,
    );

    /*
     * If the database insert fails after the document was uploaded,
     * remove the orphaned document.
     */
    if (uploadedDocumentPath) {
      const { error: cleanupError } = await supabaseAdmin.storage
        .from(DOCUMENT_BUCKET)
        .remove([uploadedDocumentPath]);

      if (cleanupError) {
        console.error(
          "Failed to clean up orphaned professional document:",
          cleanupError,
        );
      }
    }

    return {
      success: false,
      message:
        "We couldn't submit your application right now. Please try again.",
    };
  }

  /*
   * Notify the CareRify team.
   *
   * We don't attach the applicant's document to the email.
   * The team can access it through the private storage workflow.
   */
  const { error: emailError } = await resend.emails.send({
    from: fromEmail,
    to: notificationEmails,
    replyTo: data.email,
    subject: `New healthcare professional application — ${data.firstName} ${data.lastName}`,
    text: [
      "A new healthcare professional application has been submitted.",
      "",
      `Application ID: ${application.id}`,
      "",
      "Applicant",
      `Name: ${data.firstName} ${data.lastName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Location: ${data.location}`,
      "",
      "Professional information",
      `Role: ${data.professionalRole}`,
      `Experience: ${data.yearsExperience}`,
      `Preferred area: ${data.preferredArea}`,
      "",
      "Experience summary",
      data.experienceSummary,
      "",
      "Document",
      uploadedDocumentName
        ? `Uploaded: ${uploadedDocumentName}`
        : "No document uploaded.",
    ].join("\n"),
  });

  if (emailError) {
    /*
     * The application has already been safely saved.
     * Do not tell the applicant that their application failed.
     */
    console.error(
      `Professional application ${application.id} was saved, but the notification email failed:`,
      emailError,
    );
  }

  return {
    success: true,
    message:
      "We've received your application. Thank you for introducing yourself to CareRify.",
  };
}

