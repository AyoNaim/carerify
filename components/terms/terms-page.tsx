"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

const sections = [
  {
    number: "01",
    title: "About these terms",
    content: (
      <>
        <p>
          These Terms of Use govern your access to and use of
          the CareRify website and its publicly available
          content.
        </p>

        <p>
          By accessing or using the website, you agree to use
          it in accordance with these terms and all applicable
          laws and regulations.
        </p>

        <p>
          If you do not agree with these terms, please do not
          use the website.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "About CareRify",
    content: (
      <>
        <p>
          CareRify is a healthcare staffing company serving
          healthcare organizations and professionals in
          Northern Ontario, Canada.
        </p>

        <p>
          The website provides information about CareRify,
          its staffing services, professional network, and ways
          to contact the company.
        </p>

        <p>
          Information presented on the website may change as
          CareRify&apos;s services, operations, and offerings
          develop.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Website information",
    content: (
      <>
        <p>
          We make reasonable efforts to keep information on the
          website useful and current. However, website content
          is provided for general informational purposes and
          should not be treated as a guarantee that a particular
          service, staffing arrangement, role, or opportunity
          will be available.
        </p>

        <p>
          Nothing on the website creates an employment,
          staffing, contractual, professional, or other
          relationship unless and until the appropriate
          agreement has been entered into separately.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Staffing requests and applications",
    content: (
      <>
        <p>
          Submitting a staffing request, contact form, or
          professional application does not guarantee that
          CareRify will provide staffing services, accept an
          application, offer employment, or enter into another
          arrangement.
        </p>

        <p>
          CareRify may review submitted information and contact
          you for additional information where appropriate.
          Decisions regarding staffing relationships,
          professional opportunities, and service arrangements
          are made separately from the submission of an online
          form.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Acceptable use",
    content: (
      <>
        <p>
          You agree to use the website only for lawful and
          legitimate purposes.
        </p>

        <p>You must not:</p>

        <ul className="list-disc space-y-3 pl-5">
          <li>
            use the website in a way that violates applicable
            laws or regulations;
          </li>
          <li>
            attempt to gain unauthorized access to the website,
            its systems, or another user&apos;s information;
          </li>
          <li>
            interfere with the operation, security, or
            availability of the website;
          </li>
          <li>
            submit information that you know to be false,
            misleading, fraudulent, or intended to impersonate
            another person; or
          </li>
          <li>
            use automated systems to access or interact with
            the website in a manner that could reasonably
            interfere with its operation.
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "06",
    title: "Your submissions",
    content: (
      <>
        <p>
          When you submit information through the website, you
          are responsible for ensuring that the information is
          accurate and that you have the right to provide it.
        </p>

        <p>
          You should not submit confidential information about
          another person unless you are authorized to provide
          that information for the relevant purpose.
        </p>

        <p>
          Information submitted through the website will be
          handled in accordance with our{" "}
          <Link
            href="/privacy"
            className="font-medium text-[#1B2D5B] underline decoration-[#1B2D5B]/30 underline-offset-4 transition-opacity hover:opacity-60"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Intellectual property",
    content: (
      <>
        <p>
          Unless otherwise indicated, the content of the
          CareRify website—including its text, branding,
          graphics, design, images, logos, and other materials—
          is owned by or licensed to CareRify and may be
          protected by applicable intellectual property laws.
        </p>

        <p>
          You may view and use the website for personal or
          legitimate business purposes. You may not reproduce,
          modify, distribute, publish, sell, or commercially
          exploit website content without appropriate
          authorization.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Third-party links and services",
    content: (
      <>
        <p>
          The website may contain links to third-party websites,
          platforms, or services for convenience or additional
          information.
        </p>

        <p>
          CareRify does not control third-party websites and is
          not responsible for their content, availability,
          security, or practices. Your use of third-party
          services is subject to the terms and policies of
          those providers.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Availability and disclaimers",
    content: (
      <>
        <p>
          We aim to keep the website available and functioning,
          but we do not guarantee that it will always be
          uninterrupted, error-free, secure, or available at
          every time or location.
        </p>

        <p>
          To the extent permitted by applicable law, website
          content and functionality are provided on an
          &quot;as available&quot; basis without guarantees beyond
          those that cannot lawfully be excluded.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Limitation of liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law,
          CareRify and its representatives will not be
          responsible for losses or damages arising from your
          use of, or inability to use, the website or reliance
          on information made available through it.
        </p>

        <p>
          Nothing in these terms is intended to exclude or limit
          liability that cannot legally be excluded or limited
          under applicable law.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Changes to these terms",
    content: (
      <>
        <p>
          We may update these Terms of Use from time to time to
          reflect changes to the website, our services, or
          applicable requirements.
        </p>

        <p>
          When changes are made, the updated version will be
          posted on this page with a revised effective date.
        </p>

        <p>
          Your continued use of the website after updated terms
          are posted constitutes your acceptance of the updated
          terms to the extent permitted by applicable law.
        </p>
      </>
    ),
  },
  {
    number: "12",
    title: "Governing law",
    content: (
      <>
        <p>
          These Terms of Use are intended to be governed by the
          laws applicable in the jurisdiction in which CareRify
          operates, without regard to conflict-of-law
          principles.
        </p>

        <p>
          The specific governing law and jurisdiction should be
          confirmed by CareRify before these terms are published
          as the final legal version.
        </p>
      </>
    ),
  },
];

export function TermsPage() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      {/* ─────────────────────────────────────────
          HERO
      ───────────────────────────────────────── */}

      <section className="relative overflow-hidden bg-[#F5EFE6]">
        <Container>
          <div className="grid min-h-[58vh] items-end gap-12 pb-20 pt-32 md:pb-24 lg:grid-cols-[1fr_0.55fr] lg:pb-28 lg:pt-40">
            <motion.div
              initial={
                reducedMotion
                  ? undefined
                  : {
                      opacity: 0,
                      y: 36,
                    }
              }
              animate={
                reducedMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              transition={
                reducedMotion
                  ? undefined
                  : {
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
            >
              <Eyebrow number="08" label="Terms" />

              <h1 className="mt-8 max-w-5xl font-display text-[clamp(3.75rem,8vw,8rem)] font-medium leading-[0.9] tracking-[-0.055em] text-[#172033]">
                Clear terms.
                <span className="block text-[#1B2D5B]">
                  Clear expectations.
                </span>
              </h1>
            </motion.div>

            <motion.div
              className="max-w-md lg:justify-self-end"
              initial={
                reducedMotion
                  ? undefined
                  : {
                      opacity: 0,
                      y: 24,
                    }
              }
              animate={
                reducedMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              transition={
                reducedMotion
                  ? undefined
                  : {
                      duration: 0.8,
                      delay: 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
            >
              <p className="text-lg leading-8 text-[#172033]/70">
                These terms explain the basic rules that apply
                when you use the CareRify website.
              </p>

              <div className="mt-8 h-px bg-[#172033]/15" />

              <p className="mt-5 text-sm leading-6 text-[#172033]/50">
                {/* Effective date: [Insert effective date] */}
              </p>
            </motion.div>
          </div>
        </Container>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -right-20 h-64 w-64 rounded-full border border-[#8FB39B]/30"
        />
      </section>

      {/* ─────────────────────────────────────────
          TERMS
      ───────────────────────────────────────── */}

      <section className="bg-white py-20 md:py-28 lg:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.42fr_1fr] lg:gap-24">
            {/* Context */}
            <motion.aside
              initial={
                reducedMotion
                  ? undefined
                  : {
                      opacity: 0,
                      y: 24,
                    }
              }
              whileInView={
                reducedMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={
                reducedMotion
                  ? undefined
                  : {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
              className="lg:sticky lg:top-32 lg:self-start"
            >
              <Eyebrow label="Terms of use" />

              <p className="mt-6 max-w-xs text-sm leading-6 text-[#172033]/55">
                These terms apply to your use of the publicly
                available CareRify website.
              </p>

              <Link
                href="/privacy"
                className="mt-8 inline-flex text-sm font-semibold text-[#1B2D5B] transition-opacity hover:opacity-60"
              >
                Read our Privacy Policy
              </Link>
            </motion.aside>

            {/* Content */}
            <div>
              <motion.div
                initial={
                  reducedMotion
                    ? undefined
                    : {
                        opacity: 0,
                        y: 24,
                      }
                }
                whileInView={
                  reducedMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={
                  reducedMotion
                    ? undefined
                    : {
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      }
                }
                className="border-t border-[#172033]/10 pb-16 pt-8"
              >
                <p className="max-w-3xl text-lg leading-8 text-[#172033]/75 md:text-xl md:leading-9">
                  We want the CareRify website to be straightforward
                  to use and straightforward to understand. These
                  terms set out the basic expectations for everyone
                  who uses it.
                </p>
              </motion.div>

              <div>
                {sections.map((section, index) => (
                  <motion.section
                    key={section.number}
                    initial={
                      reducedMotion
                        ? undefined
                        : {
                            opacity: 0,
                            y: 28,
                          }
                    }
                    whileInView={
                      reducedMotion
                        ? undefined
                        : {
                            opacity: 1,
                            y: 0,
                          }
                    }
                    viewport={{
                      once: true,
                      amount: 0.12,
                    }}
                    transition={
                      reducedMotion
                        ? undefined
                        : {
                            duration: 0.7,
                            delay: index * 0.025,
                            ease: [0.22, 1, 0.36, 1],
                          }
                    }
                    className="border-t border-[#172033]/10 py-10 md:py-12"
                  >
                    <div className="grid gap-6 md:grid-cols-[80px_0.7fr_1.3fr] md:gap-8">
                      <span className="text-xs font-semibold tracking-[0.16em] text-[#1B2D5B]/55">
                        {section.number}
                      </span>

                      <h2 className="font-display text-2xl font-medium leading-tight tracking-[-0.025em] text-[#172033] md:text-3xl">
                        {section.title}
                      </h2>

                      <div className="space-y-5 text-base leading-7 text-[#172033]/65">
                        {section.content}
                      </div>
                    </div>
                  </motion.section>
                ))}
              </div>

              {/* Contact */}
              <motion.div
                initial={
                  reducedMotion
                    ? undefined
                    : {
                        opacity: 0,
                        y: 28,
                      }
                }
                whileInView={
                  reducedMotion
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={
                  reducedMotion
                    ? undefined
                    : {
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      }
                }
                className="border-t border-[#172033]/10 pt-10"
              >
                <h2 className="font-display text-2xl font-medium tracking-[-0.025em] text-[#172033] md:text-3xl">
                  Questions about these terms?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[#172033]/65">
                  If you have a question about these Terms of
                  Use or how they apply to your use of the
                  website, please get in touch.
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex text-sm font-semibold text-[#1B2D5B] transition-opacity hover:opacity-60"
                >
                  Contact CareRify
                </Link>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────
          CLOSING
      ───────────────────────────────────────── */}

      <section className="bg-[#1B2D5B] py-24 text-white md:py-32">
        <Container>
          <motion.div
            initial={
              reducedMotion
                ? undefined
                : {
                    opacity: 0,
                    y: 32,
                  }
            }
            whileInView={
              reducedMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={
              reducedMotion
                ? undefined
                : {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
            className="max-w-3xl"
          >
            <Eyebrow
              label="CareRify"
              className="text-white/50"
            />

            <p className="mt-7 font-display text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.045em]">
              Straightforward from
              <span className="block text-[#8FB39B]">
                the start.
              </span>
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
