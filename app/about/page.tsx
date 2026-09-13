import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AboutPage } from "@/components/about/about-page";

export const metadata: Metadata = {
  title: "About CareRify",
  description:
    "Learn about CareRify and our people-first approach to healthcare staffing across Northern Ontario.",
};

export default function AboutRoute() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <AboutPage />
      </main>

      <SiteFooter />
    </div>
  );
}

