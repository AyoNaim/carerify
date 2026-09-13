"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Arrow } from "@/components/ui/arrow";

const ease = [0.22, 1, 0.36, 1] as const;

const principles = [
  {
    number: "01",
    title: "Verified",
    description:
      "We believe healthcare organizations deserve confidence in the people supporting their teams.",
  },
  {
    number: "02",
    title: "Reliable",
    description:
      "Staffing support should feel dependable, clear, and aligned with the realities of each organization.",
  },
  {
    number: "03",
    title: "Human",
    description:
      "Behind every staffing request is a person, a team, and the people receiving care.",
  },
];

export function CarePhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="care-philosophy-heading"
      className="relative overflow-hidden bg-white"
    >
      {/* Quiet visual structure in the background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[18%] hidden h-[46rem] w-px -translate-x-1/2 bg-[#172033]/[0.045] lg:block" />

        <motion.div
          initial={{
            opacity: 0,
            scale: reducedMotion ? 1 : 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: reducedMotion ? 0.01 : 1.4,
            ease,
          }}
          className="
            absolute
            -right-[17rem]
            top-[16%]
            h-[42rem]
            w-[42rem]
            rounded-full
            border
            border-[var(--navy)]/[0.055]
          "
        />

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
            amount: 0.2,
          }}
          transition={{
            duration: reducedMotion ? 0.01 : 1.5,
            delay: reducedMotion ? 0 : 0.12,
            ease,
          }}
          className="
            absolute
            -right-[8rem]
            top-[28%]
            h-[25rem]
            w-[25rem]
            rounded-full
            border
            border-[var(--sage)]/[0.18]
          "
        />

        <div className="absolute bottom-0 left-0 h-[1px] w-[38%] bg-[var(--navy)]/[0.07]" />
      </div>

      <Container>
        <div className="relative py-[clamp(7rem,14vw,13rem)]">
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
            className="flex items-center justify-between"
          >
            <Eyebrow number="07">
              What we believe
            </Eyebrow>

            <span className="hidden text-[0.6rem] font-medium uppercase tracking-[0.18em] text-[#172033]/30 sm:block">
              CareRify / Philosophy
            </span>
          </motion.div>

          {/* Main statement */}
          <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 xl:gap-32">
            <motion.h2
              id="care-philosophy-heading"
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
                    staggerChildren: reducedMotion ? 0 : 0.11,
                  },
                },
              }}
              className="
                max-w-[950px]
                font-[var(--font-display)]
                text-[clamp(3.3rem,7vw,8rem)]
                font-medium
                leading-[0.89]
                tracking-[-0.072em]
                text-[var(--navy)]
              "
            >
              <RevealLine reducedMotion={Boolean(reducedMotion)}>
                Verified
              </RevealLine>

              <RevealLine reducedMotion={Boolean(reducedMotion)}>
                professionals.
              </RevealLine>

              <RevealLine
                reducedMotion={Boolean(reducedMotion)}
                accent
              >
                Reliable
              </RevealLine>

              <RevealLine
                reducedMotion={Boolean(reducedMotion)}
                accent
              >
                staffing.
              </RevealLine>

              <RevealLine reducedMotion={Boolean(reducedMotion)}>
                Better-supported
              </RevealLine>

              <RevealLine reducedMotion={Boolean(reducedMotion)}>
                care.
              </RevealLine>
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
                delay: reducedMotion ? 0 : 0.25,
                ease,
              }}
              className="flex flex-col justify-end lg:pb-3"
            >
              <div className="mb-7 h-px w-14 bg-[var(--sage)]" />

              <p className="max-w-[390px] text-[1.05rem] leading-[1.8] tracking-[-0.012em] text-[#172033]/65 sm:text-[1.15rem]">
                The standard we are building around is simple: connect the
                right people, communicate clearly, and keep the focus where it
                belongs.
              </p>

              <p className="mt-6 max-w-[360px] text-sm leading-[1.8] text-[#172033]/45">
                On the organization. On the professional. And ultimately, on
                the people receiving care.
              </p>
            </motion.div>
          </div>

          {/* Visual pause */}
          <PhilosophyMark
            reducedMotion={Boolean(reducedMotion)}
          />

          {/* Principles */}
          <div className="mt-20 border-t border-[#172033]/[0.1] sm:mt-28">
            <div className="grid lg:grid-cols-3">
              {principles.map((principle, index) => (
                <Principle
                  key={principle.number}
                  {...principle}
                  index={index}
                  reducedMotion={Boolean(reducedMotion)}
                  bordered={index !== 0}
                />
              ))}
            </div>
          </div>

          {/* Closing line */}
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
            className="mt-16 flex flex-col gap-5 sm:mt-20 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-[#172033]/35">
              People first. Always.
            </p>

            <a
              href="/about"
              className="group inline-flex w-fit items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[var(--navy)]"
            >
              <span className="relative">
                More about CareRify

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
      </Container>
    </section>
  );
}

