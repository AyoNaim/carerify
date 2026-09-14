
import { z } from "zod";

export const joinNetworkSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required.")
    .max(80, "First name is too long."),

  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required.")
    .max(80, "Last name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(255, "Email address is too long."),

  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(30, "Phone number is too long."),

  location: z
    .string()
    .trim()
    .min(1, "City or area is required.")
    .max(120, "Location is too long."),

  professionalRole: z.enum(
    ["PSW", "RPN", "RN", "Dietary & Support Staff", "Other"],
    {
      error: "Please select your professional role.",
    },
  ),

  yearsExperience: z.enum(
    ["Less than 1 year", "1–2 years", "3–5 years", "6–10 years", "10+ years"],
    {
      error: "Please select your experience level.",
    },
  ),

  experienceSummary: z
    .string()
    .trim()
    .min(20, "Please tell us a little more about your experience.")
    .max(2000, "Experience summary is too long."),

  preferredArea: z
    .string()
    .trim()
    .min(1, "Please tell us where you would prefer to work.")
    .max(120, "Preferred area is too long."),

  consent: z
    .literal("on", {
      error: "You must agree before submitting your application.",
    }),

  privacyAcknowledged: z
    .literal("on", {
      error: "Please acknowledge the privacy notice.",
    }),
});

export type JoinNetworkInput = z.infer<typeof joinNetworkSchema>;