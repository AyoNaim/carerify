"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Arrow } from "@/components/ui/arrow";

const ease = [0.22, 1, 0.36, 1] as const;

export function StaffingChallenge() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="staffing-challenge-heading"
      className="relative overflow-hidden bg-[var(--cream)]"
    >
      {/* Decorative editorial structure */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[34%] lg:block"
      >
        <div className="absolute right-[-13rem] top-[14%] h-[38rem] w-[38rem] rounded-full border border-[#1B2D5B]/[0.08]" />

        <div className="absolute right-[-5rem] top-[29%] h-[22rem] w-[22rem] rounded-full border border-[#8FB39B]/[0.28]" />

        <div className="absolute right-[17%] top-0 h-full w-px bg-[#1B2D5B]/[0.06]" />
      </div>

      <Container>
        <div className="relative py-[clamp(6.5rem,12vw,11rem)]">
          {/* Section heading */}
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
            <Eyebrow number="03">The staffing reality</Eyebrow>

            <span className="hidden text-[0.6rem] font-medium uppercase tracking-[0.18em] text-[#172033]/30 sm:block">
              CareRify / Context
            </span>
          </motion.div>

          {/* Main editorial content */}
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 xl:gap-32">
            <div>
              <motion.h2
                id="staffing-challenge-heading"
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: reducedMotion ? 0 : 0.12,
                    },
                  },
                }}
                className="
                  max-w-[850px]
                  font-[var(--font-display)]
                  text-[clamp(3.2rem,6.5vw,7.4rem)]
                  font-medium
                  leading-[0.91]
                  tracking-[-0.068em]
                  text-[var(--navy)]
                "
              >
                <RevealLine reducedMotion={Boolean(reducedMotion)}>
                  Coverage
                </RevealLine>

                <RevealLine reducedMotion={Boolean(reducedMotion)}>
                  changes.
                </RevealLine>

                <RevealLine reducedMotion={Boolean(reducedMotion)}>
                  Teams stretch.
                </RevealLine>

                <RevealLine
                  reducedMotion={Boolean(reducedMotion)}
                  accent
                >
                  Care continues.
                </RevealLine>
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 28,
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
                  delay: reducedMotion ? 0 : 0.35,
                  ease,
                }}
                className="mt-10 max-w-[470px] text-[1.05rem] leading-[1.8] tracking-[-0.012em] text-[#172033]/65 sm:text-[1.15rem]"
              >
                Healthcare organizations need dependable support when
                staffing demands shift. CareRify helps connect organizations
                with qualified professionals and support staff to help teams
                stay focused on the people in their care.
              </motion.p>
            </div>

            {/* Visual staffing-pressure system */}
            <StaffingPressureGraphic
              reducedMotion={Boolean(reducedMotion)}
            />
          </div>

          {/* Bottom editorial details */}
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
              delay: reducedMotion ? 0 : 0.45,
              ease,
            }}
            className="mt-20 border-t border-[#172033]/[0.12] pt-5 sm:mt-28"
          >
            <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-[#172033]/40">
                  The opportunity
                </p>

                <p className="mt-3 max-w-[460px] text-sm leading-[1.8] text-[#172033]/55">
                  Stronger staffing support creates more room for teams to do
                  what matters most: provide care with confidence.
                </p>
              </div>

              <a
                href="/request-staffing"
                className="group inline-flex items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--navy)]"
              >
                <span className="relative">
                  Talk to CareRify

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-px
                      w-full
                      origin-right
                      scale-x-0
                      bg-[var(--navy)]
                      transition-transform
                      duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:origin-left
                      group-hover:scale-x-100
                    "
                  />
                </span>

                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{
                    duration: 0.45,
                    ease,
                  }}
                >
                  <Arrow size="sm" />
                </motion.span>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

type RevealLineProps = {
  children: ReactNode;
  accent?: boolean;
  reducedMotion: boolean;
};

function RevealLine({
  children,
  accent = false,
  reducedMotion,
}: RevealLineProps) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        variants={{
          hidden: {
            opacity: 0,
            y: reducedMotion ? 0 : "105%",
            rotateX: reducedMotion ? 0 : -24,
          },
          visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
              duration: reducedMotion ? 0.01 : 1,
              ease,
            },
          },
        }}
        style={{
          transformOrigin: "left bottom",
        }}
        className={`block ${
          accent ? "text-[var(--sage)]" : "text-[var(--navy)]"
        }`}
      >
        {children}
      </motion.span>
    </span>
  );
}

