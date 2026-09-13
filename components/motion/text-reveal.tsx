"use client";

import {
  motion,
  useInView,
  type HTMLMotionProps,
} from "framer-motion";
import {
  useRef,
  type ElementType,
  type ReactNode,
} from "react";

type TextRevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;

  /**
   * Start the animation when the element enters the viewport.
   * Set to false for hero text that should animate immediately.
   */
  once?: boolean;

  /**
   * Delay before the first line begins.
   */
  delay?: number;

  /**
   * Delay between individual lines.
   */
  stagger?: number;

  /**
   * Amount of the element that must be visible before
   * the animation begins.
   */
  amount?: number;

  /**
   * Animation direction.
   */
  direction?: "up" | "down" | "left" | "right";

  /**
   * How much movement happens during the reveal.
   */
  distance?: number;
} & Omit<HTMLMotionProps<"div">, "children">;

const directionOffset = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
} as const;

export function TextReveal({
  children,
  as: Component = "div",
  className = "",
  once = true,
  delay = 0,
  stagger = 0.08,
  amount = 0.3,
  direction = "up",
  distance = 72,
  ...props
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once,
    amount,
  });

  const offset = directionOffset[direction];

  const variants = {
    hidden: {
      opacity: 0,
      x: offset.x * distance,
      y: offset.y * distance,
    },

    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.9,
        delayChildren: delay,
        staggerChildren: stagger,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Component
      ref={ref}
      className={className}
      {...props}
    >
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        className="block"
      >
        {children}
      </motion.span>
    </Component>
  );
}