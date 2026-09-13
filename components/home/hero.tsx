"use client";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5EFE6]">
      {/* ------------------------------------------------------------------ */}
      {/* Background atmosphere                                               */}
      {/* ------------------------------------------------------------------ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full border border-[#1B2D5B]/[0.035]" />

        <div className="absolute -right-12 top-20 h-[360px] w-[360px] rounded-full border border-[#8FB39B]/[0.13]" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-[#1B2D5B]/[0.08]" />

        <div className="absolute bottom-[8%] left-[38%] h-32 w-32 rounded-full bg-[#8FB39B]/[0.035] blur-3xl" />
      </div>

      <Container>
        <div
          className="
            relative
            grid
            min-h-[min(920px,100svh)]
            items-center
            gap-16
            pb-8
            pt-32
            lg:grid-cols-[1fr_0.98fr]
            lg:gap-16
            lg:pb-10
            lg:pt-36
            xl:grid-cols-[1.02fr_0.98fr]
            xl:gap-20
            2xl:gap-28
          "
        >
          {/* ================================================================ */}
          {/* LEFT CONTENT                                                      */}
          {/* ================================================================ */}

          <div className="relative z-10 flex max-w-3xl flex-col justify-center lg:min-h-[650px]">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease,
              }}
              className="mb-7 flex items-center gap-3 sm:mb-9"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.55,
                  delay: 0.12,
                  ease,
                }}
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#8FB39B]"
              />

              <span className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#172033]/55">
                Verified Care. Every Shift.
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.05,
                delay: 0.08,
                ease,
              }}
              className="
                max-w-[850px]
                font-[var(--font-display)]
                text-[clamp(3.45rem,6.5vw,7.15rem)]
                font-medium
                leading-[0.88]
                tracking-[-0.068em]
                text-[#1B2D5B]
              "
            >
              <span className="block">Reliable healthcare</span>

              <span className="mt-2 block">
                staffing
                <motion.span
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease,
                  }}
                  className="text-[#8FB39B]"
                >
                  .
                </motion.span>
              </span>

              <motion.span
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.35,
                  ease,
                }}
                className="mt-4 block font-[var(--font-display)] text-[0.52em] font-medium leading-[1] tracking-[-0.045em] text-[#1B2D5B]/72 sm:mt-5"
              >
                When it matters most.
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.48,
                ease,
              }}
              className="
                mt-9
                max-w-[570px]
                text-[1rem]
                leading-[1.72]
                tracking-[-0.012em]
                text-[#172033]/62
                sm:mt-10
                sm:text-[1.075rem]
                sm:leading-[1.7]
              "
            >
              CareRify connects healthcare organizations with qualified
              healthcare professionals and support staff for temporary,
              locum, short-term, and long-term staffing needs.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.6,
                ease,
              }}
              className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row"
            >
              <Button href="/request-staffing" size="lg">
                Request staffing
              </Button>

              <Button
                href="/for-professionals"
                variant="secondary"
                size="lg"
              >
                Join our healthcare network
              </Button>
            </motion.div>

            {/* Location / trust detail */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.74,
                ease,
              }}
              className="mt-10 flex items-center gap-4 sm:mt-12"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{
                  duration: 0.7,
                  delay: 0.82,
                  ease,
                }}
                aria-hidden="true"
                className="h-px shrink-0 bg-[#8FB39B]"
              />

              <span className="text-[0.68rem] font-medium tracking-[0.015em] text-[#172033]/45 sm:text-[0.72rem]">
                Serving healthcare teams across Northern Ontario
              </span>
            </motion.div>
          </div>

          {/* ================================================================ */}
          {/* RIGHT EDITORIAL VISUAL                                            */}
          {/* ================================================================ */}

          <motion.div
            initial={{ opacity: 0, y: 55, scale: 0.965 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.18,
              ease,
            }}
            className="
              relative
              min-h-[500px]
              lg:min-h-[680px]
              xl:min-h-[720px]
            "
          >
            {/* Offset architectural frame */}
            <motion.div
              initial={{ opacity: 0, x: 14, y: 14 }}
              animate={{ opacity: 1, x: 14, y: 14 }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease,
              }}
              aria-hidden="true"
              className="
                absolute
                inset-0
                rounded-[2rem]
                border
                border-[#1B2D5B]/[0.08]
              "
            />

            {/* Main visual */}
            <div
              className="
                absolute
                inset-0
                overflow-hidden
                rounded-[2rem]
                bg-[#1B2D5B]
                shadow-[0_35px_90px_rgba(27,45,91,0.13)]
              "
            >
              {/* Decorative orbital lines */}
              <motion.div
                initial={{ opacity: 0, rotate: -12, scale: 0.94 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{
                  duration: 1.4,
                  delay: 0.45,
                  ease,
                }}
                aria-hidden="true"
                className="
                  absolute
                  -right-36
                  -top-36
                  h-[500px]
                  w-[500px]
                  rounded-full
                  border
                  border-[#8FB39B]/20
                "
              />

              <motion.div
                initial={{ opacity: 0, rotate: 12, scale: 0.9 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.55,
                  ease,
                }}
                aria-hidden="true"
                className="
                  absolute
                  -bottom-44
                  -left-32
                  h-[470px]
                  w-[470px]
                  rounded-full
                  border
                  border-[#8FB39B]/10
                "
              />

              {/* Architectural grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.055 }}
                transition={{
                  duration: 1.2,
                  delay: 0.5,
                }}
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
                  [background-size:48px_48px]
                "
              />

              {/* Soft central atmosphere */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[420px]
                  w-[420px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#8FB39B]/[0.045]
                  blur-3xl
                "
              />

              {/* Top metadata */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.62,
                  ease,
                }}
                className="absolute inset-x-7 top-7 flex items-center justify-between sm:inset-x-10 sm:top-10"
              >
                <div className="flex items-center gap-3">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.7,
                      ease,
                    }}
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[#8FB39B]"
                  />

                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.19em] text-white/50">
                    CareRify / 001
                  </span>
                </div>

                <span className="text-[0.58rem] font-medium uppercase tracking-[0.16em] text-white/30">
                  Northern Ontario
                </span>
              </motion.div>

              {/* Central editorial statement */}
              <div className="absolute inset-x-7 top-1/2 -translate-y-1/2 sm:inset-x-10">
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.58,
                    ease,
                  }}
                >
                  <p
                    className="
                      max-w-[500px]
                      font-[var(--font-display)]
                      text-[clamp(2.7rem,5vw,5.35rem)]
                      font-medium
                      leading-[0.91]
                      tracking-[-0.06em]
                      text-white
                    "
                  >
                    Better-supported
                    <motion.span
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.82,
                        ease,
                      }}
                      className="block text-[#8FB39B]"
                    >
                      teams.
                    </motion.span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.9,
                    ease,
                  }}
                  className="mt-8 max-w-[330px]"
                >
                  <div className="mb-5 h-px w-12 bg-[#8FB39B]/60" />

                  <p className="text-[0.9rem] leading-[1.7] tracking-[-0.005em] text-white/48">
                    Reliable staffing support built around the people who
                    keep care moving.
                  </p>
                </motion.div>
              </div>

              {/* Vertical index */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                }}
                className="
                  absolute
                  right-7
                  top-1/2
                  hidden
                  -translate-y-1/2
                  flex-col
                  items-center
                  gap-3
                  sm:right-10
                  sm:flex
                "
              >
                <span className="h-10 w-px bg-white/10" />

                <span className="text-[0.55rem] font-medium uppercase tracking-[0.16em] text-white/30 [writing-mode:vertical-rl]">
                  People first
                </span>

                <span className="h-10 w-px bg-white/10" />
              </motion.div>

              {/* Bottom information */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.05,
                  ease,
                }}
                className="absolute inset-x-7 bottom-7 sm:inset-x-10 sm:bottom-10"
              >
                <div className="mb-5 h-px w-full bg-white/10" />

                <div className="flex items-center justify-between">
                  <span className="text-[0.56rem] font-medium uppercase tracking-[0.16em] text-white/35">
                    Human-centered staffing
                  </span>

                  <span className="text-[0.56rem] font-medium tracking-[0.12em] text-white/30">
                    01 / 01
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Floating detail */}
            <motion.div
              initial={{ opacity: 0, x: 25, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.05,
                ease,
              }}
              className="
                absolute
                -bottom-5
                -left-4
                z-20
                hidden
                rounded-full
                border
                border-[#1B2D5B]/10
                bg-[#F5EFE6]
                px-5
                py-3
                shadow-[0_15px_40px_rgba(27,45,91,0.08)]
                sm:block
                lg:-left-8
              "
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8FB39B]/20">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.2,
                      ease,
                    }}
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[#8FB39B]"
                  />
                </span>

                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.13em] text-[#1B2D5B]/65">
                  People first
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Bottom page marker                                                  */}
        {/* ------------------------------------------------------------------ */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 1.1,
            ease,
          }}
          className="
            flex
            items-center
            justify-between
            border-t
            border-[#1B2D5B]/[0.08]
            py-5
          "
        >
          <span className="text-[0.56rem] font-medium uppercase tracking-[0.17em] text-[#172033]/35">
            01 — Introduction
          </span>

          <span className="hidden text-[0.56rem] font-medium uppercase tracking-[0.17em] text-[#172033]/35 sm:block">
            Verified professionals · Reliable staffing
          </span>

          <span className="flex items-center gap-2 text-[0.56rem] font-medium uppercase tracking-[0.17em] text-[#172033]/35">
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-[#8FB39B]"
            />
            Scroll
          </span>
        </motion.div>
      </Container>
    </section>
  );
}

