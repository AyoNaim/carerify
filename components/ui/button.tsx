"use client";

import Link from "next/link";
import {
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type {
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

import { Arrow } from "@/components/ui/arrow";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "light"
  | "text";

type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  arrowDirection?: "right" | "left" | "up" | "down";
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<HTMLMotionProps<"button">, "children"> & {
    href?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<ComponentPropsWithoutRef<"a">, "children" | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const containerVariants: Variants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -2,
  },
  tap: {
    y: 0,
  },
};

const arrowVariants: Variants = {
  rest: {
    x: 0,
  },
  hover: {
    x: 3,
  },
};

const backgroundVariants: Variants = {
  rest: {
    scale: 0,
    opacity: 0,
  },
  hover: {
    scale: 1,
    opacity: 1,
  },
};

const sizeClasses = {
  sm: "min-h-10 px-4 text-[0.72rem]",
  md: "min-h-12 px-5 text-[0.75rem]",
  lg: "min-h-14 px-6 text-[0.78rem]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  arrow = true,
  arrowDirection = "right",
  className = "",
  ...props
}: ButtonProps) {
  const classes = getVariantClasses(variant);

  /*
   * The Button component owns its text color.
   *
   * This prevents a dark background from accidentally inheriting a
   * dark text color from a parent or from arbitrary utility classes.
   */
  const textColorClass = classes.textColor;

  const content = (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Animated background                                             */}
      {/* ---------------------------------------------------------------- */}

      {variant !== "text" && (
        <motion.span
          aria-hidden="true"
          variants={backgroundVariants}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className={`absolute inset-0 origin-center rounded-full ${classes.hoverBackground}`}
        />
      )}

      {/* ---------------------------------------------------------------- */}
      {/* Content                                                          */}
      {/* ---------------------------------------------------------------- */}

      <span
        className={`relative z-10 flex items-center gap-3 ${textColorClass}`}
      >
        <span className="relative overflow-hidden">
          <motion.span
            className="block"
            variants={{
              rest: {
                y: 0,
              },
              hover: {
                y: -1,
              },
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            {children}
          </motion.span>
        </span>

        {arrow && (
          <motion.span
            variants={arrowVariants}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="flex items-center"
          >
            <Arrow
              direction={arrowDirection}
              size={size === "lg" ? "md" : "sm"}
            />
          </motion.span>
        )}
      </span>
    </>
  );

  const sharedClassName = `
    group
    relative
    inline-flex
    items-center
    justify-center
    overflow-hidden
    rounded-full
    font-[var(--font-body)]
    font-semibold
    uppercase
    tracking-[0.11em]
    whitespace-nowrap
    select-none
    transition-colors
    duration-500
    ease-[cubic-bezier(0.22,1,0.36,1)]
    ${sizeClasses[size]}
    ${classes.base}
    ${className}
  `;

  /*
   * ----------------------------------------------------------------------
   * Link variant
   * ----------------------------------------------------------------------
   *
   * The link itself is a normal Next.js Link.
   * Animation is handled by the surrounding motion.div.
   */

  if ("href" in props) {
    const {
      href,
      ...linkProps
    } = props as ButtonAsLink;

    return (
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileTap="tap"
        variants={containerVariants}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
        className="inline-flex"
      >
        <Link
          href={href}
          className={sharedClassName}
          {...linkProps}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  /*
   * ----------------------------------------------------------------------
   * Button variant
   * ----------------------------------------------------------------------
   */

  const buttonProps = props as ButtonAsButton;

  return (
    <motion.button
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap="tap"
      variants={containerVariants}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className={sharedClassName}
      {...buttonProps}
    >
      {content}
    </motion.button>
  );
}

function getVariantClasses(variant: ButtonVariant) {
  switch (variant) {
    case "primary":
      return {
        base: "bg-[var(--navy)]",
        textColor: "text-white",
        hoverBackground: "bg-[var(--sage)]",
      };

    case "secondary":
      return {
        base:
          "border border-[rgba(27,45,91,0.18)] bg-transparent",
        textColor: "text-[var(--navy)]",
        hoverBackground: "bg-[var(--sage-light)]",
      };

    case "light":
      return {
        base: "bg-white",
        textColor: "text-[var(--navy)]",
        hoverBackground: "bg-[var(--sage-light)]",
      };

    case "text":
      return {
        base:
          "rounded-none! px-0! bg-transparent!",
        textColor: "text-[var(--navy)]",
        hoverBackground: "",
      };
  }
}
