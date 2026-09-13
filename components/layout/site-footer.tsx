"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/brand/logo";
import { Arrow } from "@/components/ui/arrow";

const ease = [0.22, 1, 0.36, 1] as const;

const navigation = [
  {
    heading: "Explore",
    links: [
      { label: "About", href: "/about" },
      { label: "Staffing solutions", href: "/staffing-solutions" },
      {
        label: "For professionals",
        href: "/for-healthcare-professionals",
      },
      {
        label: "For organizations",
        href: "/for-healthcare-organizations",
      },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Request staffing", href: "/request-staffing" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  const reducedMotion = useReducedMotion();

  return (
    <footer className="relative overflow-hidden bg-[var(--cream)] text-[var(--text)]">
      <Container>
        <div className="relative py-12 sm:py-16 lg:py-20">
          {/* Main footer */}
          <div className="grid gap-14 border-b border-[#172033]/[0.1] pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:pb-20">
            {/* Brand / contact */}
            <motion.div
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 20,
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
                duration: reducedMotion ? 0.01 : 0.8,
                ease,
              }}
            >
              <Logo />

              <p className="mt-8 max-w-[360px] text-sm leading-[1.8] text-[#172033]/50">
                Verified professionals. Reliable staffing. Better-supported
                care.
              </p>

              {/* Placeholder contact details */}
              <div className="mt-8 space-y-2 text-sm text-[#172033]/55">
                <a
                  href="mailto:hello@carerify.example"
                  className="block transition-colors duration-300 hover:text-[var(--navy)]"
                >
                  hello@carerify.example
                </a>

                <a
                  href="tel:+10000000000"
                  className="block transition-colors duration-300 hover:text-[var(--navy)]"
                >
                  +1 (000) 000-0000
                </a>

                <p>Ontario, Canada</p>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-10 sm:gap-16">
              {navigation.map((group, groupIndex) => (
                <motion.div
                  key={group.heading}
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 20,
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
                    duration: reducedMotion ? 0.01 : 0.8,
                    delay: reducedMotion
                      ? 0
                      : 0.08 + groupIndex * 0.08,
                    ease,
                  }}
                >
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#172033]/35">
                    {group.heading}
                  </p>

                  <nav
                    aria-label={`${group.heading} navigation`}
                    className="mt-6 flex flex-col items-start gap-4"
                  >
                    {group.links.map((link) => (
                      <FooterLink
                        key={link.href}
                        href={link.href}
                      >
                        {link.label}
                      </FooterLink>
                    ))}
                  </nav>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom utility row */}
          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 15,
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
              duration: reducedMotion ? 0.01 : 0.7,
              ease,
            }}
            className="flex flex-col gap-8 pt-7 sm:pt-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <p className="text-[0.58rem] font-medium uppercase tracking-[0.16em] text-[#172033]/35">
                © {new Date().getFullYear()} CareRify Healthcare Staffing
              </p>

              <span
                aria-hidden="true"
                className="hidden h-3 w-px bg-[#172033]/[0.15] sm:block"
              />

              <p className="text-[0.58rem] font-medium uppercase tracking-[0.16em] text-[#172033]/35">
                Northern Ontario
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/privacy"
                className="text-[0.58rem] font-medium uppercase tracking-[0.15em] text-[#172033]/40 transition-colors duration-300 hover:text-[var(--navy)]"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="text-[0.58rem] font-medium uppercase tracking-[0.15em] text-[#172033]/40 transition-colors duration-300 hover:text-[var(--navy)]"
              >
                Terms
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-[var(--navy)]"
              >
                <span>Contact</span>

                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{
                    duration: 0.4,
                    ease,
                  }}
                >
                  <Arrow size="sm" />
                </motion.span>
              </Link>
            </div>
          </motion.div>

          {/* Tiny placeholder note for development */}
          <p className="mt-8 text-[0.5rem] uppercase tracking-[0.14em] text-[#172033]/20">
            Contact details shown are placeholders and should be replaced
            before launch.
          </p>
        </div>
      </Container>
    </footer>
  );
}

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

function FooterLink({
  href,
  children,
}: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center text-sm text-[#172033]/60 transition-colors duration-300 hover:text-[var(--navy)]"
    >
      <span>{children}</span>

      <span
        aria-hidden="true"
        className="
          absolute
          -bottom-1
          left-0
          h-px
          w-full
          origin-right
          scale-x-0
          bg-[var(--navy)]
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:origin-left
          group-hover:scale-x-100
        "
      />
    </Link>
  );
}
