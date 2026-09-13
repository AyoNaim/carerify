"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

const revealViewport = {
  once: true,
  amount: 0.25,
};

const softViewport = {
  once: true,
  amount: 0.3,
};

export function AboutPage() {
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;

  return (
    <div className="overflow-hidden">
      {/* ─────────────────────────────────────────
          HERO
      ───────────────────────────────────────── */}

      <section
        aria-labelledby="about-heading"
        className="relative overflow-hidden bg-[var(--cream)]"
      >
        <Container>
          <div className="relative min-h-[78vh] py-32 sm:py-40 lg:flex lg:min-h-[88vh] lg:items-end lg:py-20">
            <div className="grid w-full gap-16 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16 xl:gap-24">
              {/* Eyebrow / intro */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.8,
                  ease,
                  delay: 0.05,
                }}
                className="pt-2"
              >
                <Eyebrow number="01">About CareRify</Eyebrow>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 14,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.7,
                    ease,
                    delay: reducedMotion ? 0 : 0.22,
                  }}
                  className="mt-8 max-w-[190px] text-sm leading-[1.8] text-[#172033]/45"
                >
                  Healthcare staffing, approached with more thought and more
                  humanity.
                </motion.p>
              </motion.div>

              <div>
                {/* Main heading */}
                <motion.h1
                  id="about-heading"
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 55,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: reducedMotion ? 0.01 : 1.05,
                    ease,
                    delay: reducedMotion ? 0 : 0.12,
                  }}
                  className="
                    max-w-[1050px]
                    font-[var(--font-display)]
                    text-[clamp(4rem,9vw,10rem)]
                    font-medium
                    leading-[0.86]
                    tracking-[-0.075em]
                    text-[var(--navy)]
                  "
                >
                  Care is
                  <br />
                  <span className="text-[var(--sage)]">personal.</span>
                  <br />
                  So are we.
                </motion.h1>

                {/* Supporting statement */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.8,
                    ease,
                    delay: reducedMotion ? 0 : 0.34,
                  }}
                  className="mt-12 max-w-[520px] border-t border-[#172033]/10 pt-6"
                >
                  <p className="text-[1rem] leading-[1.85] text-[#172033]/60 sm:text-[1.08rem]">
                    CareRify was created with a simple belief: healthcare
                    staffing should feel more human, more considered, and
                    more dependable.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Bottom reveal line */}
            <motion.div
              aria-hidden="true"
              initial={{
                scaleX: reducedMotion ? 1 : 0,
                opacity: reducedMotion ? 1 : 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 1.2,
                ease,
                delay: reducedMotion ? 0 : 0.55,
              }}
              className="absolute bottom-0 left-0 h-px w-full origin-left bg-[#172033]/10"
            />
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────
          ORIGIN
      ───────────────────────────────────────── */}

      <section
        aria-labelledby="origin-heading"
        className="relative bg-white"
      >
        <Container>
          <div className="grid gap-16 py-[clamp(7rem,13vw,12rem)] lg:grid-cols-[0.32fr_0.68fr] lg:gap-16 xl:gap-24">
            {/* Section label */}
            <motion.div
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={softViewport}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                ease,
              }}
            >
              <Eyebrow number="02">Why CareRify</Eyebrow>
            </motion.div>

            <div>
              {/* Heading */}
              <motion.h2
                id="origin-heading"
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={revealViewport}
                transition={{
                  duration: reducedMotion ? 0.01 : 1,
                  ease,
                }}
                className="
                  max-w-[900px]
                  font-[var(--font-display)]
                  text-[clamp(3rem,6.5vw,7.2rem)]
                  font-medium
                  leading-[0.9]
                  tracking-[-0.07em]
                  text-[var(--navy)]
                "
              >
                Staffing is about
                <br />
                <span className="text-[var(--sage)]">people.</span>
              </motion.h2>

              {/* Copy */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 28,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={softViewport}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.85,
                  delay: reducedMotion ? 0 : 0.16,
                  ease,
                }}
                className="mt-12 grid gap-8 border-t border-[#172033]/10 pt-7 sm:grid-cols-2 sm:gap-12"
              >
                <p className="text-[1rem] leading-[1.85] text-[#172033]/60">
                  Behind every staffing request is a team trying to provide
                  the best care it can. Behind every application is a
                  professional bringing experience, skill, and commitment to
                  that work.
                </p>

                <p className="text-[1rem] leading-[1.85] text-[#172033]/60">
                  CareRify exists to support both sides of that relationship
                  with a more thoughtful approach to healthcare staffing.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────
          PHILOSOPHY
      ───────────────────────────────────────── */}

      <section
        aria-labelledby="philosophy-heading"
        className="relative overflow-hidden bg-[var(--navy)] text-white"
      >
        <Container>
          <div className="py-[clamp(7rem,13vw,12rem)]">
            <div className="grid gap-16 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
              {/* Label */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={softViewport}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.8,
                  ease,
                }}
              >
                <Eyebrow number="03" light>
                  Our approach
                </Eyebrow>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={softViewport}
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.7,
                    delay: reducedMotion ? 0 : 0.15,
                    ease,
                  }}
                  className="mt-8 max-w-[210px] text-sm leading-[1.8] text-white/40"
                >
                  A people-first perspective on the work behind every shift.
                </motion.p>
              </motion.div>

              <div>
                {/* Heading */}
                <motion.h2
                  id="philosophy-heading"
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={revealViewport}
                  transition={{
                    duration: reducedMotion ? 0.01 : 1,
                    ease,
                  }}
                  className="
                    max-w-[900px]
                    font-[var(--font-display)]
                    text-[clamp(3rem,6vw,6.8rem)]
                    font-medium
                    leading-[0.9]
                    tracking-[-0.068em]
                  "
                >
                  More than filling
                  <br />
                  a <span className="text-[var(--sage)]">shift.</span>
                </motion.h2>

                {/* Philosophy list */}
                <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
                  <PhilosophyItem
                    number="01"
                    title="People first"
                    text="Healthcare is deeply human. The people supporting it should be treated that way."
                    reducedMotion={reducedMotion}
                    delay={0}
                  />

                  <PhilosophyItem
                    number="02"
                    title="Thoughtful support"
                    text="Good staffing starts with understanding what an organization and its people actually need."
                    reducedMotion={reducedMotion}
                    delay={0.08}
                  />

                  <PhilosophyItem
                    number="03"
                    title="Dependable relationships"
                    text="Strong care depends on trust, communication, and people who take their role seriously."
                    reducedMotion={reducedMotion}
                    delay={0.16}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────
          PEOPLE
      ───────────────────────────────────────── */}

      <section
        aria-labelledby="people-heading"
        className="relative bg-[var(--cream)]"
      >
        <Container>
          <div className="py-[clamp(7rem,13vw,12rem)]">
            <div className="grid gap-16 lg:grid-cols-[0.68fr_0.32fr] lg:gap-20">
              <div>
                {/* Heading */}
                <motion.h2
                  id="people-heading"
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={revealViewport}
                  transition={{
                    duration: reducedMotion ? 0.01 : 1,
                    ease,
                  }}
                  className="
                    max-w-[900px]
                    font-[var(--font-display)]
                    text-[clamp(3rem,6.3vw,7rem)]
                    font-medium
                    leading-[0.9]
                    tracking-[-0.07em]
                    text-[var(--navy)]
                  "
                >
                  The work is
                  <br />
                  <span className="text-[var(--sage)]">personal.</span>
                </motion.h2>

                {/* Paragraph */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 28,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={softViewport}
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.8,
                    delay: reducedMotion ? 0 : 0.15,
                    ease,
                  }}
                  className="mt-10 max-w-[540px] text-[1rem] leading-[1.85] text-[#172033]/60 sm:text-[1.08rem]"
                >
                  Every healthcare organization has its own people, pressures,
                  priorities, and ways of working. Every professional brings
                  their own experience and perspective. We believe good
                  staffing starts by recognizing that difference.
                </motion.p>
              </div>

              {/* Visual */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: reducedMotion ? 1 : 0.88,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={softViewport}
                transition={{
                  duration: reducedMotion ? 0.01 : 1.15,
                  ease,
                }}
                className="relative flex min-h-[300px] items-center justify-center lg:min-h-[420px]"
                aria-hidden="true"
              >
                {/* Outer ring */}
                <motion.div
                  initial={{
                    opacity: reducedMotion ? 1 : 0,
                    scale: reducedMotion ? 1 : 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={softViewport}
                  transition={{
                    duration: reducedMotion ? 0.01 : 1.1,
                    ease,
                    delay: reducedMotion ? 0 : 0.12,
                  }}
                  className="absolute h-[min(34vw,420px)] w-[min(34vw,420px)] rounded-full border border-[#172033]/10"
                />

                {/* Middle ring */}
                <motion.div
                  initial={{
                    opacity: reducedMotion ? 1 : 0,
                    scale: reducedMotion ? 1 : 0.75,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={softViewport}
                  transition={{
                    duration: reducedMotion ? 0.01 : 1,
                    ease,
                    delay: reducedMotion ? 0 : 0.2,
                  }}
                  className="absolute h-[min(25vw,310px)] w-[min(25vw,310px)] rounded-full border border-[var(--sage)]/50"
                />

                {/* Core */}
                <motion.div
                  initial={{
                    opacity: reducedMotion ? 1 : 0,
                    scale: reducedMotion ? 1 : 0.6,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={softViewport}
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.9,
                    ease,
                    delay: reducedMotion ? 0 : 0.3,
                  }}
                  className="absolute h-[min(15vw,180px)] w-[min(15vw,180px)] rounded-full bg-[var(--navy)]"
                />

                {/* Label */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={softViewport}
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.7,
                    ease,
                    delay: reducedMotion ? 0 : 0.42,
                  }}
                  className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/20 text-center"
                >
                  <span className="text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-white">
                    People
                    <br />
                    first
                  </span>
                </motion.div>

                <motion.span
                  initial={{
                    opacity: 0,
                    x: reducedMotion ? 0 : 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={softViewport}
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.7,
                    ease,
                    delay: reducedMotion ? 0 : 0.5,
                  }}
                  className="absolute right-[8%] top-[16%] text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[#172033]/35"
                >
                  Trust
                </motion.span>

                <motion.span
                  initial={{
                    opacity: 0,
                    x: reducedMotion ? 0 : -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={softViewport}
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.7,
                    ease,
                    delay: reducedMotion ? 0 : 0.58,
                  }}
                  className="absolute bottom-[15%] left-[4%] text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[#172033]/35"
                >
                  Care
                </motion.span>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────
          NORTHERN ONTARIO
      ───────────────────────────────────────── */}

      <section
        aria-labelledby="region-heading"
        className="relative bg-white"
      >
        <Container>
          <div className="grid gap-16 py-[clamp(7rem,13vw,12rem)] lg:grid-cols-[0.32fr_0.68fr] lg:gap-16 xl:gap-24">
            {/* Label */}
            <motion.div
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={softViewport}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                ease,
              }}
            >
              <Eyebrow number="04">Northern Ontario</Eyebrow>
            </motion.div>

            <div>
              {/* Heading */}
              <motion.h2
                id="region-heading"
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={revealViewport}
                transition={{
                  duration: reducedMotion ? 0.01 : 1,
                  ease,
                }}
                className="
                  max-w-[900px]
                  font-[var(--font-display)]
                  text-[clamp(3rem,6vw,6.8rem)]
                  font-medium
                  leading-[0.9]
                  tracking-[-0.068em]
                  text-[var(--navy)]
                "
              >
                Rooted in
                <br />
                <span className="text-[var(--sage)]">
                  Northern Ontario.
                </span>
              </motion.h2>

              {/* Content + CTA */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 28,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={softViewport}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.8,
                  delay: reducedMotion ? 0 : 0.15,
                  ease,
                }}
                className="mt-10 flex flex-col gap-8 border-t border-[#172033]/10 pt-6 sm:flex-row sm:items-end sm:justify-between"
              >
                <p className="max-w-[560px] text-[1rem] leading-[1.85] text-[#172033]/60 sm:text-[1.08rem]">
                  CareRify is focused on supporting healthcare organizations
                  and professionals across Northern Ontario. Our regional
                  focus keeps the people and communities we serve at the
                  center of the work.
                </p>

                <Link
                  href="/contact"
                  className="group inline-flex shrink-0 items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[var(--navy)]"
                >
                  <span className="relative">
                    Connect with us

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
                </Link>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────
          CLOSING CTA
      ───────────────────────────────────────── */}

      <section
        aria-labelledby="about-cta-heading"
        className="relative overflow-hidden bg-[var(--navy)] text-white"
      >
        <Container>
          <div className="relative py-[clamp(7rem,13vw,12rem)]">
            {/* Decorative ring */}
            <motion.div
              aria-hidden="true"
              initial={{
                opacity: reducedMotion ? 1 : 0,
                scale: reducedMotion ? 1 : 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={softViewport}
              transition={{
                duration: reducedMotion ? 0.01 : 1.3,
                ease,
              }}
              className="pointer-events-none absolute -right-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full border border-white/[0.07]"
            />

            <motion.div
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={softViewport}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                ease,
              }}
            >
              <Eyebrow light>Where do you fit?</Eyebrow>

              {/* Heading */}
              <motion.h2
                id="about-cta-heading"
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={revealViewport}
                transition={{
                  duration: reducedMotion ? 0.01 : 1,
                  delay: reducedMotion ? 0 : 0.08,
                  ease,
                }}
                className="
                  mt-10
                  max-w-[950px]
                  font-[var(--font-display)]
                  text-[clamp(3.4rem,7vw,8rem)]
                  font-medium
                  leading-[0.88]
                  tracking-[-0.075em]
                "
              >
                Let’s move
                <br />
                <span className="text-[var(--sage)]">care forward.</span>
              </motion.h2>

              {/* Copy */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 22,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={softViewport}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.75,
                  delay: reducedMotion ? 0 : 0.2,
                  ease,
                }}
                className="mt-8 max-w-[470px] text-[1rem] leading-[1.8] text-white/55 sm:text-[1.08rem]"
              >
                Whether you represent a healthcare organization or are ready
                to bring your skills to the CareRify network, there is a place
                to start.
              </motion.p>

              {/* Actions */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 22,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={softViewport}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.8,
                  delay: reducedMotion ? 0 : 0.3,
                  ease,
                }}
                className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
              >
                <Button
                  href="/request-staffing"
                  variant="light"
                  size="lg"
                >
                  Request staffing
                </Button>

                <Link
                  href="/for-healthcare-professionals"
                  className="group inline-flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-white/65 transition-colors duration-300 hover:text-white"
                >
                  <span className="relative">
                    Join our healthcare network

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
                        bg-white
                        transition-transform
                        duration-500
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:origin-left
                        group-hover:scale-x-100
                      "
                    />
                  </span>

                  <Arrow size="sm" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}

type PhilosophyItemProps = {
  number: string;
  title: string;
  text: string;
  reducedMotion: boolean;
  delay: number;
};

function PhilosophyItem({
  number,
  title,
  text,
  reducedMotion,
  delay,
}: PhilosophyItemProps) {
  return (
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
        amount: 0.25,
      }}
      transition={{
        duration: reducedMotion ? 0.01 : 0.75,
        delay: reducedMotion ? 0 : delay,
        ease,
      }}
      className="grid gap-5 py-7 sm:grid-cols-[70px_0.8fr_1.2fr] sm:items-start sm:gap-8"
    >
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/30">
        {number}
      </span>

      <h3 className="font-[var(--font-display)] text-2xl font-medium tracking-[-0.035em] text-white sm:text-[1.7rem]">
        {title}
      </h3>

      <p className="max-w-[430px] text-sm leading-[1.8] text-white/45">
        {text}
      </p>
    </motion.div>
  );
}

