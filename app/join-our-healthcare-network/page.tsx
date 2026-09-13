import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { JoinNetworkPage } from "@/components/join-network/join-network-page";

export const metadata: Metadata = {
  title: "Join Our Healthcare Network",
  description:
    "Introduce yourself to CareRify and explore opportunities to contribute your experience to healthcare teams across Northern Ontario.",
};

export default function JoinOurHealthcareNetworkRoute() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <JoinNetworkPage />
      </main>

      <SiteFooter />
    </div>
  );
}