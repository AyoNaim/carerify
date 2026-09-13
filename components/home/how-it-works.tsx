import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share your organization's staffing requirements, preferred timing, and the type of support you're seeking.",
  },
  {
    number: "02",
    title: "We understand your needs",
    description:
      "We review the request and clarify the details needed to explore suitable staffing support.",
  },
  {
    number: "03",
    title: "We explore suitable support",
    description:
      "CareRify works toward identifying appropriate professionals for the requirements discussed.",
  },
  {
    number: "04",
    title: "We coordinate the next steps",
    description:
      "We communicate clearly about the next stage of the staffing conversation.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-[#E8F0EA] py-24 sm:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A clearer path to staffing support."
          description="A straightforward process designed to help organizations move from a staffing need to the next conversation."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] border border-[#1B2D5B]/10 bg-[#1B2D5B]/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#E8F0EA] p-7 sm:p-8 lg:p-7 xl:p-9"
            >
              <span className="text-sm font-semibold text-[#8FB39B]">
                {step.number}
              </span>

              <h3 className="mt-12 text-xl font-semibold leading-tight text-[#1B2D5B]">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#667085]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}