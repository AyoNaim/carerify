import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "CareRify — Verified Care. Every Shift.",
    template: "%s — CareRify",
  },

  description:
    "CareRify connects healthcare organizations with qualified healthcare professionals and support staff across Northern Ontario.",

  applicationName: "CareRify",

  keywords: [
    "healthcare staffing",
    "healthcare professionals",
    "healthcare staffing Northern Ontario",
    "PSW staffing",
    "RPN staffing",
    "RN staffing",
    "healthcare support staff",
    "CareRify",
  ],

  authors: [
    {
      name: "CareRify",
    },
  ],

  creator: "CareRify",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    title: "CareRify — Verified Care. Every Shift.",
    description:
      "Verified professionals. Reliable staffing. Better-supported care.",
    siteName: "CareRify",
  },

  twitter: {
    card: "summary_large_image",
    title: "CareRify — Verified Care. Every Shift.",
    description:
      "Verified professionals. Reliable staffing. Better-supported care.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}