"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, type ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "01",
    label: "Understand",
    title: "Start with what your team needs.",
    description:
      "Tell us about your organization, your staffing requirements, and the support you are looking for.",
    detail: "The right conversation starts with context.",
  },
  {
    number: "02",
    label: "Identify",
    title: "Explore appropriate staffing support.",
    description:
      "We consider the nature of your request and help identify the type of qualified professional or support staff that may be appropriate.",
    detail: "Every organization has its own rhythm.",
  },
  {
    number: "03",
    label: "Connect",
    title: "Move the conversation forward.",
    description:
      "We connect the relevant people and clarify the next steps so your staffing request can progress with purpose.",
    detail: "Clear communication creates momentum.",
  },
  {
    number: "04",
    label: "Support",
    title: "Work toward stronger coverage.",
    description:
      "Our focus is to help healthcare organizations build dependable staffing support around the people they serve.",
    detail: "Better-supported teams make room for better care.",
  },
];

export function HowItWorks() {
  const reducedMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = steps[activeStep];

  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="relative overflow-hidden bg-[var(--navy)] text-white"
    >
      {/* Quiet structural detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute right-[-18rem] top-[-12rem] h-[44rem] w-[44rem] rounded-full border border-white/[0.07]" />

        <div className="absolute right-[-7rem] top-[4rem] h-[25rem] w-[25rem] rounded-full border border-[var(--sage)]/[0.2]" />

        <div className="absolute bottom-0 left-0 h-[45%] w-full bg-[radial-gradient(circle_at_10%_100%,rgba(143,179,155,0.13),transparent_55%)]" />

        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-white/[0.055] lg:block" />
      </div>

      <Container>
        <div className="relative py-[clamp(6.5rem,13vw,12rem)]">
          {/* Section introduction */}
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
            <Eyebrow number="04" light>
              How CareRify works
            </Eyebrow>

            <span className="hidden text-[0.6rem] font-medium uppercase tracking-[0.18em] text-white/30 sm:block">
              CareRify / Approach
            </span>
          </motion.div>

          {/* Introductory editorial block */}
          <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:gap-20 xl:gap-32">
            <motion.h2
              id="how-it-works-heading"
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 45,
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
                duration: reducedMotion ? 0.01 : 1,
                ease,
              }}
              className="
                max-w-[850px]
                font-[var(--font-display)]
                text-[clamp(3.2rem,6.5vw,7.3rem)]
                font-medium
                leading-[0.91]
                tracking-[-0.068em]
              "
            >
              A clearer path
              <br />
              to <span className="text-[var(--sage)]">stronger support.</span>
            </motion.h2>

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

              <p className="max-w-[390px] text-[1.05rem] leading-[1.8] tracking-[-0.012em] text-white/65 sm:text-[1.15rem]">
                Staffing needs can change quickly. Our approach is designed
                to keep the process clear, human, and focused on the needs of
                each healthcare organization.
              </p>
            </motion.div>
          </div>

          {/* Interactive process system */}
          <div className="mt-20 grid gap-12 lg:mt-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 xl:gap-32">
            {/* Step navigation */}
            <div>
              <div className="mb-8 flex items-center justify-between border-b border-white/[0.14] pb-4">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/40">
                  The process
                </span>

                <span className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-white/30">
                  4 stages
                </span>
              </div>

              <div className="relative">
                {/* Progress line */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-[1.15rem] top-0 w-px bg-white/[0.12]"
                />

                <motion.div
                  aria-hidden="true"
                  className="absolute left-[1.15rem] top-0 w-px origin-top bg-[var(--sage)]"
                  initial={{ height: 0 }}
                  whileInView={{
                    height: `${(activeStep / (steps.length - 1)) * 100}%`,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.4,
                  }}
                  animate={{
                    height: `${(activeStep / (steps.length - 1)) * 100}%`,
                  }}
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.65,
                    ease,
                  }}
                />

                <div className="relative flex flex-col">
                  {steps.map((step, index) => {
                    const isActive = index === activeStep;
                    const isPast = index < activeStep;

                    return (
                      <button
                        key={step.number}
                        type="button"
                        onClick={() => setActiveStep(index)}
                        className="
                          group
                          relative
                          flex
                          min-h-[94px]
                          items-start
                          gap-6
                          text-left
                          outline-none
                        "
                        aria-pressed={isActive}
                      >
                        <motion.span
                          animate={{
                            scale: isActive ? 1 : 0.72,
                            backgroundColor: isActive
                              ? "#8FB39B"
                              : isPast
                                ? "#8FB39B"
                                : "#1B2D5B",
                            borderColor: isActive
                              ? "#8FB39B"
                              : "rgba(255,255,255,0.24)",
                          }}
                          transition={{
                            duration: reducedMotion ? 0.01 : 0.45,
                            ease,
                          }}
                          className="
                            relative
                            z-10
                            mt-1
                            flex
                            h-[2.35rem]
                            w-[2.35rem]
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            text-[0.62rem]
                            font-semibold
                            tracking-[0.08em]
                            text-[var(--navy)]
                            transition-colors
                          "
                        >
                          {step.number}
                        </motion.span>

                        <span className="min-w-0 flex-1 pb-8">
                          <span
                            className={`block font-[var(--font-display)] text-[clamp(1.5rem,2.4vw,2.25rem)] font-medium leading-[1.05] tracking-[-0.045em] transition-colors duration-500 ${
                              isActive
                                ? "text-white"
                                : "text-white/35 group-hover:text-white/70"
                            }`}
                          >
                            {step.label}
                          </span>

                          <span
                            className={`mt-2 block max-w-[260px] text-sm leading-relaxed transition-colors duration-500 ${
                              isActive
                                ? "text-white/55"
                                : "text-white/25 group-hover:text-white/45"
                            }`}
                          >
                            {step.detail}
                          </span>
                        </span>

                        <span
                          aria-hidden="true"
                          className={`mt-2 text-[var(--sage)] transition-all duration-500 ${
                            isActive
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-2 opacity-0"
                          }`}
                        >
                          <Arrow size="sm" />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Active step detail */}
            <motion.div
              key={currentStep.number}
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 28,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                ease,
              }}
              className="relative flex min-h-[390px] flex-col justify-between border-t border-white/[0.14] pt-7 lg:min-h-[470px]"
            >
              <div className="flex items-start justify-between gap-8">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--sage)]">
                  Stage {currentStep.number}
                </span>

                <span className="text-[0.6rem] font-medium uppercase tracking-[0.16em] text-white/25">
                  CareRify approach
                </span>
              </div>

              <div className="my-16 max-w-[650px] lg:my-0">
                <h3 className="font-[var(--font-display)] text-[clamp(2.5rem,4.5vw,5.25rem)] font-medium leading-[0.96] tracking-[-0.06em] text-white">
                  {currentStep.title}
                </h3>

                <p className="mt-8 max-w-[450px] text-[1rem] leading-[1.8] text-white/60 sm:text-[1.08rem]">
                  {currentStep.description}
                </p>
              </div>

              <div className="flex items-end justify-between gap-8 border-t border-white/[0.12] pt-5">
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.17em] text-white/35">
                    Focus
                  </p>

                  <p className="mt-2 text-sm text-white/55">
                    {currentStep.detail}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {steps.map((step, index) => (
                    <button
                      key={step.number}
                      type="button"
                      aria-label={`View step ${index + 1}: ${step.label}`}
                      aria-pressed={index === activeStep}
                      onClick={() => setActiveStep(index)}
                      className="group flex h-6 w-6 items-center justify-center"
                    >
                      <span
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          index === activeStep
                            ? "w-6 bg-[var(--sage)]"
                            : "w-1.5 bg-white/25 group-hover:bg-white/60"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Closing call to action */}
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
              delay: reducedMotion ? 0 : 0.2,
              ease,
            }}
            className="mt-20 flex flex-col gap-7 border-t border-white/[0.14] pt-7 sm:mt-28 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="max-w-[440px] text-sm leading-[1.8] text-white/45">
              A thoughtful process keeps staffing conversations focused,
              transparent, and centered on people.
            </p>

            <Button
              href="/request-staffing"
              variant="light"
              size="lg"
            >
              Start a staffing conversation
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}