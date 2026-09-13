import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function AudiencePathways() {
  return (
    <section className="bg-[#F5EFE6] py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex min-h-[500px] flex-col justify-between rounded-[1.5rem] bg-[#1B2D5B] p-8 sm:p-12 lg:p-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8FB39B]">
                For healthcare organizations
              </p>

              <h2 className="mt-10 max-w-lg text-4xl font-semibold leading-[1.08] text-white sm:text-5xl">
                Staffing support shaped around your needs.
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-white/65">
                Tell us about your staffing requirements and begin a
                conversation about how CareRify may support your
                organization.
              </p>
            </div>

            <div className="mt-12">
              <Button href="/request-staffing" variant="light">
                Request Staffing
              </Button>
            </div>
          </article>

          <article className="flex min-h-[500px] flex-col justify-between rounded-[1.5rem] bg-[#8FB39B] p-8 sm:p-12 lg:p-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1B2D5B]/65">
                For healthcare professionals
              </p>

              <h2 className="mt-10 max-w-lg text-4xl font-semibold leading-[1.08] text-[#1B2D5B] sm:text-5xl">
                Your next professional opportunity starts here.
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-[#1B2D5B]/70">
                Learn about CareRify and explore the opportunity to join
                our healthcare professional network.
              </p>
            </div>

            <div className="mt-12">
              <Button
                href="/for-professionals"
                variant="secondary"
              >
                Join Our Healthcare Network
              </Button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}