type StaffingPressureGraphicProps = {
  reducedMotion: boolean;
};

function StaffingPressureGraphic({
  reducedMotion,
}: StaffingPressureGraphicProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: reducedMotion ? 0 : 35,
        scale: reducedMotion ? 1 : 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: reducedMotion ? 0.01 : 1.1,
        delay: reducedMotion ? 0 : 0.2,
        ease,
      }}
      className="relative mx-auto w-full max-w-[560px]"
      aria-hidden="true"
    >
      <div className="relative aspect-[0.88] overflow-hidden border border-[#1B2D5B]/[0.12] bg-white/35 p-5 sm:p-8">
        {/* Graphic heading */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#172033]/40">
              Staffing conditions
            </p>

            <p className="mt-2 font-[var(--font-display)] text-2xl tracking-[-0.045em] text-[var(--navy)] sm:text-3xl">
              A changing rhythm
            </p>
          </div>

          <span className="mt-1 h-2 w-2 rounded-full bg-[var(--sage)]" />
        </div>

        {/* Pressure timeline */}
        <div className="absolute inset-x-5 bottom-24 top-36 sm:inset-x-8">
          <div className="absolute inset-y-0 left-1/2 w-px bg-[#1B2D5B]/[0.09]" />

          {[0, 1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="absolute left-0 right-0 flex items-center"
              style={{ top: `${item * 25}%` }}
            >
              <span className="w-8 text-[0.55rem] font-medium tracking-[0.08em] text-[#172033]/30">
                {String(item + 1).padStart(2, "0")}
              </span>

              <div className="h-px flex-1 bg-[#1B2D5B]/[0.1]" />
            </div>
          ))}

          {/* Animated demand line */}
          <svg
            viewBox="0 0 420 230"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full overflow-visible"
          >
            <motion.path
              d="M0 176C35 176 42 146 78 146C112 146 118 174 151 174C186 174 190 82 224 82C260 82 264 128 298 128C334 128 347 42 420 42"
              fill="none"
              stroke="#1B2D5B"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{
                pathLength: reducedMotion ? 1 : 0,
                opacity: reducedMotion ? 1 : 0,
              }}
              whileInView={{
                pathLength: 1,
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 1.8,
                delay: reducedMotion ? 0 : 0.5,
                ease,
              }}
            />

            <motion.path
              d="M0 195C35 195 42 182 78 182C112 182 118 193 151 193C186 193 190 151 224 151C260 151 264 165 298 165C334 165 347 136 420 136"
              fill="none"
              stroke="#8FB39B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="5 8"
              initial={{
                pathLength: reducedMotion ? 1 : 0,
                opacity: reducedMotion ? 1 : 0,
              }}
              whileInView={{
                pathLength: 1,
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 1.8,
                delay: reducedMotion ? 0 : 0.7,
                ease,
              }}
            />
          </svg>
        </div>

        {/* Graphic labels */}
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--navy)]" />

              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.13em] text-[#172033]/45">
                Staffing demand
              </span>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--sage)]" />

              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.13em] text-[#172033]/45">
                Support capacity
              </span>
            </div>
          </div>

          <span className="text-[0.58rem] font-medium uppercase tracking-[0.15em] text-[#172033]/30">
            Illustrative
          </span>
        </div>
      </div>

      {/* Floating note */}
      <motion.div
        initial={{
          opacity: 0,
          x: reducedMotion ? 0 : 20,
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
          delay: reducedMotion ? 0 : 0.8,
          ease,
        }}
        className="absolute -bottom-5 -left-3 max-w-[230px] border border-[#1B2D5B]/[0.12] bg-[var(--navy)] px-5 py-4 text-white shadow-[0_18px_45px_rgba(27,45,91,0.12)] sm:-left-7"
      >
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/45">
          The response
        </p>

        <p className="mt-2 font-[var(--font-display)] text-lg leading-[1.1] tracking-[-0.035em]">
          Better support,
          <br />
          when it matters.
        </p>
      </motion.div>
    </motion.div>
  );
}