"use client";

import Link from "next/link";
import { useActionState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import {
submitContact,
type ContactState,
} from "@/app/actions/contact";
import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

const inquiryTypes = [
"General inquiry",
"Healthcare staffing",
"Joining the healthcare network",
"Other",
];

const reveal = {
hidden: {
opacity: 0,
y: 32,
},
visible: {
opacity: 1,
y: 0,
},
};

const viewport = {
once: true,
amount: 0.2,
};

const ease = [0.22, 1, 0.36, 1] as const;

const initialState: ContactState = {
success: false,
message: "",
};

function FieldError({
errors,
}: {
errors?: string[];
}) {
if (!errors?.length) {
return null;
}

return ( <p
   className="mt-2 text-sm text-red-700"
   role="alert"
 >
{errors[0]} </p>
);
}

export function ContactPage() {
const reducedMotion = useReducedMotion();

const [state, formAction, isPending] = useActionState(
submitContact,
initialState,
);

return (
<>
{/* ─────────────────────────────────────────
HERO
───────────────────────────────────────── */}

```
  <section className="relative overflow-hidden bg-[#F5EFE6]">
    <Container>
      <div className="grid min-h-[72vh] items-end gap-16 pb-20 pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28 lg:pt-40">
        <motion.div
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 40,
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
                  ease,
                }
          }
        >
          <Eyebrow number="06">Contact</Eyebrow>

          <h1 className="mt-8 max-w-5xl text-balance font-display text-[clamp(4rem,8.5vw,8.5rem)] font-medium leading-[0.9] tracking-[-0.055em] text-[#172033]">
            Let&apos;s start
            <span className="block text-[#1B2D5B]">
              a conversation.
            </span>
          </h1>
        </motion.div>

        <motion.div
          className="max-w-md pb-1 lg:justify-self-end"
          initial={
            reducedMotion
              ? false
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
                  delay: 0.18,
                  ease,
                }
          }
        >
          <p className="text-lg leading-8 text-[#172033]/70 md:text-xl">
            Whether you represent a healthcare organization,
            work in healthcare, or simply want to learn more,
            we&apos;re here to listen.
          </p>

          <div className="mt-8 h-px w-full bg-[#172033]/15" />

          <p className="mt-5 text-sm leading-6 text-[#172033]/55">
            CareRify serves healthcare staffing needs across
            Northern Ontario.
          </p>
        </motion.div>
      </div>
    </Container>

    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full border border-[#8FB39B]/30"
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              scale: 0.8,
            }
      }
      animate={
        reducedMotion
          ? undefined
          : {
              opacity: 1,
              scale: 1,
            }
      }
      transition={
        reducedMotion
          ? undefined
          : {
              duration: 1.2,
              delay: 0.3,
              ease,
            }
      }
    />
  </section>

  {/* ─────────────────────────────────────────
      TWO PATHWAYS
  ───────────────────────────────────────── */}

  <section className="bg-white py-24 md:py-32 lg:py-40">
    <Container>
      <motion.div
        variants={reveal}
        initial={reducedMotion ? false : "hidden"}
        whileInView={reducedMotion ? undefined : "visible"}
        viewport={viewport}
        transition={
          reducedMotion
            ? undefined
            : {
                duration: 0.8,
                ease,
              }
        }
      >
        <Eyebrow>Start here</Eyebrow>

        <div className="mt-8 max-w-3xl">
          <h2 className="font-display text-[clamp(2.75rem,5vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.045em] text-[#172033]">
            The right conversation
            <span className="text-[#1B2D5B]">
              {" "}
              starts here.
            </span>
          </h2>
        </div>
      </motion.div>

      <div className="mt-16 grid gap-0 border-t border-[#172033]/10 lg:grid-cols-2">
        {/* Organization */}

        <motion.div
          className="group border-b border-[#172033]/10 py-10 lg:border-b-0 lg:border-r lg:pr-16 lg:py-14"
          variants={reveal}
          initial={reducedMotion ? false : "hidden"}
          whileInView={
            reducedMotion ? undefined : "visible"
          }
          viewport={viewport}
          transition={
            reducedMotion
              ? undefined
              : {
                  duration: 0.8,
                  delay: 0.05,
                  ease,
                }
          }
        >
          <span className="text-sm font-medium uppercase tracking-[0.16em] text-[#172033]/45">
            For healthcare organizations
          </span>

          <h3 className="mt-5 max-w-xl font-display text-3xl font-medium tracking-[-0.035em] text-[#172033] md:text-4xl">
            Need staffing support?
          </h3>

          <p className="mt-5 max-w-lg text-base leading-7 text-[#172033]/65">
            Tell us what your organization needs and start a
            conversation about the staffing support that may
            be right for you.
          </p>

          <Link
            href="/request-staffing"
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#1B2D5B]"
          >
            Request staffing

            <Arrow
              direction="right"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

        {/* Professional */}

        <motion.div
          className="group py-10 lg:pl-16 lg:py-14"
          variants={reveal}
          initial={reducedMotion ? false : "hidden"}
          whileInView={
            reducedMotion ? undefined : "visible"
          }
          viewport={viewport}
          transition={
            reducedMotion
              ? undefined
              : {
                  duration: 0.8,
                  delay: 0.15,
                  ease,
                }
          }
        >
          <span className="text-sm font-medium uppercase tracking-[0.16em] text-[#172033]/45">
            For healthcare professionals
          </span>

          <h3 className="mt-5 max-w-xl font-display text-3xl font-medium tracking-[-0.035em] text-[#172033] md:text-4xl">
            Looking for your next opportunity?
          </h3>

          <p className="mt-5 max-w-lg text-base leading-7 text-[#172033]/65">
            Introduce yourself, share your experience, and
            learn more about becoming part of the CareRify
            healthcare network.
          </p>

          <Link
            href="/for-healthcare-professionals"
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#1B2D5B]"
          >
            Join our healthcare network

            <Arrow
              direction="right"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </Container>
  </section>

  {/* ─────────────────────────────────────────
      GENERAL CONTACT FORM
  ───────────────────────────────────────── */}

  <section className="bg-[#F5EFE6] py-24 md:py-32 lg:py-40">
    <Container>
      <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
        <motion.div
          variants={reveal}
          initial={reducedMotion ? false : "hidden"}
          whileInView={
            reducedMotion ? undefined : "visible"
          }
          viewport={viewport}
          transition={
            reducedMotion
              ? undefined
              : {
                  duration: 0.8,
                  ease,
                }
          }
        >
          <Eyebrow number="01">General inquiry</Eyebrow>

          <h2 className="mt-8 max-w-lg font-display text-[clamp(2.75rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.045em] text-[#172033]">
            Have something
            <span className="block text-[#1B2D5B]">
              else in mind?
            </span>
          </h2>

          <p className="mt-7 max-w-md text-base leading-7 text-[#172033]/65">
            Send us a message and we&apos;ll make sure it gets
            to the right place.
          </p>

          <div className="mt-12 border-t border-[#172033]/15 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#172033]/45">
              Prefer email?
            </p>

            <a
              href="mailto:hello@carerify.example"
              className="mt-2 inline-block text-base font-medium text-[#1B2D5B] transition-opacity hover:opacity-65"
            >
              hello@carerify.example
            </a>

            <p className="mt-2 text-xs leading-5 text-[#172033]/45">
              Replace this placeholder with the official
              CareRify contact address before launch.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={reveal}
          initial={reducedMotion ? false : "hidden"}
          whileInView={
            reducedMotion ? undefined : "visible"
          }
          viewport={viewport}
          transition={
            reducedMotion
              ? undefined
              : {
                  duration: 0.9,
                  delay: 0.1,
                  ease,
                }
          }
        >
          <form
            action={formAction}
            className="border-t border-[#172033]/15"
          >
            {/* Screen-reader submission status */}

            <div
              aria-live="polite"
              className="sr-only"
            >
              {state.message}
            </div>

            {/* Name */}

            <div className="border-b border-[#172033]/15 py-7">
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#172033]/50"
              >
                Your name
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-invalid={Boolean(
                  state.errors?.name,
                )}
                aria-describedby={
                  state.errors?.name
                    ? "contact-name-error"
                    : undefined
                }
                placeholder="Enter your name"
                className="mt-4 w-full border-0 bg-transparent p-0 text-lg text-[#172033] outline-none placeholder:text-[#172033]/30 focus:ring-0"
              />

              {state.errors?.name ? (
                <div id="contact-name-error">
                  <FieldError
                    errors={state.errors.name}
                  />
                </div>
              ) : null}
            </div>

            {/* Email */}

            <div className="border-b border-[#172033]/15 py-7">
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#172033]/50"
              >
                Email address
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={Boolean(
                  state.errors?.email,
                )}
                aria-describedby={
                  state.errors?.email
                    ? "contact-email-error"
                    : undefined
                }
                placeholder="you@example.com"
                className="mt-4 w-full border-0 bg-transparent p-0 text-lg text-[#172033] outline-none placeholder:text-[#172033]/30 focus:ring-0"
              />

              {state.errors?.email ? (
                <div id="contact-email-error">
                  <FieldError
                    errors={state.errors.email}
                  />
                </div>
              ) : null}
            </div>

            {/* Organization */}

            <div className="border-b border-[#172033]/15 py-7">
              <label
                htmlFor="contact-organization"
                className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#172033]/50"
              >
                Organization

                <span className="ml-2 font-normal normal-case tracking-normal text-[#172033]/35">
                  Optional
                </span>
              </label>

              <input
                id="contact-organization"
                name="organization"
                type="text"
                autoComplete="organization"
                aria-invalid={Boolean(
                  state.errors?.organization,
                )}
                aria-describedby={
                  state.errors?.organization
                    ? "contact-organization-error"
                    : undefined
                }
                placeholder="Organization name"
                className="mt-4 w-full border-0 bg-transparent p-0 text-lg text-[#172033] outline-none placeholder:text-[#172033]/30 focus:ring-0"
              />

              {state.errors?.organization ? (
                <div id="contact-organization-error">
                  <FieldError
                    errors={state.errors.organization}
                  />
                </div>
              ) : null}
            </div>

            {/* Inquiry type */}

            <div className="border-b border-[#172033]/15 py-7">
              <label
                htmlFor="contact-type"
                className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#172033]/50"
              >
                What can we help with?
              </label>

              <select
                id="contact-type"
                name="inquiryType"
                defaultValue=""
                required
                aria-invalid={Boolean(
                  state.errors?.inquiryType,
                )}
                aria-describedby={
                  state.errors?.inquiryType
                    ? "contact-type-error"
                    : undefined
                }
                className="mt-4 w-full cursor-pointer border-0 bg-transparent p-0 text-lg text-[#172033] outline-none focus:ring-0"
              >
                <option value="" disabled>
                  Select an inquiry type
                </option>

                {inquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              {state.errors?.inquiryType ? (
                <div id="contact-type-error">
                  <FieldError
                    errors={state.errors.inquiryType}
                  />
                </div>
              ) : null}
            </div>

            {/* Message */}

            <div className="border-b border-[#172033]/15 py-7">
              <label
                htmlFor="contact-message"
                className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#172033]/50"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                aria-invalid={Boolean(
                  state.errors?.message,
                )}
                aria-describedby={
                  state.errors?.message
                    ? "contact-message-error"
                    : undefined
                }
                placeholder="Tell us a little about what you have in mind..."
                className="mt-4 w-full resize-none border-0 bg-transparent p-0 text-lg leading-7 text-[#172033] outline-none placeholder:text-[#172033]/30 focus:ring-0"
              />

              {state.errors?.message ? (
                <div id="contact-message-error">
                  <FieldError
                    errors={state.errors.message}
                  />
                </div>
              ) : null}
            </div>

            {/* Consent */}

            <div className="py-7">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  aria-invalid={Boolean(
                    state.errors?.consent,
                  )}
                  aria-describedby={
                    state.errors?.consent
                      ? "contact-consent-error"
                      : undefined
                  }
                  className="mt-1 h-4 w-4 shrink-0 rounded-sm border-[#172033]/30 text-[#1B2D5B] focus:ring-[#1B2D5B]"
                />

                <span className="text-sm leading-6 text-[#172033]/60">
                  I understand that the information I provide
                  may be used by CareRify to respond to my
                  inquiry.
                </span>
              </label>

              {state.errors?.consent ? (
                <div id="contact-consent-error">
                  <FieldError
                    errors={state.errors.consent}
                  />
                </div>
              ) : null}
            </div>

            {/* Submission feedback */}

            {state.message ? (
              <div
                className={`mb-6 border px-4 py-4 text-sm leading-6 ${
                  state.success
                    ? "border-[#8FB39B]/50 bg-[#E8F0EA] text-[#172033]"
                    : "border-red-900/15 bg-red-50 text-red-800"
                }`}
                role={
                  state.success
                    ? "status"
                    : "alert"
                }
              >
                {state.message}
              </div>
            ) : null}

            {/* Submit */}

            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-xs leading-5 text-[#172033]/45">
                We&apos;ll use your information only to respond
                to your inquiry and provide the appropriate
                next step.
              </p>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                arrow={!isPending}
                disabled={isPending}
              >
                {isPending
                  ? "Sending..."
                  : "Send message"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </Container>
  </section>

  {/* ─────────────────────────────────────────
      CONTACT DETAILS
  ───────────────────────────────────────── */}

  <section className="bg-white py-24 md:py-32">
    <Container>
      <motion.div
        className="grid gap-12 border-t border-[#172033]/10 pt-8 md:grid-cols-3 md:gap-8"
        variants={reveal}
        initial={reducedMotion ? false : "hidden"}
        whileInView={
          reducedMotion ? undefined : "visible"
        }
        viewport={viewport}
        transition={
          reducedMotion
            ? undefined
            : {
                duration: 0.8,
                ease,
              }
        }
      >
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
            Email
          </span>

          <a
            href="mailto:hello@carerify.example"
            className="mt-3 block text-base font-medium text-[#1B2D5B] transition-opacity hover:opacity-65"
          >
            hello@carerify.example
          </a>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
            Phone
          </span>

          <a
            href="tel:+10000000000"
            className="mt-3 block text-base font-medium text-[#1B2D5B] transition-opacity hover:opacity-65"
          >
            +1 (000) 000-0000
          </a>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#172033]/40">
            Location
          </span>

          <p className="mt-3 text-base font-medium text-[#172033]">
            Northern Ontario, Canada
          </p>
        </div>
      </motion.div>
    </Container>
  </section>

  {/* ─────────────────────────────────────────
      CLOSING CTA
  ───────────────────────────────────────── */}

  <section className="relative overflow-hidden bg-[#1B2D5B] py-28 text-white md:py-36 lg:py-44">
    <Container>
      <motion.div
        className="relative z-10 max-w-4xl"
        variants={reveal}
        initial={reducedMotion ? false : "hidden"}
        whileInView={
          reducedMotion ? undefined : "visible"
        }
        viewport={viewport}
        transition={
          reducedMotion
            ? undefined
            : {
                duration: 0.9,
                ease,
              }
        }
      >
        <Eyebrow
          className="text-white/50"
        >CareRify</Eyebrow>

        <h2 className="mt-8 max-w-4xl font-display text-[clamp(3.25rem,7vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.055em]">
          Good care starts with
          <span className="block text-[#8FB39B]">
            good conversations.
          </span>
        </h2>

        <div className="mt-10">
          <Link
            href="/request-staffing"
            className="group inline-flex items-center gap-4 text-base font-medium"
          >
            <span className="border-b border-white/30 pb-1 transition-colors group-hover:border-white">
              Talk to CareRify
            </span>

            <Arrow
              direction="right"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </motion.div>
    </Container>

    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-36 -right-24 h-[30rem] w-[30rem] rounded-full border border-white/10"
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              scale: 0.85,
            }
      }
      whileInView={
        reducedMotion
          ? undefined
          : {
              opacity: 1,
              scale: 1,
            }
      }
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={
        reducedMotion
          ? undefined
          : {
              duration: 1.2,
              ease,
            }
      }
    />
  </section>
</>

);
}
