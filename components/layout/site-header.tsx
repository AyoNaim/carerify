"use client";

import { useState } from "react";
import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/staffing-solutions" },
  { label: "For Organizations", href: "/for-organizations" },
  { label: "For Professionals", href: "/for-professionals" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 sm:px-8 lg:px-12 xl:px-16">
        <Logo />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#1B2D5B]/75 transition-colors hover:text-[#1B2D5B]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/request-staffing">
            Request Staffing
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-[#1B2D5B]/20 lg:hidden"
        >
          <span
            className={[
              "h-px w-5 bg-[#1B2D5B] transition-transform",
              menuOpen ? "translate-y-[3px] rotate-45" : "",
            ].join(" ")}
          />

          <span
            className={[
              "h-px w-5 bg-[#1B2D5B] transition-transform",
              menuOpen ? "-translate-y-[3px] -rotate-45" : "",
            ].join(" ")}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#1B2D5B]/10 bg-[#F5EFE6] px-6 py-8 lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#1B2D5B]/10 py-4 text-lg font-medium text-[#1B2D5B]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/request-staffing"
              onClick={() => setMenuOpen(false)}
              className="mt-6 inline-flex min-h-13 items-center justify-center rounded-full bg-[#1B2D5B] px-6 text-sm font-semibold text-white"
            >
              Request Staffing →
            </Link>

            <Link
              href="/for-professionals"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex min-h-13 items-center justify-center rounded-full border border-[#1B2D5B]/25 px-6 text-sm font-semibold text-[#1B2D5B]"
            >
              Join Our Healthcare Network →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}