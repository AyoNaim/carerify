"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/ui/container";

const ease = [0.22, 1, 0.36, 1] as const;

export function BrandStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const motionDuration = reducedMotion ? 0.01 : 0.9;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="brand-statement-heading"
      className="relative overflow-hidden bg-white"
    >
      {/* Quiet background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-[42%] opacity-70"
      >
        <div className="absolute right-[-18rem] top-[8%] h-[44rem] w-[44rem] rounded-full border border-[#1B2D5B]/[0.045]" />

        <div className="absolute right-[-10rem] top-[22%] h-[28rem] w-[28rem] rounded-full border border-[#8FB39B]/[0.16]" />
      </div>

      <Container>
        <div className="relative py-[clamp(7rem,14vw,13rem)]">
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
              amount: 0.35,
            }}
            transition={{
              duration: motionDuration,
              ease,
            }}
            className="mb-14 flex items-center justify-between sm:mb-20"
          >
            <Eyebrow number="02">The reason behind the work</Eyebrow>

            <span className="hidden text-[0.6rem] font-medium uppercase tracking-[0.18em] text-[#172033]/30 sm:block">
              CareRify / Perspective
            </span>
          </motion.div>

          {/* Main editorial composition */}
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 xl:grid-cols-[1.1fr_0.9fr] xl:gap-20">
            {/* Animated statement */}
            <div className="relative z-10">
              <motion.h2
                id="brand-statement-heading"
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: reducedMotion ? 0 : 0.14,
                    },
                  },
                }}
                className="
                  max-w-[900px]
                  font-[var(--font-display)]
                  text-[clamp(3.15rem,6.1vw,7.1rem)]
                  font-medium
                  leading-[0.91]
                  tracking-[-0.068em]
                  text-[#1B2D5B]
                "
              >
                <RevealLine reducedMotion={Boolean(reducedMotion)}>
                  Healthcare
                </RevealLine>

                <RevealLine reducedMotion={Boolean(reducedMotion)}>
                  doesn't stop.
                </RevealLine>

                <RevealLine reducedMotion={Boolean(reducedMotion)}>
                  Neither should
                </RevealLine>

                <RevealLine
                  reducedMotion={Boolean(reducedMotion)}
                  accent
                >
                  the support
                </RevealLine>

                <RevealLine
                  reducedMotion={Boolean(reducedMotion)}
                  accent
                >
                  behind it.
                </RevealLine>
              </motion.h2>
            </div>

            {/* SVG people-and-care system */}
            <HealthcarePeopleGraphic
              reducedMotion={Boolean(reducedMotion)}
            />
          </div>

          {/* Supporting message */}
          <div className="mt-14 grid gap-12 border-t border-[#172033]/[0.1] pt-10 lg:mt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-20">
            <motion.div
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
                amount: 0.3,
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.9,
                delay: reducedMotion ? 0 : 0.2,
                ease,
              }}
              className="flex items-start gap-5"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8FB39B]"
              />

              <p className="max-w-[510px] text-[1.05rem] leading-[1.75] tracking-[-0.012em] text-[#172033]/65 sm:text-[1.15rem]">
                Behind every shift is a team working to provide thoughtful,
                consistent care. CareRify helps healthcare organizations
                connect with qualified professionals and support staff so
                their teams can keep moving forward.
              </p>
            </motion.div>

            <motion.div
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
                amount: 0.3,
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 0.9,
                delay: reducedMotion ? 0 : 0.35,
                ease,
              }}
              className="flex flex-col justify-end lg:items-end"
            >
              <div className="mb-7 h-px w-14 bg-[#8FB39B]" />

              <p className="max-w-[350px] text-sm leading-[1.8] text-[#172033]/50 lg:text-right">
                Built around the people who make care possible.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#172033]/45">
                  People at the center
                </span>

                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[#8FB39B]"
                />
              </div>
            </motion.div>
          </div>

          {/* Closing editorial line */}
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
              delay: reducedMotion ? 0 : 0.45,
              ease,
            }}
            className="mt-16 pt-5 sm:mt-24"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[#172033]/35">
                Verified professionals · Reliable staffing
              </p>

              <p className="max-w-md text-sm leading-relaxed text-[#172033]/45 sm:text-right">
                Better-supported teams begin with the right people.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

type RevealLineProps = {
  children: ReactNode;
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
            rotateX: reducedMotion ? 0 : -25,
          },
          visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
              duration: reducedMotion ? 0.01 : 1.05,
              ease,
            },
          },
        }}
        style={{
          transformOrigin: "left bottom",
        }}
        className={`block ${
          accent ? "text-[#8FB39B]" : "text-[#1B2D5B]"
        }`}
      >
        {children}
      </motion.span>
    </span>
  );
}

