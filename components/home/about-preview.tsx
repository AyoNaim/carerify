"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Arrow } from "@/components/ui/arrow";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutPreview() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="about-preview-heading"
      className="relative overflow-hidden bg-white"
    >
      <Container>
        <div className="relative py-[clamp(6rem,11vw,10rem)]">
          <div className="grid gap-14 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16 xl:gap-24">
            <motion.div
              initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                ease,
              }}
            >
              <Eyebrow number="10">About CareRify</Eyebrow>

              <div className="mt-8 hidden lg:block">
                <div className="h-px w-14 bg-[var(--sage)]" />

                <p className="mt-5 max-w-[180px] text-sm leading-[1.8] text-[#172033]/40">
                  A staffing company built around people, not transactions.
                </p>
              </div>
            </motion.div>

            <div>
              <motion.h2
                id="about-preview-heading"
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
                className="
                  max-w-[900px]
                  font-[var(--font-display)]
                  text-[clamp(3.2rem,6.3vw,7.1rem)]
                  font-medium
                  leading-[0.91]
                  tracking-[-0.07em]
                  text-[var(--navy)]
                "
              >
                Care is
                <br />
                <span className="text-[var(--sage)]">
                  personal.
                </span>
                <br />
                So are we.
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
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.8,
                  delay: reducedMotion ? 0 : 0.18,
                  ease,
                }}
                className="mt-12 flex flex-col gap-7 border-t border-[#172033]/[0.1] pt-6 sm:flex-row sm:items-end sm:justify-between"
              >
                <p className="max-w-[500px] text-[1rem] leading-[1.8] text-[#172033]/60 sm:text-[1.08rem]">
                  CareRify was created with a simple belief: healthcare
                  staffing should feel more human, more considered, and more
                  dependable.
                </p>

                <a
                  href="/about"
                  className="group inline-flex shrink-0 items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[var(--navy)]"
                >
                  <span className="relative">
                    Discover CareRify

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
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}