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
  amount: 0.22,
};

const softViewport = {
  once: true,
  amount: 0.3,
};

const supportContexts = [
  {
    number: "01",
    title: "Additional coverage",
    description:
      "When your existing team needs additional staffing support to help meet changing care demands.",
  },
  {
    number: "02",
    title: "Changing needs",
    description:
      "When staffing requirements shift and your organization needs a thoughtful way to respond.",
  },
  {
    number: "03",
    title: "Team pressure",
    description:
      "When the people providing care are carrying more than they should have to carry alone.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share the staffing situation, role requirements, and context that matter to your organization.",
  },
  {
    number: "02",
    title: "We understand the requirement",
    description:
      "We take the time to understand what your team actually needs rather than treating every request the same.",
  },
  {
    number: "03",
    title: "We identify appropriate support",
    description:
      "We work toward connecting your organization with professionals who align with the staffing requirement.",
  },
  {
    number: "04",
    title: "Move forward together",
    description:
      "Once the need and staffing support are understood, we move the conversation forward with clarity.",
  },
];

export function OrganizationsPage() {
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section
        aria-labelledby="organizations-heading"
        className="relative overflow-hidden bg-[var(--cream)]"
      >
        <Container>
          <div className="relative min-h-[82vh] py-32 sm:py-40 lg:flex lg:min-h-[88vh] lg:items-end lg:py-20">
            <div className="grid w-full gap-16 lg:grid-cols-[0.27fr_0.73fr] lg:gap-16 xl:gap-24">
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
                <Eyebrow number="01">For healthcare organizations</Eyebrow>

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
                  className="mt-8 max-w-[210px] text-sm leading-[1.8] text-[#172033]/45"
                >
                  Staffing support for the organizations and teams behind
                  care.
                </motion.p>
              </motion.div>

              <div>
                <motion.h1
                  id="organizations-heading"
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
                    max-w-[1100px]
                    font-[var(--font-display)]
                    text-[clamp(3.7rem,8.4vw,9.5rem)]
                    font-medium
                    leading-[0.86]
                    tracking-[-0.075em]
                    text-[var(--navy)]
                  "
                >
                  When your team
                  <br />
                  <span className="text-[var(--sage)]">
                    needs support.
                  </span>
                </motion.h1>

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
                  className="mt-12 max-w-[570px] border-t border-[#172033]/10 pt-6"
                >
                  <p className="text-[1rem] leading-[1.85] text-[#172033]/60 sm:text-[1.08rem]">
                    CareRify helps healthcare organizations connect with
                    qualified professionals and support staff when additional
                    staffing support is needed.
                  </p>

                  <div className="mt-8">
                    <Button href="/request-staffing" size="lg">
                      Request staffing
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>

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

      {/* INTRO */}
      <section
        aria-labelledby="organization-intro-heading"
        className="relative bg-white"
      >
        <Container>
          <div className="grid gap-16 py-[clamp(7rem,13vw,12rem)] lg:grid-cols-[0.3fr_0.7fr] lg:gap-16 xl:gap-24">
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
              <Eyebrow number="02">A different approach</Eyebrow>

              <p className="mt-8 max-w-[205px] text-sm leading-[1.8] text-[#172033]/40">
                Because staffing is about people before it is about numbers.
              </p>
            </motion.div>

            <div>
              <motion.h2
                id="organization-intro-heading"
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
                  max-w-[940px]
                  font-[var(--font-display)]
                  text-[clamp(3rem,6.3vw,7rem)]
                  font-medium
                  leading-[0.9]
                  tracking-[-0.07em]
                  text-[var(--navy)]
                "
              >
                Your staffing needs
                <br />
                are <span className="text-[var(--sage)]">specific.</span>
              </motion.h2>

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
                className="mt-12 max-w-[680px] border-t border-[#172033]/10 pt-7"
              >
                <p className="text-[1rem] leading-[1.85] text-[#172033]/60 sm:text-[1.08rem]">
                  A healthcare organization is never simply looking for
                  another person on a schedule. The role, environment, team,
                  and circumstances all matter. CareRify starts by
                  understanding that context.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTEXTS */}
      <section
        aria-labelledby="support-contexts-heading"
        className="relative bg-[var(--navy)] text-white"
      >
        <Container>
          <div className="py-[clamp(7rem,13vw,12rem)]">
            <div className="grid gap-16 lg:grid-cols-[0.3fr_0.7fr] lg:gap-20">
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
                  When support matters
                </Eyebrow>

                <p className="mt-8 max-w-[205px] text-sm leading-[1.8] text-white/40">
                  Different circumstances. The same need for dependable
                  support.
                </p>
              </motion.div>

              <div>
                <motion.h2
                  id="support-contexts-heading"
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
                  Support that
                  <br />
                  <span className="text-[var(--sage)]">meets the moment.</span>
                </motion.h2>

                <div className="mt-16 border-y border-white/10">
                  {supportContexts.map((context, index) => (
                    <ContextRow
                      key={context.number}
                      context={context}
                      index={index}
                      reducedMotion={reducedMotion}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* APPROACH */}
      <section
        aria-labelledby="relationship-heading"
        className="relative overflow-hidden bg-[var(--cream)]"
      >
        <Container>
          <div className="grid gap-16 py-[clamp(7rem,13vw,12rem)] lg:grid-cols-[0.68fr_0.32fr] lg:items-center lg:gap-20">
            <div>
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
                <Eyebrow number="04">Our approach</Eyebrow>
              </motion.div>

              <motion.h2
                id="relationship-heading"
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 45,
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
                  mt-8
                  max-w-[900px]
                  font-[var(--font-display)]
                  text-[clamp(3rem,6.3vw,7rem)]
                  font-medium
                  leading-[0.9]
                  tracking-[-0.07em]
                  text-[var(--navy)]
                "
              >
                We start with
                <br />
                <span className="text-[var(--sage)]">understanding.</span>
              </motion.h2>

              <motion.p
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
                  delay: reducedMotion ? 0 : 0.2,
                  ease,
                }}
                className="mt-10 max-w-[620px] text-[1rem] leading-[1.85] text-[#172033]/60 sm:text-[1.08rem]"
              >
                Good staffing begins with a clear understanding of the
                requirement. That means listening to your organization,
                understanding the role, and considering the context before
                moving forward.
              </motion.p>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                scale: reducedMotion ? 1 : 0.84,
                rotate: reducedMotion ? 0 : -8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              viewport={softViewport}
              transition={{
                duration: reducedMotion ? 0.01 : 1.2,
                ease,
              }}
              className="relative mx-auto flex aspect-square w-full max-w-[430px] items-center justify-center"
              aria-hidden="true"
            >
              <div className="absolute inset-[7%] rounded-full border border-[#172033]/10" />
              <div className="absolute inset-[19%] rounded-full border border-[var(--sage)]/50" />
              <div className="absolute inset-[33%] rounded-full bg-[var(--navy)]" />

              <div className="relative z-10 max-w-[90px] text-center text-[0.55rem] font-semibold uppercase leading-[1.5] tracking-[0.16em] text-white">
                Understand
                <br />
                first
              </div>

              <motion.span
                animate={
                  reducedMotion
                    ? undefined
                    : {
                        rotate: 360,
                      }
                }
                transition={
                  reducedMotion
                    ? undefined
                    : {
                        duration: 24,
                        repeat: Infinity,
                        ease: "linear",
                      }
                }
                className="absolute inset-0"
              >
                <span className="absolute left-[10%] top-[14%] text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[#172033]/30">
                  Context
                </span>

                <span className="absolute bottom-[14%] right-[7%] text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[#172033]/30">
                  People
                </span>
              </motion.span>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section
        aria-labelledby="process-heading"
        className="relative bg-white"
      >
        <Container>
          <div className="py-[clamp(7rem,13vw,12rem)]">
            <div className="grid gap-16 lg:grid-cols-[0.3fr_0.7fr] lg:gap-20">
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
                <Eyebrow number="05">How it works</Eyebrow>

                <p className="mt-8 max-w-[205px] text-sm leading-[1.8] text-[#172033]/40">
                  A straightforward path from staffing need to next step.
                </p>
              </motion.div>

              <div>
                <motion.h2
                  id="process-heading"
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
                  Clear from
                  <br />
                  <span className="text-[var(--sage)]">the start.</span>
                </motion.h2>

                <div className="mt-16 border-t border-[#172033]/10">
                  {processSteps.map((step, index) => (
                    <ProcessRow
                      key={step.number}
                      step={step}
                      index={index}
                      reducedMotion={reducedMotion}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PEOPLE / PROFESSIONALS LINK */}
      <section
        aria-labelledby="professionals-heading"
        className="relative bg-[var(--cream)]"
      >
        <Container>
          <div className="grid gap-16 py-[clamp(7rem,13vw,12rem)] lg:grid-cols-[0.3fr_0.7fr] lg:gap-20">
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
              <Eyebrow number="06">The people behind the support</Eyebrow>
            </motion.div>

            <div>
              <motion.h2
                id="professionals-heading"
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
                  max-w-[920px]
                  font-[var(--font-display)]
                  text-[clamp(3rem,6vw,6.8rem)]
                  font-medium
                  leading-[0.9]
                  tracking-[-0.068em]
                  text-[var(--navy)]
                "
              >
                Behind every
                <br />
                <span className="text-[var(--sage)]">staffing need</span>
                <br />
                is a person.
              </motion.h2>

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
                  delay: reducedMotion ? 0 : 0.16,
                  ease,
                }}
                className="mt-10 max-w-[620px] border-t border-[#172033]/10 pt-6"
              >
                <p className="text-[1rem] leading-[1.85] text-[#172033]/60 sm:text-[1.08rem]">
                  CareRify&apos;s network is built around healthcare
                  professionals and support staff who contribute to the
                  environments where care happens.
                </p>

                <Link
                  href="/for-healthcare-professionals"
                  className="group mt-8 inline-flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[var(--navy)]"
                >
                  <span className="relative">
                    For healthcare professionals
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

      {/* FINAL CTA */}
      <section
        aria-labelledby="organization-cta-heading"
        className="relative overflow-hidden bg-[var(--navy)] text-white"
      >
        <Container>
          <div className="relative py-[clamp(7rem,13vw,12rem)]">
            <motion.div
              aria-hidden="true"
              initial={{
                opacity: reducedMotion ? 1 : 0,
                scale: reducedMotion ? 1 : 0.78,
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
              className="pointer-events-none absolute -right-48 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-white/[0.07]"
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
              <Eyebrow light>Ready to talk?</Eyebrow>

              <motion.h2
                id="organization-cta-heading"
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 45,
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
                  max-w-[1000px]
                  font-[var(--font-display)]
                  text-[clamp(3.5rem,7.5vw,8.5rem)]
                  font-medium
                  leading-[0.87]
                  tracking-[-0.075em]
                "
              >
                Let&apos;s talk about
                <br />
                <span className="text-[var(--sage)]">what you need.</span>
              </motion.h2>

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
                className="mt-8 max-w-[500px] text-[1rem] leading-[1.8] text-white/55 sm:text-[1.08rem]"
              >
                Tell us about your organization and the staffing support you
                are looking for.
              </motion.p>

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
                className="mt-10"
              >
                <Button
                  href="/request-staffing"
                  variant="light"
                  size="lg"
                >
                  Request staffing
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}

type ContextData = {
  number: string;
  title: string;
  description: string;
};

type ContextRowProps = {
  context: ContextData;
  index: number;
  reducedMotion: boolean;
};

function ContextRow({
  context,
  index,
  reducedMotion,
}: ContextRowProps) {
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
        amount: 0.2,
      }}
      transition={{
        duration: reducedMotion ? 0.01 : 0.75,
        delay: reducedMotion ? 0 : index * 0.08,
        ease,
      }}
      className="
        group
        grid
        gap-5
        border-b
        border-white/10
        py-8
        last:border-b-0
        sm:grid-cols-[70px_0.8fr_1.2fr]
        sm:items-start
        sm:gap-8
        lg:py-10
      "
    >
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/30">
        {context.number}
      </span>

      <h3 className="font-[var(--font-display)] text-[1.5rem] font-medium tracking-[-0.04em] text-white sm:text-[1.7rem]">
        {context.title}
      </h3>

      <p className="max-w-[500px] text-sm leading-[1.8] text-white/40">
        {context.description}
      </p>
    </motion.div>
  );
}

