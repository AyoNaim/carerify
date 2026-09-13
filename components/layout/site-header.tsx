"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/brand/logo";
import { DesktopNav } from "@/components/navigation/desktop-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";

gsap.registerPlugin(ScrollTrigger);

type SiteHeaderProps = {
  /**
   * Set this when the header sits over a dark hero/image.
   *
   * The header starts transparent and uses the light logo/navigation.
   * Once the user scrolls, it transitions into its compact light surface.
   */
  dark?: boolean;
};

export function SiteHeader({
  dark = false,
}: SiteHeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    const shell = shellRef.current;
    const logo = logoRef.current;
    const background = backgroundRef.current;

    if (!header || !shell || !logo || !background) {
      return;
    }

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 1024px)",
        mobile: "(max-width: 1023px)",
        reducedMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, mobile, reducedMotion } =
          context.conditions as {
            desktop: boolean;
            mobile: boolean;
            reducedMotion: boolean;
          };

        /*
         * Reduced-motion mode:
         *
         * We still provide a useful sticky header state, but remove
         * the physical choreography and keep the transition instant.
         */
        if (reducedMotion) {
          const trigger = ScrollTrigger.create({
            start: "top top",
            end: "max",
            onUpdate: (self) => {
              const nextScrolled = self.scroll() > 32;

              setScrolled((current) =>
                current === nextScrolled ? current : nextScrolled
              );
            },
          });

          return () => {
            trigger.kill();
          };
        }

        /*
         * Desktop:
         *
         * The header begins as part of the hero composition.
         *
         * As the visitor moves down the page:
         * - the header gets slightly smaller
         * - the surface becomes visible
         * - the corners become more defined
         * - the logo subtly scales
         *
         * This is deliberately restrained. The header should feel like
         * it is physically settling into the page rather than animating
         * for the sake of animation.
         */
        if (desktop) {
          gsap.set(shell, {
            y: 0,
            width: "100%",
            borderRadius: 0,
          });

          gsap.set(background, {
            opacity: 0,
            scale: 0.98,
          });

          gsap.set(logo, {
            scale: 1,
            transformOrigin: "left center",
          });

          const trigger = ScrollTrigger.create({
            start: "top+=40 top",
            end: "top+=180 top",

            onUpdate: (self) => {
              const progress = self.progress;
              const nextScrolled = self.scroll() > 40;

              setScrolled((current) =>
                current === nextScrolled ? current : nextScrolled
              );

              gsap.set(shell, {
                width: `${100 - progress * 2}%`,
                y: progress * 8,
                borderRadius: `${progress * 999}px`,
              });

              gsap.set(background, {
                opacity: progress * 0.96,
                scale: 0.98 + progress * 0.02,
              });

              gsap.set(logo, {
                scale: 1 - progress * 0.04,
              });
            },
          });

          return () => {
            trigger.kill();
          };
        }

        /*
         * Mobile:
         *
         * We intentionally keep the mobile header simpler.
         * The full-screen mobile menu already owns the major motion
         * experience, so the closed header should remain calm.
         */
        if (mobile) {
          const trigger = ScrollTrigger.create({
            start: "top+=24 top",
            end: "max",

            onUpdate: (self) => {
              const nextScrolled = self.scroll() > 24;

              setScrolled((current) =>
                current === nextScrolled ? current : nextScrolled
              );

              gsap.to(background, {
                opacity: nextScrolled ? 0.96 : 0,
                duration: 0.45,
                ease: "power2.out",
                overwrite: true,
              });
            },
          });

          return () => {
            trigger.kill();
          };
        }
      }
    );

    return () => {
      mm.revert();
    };
  }, []);

  /*
   * Keep the header accessible when it is used over a dark hero.
   *
   * Desktop navigation receives the same visual state so the entire
   * navigation system transitions together.
   */
  const isDarkSurface = dark && !scrolled;

  return (
    <header
      ref={headerRef}
      className="pointer-events-none fixed inset-x-0 top-0 z-[100]"
    >
      <div
        ref={shellRef}
        className="
          pointer-events-auto
          relative
          mx-auto
          flex
          min-h-[76px]
          items-center
          justify-between
          px-[var(--page-padding)]
          py-4
          lg:min-h-[88px]
          lg:px-[clamp(2rem,4vw,4.5rem)]
        "
      >
        {/* ---------------------------------------------------------------- */}
        {/* Header surface                                                    */}
        {/* ---------------------------------------------------------------- */}

        <div
          ref={backgroundRef}
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            -z-10
            border
            border-black/[0.06]
            bg-white/[0.94]
            shadow-[0_12px_50px_rgba(20,30,50,0.07)]
            backdrop-blur-xl
          "
          style={{
            opacity: scrolled ? 1 : 0,
          }}
        />

        {/* ---------------------------------------------------------------- */}
        {/* Desktop logo                                                      */}
        {/* ---------------------------------------------------------------- */}

        <div
          ref={logoRef}
          className="hidden origin-left lg:block"
        >
          <Logo dark={isDarkSurface} />
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Desktop navigation                                                 */}
        {/* ---------------------------------------------------------------- */}

        <DesktopNav
          scrolled={scrolled}
          dark={isDarkSurface}
        />

        {/* ---------------------------------------------------------------- */}
        {/* Mobile navigation                                                 */}
        {/* ---------------------------------------------------------------- */}

        <div className="w-full lg:hidden">
          <MobileNav dark={isDarkSurface} />
        </div>
      </div>
    </header>
  );
}

