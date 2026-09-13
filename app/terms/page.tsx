import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { TermsPage } from "@/components/terms/terms-page";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Review the terms governing your use of the CareRify website and its online services.",
};

export default function TermsRoute() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <TermsPage />
      </main>

      <SiteFooter />
    </div>
  );
}
