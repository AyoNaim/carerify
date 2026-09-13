"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type ArrowProps = {
  direction?: "right" | "left" | "up" | "down";
  size?: "sm" | "md" | "lg";
  className?: string;
} & Omit<HTMLMotionProps<"span">, "children">;

const directions = {
  right: 0,
  down: 90,
  left: 180,
  up: -90,
} as const;

const sizes = {
  sm: 14,
  md: 18,
  lg: 22,
} as const;

export function Arrow({
  direction = "right",
  size = "md",
  className = "",
  ...props
}: ArrowProps) {
  const dimension = sizes[size];
  const rotation = directions[direction];

  return (
    <motion.span
      {...props}
      aria-hidden="true"
      className={`relative inline-flex shrink-0 overflow-hidden ${className}`}
      style={{
        width: dimension,
        height: dimension,
      }}
    >
      {/* Current arrow */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center"
        variants={{
          rest: {
            x: 0,
            y: 0,
            opacity: 1,
          },
          hover: {
            x: dimension * 0.9,
            y: 0,
            opacity: 0,
          },
        }}
        transition={{
          duration: 0.42,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
      >
        <ArrowIcon size={dimension} rotation={rotation} />
      </motion.span>

      {/* Incoming arrow */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center"
        initial={{
          x: -dimension * 0.9,
          y: 0,
          opacity: 0,
        }}
        variants={{
          rest: {
            x: -dimension * 0.9,
            y: 0,
            opacity: 0,
          },
          hover: {
            x: 0,
            y: 0,
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.42,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
      >
        <ArrowIcon size={dimension} rotation={rotation} />
      </motion.span>
    </motion.span>
  );
}

function ArrowIcon({
  size,
  rotation,
}: {
  size: number;
  rotation: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <path
        d="M4 12H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M13.5 6.5L19 12L13.5 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}