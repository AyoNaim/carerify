"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type LogoProps = {
  className?: string;
  href?: string;
  dark?: boolean;
};

export function Logo({
  className = "",
  href = "/",
  dark = false,
}: LogoProps) {
  const foreground = dark ? "#ffffff" : "#1b2d5b";
  const accent = dark ? "#8fb39b" : "#8fb39b";

  return (
    <Link
      href={href}
      aria-label="CareRify home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      {/* ------------------------------------------------------------------ */}
      {/* Mark                                                               */}
      {/* ------------------------------------------------------------------ */}

      <motion.span
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="relative flex h-10 w-10 shrink-0 items-center justify-center"
        aria-hidden="true"
      >
        {/* Outer architectural frame */}
        <motion.span
          variants={{
            rest: {
              rotate: 0,
            },
            hover: {
              rotate: 8,
            },
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 rounded-[13px] border"
          style={{
            borderColor: `${foreground}22`,
          }}
        />

        {/* Organic inner form */}
        <motion.span
          variants={{
            rest: {
              scale: 1,
              rotate: 0,
            },
            hover: {
              scale: 0.88,
              rotate: -8,
            },
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute h-6 w-6 rounded-[9px]"
          style={{
            backgroundColor: accent,
          }}
        />

        {/* CareRify's temporary "R" gesture */}
        <motion.svg
          variants={{
            rest: {
              x: 0,
            },
            hover: {
              x: 1,
            },
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="relative z-10"
        >
          <path
            d="M4 10V4.1H7.05C8.7 4.1 9.65 4.8 9.65 6.05C9.65 7.25 8.7 7.95 7.05 7.95H4"
            stroke={foreground}
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <motion.path
            d="M7.1 7.95L10.05 10"
            stroke={foreground}
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              rest: {
                pathLength: 1,
              },
              hover: {
                pathLength: 0.7,
              },
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.svg>
      </motion.span>

      {/* ------------------------------------------------------------------ */}
      {/* Wordmark                                                           */}
      {/* ------------------------------------------------------------------ */}

      <span className="flex flex-col leading-none">
        <span
          className="font-[var(--font-display)] text-[1.05rem] font-semibold tracking-[-0.045em]"
          style={{ color: foreground }}
        >
          CareRify
        </span>

        <span
          className="mt-[5px] text-[0.48rem] font-medium uppercase tracking-[0.19em]"
          style={{
            color: dark ? "rgba(255,255,255,0.58)" : "rgba(23,32,51,0.48)",
          }}
        >
          Healthcare Staffing
        </span>
      </span>
    </Link>
  );
}