"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";

type DesktopNavProps = {
  scrolled?: boolean;
  dark?: boolean;
};

const navigation = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Staffing solutions",
    href: "/staffing-solutions",
  },
  {
    label: "For professionals",
    href: "/for-healthcare-professionals",
  },
  {
    label: "For organizations",
    href: "/for-healthcare-organizations",
  },
];

export function DesktopNav({
  scrolled = false,
  dark = false,
}: DesktopNavProps) {
  const foreground = dark ? "#ffffff" : "#172033";

  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-8 lg:flex"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Primary navigation                                                 */}
      {/* ------------------------------------------------------------------ */}

      <div className="flex items-center gap-7">
        {navigation.map((item, index) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            index={index}
            dark={dark}
          />
        ))}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Divider                                                             */}
      {/* ------------------------------------------------------------------ */}

      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
        className="h-7 w-px origin-center"
        style={{
          backgroundColor: dark
            ? "rgba(255,255,255,0.2)"
            : "rgba(23,32,51,0.14)",
        }}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Primary CTA                                                         */}
      {/* ------------------------------------------------------------------ */}

      <Magnetic
        strength={0.12}
        maxDistance={8}
        className="shrink-0"
      >
        <Button
          href="/request-staffing"
          size={scrolled ? "sm" : "md"}
          variant={dark ? "light" : "primary"}
        >
          Request staffing
        </Button>
      </Magnetic>
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/* Navigation link                                                           */
/* -------------------------------------------------------------------------- */

type NavLinkProps = {
  href: string;
  label: string;
  index: number;
  dark: boolean;
};

function NavLink({
  href,
  label,
  index,
  dark,
}: NavLinkProps) {
  const color = dark
    ? "rgba(255,255,255,0.78)"
    : "rgba(23,32,51,0.72)";

  const hoverColor = dark
    ? "#ffffff"
    : "#1b2d5b";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: 0.15 + index * 0.055,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
    >
      <Link
        href={href}
        className="group relative flex items-center py-3"
        style={{
          color,
        }}
      >
        <span
          className="
            relative
            font-[var(--font-body)]
            text-[0.72rem]
            font-medium
            tracking-[-0.005em]
            transition-colors
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:text-[var(--navy)]
          "
          style={{
            color: "inherit",
          }}
        >
          {label}

          {/* -------------------------------------------------------------- */}
          {/* Editorial underline                                             */}
          {/* -------------------------------------------------------------- */}

          <span
            aria-hidden="true"
            className="
              absolute
              -bottom-[0.3rem]
              left-0
              h-px
              w-full
              origin-right
              scale-x-0
              transition-transform
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:origin-left
              group-hover:scale-x-100
            "
            style={{
              backgroundColor: hoverColor,
            }}
          />
        </span>

        {/* -------------------------------------------------------------- */}
        {/* Tiny directional indicator                                     */}
        {/* -------------------------------------------------------------- */}

        <motion.span
          initial={{
            width: 0,
            opacity: 0,
            marginLeft: 0,
          }}
          whileHover={{
            width: 12,
            opacity: 0.65,
            marginLeft: 7,
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex h-3 items-center overflow-hidden"
          aria-hidden="true"
        >
          <Arrow
            size="sm"
            className="shrink-0"
          />
        </motion.span>
      </Link>
    </motion.div>
  );
}