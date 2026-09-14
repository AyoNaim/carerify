import { z } from "zod";

export const contactSchema = z.object({
name: z
.string()
.trim()
.min(1, "Your name is required.")
.max(120, "Your name is too long."),

email: z
.string()
.trim()
.email("Please enter a valid email address.")
.max(255, "Email address is too long."),

organization: z
.string()
.trim()
.max(160, "Organization name is too long.")
.optional(),

inquiryType: z.enum(
[
"Healthcare staffing",
"Joining the healthcare network",
"General inquiry",
"Other",
],
{
error: "Please select an inquiry type.",
},
),

message: z
.string()
.trim()
.min(10, "Please tell us a little more about your inquiry.")
.max(3000, "Your message is too long."),

consent: z.literal("on", {
error: "You must agree before submitting this form.",
}),
});

export type ContactInput = z.infer<typeof contactSchema>;
