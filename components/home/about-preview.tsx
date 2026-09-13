import Link from "next/link";

import { Container } from "@/components/ui/container";

export function AboutPreview() {
  return (
    <section className="bg-[#E8F0EA] py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] bg-[#1B2D5B]">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#8FB39B]/30" />

            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xs uppercase tracking-[0.18em] text-[#8FB39B]">
                CareRify Health Staffing
              </p>

              <p className="mt-5 max-w-xs text-3xl font-semibold leading-tight text-white">
                Supporting the people who support care.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#667085]">
              About CareRify
            </p>

            <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.08] text-[#1B2D5B] sm:text-5xl lg:text-6xl">
              Built around the importance of every shift.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#667085]">
              CareRify exists to connect healthcare organizations and
              professionals through a staffing experience built on
              professionalism, reliability, and human connection.
            </p>

            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-4 text-sm font-semibold text-[#1B2D5B]"
            >
              Discover CareRify
              <span className="text-lg transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}