"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/brand/logo";
import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";

type MobileNavProps = {
  dark?: boolean;
};

const navigation = [
  {
    number: "01",
    label: "About",
    href: "/about",
  },
  {
    number: "02",
    label: "Staffing solutions",
    href: "/staffing-solutions",
  },
  {
    number: "03",
    label: "For professionals",
    href: "/for-healthcare-professionals",
  },
  {
    number: "04",
    label: "For organizations",
    href: "/for-healthcare-organizations",
  },
];

export function MobileNav({ dark = false }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const closeMenu = () => {
    setOpen(false);
  };

  const toggleMenu = () => {
    setOpen((current) => !current);
  };

  /*
   * Keep the page from scrolling underneath the menu.
   */
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  /*
   * Escape closes the menu.
   */
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  /*
   * Move focus into the navigation once it opens.
   */
  useEffect(() => {
    if (!open || reducedMotion) {
      return;
    }

    const timeout = window.setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 350);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [open, reducedMotion]);

  return (
    <>
      <header
        className="relative z-[100] flex items-center justify-between lg:hidden"
        aria-label="Mobile navigation"
      >
        <Logo dark={dark} />

        <MenuButton
          open={open}
          onClick={toggleMenu}
          dark={dark}
        />
      </header>

      <AnimatePresence>
        {open && (
          <MobileMenu
            closeMenu={closeMenu}
            firstLinkRef={firstLinkRef}
            reducedMotion={Boolean(reducedMotion)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Menu button                                                                */
/* -------------------------------------------------------------------------- */

type MenuButtonProps = {
  open: boolean;
  dark: boolean;
  onClick: () => void;
};

function MenuButton({
  open,
  dark,
  onClick,
}: MenuButtonProps) {
  const foreground = dark ? "#ffffff" : "#1b2d5b";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls="mobile-navigation-menu"
      aria-label={open ? "Close navigation" : "Open navigation"}
      whileTap={{ scale: 0.94 }}
      className="
        relative
        z-[120]
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        transition-colors
        duration-500
      "
      style={{
        borderColor: dark
          ? "rgba(255,255,255,0.22)"
          : "rgba(27,45,91,0.16)",
        backgroundColor: open
          ? "rgba(255,255,255,0.08)"
          : "transparent",
      }}
    >
      <span
        className="relative flex h-4 w-[18px] flex-col justify-center"
        aria-hidden="true"
      >
        <motion.span
          initial={false}
          animate={
            open
              ? {
                  y: 0,
                  rotate: 45,
                }
              : {
                  y: -3,
                  rotate: 0,
                }
          }
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="absolute left-0 h-px w-full origin-center"
          style={{ backgroundColor: foreground }}
        />

        <motion.span
          initial={false}
          animate={
            open
              ? {
                  y: 0,
                  rotate: -45,
                }
              : {
                  y: 3,
                  rotate: 0,
                }
          }
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="absolute left-0 h-px w-full origin-center"
          style={{ backgroundColor: foreground }}
        />
      </span>
    </motion.button>
  );
}

/* -------------------------------------------------------------------------- */
/* Full-screen menu                                                           */
/* -------------------------------------------------------------------------- */

type MobileMenuProps = {
  closeMenu: () => void;
  firstLinkRef: React.RefObject<HTMLAnchorElement | null>;
  reducedMotion: boolean;
};

function MobileMenu({
  closeMenu,
  firstLinkRef,
  reducedMotion,
}: MobileMenuProps) {
  const menuTransition = reducedMotion
    ? {
        duration: 0.01,
      }
    : {
        duration: 0.85,
        ease: [0.76, 0, 0.24, 1] as const,
      };

  const itemTransition = reducedMotion
    ? {
        duration: 0.01,
      }
    : {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
      };

  return (
    <motion.div
      id="mobile-navigation-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Main navigation"
      initial={{
        clipPath: "inset(0 0 100% 0)",
      }}
      animate={{
        clipPath: "inset(0 0 0% 0)",
      }}
      exit={{
        clipPath: "inset(100% 0 0 0)",
      }}
      transition={menuTransition}
      className="
        fixed
        inset-0
        z-[110]
        flex
        min-h-dvh
        flex-col
        overflow-y-auto
        bg-[var(--navy)]
        text-white
      "
    >
      {/* Ambient editorial layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.08,
          }}
          transition={{
            duration: reducedMotion ? 0.01 : 1.2,
            delay: reducedMotion ? 0 : 0.15,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="
            absolute
            -right-[25%]
            top-[12%]
            h-[42rem]
            w-[42rem]
            rounded-full
            border
            border-white/[0.06]
          "
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.1,
          }}
          transition={{
            duration: reducedMotion ? 0.01 : 1.4,
            delay: reducedMotion ? 0 : 0.2,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="
            absolute
            -right-[12%]
            top-[25%]
            h-[25rem]
            w-[25rem]
            rounded-full
            border
            border-[var(--sage)]/[0.14]
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            h-[45%]
            w-full
            bg-[radial-gradient(circle_at_20%_100%,rgba(143,179,155,0.11),transparent_55%)]
          "
        />
      </div>

      {/* Menu content */}
      <div className="relative flex min-h-dvh flex-1 flex-col px-5 pb-7 pt-28 sm:px-8">
        <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col">
          {/* Eyebrow */}
          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: reducedMotion ? 0 : -12,
            }}
            transition={{
              ...itemTransition,
              delay: reducedMotion ? 0 : 0.15,
            }}
            className="mb-10 flex items-center gap-3"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-[var(--sage)]"
              aria-hidden="true"
            />

            <span className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-white/50">
              CareRify Healthcare Staffing
            </span>
          </motion.div>

          {/* Navigation */}
          <nav
            aria-label="Mobile main navigation"
            className="flex flex-col"
          >
            {navigation.map((item, index) => (
              <MobileNavLink
                key={item.href}
                {...item}
                index={index}
                first={index === 0}
                firstLinkRef={firstLinkRef}
                closeMenu={closeMenu}
                reducedMotion={reducedMotion}
              />
            ))}
          </nav>

          {/* Bottom action */}
          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: reducedMotion ? 0 : 20,
            }}
            transition={{
              ...itemTransition,
              delay: reducedMotion ? 0 : 0.5,
            }}
            className="mt-auto pt-14"
          >
            <p className="mb-4 max-w-xs text-sm leading-relaxed text-white/50">
              Need healthcare staffing support?
            </p>

            <Button
              href="/request-staffing"
              variant="light"
              size="lg"
              className="w-full sm:w-auto"
              onClick={closeMenu}
            >
              Request staffing
            </Button>
          </motion.div>

          {/* Footer details */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.6,
              delay: reducedMotion ? 0 : 0.7,
            }}
            className="
              mt-10
              flex
              items-end
              justify-between
              border-t
              border-white/10
              pt-5
            "
          >
            <span className="text-[0.625rem] font-medium uppercase tracking-[0.16em] text-white/35">
              Northern Ontario
            </span>

            <span className="text-[0.625rem] font-medium uppercase tracking-[0.16em] text-white/35">
              Verified Care. Every Shift.
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Navigation item                                                            */
/* -------------------------------------------------------------------------- */

type MobileNavLinkProps = {
  number: string;
  label: string;
  href: string;
  index: number;
  first: boolean;
  firstLinkRef: React.RefObject<HTMLAnchorElement | null>;
  closeMenu: () => void;
  reducedMotion: boolean;
};

function MobileNavLink({
  number,
  label,
  href,
  index,
  first,
  firstLinkRef,
  closeMenu,
  reducedMotion,
}: MobileNavLinkProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: reducedMotion ? 0 : 55,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: reducedMotion ? 0 : -25,
      }}
      transition={{
        duration: reducedMotion ? 0.01 : 0.8,
        delay: reducedMotion ? 0 : 0.22 + index * 0.07,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
    >
      <Link
        ref={first ? firstLinkRef : undefined}
        href={href}
        onClick={closeMenu}
        className="
          group
          flex
          items-center
          border-b
          border-white/[0.09]
          py-4
          transition-colors
          duration-500
          sm:py-5
        "
      >
        {/* Number */}
        <span
          className="
            w-9
            shrink-0
            self-start
            pt-2
            font-[var(--font-body)]
            text-[0.6rem]
            font-medium
            tracking-[0.08em]
            text-white/30
            transition-colors
            duration-500
            group-hover:text-[var(--sage)]
          "
        >
          {number}
        </span>

        {/* Label */}
        <span
          className="
            min-w-0
            flex-1
            font-[var(--font-display)]
            text-[clamp(2.25rem,10vw,4.75rem)]
            font-medium
            leading-[0.95]
            tracking-[-0.055em]
            text-white
            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:translate-x-2
          "
        >
          {label}
        </span>

        {/* Arrow */}
        <motion.span
          initial={{ x: 0, opacity: 0.4 }}
          whileHover={{
            x: 5,
            opacity: 1,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="ml-4 shrink-0 text-[var(--sage)]"
        >
          <Arrow size="md" />
        </motion.span>
      </Link>
    </motion.div>
  );
}

