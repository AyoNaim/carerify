import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Staffing Solutions", href: "/staffing-solutions" },
  { label: "For Organizations", href: "/for-organizations" },
  { label: "For Professionals", href: "/for-professionals" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#F5EFE6]">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24 lg:py-24">
          <div>
            <Logo />

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#667085]">
              Verified professionals. Reliable staffing.
              Better-supported care.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#667085]">
                Explore
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[#1B2D5B] transition-opacity hover:opacity-60"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#667085]">
                Contact
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-[#1B2D5B]">
                <span>[Business email]</span>
                <span>[Business phone]</span>
                <span>Northern Ontario, Canada</span>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#667085]">
                Legal
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                <Link
                  href="/privacy"
                  className="text-sm text-[#1B2D5B] transition-opacity hover:opacity-60"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms"
                  className="text-sm text-[#1B2D5B] transition-opacity hover:opacity-60"
                >
                  Terms of Use
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#1B2D5B]/10 py-6 text-xs text-[#667085] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} CareRify Health Staffing Inc.
          </p>

          <p>Verified Care. Every Shift.</p>
        </div>
      </Container>
    </footer>
  );
}