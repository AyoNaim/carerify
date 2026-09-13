import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PrivacyPage } from "@/components/privacy/privacy-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how CareRify collects, uses, stores, and protects personal information submitted through its website.",
};

export default function PrivacyRoute() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <PrivacyPage />
      </main>

      <SiteFooter />
    </div>
  );
}