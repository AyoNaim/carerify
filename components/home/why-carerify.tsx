import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const principles = [
  {
    number: "01",
    title: "Professional focus",
    description:
      "A staffing experience centered on the needs of healthcare organizations and professionals.",
  },
  {
    number: "02",
    title: "Clear communication",
    description:
      "Straightforward conversations that help people understand what happens next.",
  },
  {
    number: "03",
    title: "Human-centered service",
    description:
      "An approach that recognizes the people and responsibilities behind every staffing need.",
  },
  {
    number: "04",
    title: "Northern Ontario focus",
    description:
      "A regional perspective on the staffing needs of healthcare and care-service organizations.",
  },
];

export function WhyCareRify() {
  return (
    <section className="bg-white py-24 sm:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Why CareRify"
          title="Professionalism with a human perspective."
          description="Our approach is grounded in the belief that reliable staffing begins with clear communication, thoughtful service, and respect for the people involved."
        />

        <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:gap-y-16">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="border-t border-[#dce2dc] pt-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#8FB39B]">
                  {principle.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-[#8FB39B]" />
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-[#1B2D5B]">
                {principle.title}
              </h3>

              <p className="mt-4 max-w-md text-base leading-8 text-[#667085]">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}