import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function FinalCta() {
  return (
    <section className="bg-[#1B2D5B] py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8FB39B]">
            Begin the conversation
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-7xl">
            Let's strengthen the next shift.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            Whether you're looking for staffing support or exploring
            your next professional opportunity, CareRify is ready to
            begin the conversation.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/request-staffing" variant="light">
              Request Staffing
            </Button>

            <Button
              href="/for-professionals"
              className="border border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              Join Our Healthcare Network
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}