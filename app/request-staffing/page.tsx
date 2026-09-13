import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { RequestStaffingPage } from "@/components/request-staffing/request-staffing-page";

export const metadata: Metadata = {
  title: "Request Staffing",
  description:
    "Tell CareRify about your organization's staffing needs and start a conversation about healthcare staffing support.",
};

export default function RequestStaffingRoute() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <RequestStaffingPage />
      </main>

      <SiteFooter />
    </div>
  );
}