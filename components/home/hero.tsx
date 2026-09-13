import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5EFE6]">
      <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[#8FB39B]/15 blur-3xl" />

      <Container>
        <div className="grid min-h-[760px] items-center gap-16 pb-20 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pb-24 lg:pt-44">
          <div className="relative z-10 max-w-3xl">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#667085]">
              Verified Care. Every Shift.
            </p>

            <h1 className="max-w-3xl text-[clamp(3.25rem,7vw,6.75rem)] font-semibold leading-[0.98] text-[#1B2D5B]">
              Reliable healthcare staffing.
              <span className="mt-3 block text-[#8FB39B]">
                When it matters most.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#172033]/70 sm:text-lg">
              CareRify connects healthcare organizations with qualified
              healthcare professionals and support staff for temporary,
              locum, short-term, and long-term staffing needs.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/request-staffing">
                Request Staffing
              </Button>

              <Button
                href="/for-professionals"
                variant="secondary"
              >
                Join Our Healthcare Network
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-3 text-sm text-[#667085]">
              <span className="h-px w-10 bg-[#8FB39B]" />
              <span>Serving healthcare teams across Northern Ontario</span>
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[560px]">
            <div className="absolute inset-0 rounded-[2rem] bg-[#1B2D5B]" />

            <div className="absolute inset-4 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#263B6C]">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#8FB39B]/30" />
              <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-[#8FB39B]/20" />

              <div className="absolute inset-x-8 top-8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.18em] text-white/50">
                  CareRify / 001
                </span>

                <span className="h-2 w-2 rounded-full bg-[#8FB39B]" />
              </div>

              <div className="absolute inset-x-8 bottom-8">
                <p className="max-w-xs text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Better-supported teams.
                  <span className="block text-[#8FB39B]">
                    Stronger care.
                  </span>
                </p>

                <div className="mt-8 h-px w-full bg-white/15" />

                <div className="mt-4 flex items-center justify-between text-xs text-white/50">
                  <span>Human-centered staffing</span>
                  <span>01 / 01</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}