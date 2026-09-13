"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

export function FinalCta() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-[var(--navy)] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: reducedMotion ? 1 : 0.85,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: reducedMotion ? 0.01 : 1.5,
            ease,
          }}
          className="
            absolute
            -right-[20rem]
            top-1/2
            h-[48rem]
            w-[48rem]
            -translate-y-1/2
            rounded-full
            border
            border-white/[0.07]
          "
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: reducedMotion ? 1 : 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: reducedMotion ? 0.01 : 1.4,
            delay: reducedMotion ? 0 : 0.12,
            ease,
          }}
          className="
            absolute
            -right-[8rem]
            top-1/2
            h-[29rem]
            w-[29rem]
            -translate-y-1/2
            rounded-full
            border
            border-[var(--sage)]/[0.2]
          "
        />

        <div className="absolute bottom-0 left-0 h-px w-[42%] bg-white/[0.08]" />
      </div>

      <Container>
        <div className="relative py-[clamp(7rem,14vw,13rem)]">
          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 20,
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
              duration: reducedMotion ? 0.01 : 0.8,
              ease,
            }}
          >
            <Eyebrow number="11" light>
              Start a conversation
            </Eyebrow>
          </motion.div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
            <motion.div
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 40,
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
                delay: reducedMotion ? 0 : 0.08,
                ease,
              }}
            >
              <h2
                id="final-cta-heading"
                className="
                  max-w-[1000px]
                  font-[var(--font-display)]
                  text-[clamp(3.7rem,8vw,9rem)]
                  font-medium
                  leading-[0.88]
                  tracking-[-0.075em]
                "
              >
                Ready when
                <br />
                <span className="text-[var(--sage)]">
                  you are.
                </span>
              </h2>

              <p className="mt-8 max-w-[440px] text-[1rem] leading-[1.8] text-white/55 sm:text-[1.08rem]">
                Whether you need staffing support or want to join the
                CareRify network, let’s start with a conversation.
              </p>
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
                delay: reducedMotion ? 0 : 0.25,
                ease,
              }}
              className="flex flex-col items-start gap-5"
            >
              <Button
                href="/request-staffing"
                variant="light"
                size="lg"
              >
                Request staffing
              </Button>

              <a
                href="/for-healthcare-professionals"
                className="group inline-flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-white/65 transition-colors duration-500 hover:text-white"
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
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 20,
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
              duration: reducedMotion ? 0.01 : 0.8,
              delay: reducedMotion ? 0 : 0.35,
              ease,
            }}
            className="mt-20 flex flex-col gap-4 border-t border-white/[0.12] pt-5 sm:mt-28 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/30">
              CareRify Healthcare Staffing
            </p>

            <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-white/30">
              Verified Care. Every Shift.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
