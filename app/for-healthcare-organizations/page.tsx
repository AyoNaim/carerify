import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { OrganizationsPage } from "@/components/organizations/organizations-page";

export const metadata: Metadata = {
  title: "For Healthcare Organizations",
  description:
    "CareRify helps healthcare organizations connect with qualified professionals and support staff when additional staffing support is needed.",
};

export default function HealthcareOrganizationsRoute() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <OrganizationsPage />
      </main>

      <SiteFooter />
    </div>
  );
}