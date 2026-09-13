import { Container } from "@/components/ui/container";

export function StaffingChallenge() {
  return (
    <section className="bg-white py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#667085]">
              The need
            </p>

            <div className="mt-6 h-px w-16 bg-[#8FB39B]" />
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] text-[#172033] sm:text-5xl lg:text-6xl">
              When staffing needs change, care cannot wait.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#667085]">
              Healthcare organizations need dependable support when
              coverage requirements shift, teams face pressure, or
              additional professionals are needed.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#667085]">
              CareRify helps organizations begin that conversation with
              a staffing partner focused on professionalism, clear
              communication, and the people behind every shift.
            </p>

            <div className="mt-12 grid gap-8 border-t border-[#dce2dc] pt-8 sm:grid-cols-2">
              <div>
                <p className="text-2xl font-semibold text-[#1B2D5B]">
                  Reliable support
                </p>

                <p className="mt-2 text-sm leading-6 text-[#667085]">
                  Staffing conversations shaped around organizational
                  needs.
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-[#1B2D5B]">
                  Human connection
                </p>

                <p className="mt-2 text-sm leading-6 text-[#667085]">
                  Professional relationships built on clarity and trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}