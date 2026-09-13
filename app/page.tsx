import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

import { Hero } from "@/components/home/hero";
import { StaffingChallenge } from "@/components/home/staffing-challenge";
import { BrandStatement } from "@/components/home/brand-statement";
import { HowItWorks } from "@/components/home/how-it-works";
import { StaffingSolutions } from "@/components/home/staffing-solutions";
import { AudiencePathways } from "@/components/home/audience-pathways";
import { CarePhilosophy } from "@/components/home/philosophy";
import { WhyCareRify } from "@/components/home/why-carerify";
import { NorthernOntario } from "@/components/home/northern-ontario";
import { AboutPreview } from "@/components/home/about-preview";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <BrandStatement />
        <StaffingChallenge />
        <HowItWorks />
        <StaffingSolutions />
        <AudiencePathways />
        <CarePhilosophy />
        <WhyCareRify />
        <NorthernOntario />
        <AboutPreview />
        <FinalCta />
      </main>

      <SiteFooter />
    </>
  );
}