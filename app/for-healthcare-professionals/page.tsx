import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProfessionalsPage } from "@/components/professionals/professionals-page";

export const metadata: Metadata = {
  title: "For Healthcare Professionals",
  description:
    "Connect with CareRify and explore opportunities to support healthcare organizations across Northern Ontario.",
};

export default function HealthcareProfessionalsRoute() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <ProfessionalsPage />
      </main>

      <SiteFooter />
    </div>
  );
}

