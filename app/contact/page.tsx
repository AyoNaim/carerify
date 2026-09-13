import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ContactPage } from "@/components/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with CareRify about healthcare staffing, joining our healthcare network, or a general inquiry.",
};

export default function ContactRoute() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <ContactPage />
      </main>

      <SiteFooter />
    </div>
  );
}