type HealthcarePeopleGraphicProps = {
  reducedMotion: boolean;
};

function HealthcarePeopleGraphic({
  reducedMotion,
}: HealthcarePeopleGraphicProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: reducedMotion ? 0 : 35,
        scale: reducedMotion ? 1 : 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: reducedMotion ? 0.01 : 1.2,
        delay: reducedMotion ? 0 : 0.2,
        ease,
      }}
      className="relative mx-auto hidden w-full max-w-[620px] lg:block"
      aria-label="Abstract illustration representing healthcare professionals supporting one another"
      role="img"
    >
      <svg
        viewBox="0 0 620 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full overflow-visible"
      >
        <defs>
          <linearGradient
            id="care-rify-sage-fill"
            x1="110"
            y1="90"
            x2="500"
            y2="520"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E8F0EA" />
            <stop offset="1" stopColor="#8FB39B" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient
            id="care-rify-navy-fill"
            x1="190"
            y1="120"
            x2="470"
            y2="510"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1B2D5B" />
            <stop offset="1" stopColor="#132142" />
          </linearGradient>

          <clipPath id="care-rify-circle-clip">
            <circle cx="310" cy="310" r="218" />
          </clipPath>
        </defs>

        {/* Outer structure */}
        <motion.circle
          cx="310"
          cy="310"
          r="252"
          stroke="#1B2D5B"
          strokeOpacity="0.1"
          strokeWidth="1"
          strokeDasharray="3 11"
          animate={
            reducedMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformOrigin: "310px 310px",
          }}
        />

        <circle
          cx="310"
          cy="310"
          r="218"
          stroke="#1B2D5B"
          strokeOpacity="0.16"
          strokeWidth="1"
        />

        <circle
          cx="310"
          cy="310"
          r="164"
          stroke="#8FB39B"
          strokeOpacity="0.42"
          strokeWidth="1"
        />

        {/* Connecting system */}
        <g stroke="#1B2D5B" strokeOpacity="0.22" strokeWidth="1">
          <path d="M310 92V528" />
          <path d="M92 310H528" />
          <path d="M156 156L464 464" />
          <path d="M464 156L156 464" />
        </g>

        <g stroke="#8FB39B" strokeOpacity="0.75" strokeWidth="1.5">
          <path d="M310 150V198" />
          <path d="M310 422V470" />
          <path d="M150 310H198" />
          <path d="M422 310H470" />
        </g>

        {/* Central care field */}
        <circle
          cx="310"
          cy="310"
          r="128"
          fill="url(#care-rify-sage-fill)"
          fillOpacity="0.65"
        />

        <circle
          cx="310"
          cy="310"
          r="128"
          stroke="#8FB39B"
          strokeOpacity="0.35"
          strokeWidth="1"
        />

        {/* Left person */}
        <g transform="translate(155 170)">
          <circle
            cx="0"
            cy="0"
            r="38"
            fill="#F5EFE6"
            stroke="#1B2D5B"
            strokeOpacity="0.2"
          />

          <circle cx="0" cy="-7" r="14" fill="#1B2D5B" />

          <path
            d="M-25 31C-25 13-14 4 0 4C14 4 25 13 25 31V40H-25V31Z"
            fill="#1B2D5B"
          />

          <path
            d="M-11 17L0 28L11 17"
            stroke="#8FB39B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Right person */}
        <g transform="translate(465 170)">
          <circle
            cx="0"
            cy="0"
            r="38"
            fill="#E8F0EA"
            stroke="#1B2D5B"
            strokeOpacity="0.2"
          />

          <circle cx="0" cy="-7" r="14" fill="#1B2D5B" />

          <path
            d="M-25 31C-25 13-14 4 0 4C14 4 25 13 25 31V40H-25V31Z"
            fill="#8FB39B"
          />

          <path
            d="M-11 17L0 28L11 17"
            stroke="#1B2D5B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Bottom person */}
        <g transform="translate(310 470)">
          <circle
            cx="0"
            cy="0"
            r="42"
            fill="#1B2D5B"
            stroke="#1B2D5B"
            strokeOpacity="0.2"
          />

          <circle cx="0" cy="-8" r="15" fill="#F5EFE6" />

          <path
            d="M-28 34C-28 14-15 4 0 4C15 4 28 14 28 34V43H-28V34Z"
            fill="#F5EFE6"
          />

          <path
            d="M-13 17L0 30L13 17"
            stroke="#8FB39B"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Central people-support symbol */}
        <g clipPath="url(#care-rify-circle-clip)">
          <motion.path
            d="M250 306C250 275 275 250 306 250C337 250 362 275 362 306C362 337 337 362 306 362C275 362 250 337 250 306Z"
            fill="url(#care-rify-navy-fill)"
            initial={{ scale: reducedMotion ? 1 : 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: reducedMotion ? 0.01 : 1,
              delay: reducedMotion ? 0 : 0.45,
              ease,
            }}
            style={{
              transformOrigin: "306px 306px",
            }}
          />

          <path
            d="M306 275V337"
            stroke="#F5EFE6"
            strokeWidth="7"
            strokeLinecap="round"
          />

          <path
            d="M275 306H337"
            stroke="#F5EFE6"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </g>

        {/* Small connection points */}
        <g fill="#8FB39B" stroke="#FFFFFF" strokeWidth="4">
          <circle cx="310" cy="92" r="7" />
          <circle cx="528" cy="310" r="7" />
          <circle cx="310" cy="528" r="7" />
          <circle cx="92" cy="310" r="7" />
        </g>

        {/* Floating labels */}
        <g>
          <rect
            x="38"
            y="76"
            width="130"
            height="34"
            rx="17"
            fill="#FFFFFF"
            stroke="#1B2D5B"
            strokeOpacity="0.12"
          />

          <circle cx="54" cy="93" r="4" fill="#8FB39B" />

          <text
            x="67"
            y="97"
            fill="#172033"
            fontSize="10"
            fontWeight="600"
            letterSpacing="1.1"
          >
            PEOPLE FIRST
          </text>
        </g>

        <g>
          <rect
            x="433"
            y="500"
            width="149"
            height="34"
            rx="17"
            fill="#1B2D5B"
          />

          <circle cx="450" cy="517" r="4" fill="#8FB39B" />

          <text
            x="463"
            y="521"
            fill="#FFFFFF"
            fontSize="10"
            fontWeight="600"
            letterSpacing="1"
          >
            BETTER SUPPORT
          </text>
        </g>

        {/* Small index */}
        <text
          x="310"
          y="42"
          textAnchor="middle"
          fill="#172033"
          fillOpacity="0.35"
          fontSize="10"
          fontWeight="600"
          letterSpacing="2"
        >
          CARE / CONNECTION / CONTINUITY
        </text>

        <text
          x="310"
          y="592"
          textAnchor="middle"
          fill="#172033"
          fillOpacity="0.35"
          fontSize="10"
          fontWeight="600"
          letterSpacing="2"
        >
          VERIFIED CARE. EVERY SHIFT.
        </text>
      </svg>
    </motion.div>
  );
}