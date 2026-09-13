"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Arrow } from "@/components/ui/arrow";

const ease = [0.22, 1, 0.36, 1] as const;

const pathways = [
  {
    id: "organizations",
    number: "01",
    eyebrow: "For healthcare organizations",
    title: "Build stronger teams.",
    description:
      "When your organization needs additional staffing support, CareRify helps you move from need to the right conversation.",
    cta: "Request staffing",
    href: "/for-healthcare-organizations",
    accent: "#8FB39B",
    background: "#1B2D5B",
    foreground: "#FFFFFF",
    muted: "rgba(255,255,255,0.58)",
    code: "ORG",
  },
  {
    id: "professionals",
    number: "02",
    eyebrow: "For healthcare professionals",
    title: "Bring your skills forward.",
    description:
      "Join a healthcare staffing network built around qualified professionals who want to make a meaningful contribution to care.",
    cta: "Join our network",
    href: "/for-healthcare-professionals",
    accent: "#1B2D5B",
    background: "#E8F0EA",
    foreground: "#1B2D5B",
    muted: "rgba(23,32,51,0.58)",
    code: "YOU",
  },
];

export function AudiencePathways() {
  const reducedMotion = useReducedMotion();
  const [activePathway, setActivePathway] = useState(0);

  const active = pathways[activePathway];

  return (
    <section
      aria-labelledby="audience-pathways-heading"
      className="relative overflow-hidden bg-[var(--cream)]"
    >
      {/* Atmospheric background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[-15rem] top-[25%] h-[36rem] w-[36rem] rounded-full border border-[#1B2D5B]/[0.045]" />

        <div className="absolute right-[-12rem] bottom-[-10rem] h-[38rem] w-[38rem] rounded-full border border-[#8FB39B]/[0.12]" />
      </div>

      <Container>
        <div className="relative py-[clamp(7rem,13vw,12rem)]">
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
            <Eyebrow number="06">
              Two sides of better care
            </Eyebrow>

            <span className="hidden text-[0.6rem] font-medium uppercase tracking-[0.18em] text-[#172033]/30 sm:block">
              CareRify / Who we serve
            </span>
          </motion.div>

          {/* Editorial introduction */}
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 xl:gap-32">
            <motion.h2
              id="audience-pathways-heading"
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
                max-w-[900px]
                font-[var(--font-display)]
                text-[clamp(3.25rem,6.6vw,7.4rem)]
                font-medium
                leading-[0.9]
                tracking-[-0.07em]
                text-[var(--navy)]
              "
            >
              One purpose.
              <br />
              <span className="text-[var(--sage)]">
                Two pathways.
              </span>
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

              <p className="max-w-[400px] text-[1.05rem] leading-[1.8] tracking-[-0.012em] text-[#172033]/65 sm:text-[1.15rem]">
                CareRify sits between two groups who make better-supported care
                possible: the organizations that need great people, and the
                professionals ready to contribute.
              </p>
            </motion.div>
          </div>

          {/* Pathway experience */}
          <div className="mt-20 lg:mt-32">
            {/* Desktop pathway selector */}
            <div className="hidden border-y border-[#172033]/[0.12] lg:grid lg:grid-cols-2">
              {pathways.map((pathway, index) => {
                const isActive = index === activePathway;

                return (
                  <button
                    key={pathway.id}
                    type="button"
                    onMouseEnter={() => setActivePathway(index)}
                    onFocus={() => setActivePathway(index)}
                    onClick={() => setActivePathway(index)}
                    aria-pressed={isActive}
                    className={`
                      group
                      relative
                      flex
                      min-h-[100px]
                      items-center
                      gap-6
                      px-2
                      text-left
                      outline-none
                      transition-colors
                      duration-500
                      ${
                        index === 0
                          ? "border-r border-[#172033]/[0.12]"
                          : ""
                      }
                    `}
                  >
                    <motion.span
                      animate={{
                        width: isActive ? 42 : 18,
                        opacity: isActive ? 1 : 0.35,
                      }}
                      transition={{
                        duration: reducedMotion ? 0.01 : 0.5,
                        ease,
                      }}
                      className="h-px shrink-0 bg-[var(--sage)]"
                    />

                    <span
                      className={`text-[0.65rem] font-semibold uppercase tracking-[0.17em] transition-colors duration-500 ${
                        isActive
                          ? "text-[var(--navy)]"
                          : "text-[#172033]/35 group-hover:text-[#172033]/65"
                      }`}
                    >
                      {pathway.eyebrow}
                    </span>

                    <span
                      className={`ml-auto text-[0.62rem] font-medium tracking-[0.1em] transition-colors duration-500 ${
                        isActive
                          ? "text-[#172033]/45"
                          : "text-[#172033]/20"
                      }`}
                    >
                      {pathway.number}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Desktop active experience */}
            <div className="relative mt-0 hidden min-h-[590px] overflow-hidden lg:block">
              <AnimatePathway
                pathway={active}
                reducedMotion={Boolean(reducedMotion)}
              />
            </div>

            {/* Mobile pathways */}
            <div className="flex flex-col gap-4 lg:hidden">
              {pathways.map((pathway, index) => (
                <MobilePathway
                  key={pathway.id}
                  pathway={pathway}
                  index={index}
                  reducedMotion={Boolean(reducedMotion)}
                />
              ))}
            </div>
          </div>

          {/* Bottom philosophy */}
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
              duration: reducedMotion ? 0.01 : 0.85,
              delay: reducedMotion ? 0 : 0.2,
              ease,
            }}
            className="mt-20 border-t border-[#172033]/[0.1] pt-6 sm:mt-28"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[#172033]/35">
                Verified professionals · Reliable staffing
              </p>

              <p className="max-w-[420px] text-sm leading-[1.75] text-[#172033]/45 sm:text-right">
                Different needs. One shared goal: better-supported care.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

type AnimatePathwayProps = {
  pathway: (typeof pathways)[number];
  reducedMotion: boolean;
};

function AnimatePathway({
  pathway,
  reducedMotion,
}: AnimatePathwayProps) {
  return (
    <motion.div
      key={pathway.id}
      initial={{
        opacity: 0,
        y: reducedMotion ? 0 : 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: reducedMotion ? 0.01 : 0.9,
        ease,
      }}
      className="absolute inset-0"
      style={{
        backgroundColor: pathway.background,
        color: pathway.foreground,
      }}
    >
      {/* Large abstract identity mark */}
      <div
        aria-hidden="true"
        className="absolute right-[-9%] top-1/2 h-[42rem] w-[42rem] -translate-y-1/2 rounded-full border"
        style={{
          borderColor:
            pathway.id === "organizations"
              ? "rgba(143,179,155,0.18)"
              : "rgba(27,45,91,0.1)",
        }}
      >
        <motion.div
          initial={{
            scale: reducedMotion ? 1 : 0.75,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: reducedMotion ? 0.01 : 1.2,
            ease,
          }}
          className="absolute inset-[15%] rounded-full border"
          style={{
            borderColor:
              pathway.id === "organizations"
                ? "rgba(143,179,155,0.24)"
                : "rgba(27,45,91,0.13)",
          }}
        />

        <motion.div
          initial={{
            scale: reducedMotion ? 1 : 0.7,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: reducedMotion ? 0.01 : 1,
            delay: reducedMotion ? 0 : 0.1,
            ease,
          }}
          className="absolute inset-[30%] rounded-full"
          style={{
            backgroundColor: pathway.accent,
            opacity: pathway.id === "organizations" ? 0.9 : 0.9,
          }}
        />

        {/* Central role mark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-[var(--font-display)] text-[clamp(5rem,10vw,9rem)] font-medium leading-none tracking-[-0.09em]"
            style={{
              color:
                pathway.id === "organizations"
                  ? "#1B2D5B"
                  : "#E8F0EA",
            }}
          >
            {pathway.code}
          </span>
        </div>
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            pathway.id === "organizations"
              ? "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)"
              : "linear-gradient(rgba(27,45,91,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(27,45,91,0.12) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Top metadata */}
      <div className="absolute left-8 right-8 top-8 flex items-start justify-between xl:left-12 xl:right-12 xl:top-10">
        <div>
          <p
            className="text-[0.62rem] font-semibold uppercase tracking-[0.18em]"
            style={{ color: pathway.muted }}
          >
            {pathway.eyebrow}
          </p>

          <p
            className="mt-2 text-[0.58rem] font-medium uppercase tracking-[0.15em]"
            style={{ color: pathway.muted }}
          >
            CareRify / {pathway.number}
          </p>
        </div>

        <span
          className="font-[var(--font-display)] text-5xl font-medium leading-none tracking-[-0.07em]"
          style={{ color: pathway.muted }}
        >
          {pathway.number}
        </span>
      </div>

      {/* Main copy */}
      <div className="absolute bottom-8 left-8 max-w-[470px] xl:bottom-10 xl:left-12">
        <p
          className="mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em]"
          style={{ color: pathway.id === "organizations" ? "#8FB39B" : "#1B2D5B" }}
        >
          {pathway.code}
        </p>

        <h3
          className="max-w-[500px] font-[var(--font-display)] text-[clamp(2.8rem,5vw,5.7rem)] font-medium leading-[0.92] tracking-[-0.065em]"
          style={{ color: pathway.foreground }}
        >
          {pathway.title}
        </h3>

        <p
          className="mt-6 max-w-[390px] text-[1rem] leading-[1.75]"
          style={{ color: pathway.muted }}
        >
          {pathway.description}
        </p>

        <Link
          href={pathway.href}
          className="group mt-8 inline-flex items-center gap-4"
          style={{ color: pathway.foreground }}
        >
          <span className="relative text-[0.68rem] font-semibold uppercase tracking-[0.15em]">
            {pathway.cta}

            <span
              aria-hidden="true"
              className="absolute -bottom-2 left-0 h-px w-full origin-right scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:origin-left group-hover:scale-x-100"
              style={{ backgroundColor: pathway.foreground }}
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

      {/* Vertical descriptor */}
      <div className="absolute bottom-10 right-8 hidden items-center gap-3 xl:right-12 xl:flex">
        <span
          className="text-[0.55rem] font-semibold uppercase tracking-[0.18em]"
          style={{ color: pathway.muted }}
        >
          People
        </span>

        <span
          className="h-px w-8"
          style={{
            backgroundColor:
              pathway.id === "organizations"
                ? "rgba(255,255,255,0.25)"
                : "rgba(27,45,91,0.2)",
          }}
        />

        <span
          className="text-[0.55rem] font-semibold uppercase tracking-[0.18em]"
          style={{ color: pathway.muted }}
        >
          Purpose
        </span>
      </div>
    </motion.div>
  );
}

type MobilePathwayProps = {
  pathway: (typeof pathways)[number];
  index: number;
  reducedMotion: boolean;
};

function MobilePathway({
  pathway,
  index,
  reducedMotion,
}: MobilePathwayProps) {
  return (
    <motion.article
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
        amount: 0.2,
      }}
      transition={{
        duration: reducedMotion ? 0.01 : 0.85,
        delay: reducedMotion ? 0 : index * 0.1,
        ease,
      }}
      className="relative min-h-[480px] overflow-hidden p-6 sm:p-8"
      style={{
        backgroundColor: pathway.background,
        color: pathway.foreground,
      }}
    >
      {/* Background circles */}
      <div
        aria-hidden="true"
        className="absolute -right-[35%] top-[20%] aspect-square w-[90%] rounded-full border"
        style={{
          borderColor:
            pathway.id === "organizations"
              ? "rgba(143,179,155,0.2)"
              : "rgba(27,45,91,0.1)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute -right-[10%] top-[35%] aspect-square w-[45%] rounded-full"
        style={{
          backgroundColor: pathway.accent,
          opacity: 0.9,
        }}
      />

      <div className="relative flex h-full min-h-[432px] flex-col">
        <div className="flex items-start justify-between">
          <div>
            <p
              className="text-[0.62rem] font-semibold uppercase tracking-[0.18em]"
              style={{ color: pathway.muted }}
            >
              {pathway.eyebrow}
            </p>

            <p
              className="mt-2 text-[0.58rem] font-medium uppercase tracking-[0.15em]"
              style={{ color: pathway.muted }}
            >
              CareRify / {pathway.number}
            </p>
          </div>

          <span
            className="font-[var(--font-display)] text-4xl font-medium tracking-[-0.07em]"
            style={{ color: pathway.muted }}
          >
            {pathway.number}
          </span>
        </div>

        <div className="mt-auto">
          <p
            className="mb-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em]"
            style={{
              color:
                pathway.id === "organizations"
                  ? "#8FB39B"
                  : "#1B2D5B",
            }}
          >
            {pathway.code}
          </p>

          <h3
            className="max-w-[420px] font-[var(--font-display)] text-[clamp(2.7rem,12vw,4.8rem)] font-medium leading-[0.92] tracking-[-0.065em]"
            style={{ color: pathway.foreground }}
          >
            {pathway.title}
          </h3>

          <p
            className="mt-5 max-w-[360px] text-sm leading-[1.75]"
            style={{ color: pathway.muted }}
          >
            {pathway.description}
          </p>

          <Link
            href={pathway.href}
            className="group mt-7 inline-flex items-center gap-4"
            style={{ color: pathway.foreground }}
          >
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.15em]">
              {pathway.cta}
            </span>

            <Arrow size="sm" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}