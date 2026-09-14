"use server";

import { Resend } from "resend";

import { supabaseAdmin } from "@/lib/supabase/admin";
import {
contactSchema,
type ContactInput,
} from "@/lib/validations/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

const notificationEmails =
process.env.CAREFIFY_NOTIFICATION_EMAILS
?.split(",")
.map((email) => email.trim())
.filter(Boolean) ?? [];

const fromEmail = process.env.RESEND_FROM_EMAIL;

export type ContactState = {
success: boolean;
message: string;
errors?: Record<string, string[]>;
};

export async function submitContact(
_previousState: ContactState,
formData: FormData,
): Promise<ContactState> {
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
name: formData.get("name"),
email: formData.get("email"),
organization: formData.get("organization"),
inquiryType: formData.get("inquiryType"),
message: formData.get("message"),
consent: formData.get("consent"),
};

const validation = contactSchema.safeParse(rawData);

if (!validation.success) {
return {
success: false,
message: "Please check the form and correct the highlighted fields.",
errors: validation.error.flatten().fieldErrors,
};
}

const data: ContactInput = validation.data;

const { data: inquiry, error: insertError } = await supabaseAdmin
.from("contact_inquiries")
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
console.error("Failed to create contact inquiry:", insertError);

return {
  success: false,
  message:
    "We couldn't send your message right now. Please try again.",
};


}

const { error: emailError } = await resend.emails.send({
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
`Organization: ${data.organization || "Not provided"}`,
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

return {
success: true,
message:
"Your message has been received. We'll be in touch as soon as we can.",
};
}