type RevealLineProps = {
  children: React.ReactNode;
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

type PhilosophyMarkProps = {
  reducedMotion: boolean;
};

function PhilosophyMark({
  reducedMotion,
}: PhilosophyMarkProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: reducedMotion ? 1 : 0.92,
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
        duration: reducedMotion ? 0.01 : 1.2,
        ease,
      }}
      className="relative mx-auto mt-20 flex aspect-square w-full max-w-[430px] items-center justify-center sm:mt-28"
      aria-hidden="true"
    >
      {/* Outer orbit */}
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-full border border-[var(--navy)]/[0.1]"
      />

      {/* Inner orbit */}
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                rotate: -360,
              }
        }
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[14%] rounded-full border border-[var(--sage)]/[0.35]"
      />

      {/* Cardinal points */}
      <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--sage)]" />
      <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--navy)]" />
      <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--navy)]" />
      <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--sage)]" />

      {/* Center */}
      <motion.div
        initial={{
          scale: reducedMotion ? 1 : 0.8,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: reducedMotion ? 0.01 : 0.9,
          delay: reducedMotion ? 0 : 0.25,
          ease,
        }}
        className="
          relative
          flex
          aspect-square
          w-[42%]
          items-center
          justify-center
          rounded-full
          bg-[var(--navy)]
          shadow-[0_25px_70px_rgba(27,45,91,0.14)]
        "
      >
        <div className="absolute inset-[9%] rounded-full border border-white/[0.12]" />

        <div className="relative text-center">
          <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[var(--sage)]">
            CareRify
          </span>

          <span className="mt-2 block font-[var(--font-display)] text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-none tracking-[-0.06em] text-white">
            People
          </span>

          <span className="mt-1 block font-[var(--font-display)] text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-none tracking-[-0.06em] text-white">
            first.
          </span>
        </div>
      </motion.div>

      {/* Small orbit labels */}
      <span className="absolute left-[7%] top-[19%] text-[0.52rem] font-semibold uppercase tracking-[0.17em] text-[#172033]/35">
        Trust
      </span>

      <span className="absolute right-[7%] top-[19%] text-[0.52rem] font-semibold uppercase tracking-[0.17em] text-[#172033]/35">
        People
      </span>

      <span className="absolute bottom-[18%] left-[9%] text-[0.52rem] font-semibold uppercase tracking-[0.17em] text-[#172033]/35">
        Care
      </span>

      <span className="absolute bottom-[18%] right-[9%] text-[0.52rem] font-semibold uppercase tracking-[0.17em] text-[#172033]/35">
        Support
      </span>
    </motion.div>
  );
}

type PrincipleProps = {
  number: string;
  title: string;
  description: string;
  index: number;
  reducedMotion: boolean;
  bordered: boolean;
};

function Principle({
  number,
  title,
  description,
  index,
  reducedMotion,
  bordered,
}: PrincipleProps) {
  return (
    <motion.article
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
        amount: 0.25,
      }}
      transition={{
        duration: reducedMotion ? 0.01 : 0.8,
        delay: reducedMotion ? 0 : index * 0.1,
        ease,
      }}
      className={`
        relative
        py-8
        lg:px-8
        lg:py-10
        xl:px-10
        ${
          bordered
            ? "border-t border-[#172033]/[0.1] lg:border-l lg:border-t-0"
            : ""
        }
      `}
    >
      <div className="flex items-start justify-between gap-6">
        <span className="text-[0.62rem] font-semibold tracking-[0.1em] text-[var(--sage)]">
          {number}
        </span>

        <span className="h-1.5 w-1.5 rounded-full bg-[var(--sage)]" />
      </div>

      <h3 className="mt-10 font-[var(--font-display)] text-[clamp(2rem,3vw,3rem)] font-medium leading-none tracking-[-0.055em] text-[var(--navy)]">
        {title}
      </h3>

      <p className="mt-5 max-w-[330px] text-sm leading-[1.8] text-[#172033]/50">
        {description}
      </p>
    </motion.article>
  );
}
