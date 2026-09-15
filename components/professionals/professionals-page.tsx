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

const professionalRoles = [
  {
    number: "01",
    label: "PSW",
    title: "Personal Support Workers",
  },
  {
    number: "02",
    label: "RPN",
    title: "Registered Practical Nurses",
  },
  {
    number: "03",
    label: "RN",
    title: "Registered Nurses",
  },
  {
    number: "04",
    label: "SUPPORT",
    title: "Dietary & Support Staff",
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Introduce yourself",
    description:
      "Tell us about your professional background, experience, and the kind of healthcare work you are interested in.",
  },
  {
    number: "02",
    title: "Share your experience",
    description:
      "Provide the information and documents needed for us to understand your professional background.",
  },
  {
    number: "03",
    title: "We learn where you fit",
    description:
      "We take your experience and preferences into consideration as we understand potential opportunities.",
  },
  {
    number: "04",
    title: "Stay connected",
    description:
      "When there is a relevant opportunity, the conversation can continue from there.",
  },
];

export function ProfessionalsPage() {
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section
        aria-labelledby="professionals-heading"
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
                <Eyebrow number="01">For healthcare professionals</Eyebrow>

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
                  For professionals who bring skill, experience, and care to
                  every environment they enter.
                </motion.p>
              </motion.div>

              <div>
                <motion.h1
                  id="professionals-heading"
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
                    max-w-[1120px]
                    font-[var(--font-display)]
                    text-[clamp(3.7rem,8.4vw,9.5rem)]
                    font-medium
                    leading-[0.86]
                    tracking-[-0.075em]
                    text-[var(--navy)]
                  "
                >
                  Your work
                  <br />
                  <span className="text-[var(--sage)]">
                    matters here.
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
                    CareRify connects healthcare professionals and support
                    staff with organizations looking for people who can
                    contribute to the care they provide.
                  </p>

                  <div className="mt-8">
                    <Button href="/join-our-healthcare-network" size="lg">
                      Join our healthcare network
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
        aria-labelledby="professionals-intro-heading"
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
              <Eyebrow number="02">More than a role</Eyebrow>

              <p className="mt-8 max-w-[205px] text-sm leading-[1.8] text-[#172033]/40">
                Your experience, professionalism, and approach to care all
                matter.
              </p>
            </motion.div>

            <div>
              <motion.h2
                id="professionals-intro-heading"
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
                Healthcare is
                <br />
                <span className="text-[var(--sage)]">personal work.</span>
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
                  The people who provide care bring more than qualifications
                  to the environments they work in. They bring judgment,
                  patience, experience, compassion, and a commitment to the
                  people they support.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ROLES */}
      <section
        aria-labelledby="professional-roles-heading"
        className="relative overflow-hidden bg-[var(--navy)] text-white"
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
                  Who we work with
                </Eyebrow>

                <p className="mt-8 max-w-[205px] text-sm leading-[1.8] text-white/40">
                  Healthcare professionals and support staff who help make
                  care possible.
                </p>
              </motion.div>

              <div>
                <motion.h2
                  id="professional-roles-heading"
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
                  Your profession.
                  <br />
                  <span className="text-[var(--sage)]">
                    Your contribution.
                  </span>
                </motion.h2>

                <div className="mt-16 border-y border-white/10">
                  {professionalRoles.map((role, index) => (
                    <ProfessionalRole
                      key={role.number}
                      role={role}
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

      {/* JOURNEY */}
      <section
        aria-labelledby="professional-journey-heading"
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
                <Eyebrow number="04">How it works</Eyebrow>

                <p className="mt-8 max-w-[205px] text-sm leading-[1.8] text-[#172033]/40">
                  A straightforward introduction without unnecessary
                  complexity.
                </p>
              </motion.div>

              <div>
                <motion.h2
                  id="professional-journey-heading"
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
                  Start with
                  <br />
                  <span className="text-[var(--sage)]">a conversation.</span>
                </motion.h2>

                <div className="mt-16 border-t border-[#172033]/10">
                  {journeySteps.map((step, index) => (
                    <JourneyRow
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

      {/* PRINCIPLE */}
      <section
        aria-labelledby="principle-heading"
        className="relative overflow-hidden bg-[var(--cream)]"
      >
        <Container>
          <div className="grid gap-16 py-[clamp(7rem,13vw,12rem)] lg:grid-cols-[0.7fr_0.3fr] lg:items-center lg:gap-20">
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
                <Eyebrow number="05">The CareRify difference</Eyebrow>
              </motion.div>

              <motion.h2
                id="principle-heading"
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
                You are not
                <br />
                <span className="text-[var(--sage)]">a profile.</span>
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
                CareRify is not designed around public profiles, bidding, or
                competing for attention. We believe professional relationships
                are better built through understanding the person behind the
                résumé.
              </motion.p>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                scale: reducedMotion ? 1 : 0.84,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={softViewport}
              transition={{
                duration: reducedMotion ? 0.01 : 1.1,
                ease,
              }}
              className="relative mx-auto flex aspect-square w-full max-w-[400px] items-center justify-center"
              aria-hidden="true"
            >
              <div className="absolute inset-[8%] rounded-full border border-[#172033]/10" />
              <div className="absolute inset-[21%] rounded-full border border-[var(--sage)]/50" />
              <div className="absolute inset-[35%] rounded-full bg-[var(--navy)]" />

              <span className="relative z-10 max-w-[90px] text-center text-[0.55rem] font-semibold uppercase leading-[1.5] tracking-[0.16em] text-white">
                Person
                <br />
                before
                <br />
                profile
              </span>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ORGANIZATIONS LINK */}
      <section
        aria-labelledby="organizations-heading"
        className="relative bg-white"
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
              <Eyebrow number="06">On the other side of care</Eyebrow>
            </motion.div>

            <div>
              <motion.h2
                id="organizations-heading"
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
                Good care needs
                <br />
                <span className="text-[var(--sage)]">
                  good teams.
                </span>
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
                  CareRify works with healthcare organizations looking for
                  professionals and support staff who can contribute to their
                  teams and care environments.
                </p>

                <Link
                  href="/for-healthcare-organizations"
                  className="group mt-8 inline-flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[var(--navy)]"
                >
                  <span className="relative">
                    For healthcare organizations
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
        aria-labelledby="professional-cta-heading"
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
              <Eyebrow light>Join CareRify</Eyebrow>

              <motion.h2
                id="professional-cta-heading"
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
                Bring your work
                <br />
                <span className="text-[var(--sage)]">
                  where it matters.
                </span>
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
                Tell us a little about yourself and take the first step toward
                joining the CareRify healthcare network.
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
                <Button href="/join-our-healthcare-network" variant="light" size="lg">
                  Join our healthcare network
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}

type ProfessionalRoleData = {
  number: string;
  label: string;
  title: string;
};

type ProfessionalRoleProps = {
  role: ProfessionalRoleData;
  index: number;
  reducedMotion: boolean;
};

function ProfessionalRole({
  role,
  index,
  reducedMotion,
}: ProfessionalRoleProps) {
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
        sm:grid-cols-[70px_120px_1fr]
        sm:items-center
        sm:gap-8
        lg:py-9
      "
    >
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/30">
        {role.number}
      </span>

      <span className="font-[var(--font-display)] text-[1.55rem] font-medium tracking-[-0.04em] text-[var(--sage)]">
        {role.label}
      </span>

      <div className="flex items-center justify-between gap-6">
        <h3 className="font-[var(--font-display)] text-[1.4rem] font-medium tracking-[-0.035em] text-white sm:text-[1.55rem]">
          {role.title}
        </h3>

        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{
            duration: 0.4,
            ease,
          }}
          className="hidden text-white/30 transition-colors duration-300 group-hover:text-[var(--sage)] sm:block"
          aria-hidden="true"
        >
          <Arrow size="sm" />
        </motion.span>
      </div>
    </motion.div>
  );
}

type JourneyData = {
  number: string;
  title: string;
  description: string;
};

type JourneyRowProps = {
  step: JourneyData;
  index: number;
  reducedMotion: boolean;
};

function JourneyRow({
  step,
  index,
  reducedMotion,
}: JourneyRowProps) {
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

      <h3 className="font-[var(--font-display)] text-[1.45rem] font-medium leading-[1.05] tracking-[-0.04em] text-[var(--navy)] sm:text-[1.65rem]">
        {step.title}
      </h3>

      <p className="max-w-[500px] text-sm leading-[1.8] text-[#172033]/45">
        {step.description}
      </p>
    </motion.div>
  );
}
