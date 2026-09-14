"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/brand/logo";

const navigation = [
  {
    label: "Overview",
    href: "/admin",
  },
  {
    label: "Applications",
    href: "/admin/applications",
  },
  {
    label: "Staffing Requests",
    href: "/admin/staffing-requests",
  },
  {
    label: "Contact Messages",
    href: "/admin/contact-messages",
  },
];

type AdminShellProps = {
  children: React.ReactNode;
};

export function AdminShell({ children }: AdminShellProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/admin") {
      return pathname === "/admin";
    }

    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#172033]">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[260px] border-r border-[#1B2D5B]/10 bg-[#FBF8F3] lg:flex lg:flex-col">
        <div className="flex h-full flex-col px-6 py-7">
          <Link
            href="/admin"
            aria-label="CareRify admin dashboard"
            className="mb-14 block"
          >
            <Logo />
          </Link>

          <div className="mb-5 px-3">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1B2D5B]/45">
              Administration
            </p>
          </div>

          <nav aria-label="Admin navigation" className="space-y-1">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex items-center rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-[#E8F0EA]"
                >
                  {active && (
                    <motion.span
                      layoutId="admin-active-indicator"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : {
                              type: "spring",
                              stiffness: 500,
                              damping: 35,
                            }
                      }
                      className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-[#1B2D5B]"
                    />
                  )}

                  <span
                    className={`font-sans text-sm transition-colors ${
                      active
                        ? "font-semibold text-[#1B2D5B]"
                        : "text-[#172033]/60 group-hover:text-[#172033]"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto border-t border-[#1B2D5B]/10 pt-6">
            <div className="px-3">
              <p className="font-sans text-xs font-medium text-[#172033]/50">
                CareRify Health Staffing
              </p>

              <p className="mt-1 font-sans text-[11px] text-[#172033]/35">
                Administration
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile header */}
      <header className="sticky top-0 z-50 border-b border-[#1B2D5B]/10 bg-[#FBF8F3]/95 backdrop-blur-md lg:hidden">
        <Container>
          <div className="flex h-[72px] items-center justify-between">
            <Link
              href="/admin"
              aria-label="CareRify admin dashboard"
              onClick={() => setMobileOpen(false)}
            >
              <Logo />
            </Link>

            <button
              type="button"
              aria-label={
                mobileOpen ? "Close admin navigation" : "Open admin navigation"
              }
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1B2D5B]/10 text-[#1B2D5B] transition-colors hover:bg-[#E8F0EA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2D5B] focus-visible:ring-offset-2"
            >
              <span className="relative flex h-4 w-5 flex-col justify-between">
                <span
                  className={`h-px w-full bg-current transition-transform duration-200 ${
                    mobileOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-current transition-opacity duration-200 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-current transition-transform duration-200 ${
                    mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile navigation */}
      {mobileOpen && (
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
          className="fixed inset-x-0 top-[72px] z-40 border-b border-[#1B2D5B]/10 bg-[#FBF8F3] px-6 py-5 shadow-[0_16px_40px_rgba(23,32,51,0.08)] lg:hidden"
        >
          <nav aria-label="Mobile admin navigation" className="space-y-1">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-4 py-3 font-sans text-sm transition-colors ${
                    active
                      ? "bg-[#E8F0EA] font-semibold text-[#1B2D5B]"
                      : "text-[#172033]/65 hover:bg-[#E8F0EA] hover:text-[#172033]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </motion.div>
      )}

      {/* Main application area */}
      <div className="min-h-screen lg:pl-[260px]">
        <main className="px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
          <Container>
            {children}
          </Container>
        </main>
      </div>
    </div>
  );
}

