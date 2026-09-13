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

const staffingRoles = [
  {
    number: "01",
    short: "PSW",
    title: "Personal Support Workers",
    description:
      "Support focused on the day-to-day needs of people receiving care, with compassion, dignity, and professionalism.",
  },
  {
    number: "02",
    short: "RPN",
    title: "Registered Practical Nurses",
    description:
      "Practical nursing professionals who bring clinical knowledge and dependable support to healthcare teams.",
  },
  {
    number: "03",
    short: "RN",
    title: "Registered Nurses",
    description:
      "Registered nursing professionals who contribute clinical expertise and thoughtful patient-focused care.",
  },
  {
    number: "04",
    short: "SUPPORT",
    title: "Dietary & Support Staff",
    description:
      "Essential support professionals who help healthcare environments operate with care, consistency, and attention to detail.",
  },
];

export function StaffingSolutionsPage() {
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;

  return (
    <div className="overflow-hidden">
      {/* ─────────────────────────────────────────
          HERO
      ───────────────────────────────────────── */}

      <section
        aria-labelledby="staffing-solutions-heading"
        className="relative overflow-hidden bg-[var(--cream)]"
      >
        <Container>
          <div className="relative min-h-[78vh] py-32 sm:py-40 lg:flex lg:min-h-[88vh] lg:items-end lg:py-20">
            <div className="grid w-full gap-16 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16 xl:gap-24">
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
                <Eyebrow number="01">Staffing solutions</Eyebrow>

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
                  className="mt-8 max-w-[200px] text-sm leading-[1.8] text-[#172033]/45"
                >
                  Healthcare staffing built around the needs of the people and
                  teams we support.
                </motion.p>
              </motion.div>

              <div>
                <motion.h1
                  id="staffing-solutions-heading"
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
                    text-[clamp(3.8rem,8.5vw,9.5rem)]
                    font-medium
                    leading-[0.86]
                    tracking-[-0.075em]
                    text-[var(--navy)]
                  "
                >
                  The right people.
                  <br />
                  <span className="text-[var(--sage)]">
                    When they matter.
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
                  className="mt-12 max-w-[560px] border-t border-[#172033]/10 pt-6"
                >
                  <p className="text-[1rem] leading-[1.85] text-[#172033]/60 sm:text-[1.08rem]">
                    CareRify connects healthcare organizations with qualified
                    professionals and support staff to help strengthen the
                    teams behind care.
                  </p>
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

      {/* ─────────────────────────────────────────
          INTRO
      ───────────────────────────────────────── */}

      <section
        aria-labelledby="staffing-intro-heading"
        className="relative bg-white"
      >
        <Container>
          <div className="grid gap-16 py-[clamp(7rem,13vw,12rem)] lg:grid-cols-[0.32fr_0.68fr] lg:gap-16 xl:gap-24">
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
              <Eyebrow number="02">What we provide</Eyebrow>

              <motion.p
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 14,
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
                className="mt-8 max-w-[200px] text-sm leading-[1.8] text-[#172033]/40"
              >
                Support that starts with understanding the need.
              </motion.p>
            </motion.div>

            <div>
              <motion.h2
                id="staffing-intro-heading"
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
                  text-[clamp(3rem,6.3vw,7rem)]
                  font-medium
                  leading-[0.9]
                  tracking-[-0.07em]
                  text-[var(--navy)]
                "
              >
                Staffing should
                <br />
                <span className="text-[var(--sage)]">fit the need.</span>
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
                  Every organization has different pressures, priorities, and
                  staffing needs. CareRify takes a considered approach to
                  connecting organizations with professionals who can support
                  their teams.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────
          ROLES
      ───────────────────────────────────────── */}

      <section
        aria-labelledby="roles-heading"
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
                  Staffing roles
                </Eyebrow>

                <p className="mt-8 max-w-[200px] text-sm leading-[1.8] text-white/40">
                  Professionals and support staff who contribute to stronger
                  healthcare teams.
                </p>
              </motion.div>

              <div>
                <motion.h2
                  id="roles-heading"
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
                  People who
                  <br />
                  <span className="text-[var(--sage)]">support care.</span>
                </motion.h2>

                <div className="mt-16 border-y border-white/10">
                  {staffingRoles.map((role, index) => (
                    <StaffingRole
                      key={role.number}
                      role={role}
                      reducedMotion={reducedMotion}
                      delay={index * 0.08}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────
          APPROACH
      ───────────────────────────────────────── */}

      <section
        aria-labelledby="approach-heading"
        className="relative bg-[var(--cream)]"
      >
        <Container>
          <div className="py-[clamp(7rem,13vw,12rem)]">
            <div className="grid gap-16 lg:grid-cols-[0.68fr_0.32fr] lg:gap-20">
              <div>
                <motion.h2
                  id="approach-heading"
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
                  Not a marketplace.
                  <br />
                  <span className="text-[var(--sage)]">
                    A staffing relationship.
                  </span>
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
                  viewport={softViewport}
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.8,
                    delay: reducedMotion ? 0 : 0.15,
                    ease,
                  }}
                  className="mt-10 max-w-[580px] text-[1rem] leading-[1.85] text-[#172033]/60 sm:text-[1.08rem]"
                >
                  CareRify is built around conversation, understanding, and
                  professional relationships—not public profiles, bidding, or
                  transactional worker matching.
                </motion.p>
              </div>

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
                  duration: reducedMotion ? 0.01 : 1.1,
                  ease,
                }}
                className="relative flex min-h-[320px] items-center justify-center lg:min-h-[420px]"
                aria-hidden="true"
              >
                <div className="absolute h-[min(34vw,420px)] w-[min(34vw,420px)] rounded-full border border-[#172033]/10" />

                <div className="absolute h-[min(24vw,290px)] w-[min(24vw,290px)] rounded-full border border-[var(--sage)]/50" />

                <div className="absolute h-[min(13vw,160px)] w-[min(13vw,160px)] rounded-full bg-[var(--navy)]" />

                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/20 text-center">
                  <span className="text-[0.52rem] font-semibold uppercase tracking-[0.16em] text-white">
                    People
                    <br />
                    before
                    <br />
                    transactions
                  </span>
                </div>

                <span className="absolute left-[5%] top-[17%] text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[#172033]/30">
                  Listen
                </span>

                <span className="absolute bottom-[15%] right-[3%] text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[#172033]/30">
                  Connect
                </span>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────
          ORGANIZATIONS
      ───────────────────────────────────────── */}

      <section
        aria-labelledby="organizations-heading"
        className="relative bg-white"
      >
        <Container>
          <div className="grid gap-16 py-[clamp(7rem,13vw,12rem)] lg:grid-cols-[0.32fr_0.68fr] lg:gap-16 xl:gap-24">
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
              <Eyebrow number="04">For organizations</Eyebrow>

              <p className="mt-8 max-w-[200px] text-sm leading-[1.8] text-[#172033]/40">
                Support for the teams responsible for providing care.
              </p>
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
                  max-w-[920px]
                  font-[var(--font-display)]
                  text-[clamp(3rem,6vw,6.8rem)]
                  font-medium
                  leading-[0.9]
                  tracking-[-0.068em]
                  text-[var(--navy)]
                "
              >
                Stronger teams.
                <br />
                <span className="text-[var(--sage)]">
                  Better-supported care.
                </span>
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
                  duration: reducedMotion ? 0.01 : 0.8,
                  delay: reducedMotion ? 0 : 0.15,
                  ease,
                }}
                className="mt-10 max-w-[620px] border-t border-[#172033]/10 pt-6"
              >
                <p className="text-[1rem] leading-[1.85] text-[#172033]/60 sm:text-[1.08rem]">
                  Whether additional support is needed for ongoing coverage,
                  changing staffing needs, or a team under pressure, CareRify
                  provides a path to start the conversation.
                </p>

                <div className="mt-8">
                  <Link
                    href="/for-healthcare-organizations"
                    className="group inline-flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[var(--navy)]"
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
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────
          CTA
      ───────────────────────────────────────── */}

      <section
        aria-labelledby="staffing-cta-heading"
        className="relative overflow-hidden bg-[var(--navy)] text-white"
      >
        <Container>
          <div className="relative py-[clamp(7rem,13vw,12rem)]">
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
              <Eyebrow light>Need staffing support?</Eyebrow>

              <motion.h2
                id="staffing-cta-heading"
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
                  max-w-[980px]
                  font-[var(--font-display)]
                  text-[clamp(3.5rem,7.5vw,8.5rem)]
                  font-medium
                  leading-[0.87]
                  tracking-[-0.075em]
                "
              >
                Let’s strengthen
                <br />
                <span className="text-[var(--sage)]">your team.</span>
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
                className="mt-8 max-w-[470px] text-[1rem] leading-[1.8] text-white/55 sm:text-[1.08rem]"
              >
                Tell us what your organization needs and start a conversation
                with CareRify.
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

type StaffingRoleData = {
  number: string;
  short: string;
  title: string;
  description: string;
};

type StaffingRoleProps = {
  role: StaffingRoleData;
  reducedMotion: boolean;
  delay: number;
};

function StaffingRole({
  role,
  reducedMotion,
  delay,
}: StaffingRoleProps) {
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
        delay: reducedMotion ? 0 : delay,
        ease,
      }}
      className="
        group
        grid
        gap-6
        border-b
        border-white/10
        py-8
        last:border-b-0
        sm:grid-cols-[70px_110px_1fr_auto]
        sm:items-center
        sm:gap-8
        lg:py-9
      "
    >
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/30">
        {role.number}
      </span>

      <span className="font-[var(--font-display)] text-[1.6rem] font-medium tracking-[-0.04em] text-[var(--sage)]">
        {role.short}
      </span>

      <div>
        <h3 className="font-[var(--font-display)] text-[1.35rem] font-medium tracking-[-0.035em] text-white sm:text-[1.5rem]">
          {role.title}
        </h3>

        <p className="mt-3 max-w-[540px] text-sm leading-[1.75] text-white/40">
          {role.description}
        </p>
      </div>

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
    </motion.div>
  );
}