"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, type ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

const solutions = [
  {
    number: "01",
    title: "Personal Support Workers",
    shortTitle: "Personal Support",
    description:
      "Support for organizations looking to strengthen day-to-day care with qualified personal support professionals.",
    code: "PSW",
    statement: "Compassionate support, where it matters most.",
  },
  {
    number: "02",
    title: "Registered Practical Nurses",
    shortTitle: "Registered Practical Nursing",
    description:
      "Qualified RPN staffing support for organizations navigating changing care requirements and team capacity.",
    code: "RPN",
    statement: "Skilled nursing support for changing needs.",
  },
  {
    number: "03",
    title: "Registered Nurses",
    shortTitle: "Registered Nursing",
    description:
      "Registered nursing professionals to support organizations seeking dependable clinical staffing capacity.",
    code: "RN",
    statement: "Experience that strengthens the team.",
  },
  {
    number: "04",
    title: "Dietary & Support Staff",
    shortTitle: "Dietary & Support",
    description:
      "Additional healthcare support roles that contribute to the everyday environment around quality care.",
    code: "SUPPORT",
    statement: "The people behind the people providing care.",
  },
];

export function StaffingSolutions() {
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSolution = solutions[activeIndex];

  return (
    <section
      aria-labelledby="staffing-solutions-heading"
      className="relative overflow-hidden bg-white"
    >
      {/* Large background typography / atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.025 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0.01 : 1.4,
            ease,
          }}
          className="
            absolute
            -right-[4vw]
            top-[17%]
            hidden
            select-none
            font-[var(--font-display)]
            text-[clamp(12rem,28vw,30rem)]
            font-medium
            leading-none
            tracking-[-0.09em]
            text-[var(--navy)]
            lg:block
          "
        >
          CARE
        </motion.span>

        <div className="absolute left-0 top-[30%] h-px w-[30%] bg-[#1B2D5B]/[0.06]" />

        <div className="absolute right-0 top-[67%] h-px w-[24%] bg-[#8FB39B]/[0.2]" />
      </div>

      <Container>
        <div className="relative py-[clamp(7rem,13vw,12rem)]">
          {/* Introduction */}
          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.85,
              ease,
            }}
            className="mb-16 flex items-center justify-between sm:mb-24"
          >
            <Eyebrow number="05">
              Staffing solutions
            </Eyebrow>

            <span className="hidden text-[0.6rem] font-medium uppercase tracking-[0.18em] text-[#172033]/30 sm:block">
              CareRify / People
            </span>
          </motion.div>

          {/* Editorial introduction */}
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 xl:gap-32">
            <motion.div
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 1,
                ease,
              }}
            >
              <h2
                id="staffing-solutions-heading"
                className="
                  max-w-[820px]
                  font-[var(--font-display)]
                  text-[clamp(3.2rem,6.4vw,7.2rem)]
                  font-medium
                  leading-[0.91]
                  tracking-[-0.068em]
                  text-[var(--navy)]
                "
              >
                The right people
                <br />
                make the
                <br />
                <span className="text-[var(--sage)]">
                  difference.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.9,
                delay: reducedMotion ? 0 : 0.2,
                ease,
              }}
              className="flex flex-col justify-end lg:pb-2"
            >
              <div className="mb-7 h-px w-14 bg-[var(--sage)]" />

              <p className="max-w-[400px] text-[1.05rem] leading-[1.8] tracking-[-0.012em] text-[#172033]/65 sm:text-[1.15rem]">
                CareRify connects healthcare organizations with qualified
                professionals and support staff across the roles that help
                care teams keep moving.
              </p>

              <p className="mt-6 max-w-[390px] text-sm leading-[1.8] text-[#172033]/45">
                Our staffing solutions are designed around the needs of the
                organization—not a one-size-fits-all marketplace.
              </p>
            </motion.div>
          </div>

          {/* Main solutions experience */}
          <div className="mt-20 lg:mt-32">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-24">
              {/* Solution list */}
              <div>
                <div className="mb-5 flex items-center justify-between border-b border-[#172033]/[0.1] pb-4">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#172033]/40">
                    Areas of support
                  </span>

                  <span className="text-[0.6rem] font-medium uppercase tracking-[0.16em] text-[#172033]/30">
                    {String(solutions.length).padStart(2, "0")} roles
                  </span>
                </div>

                <div className="relative">
                  {solutions.map((solution, index) => {
                    const active = index === activeIndex;

                    return (
                      <SolutionItem
                        key={solution.number}
                        solution={solution}
                        active={active}
                        index={index}
                        reducedMotion={Boolean(reducedMotion)}
                        onSelect={() => setActiveIndex(index)}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Active solution visual */}
              <SolutionVisual
                solution={activeSolution}
                index={activeIndex}
                reducedMotion={Boolean(reducedMotion)}
              />
            </div>
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.85,
              delay: reducedMotion ? 0 : 0.25,
              ease,
            }}
            className="mt-20 border-t border-[#172033]/[0.1] pt-7 sm:mt-28"
          >
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-[#172033]/40">
                  Need a different kind of support?
                </p>

                <p className="mt-3 max-w-[460px] text-sm leading-[1.8] text-[#172033]/50">
                  Tell us what your organization needs and start a conversation
                  with CareRify.
                </p>
              </div>

              <Button href="/request-staffing" size="lg">
                Request staffing
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

type SolutionItemProps = {
  solution: (typeof solutions)[number];
  active: boolean;
  index: number;
  reducedMotion: boolean;
  onSelect: () => void;
};

function SolutionItem({
  solution,
  active,
  index,
  reducedMotion,
  onSelect,
}: SolutionItemProps) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{
        opacity: 0,
        x: reducedMotion ? 0 : -25,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: reducedMotion ? 0.01 : 0.8,
        delay: reducedMotion ? 0 : index * 0.08,
        ease,
      }}
      className="
        group
        relative
        flex
        w-full
        items-start
        gap-5
        border-b
        border-[#172033]/[0.1]
        py-6
        text-left
        outline-none
        sm:gap-7
        sm:py-7
      "
      aria-pressed={active}
    >
      {/* Active indicator */}
      <motion.span
        aria-hidden="true"
        animate={{
          height: active ? "70%" : "0%",
          opacity: active ? 1 : 0,
        }}
        transition={{
          duration: reducedMotion ? 0.01 : 0.55,
          ease,
        }}
        className="
          absolute
          bottom-0
          left-0
          top-0
          w-[2px]
          origin-bottom
          bg-[var(--sage)]
        "
      />

      {/* Number */}
      <motion.span
        animate={{
          color: active ? "#8FB39B" : "rgba(23,32,51,0.3)",
          x: active ? 5 : 0,
        }}
        transition={{
          duration: reducedMotion ? 0.01 : 0.5,
          ease,
        }}
        className="
          w-7
          shrink-0
          pt-1
          text-[0.62rem]
          font-semibold
          tracking-[0.08em]
          sm:w-9
        "
      >
        {solution.number}
      </motion.span>

      {/* Title */}
      <span className="min-w-0 flex-1">
        <span
          className={`block font-[var(--font-display)] text-[clamp(1.45rem,2.6vw,2.35rem)] font-medium leading-[1.05] tracking-[-0.045em] transition-colors duration-500 ${
            active
              ? "text-[var(--navy)]"
              : "text-[#172033]/45 group-hover:text-[#172033]/80"
          }`}
        >
          {solution.title}
        </span>

        <span
          className={`mt-2 block max-w-[320px] text-[0.8rem] leading-[1.65] transition-colors duration-500 ${
            active
              ? "text-[#172033]/50"
              : "text-[#172033]/30 group-hover:text-[#172033]/45"
          }`}
        >
          {solution.statement}
        </span>
      </span>

      {/* Arrow */}
      <motion.span
        animate={{
          x: active ? 0 : -6,
          opacity: active ? 1 : 0,
        }}
        transition={{
          duration: reducedMotion ? 0.01 : 0.45,
          ease,
        }}
        className="mt-2 shrink-0 text-[var(--sage)]"
        aria-hidden="true"
      >
        <Arrow size="sm" />
      </motion.span>
    </motion.button>
  );
}

