import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const solutions = [
  {
    number: "01",
    title: "PSW Staffing",
    description:
      "Support for organizations seeking Personal Support Workers for their care environments.",
    href: "/staffing-solutions/psw",
  },
  {
    number: "02",
    title: "RPN Staffing",
    description:
      "Explore staffing support involving Registered Practical Nurses and organizational coverage needs.",
    href: "/staffing-solutions/rpn",
  },
  {
    number: "03",
    title: "RN Staffing",
    description:
      "A pathway for organizations seeking Registered Nurses for their staffing requirements.",
    href: "/staffing-solutions/rn",
  },
  {
    number: "04",
    title: "Dietary & Support Staffing",
    description:
      "Support roles that contribute to the smooth operation of care environments.",
    href: "/staffing-solutions/dietary-support",
  },
];

export function StaffingSolutions() {
  return (
    <section className="bg-white py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our solutions"
            title="Support for the people behind care."
            description="Explore the staffing categories CareRify is positioned to support."
          />

          <Link
            href="/staffing-solutions"
            className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-[#1B2D5B]"
          >
            Explore all solutions
            <span className="text-lg transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="mt-16 divide-y divide-[#dce2dc] border-y border-[#dce2dc]">
          {solutions.map((solution) => (
            <Link
              key={solution.number}
              href={solution.href}
              className="group grid gap-5 py-8 transition-colors hover:bg-[#F5EFE6] sm:grid-cols-[80px_1fr_auto] sm:items-center sm:px-5 lg:gap-12"
            >
              <span className="text-sm font-semibold text-[#8FB39B]">
                {solution.number}
              </span>

              <div>
                <h3 className="text-2xl font-semibold text-[#1B2D5B] sm:text-3xl">
                  {solution.title}
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-7 text-[#667085]">
                  {solution.description}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="text-2xl text-[#1B2D5B] transition-transform duration-300 group-hover:translate-x-1"
              >
                ↗
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}