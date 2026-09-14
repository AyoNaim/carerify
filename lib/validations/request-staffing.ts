import { z } from "zod";

export const requestStaffingSchema = z.object({
  organizationName: z
    .string()
    .trim()
    .min(2, "Organization name is required.")
    .max(150, "Organization name is too long."),

  contactName: z
    .string()
    .trim()
    .min(2, "Your name is required.")
    .max(100, "Your name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email address is too long."),

  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(30, "Phone number is too long."),

  staffingRole: z
    .string()
    .trim()
    .min(1, "Please select a staffing role."),

  staffingNeed: z
    .string()
    .trim()
    .min(1, "Please select what you need help with."),

  location: z
    .string()
    .trim()
    .min(2, "Location is required.")
    .max(150, "Location is too long."),

  approximateStaffCount: z
    .string()
    .trim()
    .refine(
      (value) => value === "" || /^\d+$/.test(value),
      "Please enter a valid number of staff.",
    )
    .transform((value) => (value === "" ? null : Number(value)))
    .refine(
      (value) => value === null || (value > 0 && value <= 10000),
      "Staff count must be between 1 and 10,000.",
    ),

  details: z
    .string()
    .trim()
    .max(5000, "Additional details are too long.")
    .optional()
    .or(z.literal("")),

  consent: z
    .string()
    .refine(
      (value) => value === "on",
      "You must agree before submitting your request.",
    ),
});

export type RequestStaffingInput = z.infer<typeof requestStaffingSchema>;

