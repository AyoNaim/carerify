"use client"
import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Arrow } from "@/components/ui/arrow";

const ease = [0.22, 1, 0.36, 1] as const;

export function NorthernOntario() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="northern-ontario-heading"
      className="relative overflow-hidden bg-[var(--navy)] text-white"
    >
      <Container>
        <div className="relative py-[clamp(6rem,11vw,10rem)]">
          <div className="grid gap-14 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16 xl:gap-24">
            <motion.div
              initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                ease,
              }}
            >
              <Eyebrow number="09" light>
                Northern Ontario
              </Eyebrow>

              <div className="mt-10 hidden lg:block">
                <div className="h-px w-16 bg-[var(--sage)]" />

                <p className="mt-5 max-w-[180px] text-sm leading-[1.8] text-white/40">
                  Local focus. Human connection. Healthcare support that
                  understands the region it serves.
                </p>
              </div>
            </motion.div>

            <div>
              <motion.h2
                id="northern-ontario-heading"
                initial={{ opacity: 0, y: reducedMotion ? 0 : 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: reducedMotion ? 0.01 : 1,
                  ease,
                }}
                className="
                  max-w-[900px]
                  font-[var(--font-display)]
                  text-[clamp(3.2rem,6.4vw,7.2rem)]
                  font-medium
                  leading-[0.9]
                  tracking-[-0.07em]
                "
              >
                Rooted in
                <br />
                <span className="text-[var(--sage)]">
                  Northern Ontario.
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: reducedMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.8,
                  delay: reducedMotion ? 0 : 0.18,
                  ease,
                }}
                className="mt-10 flex flex-col gap-7 border-t border-white/[0.12] pt-6 sm:flex-row sm:items-end sm:justify-between"
              >
                <p className="max-w-[500px] text-[1rem] leading-[1.8] text-white/60 sm:text-[1.08rem]">
                  CareRify is focused on supporting healthcare organizations
                  and professionals across Northern Ontario with a staffing
                  approach built around people, clarity, and reliability.
                </p>

                <a
                  href="/contact"
                  className="group inline-flex shrink-0 items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-white"
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
                        bg-white
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
              </motion.div>
            </div>
          </div>

          {/* Quiet regional marker */}
          <motion.div
            initial={{
              opacity: 0,
              scale: reducedMotion ? 1 : 0.94,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reducedMotion ? 0.01 : 1.2,
              delay: reducedMotion ? 0 : 0.2,
              ease,
            }}
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 right-[-5rem] hidden h-64 w-64 rounded-full border border-[var(--sage)]/[0.16] sm:block"
          >
            <div className="absolute inset-8 rounded-full border border-white/[0.07]" />

            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--sage)]" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