type ProcessData = {
  number: string;
  title: string;
  description: string;
};

type ProcessRowProps = {
  step: ProcessData;
  index: number;
  reducedMotion: boolean;
};

function ProcessRow({
  step,
  index,
  reducedMotion,
}: ProcessRowProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: reducedMotion ? 0 : 26,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: reducedMotion ? 0.01 : 0.8,
        delay: reducedMotion ? 0 : index * 0.08,
        ease,
      }}
      className="
        group
        grid
        gap-5
        border-b
        border-[#172033]/10
        py-9
        sm:grid-cols-[70px_0.8fr_1.2fr]
        sm:items-start
        sm:gap-8
        lg:py-10
      "
    >
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#172033]/30">
        {step.number}
      </span>

      <div className="flex items-start gap-4">
        <h3 className="font-[var(--font-display)] text-[1.45rem] font-medium leading-[1.05] tracking-[-0.04em] text-[var(--navy)] sm:text-[1.65rem]">
          {step.title}
        </h3>

        <motion.span
          initial={{ x: 0, opacity: 0.25 }}
          whileHover={{ x: 5, opacity: 1 }}
          transition={{
            duration: 0.4,
            ease,
          }}
          className="mt-1 hidden text-[var(--sage)] sm:block"
          aria-hidden="true"
        >
          <Arrow size="sm" />
        </motion.span>
      </div>

      <p className="max-w-[500px] text-sm leading-[1.8] text-[#172033]/45">
        {step.description}
      </p>
    </motion.div>
  );
}