"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

const sections = [
  {
    number: "01",
    title: "Information we collect",
    content: (
      <>
        <p>
          When you use the CareRify website or contact us, we
          may collect information that you choose to provide.
          This may include your name, email address, phone
          number, organization, professional information, and
          the contents of your message or inquiry.
        </p>

        <p>
          If you apply to join the CareRify healthcare network,
          additional information may be collected as part of
          the application process. The specific information
          requested will depend on the application process in
          effect at the time you apply.
        </p>

        <p>
          We may also collect limited technical information
          automatically when you use the website, such as
          browser type, device information, approximate
          location derived from technical data, pages visited,
          and information about how you interact with the site.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "How we use information",
    content: (
      <>
        <p>
          Information you provide may be used to respond to
          inquiries, evaluate staffing requests, communicate
          with healthcare professionals, process applications,
          improve our website, and operate CareRify&apos;s
          services and business.
        </p>

        <p>
          We may also use information where reasonably
          necessary to maintain website security, prevent
          misuse, comply with applicable legal obligations, or
          protect our rights and the rights of others.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Information sharing",
    content: (
      <>
        <p>
          CareRify does not intend to sell personal information
          submitted through this website.
        </p>

        <p>
          Information may be shared with service providers or
          other parties where reasonably necessary to operate
          the website, process submissions, provide requested
          services, maintain systems, or comply with applicable
          law.
        </p>

        <p>
          Where information is shared with service providers,
          we seek to use providers appropriate to the nature of
          the information and the services being provided.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Forms and communications",
    content: (
      <>
        <p>
          When you submit a form through the website, the
          information you provide may be used to respond to
          your request or inquiry.
        </p>

        <p>
          We may retain submitted information for as long as
          reasonably necessary for the purpose for which it was
          collected, for legitimate business purposes, or as
          required by applicable law.
        </p>

        <p>
          We will not use information submitted through a
          staffing or professional inquiry for unrelated
          marketing purposes without an appropriate legal basis
          or consent where required.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Cookies and analytics",
    content: (
      <>
        <p>
          The website may use cookies or similar technologies
          to support essential website functionality, understand
          website usage, and improve the experience.
        </p>

        <p>
          The technologies used and the choices available to
          visitors may change as the website evolves. Where
          consent is required for a particular technology, we
          will seek that consent in accordance with applicable
          requirements.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Data security",
    content: (
      <>
        <p>
          We take reasonable administrative, technical, and
          organizational measures to protect information in our
          care against unauthorized access, use, alteration,
          disclosure, or destruction.
        </p>

        <p>
          No method of transmitting or storing information over
          the internet can be guaranteed to be completely
          secure. For this reason, we cannot guarantee absolute
          security of information transmitted to us.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Your choices and rights",
    content: (
      <>
        <p>
          Depending on where you live and the circumstances in
          which your information was collected, you may have
          rights relating to your personal information. These
          may include rights to request access to, correction
          of, or deletion of certain information.
        </p>

        <p>
          If you have a privacy-related request or question,
          please contact CareRify using the contact information
          provided on this website.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Third-party websites",
    content: (
      <>
        <p>
          The CareRify website may contain links to websites or
          services operated by third parties. CareRify is not
          responsible for the privacy practices, content, or
          security of third-party websites.
        </p>

        <p>
          We encourage you to review the privacy policies of
          third-party websites before providing them with
          personal information.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Changes to this policy",
    content: (
      <>
        <p>
          This Privacy Policy may be updated from time to time
          to reflect changes to our practices, technology,
          services, or applicable requirements.
        </p>

        {/* <p>
          When changes are made, the updated version will be
          posted on this page with a revised effective date.
        </p> */}
      </>
    ),
  },
];

export function PrivacyPage() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
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
              <Eyebrow number="07" label="Privacy" />

              <h1 className="mt-8 max-w-5xl font-display text-[clamp(3.75rem,8vw,8rem)] font-medium leading-[0.9] tracking-[-0.055em] text-[#172033]">
                Your information
                <span className="block text-[#1B2D5B]">
                  matters.
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
                This Privacy Policy explains how CareRify
                handles information collected through this
                website.
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

      {/* Policy */}
      <section className="bg-white py-20 md:py-28 lg:py-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.42fr_1fr] lg:gap-24">
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
              <Eyebrow label="Privacy policy" />

              <p className="mt-6 max-w-xs text-sm leading-6 text-[#172033]/55">
                Please review this policy carefully. It is
                intended to explain our approach to information
                collected through the CareRify website.
              </p>
            </motion.aside>

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
                  CareRify respects the importance of personal
                  information and aims to handle information
                  responsibly, transparently, and in accordance
                  with applicable privacy requirements.
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
                  Questions about privacy?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[#172033]/65">
                  If you have questions about this Privacy Policy
                  or how your information is handled, please
                  contact us.
                </p>

                <a
                  href="/contact"
                  className="mt-6 inline-flex text-sm font-semibold text-[#1B2D5B] transition-opacity hover:opacity-60"
                >
                  Contact CareRify
                </a>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing */}
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
              Trust is built into
              <span className="block text-[#8FB39B]">
                every interaction.
              </span>
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  );
}