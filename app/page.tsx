import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

import { Hero } from "@/components/home/hero";
import { StaffingChallenge } from "@/components/home/staffing-challenge";
import { HowItWorks } from "@/components/home/how-it-works";
import { StaffingSolutions } from "@/components/home/staffing-solutions";
import { AudiencePathways } from "@/components/home/audience-pathways";
import { WhyCareRify } from "@/components/home/why-carerify";
import { AboutPreview } from "@/components/home/about-preview";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <StaffingChallenge />
        <HowItWorks />
        <StaffingSolutions />
        <AudiencePathways />
        <WhyCareRify />
        <AboutPreview />
        <FinalCta />
      </main>

      <SiteFooter />
    </>
  );
}