import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { StaffingSolutionsPage } from "@/components/staffing-solutions/staffing-solutions-page";

export const metadata: Metadata = {
  title: "Staffing Solutions",
  description:
    "Explore CareRify's healthcare staffing solutions for organizations across Northern Ontario.",
};

export default function StaffingSolutionsRoute() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <StaffingSolutionsPage />
      </main>

      <SiteFooter />
    </div>
  );
}