type SolutionVisualProps = {
  solution: (typeof solutions)[number];
  index: number;
  reducedMotion: boolean;
};

function SolutionVisual({
  solution,
  index,
  reducedMotion,
}: SolutionVisualProps) {
  return (
    <div className="relative min-h-[440px] overflow-hidden bg-[var(--navy)] sm:min-h-[520px]">
      {/* Animated background field */}
      <AnimatePresence mode="wait">
        <motion.div
          key={solution.number}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.55,
            ease,
          }}
          className="absolute inset-0"
        >
          {/* Large orbit */}
          <motion.div
            initial={{
              scale: reducedMotion ? 1 : 0.85,
              rotate: reducedMotion ? 0 : -12,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              rotate: 0,
              opacity: 1,
            }}
            transition={{
              duration: reducedMotion ? 0.01 : 1,
              ease,
            }}
            className="
              absolute
              -right-[15%]
              top-[10%]
              h-[75%]
              aspect-square
              rounded-full
              border
              border-white/[0.08]
            "
          />

          <motion.div
            initial={{
              scale: reducedMotion ? 1 : 0.75,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: reducedMotion ? 0.01 : 1,
              delay: reducedMotion ? 0 : 0.1,
              ease,
            }}
            className="
              absolute
              right-[5%]
              top-[27%]
              h-[42%]
              aspect-square
              rounded-full
              border
              border-[var(--sage)]/[0.24]
            "
          />

          {/* Grid */}
          <div
            className="
              absolute
              inset-0
              opacity-20
              [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
              [background-size:64px_64px]
            "
          />

          {/* Moving accent */}
          <motion.div
            animate={
              reducedMotion
                ? undefined
                : {
                    y: ["0%", "12%", "0%"],
                    opacity: [0.25, 0.5, 0.25],
                  }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -left-[15%]
              bottom-[10%]
              h-[55%]
              w-[55%]
              rounded-full
              bg-[radial-gradient(circle,rgba(143,179,155,0.2),transparent_65%)]
              blur-2xl
            "
          />
        </motion.div>
      </AnimatePresence>

      {/* Top metadata */}
      <div className="absolute left-6 right-6 top-6 flex items-start justify-between sm:left-8 sm:right-8 sm:top-8">
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/45">
          Staffing solution
        </span>

        <span className="font-[var(--font-display)] text-4xl font-medium leading-none tracking-[-0.06em] text-white/20 sm:text-5xl">
          {solution.number}
        </span>
      </div>

      {/* Central role marker */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={solution.code}
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 35,
              scale: reducedMotion ? 1 : 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: reducedMotion ? 0 : -25,
              scale: reducedMotion ? 1 : 0.95,
            }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.8,
              ease,
            }}
            className="relative flex h-44 w-44 items-center justify-center rounded-full border border-white/[0.12] sm:h-56 sm:w-56"
          >
            <motion.div
              animate={
                reducedMotion
                  ? undefined
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-4 rounded-full border border-dashed border-[var(--sage)]/[0.4]"
            />

            <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[var(--sage)] sm:h-36 sm:w-36">
              <span className="font-[var(--font-display)] text-3xl font-semibold tracking-[-0.06em] text-[var(--navy)] sm:text-4xl">
                {solution.code}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={solution.title}
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: reducedMotion ? 0 : -12,
            }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.65,
              ease,
            }}
            className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div className="max-w-[390px]">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.17em] text-[var(--sage)]">
                {solution.shortTitle}
              </p>

              <h3 className="mt-2 font-[var(--font-display)] text-2xl font-medium leading-[1.05] tracking-[-0.045em] text-white sm:text-3xl">
                {solution.statement}
              </h3>
            </div>

            <span className="text-[0.58rem] font-medium uppercase tracking-[0.15em] text-white/30">
              Northern Ontario
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Vertical index */}
      <div className="absolute bottom-1/2 right-4 hidden translate-y-1/2 flex-col items-center gap-2 lg:flex">
        <span className="h-12 w-px bg-white/[0.12]" />

        <span className="[writing-mode:vertical-rl] text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-white/30">
          People first
        </span>

        <span className="h-12 w-px bg-white/[0.12]" />
      </div>

      {/* Active index */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 sm:left-8">
        <span className="font-[var(--font-display)] text-[clamp(4rem,8vw,7rem)] font-medium leading-none tracking-[-0.08em] text-white/[0.055]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}