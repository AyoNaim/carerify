"use client";

import {
  motion,
  useInView,
  type HTMLMotionProps,
} from "framer-motion";
import {
  useRef,
  type ReactNode,
} from "react";

type ImageRevealProps = {
  children: ReactNode;
  className?: string;

  /**
   * Whether the reveal should only happen once.
   */
  once?: boolean;

  /**
   * Amount of the image that must enter the viewport
   * before the animation begins.
   */
  amount?: number;

  /**
   * Delay before the image begins revealing.
   */
  delay?: number;

  /**
   * Direction from which the reveal mask opens.
   */
  direction?: "up" | "down" | "left" | "right";

  /**
   * Initial scale applied to the content underneath
   * the reveal mask.
   */
  scale?: number;

  /**
   * Enables a very subtle hover scale on the image.
   */
  hoverScale?: boolean;
} & Omit<HTMLMotionProps<"div">, "children">;

const clipPaths = {
  up: {
    hidden: "inset(100% 0% 0% 0%)",
    visible: "inset(0% 0% 0% 0%)",
  },

  down: {
    hidden: "inset(0% 0% 100% 0%)",
    visible: "inset(0% 0% 0% 0%)",
  },

  left: {
    hidden: "inset(0% 100% 0% 0%)",
    visible: "inset(0% 0% 0% 0%)",
  },

  right: {
    hidden: "inset(0% 0% 0% 100%)",
    visible: "inset(0% 0% 0% 0%)",
  },
};

export function ImageReveal({
  children,
  className = "",
  once = true,
  amount = 0.2,
  delay = 0,
  direction = "up",
  scale = 1.08,
  hoverScale = true,
  ...props
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once,
    amount,
  });

  const clip = clipPaths[direction];

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{
        clipPath: clip.hidden,
      }}
      animate={{
        clipPath: isInView ? clip.visible : clip.hidden,
      }}
      transition={{
        duration: 1.15,
        delay,
        ease: [0.76, 0, 0.24, 1] as const,
      }}
      {...props}
    >
      <motion.div
        className="h-full w-full"
        initial={{
          scale,
        }}
        animate={{
          scale: isInView ? 1 : scale,
        }}
        whileHover={
          hoverScale
            ? {
                scale: 1.025,
              }
            : undefined
        }
        transition={{
          scale: {
            duration: 1.35,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}