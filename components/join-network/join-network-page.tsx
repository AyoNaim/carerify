"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import type { JoinNetworkState } from "@/app/actions/join-network";
import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ImageReveal } from "@/components/motion/image-reveal";
import { TextReveal } from "@/components/motion/text-reveal";

const roles = [
  {
    value: "PSW",
    label: "Personal Support Worker (PSW)",
  },
  {
    value: "RPN",
    label: "Registered Practical Nurse (RPN)",
  },
  {
    value: "RN",
    label: "Registered Nurse (RN)",
  },
  {
    value: "Dietary & Support Staff",
    label: "Dietary & Support Staff",
  },
  {
    value: "Other",
    label: "Other",
  },
];

const experienceLevels = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
];

const inputClassName =
  "mt-2 w-full rounded-none border-0 border-b border-[#172033]/20 bg-transparent px-0 py-3 text-[15px] text-[#172033] outline-none transition-colors placeholder:text-[#172033]/40 focus:border-[#1B2D5B]";

const selectClassName =
  "mt-2 w-full appearance-none rounded-none border-0 border-b border-[#172033]/20 bg-transparent px-0 py-3 text-[15px] text-[#172033] outline-none transition-colors focus:border-[#1B2D5B]";

const textareaClassName =
  "mt-2 min-h-[130px] w-full resize-y rounded-none border border-[#172033]/15 bg-white/50 px-4 py-3 text-[15px] text-[#172033] outline-none transition-colors placeholder:text-[#172033]/40 focus:border-[#1B2D5B]";

const smoothEase: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

function FieldLabel({
  children,
  required = false,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#172033]/70">
      {children}
      {required && <span className="ml-1 text-[#1B2D5B]">*</span>}
    </label>
  );
}

function SectionNumber({ number }: { number: string }) {
  return (
    <span className="text-[12px] font-semibold tracking-[0.16em] text-[#1B2D5B]/60">
      {number}
    </span>
  );
}

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) {
    return null;
  }

  return (
    <p className="mt-2 text-xs leading-5 text-red-700" role="alert">
      {errors[0]}
    </p>
  );
}

const initialState: JoinNetworkState = {
  success: false,
  message: "",
};

export function JoinNetworkPage() {
  const shouldReduceMotion = useReducedMotion();

  const [state, setState] = useState<JoinNetworkState>(initialState);
  const [isPending, setIsPending] = useState(false);

  const errors = state.errors ?? {};

  const fadeUp = {
    initial: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.7,
      ease: smoothEase,
    },
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsPending(true);
    setState(initialState);

    try {
      const formData = new FormData(event.currentTarget);

      const response = await fetch("/api/join-network", {
        method: "POST",
        body: formData,
      });

      const result: JoinNetworkState = await response.json();

      if (!response.ok) {
        setState({
          success: false,
          message:
            result.message ||
            "We couldn't submit your introduction right now. Please try again.",
          errors: result.errors,
        });

        return;
      }

      setState({
        success: true,
        message:
          result.message ||
          "We've received your introduction. Thank you for reaching out.",
      });
    } catch (error) {
      console.error(
        "Failed to submit healthcare professional application:",
        error,
      );

      setState({
        success: false,
        message:
          "We couldn't submit your introduction right now. Please try again.",
      });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F5EFE6]">
        <div className="mx-auto grid min-h-[78vh] max-w-[1440px] items-end gap-12 px-6 pb-16 pt-36 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:pb-20 lg:pt-40">
          <div className="max-w-[760px]">
            <motion.div {...fadeUp}>
              <Eyebrow>Join Our Healthcare Network</Eyebrow>
            </motion.div>

            <div className="mt-7">
              <TextReveal className="max-w-[760px] text-[clamp(3.2rem,7vw,7rem)] font-medium leading-[0.92] tracking-[-0.065em] text-[#172033]">
                Bring your work where it matters.
              </TextReveal>
            </div>

            <motion.p
              {...fadeUp}
              className="mt-8 max-w-[570px] text-base leading-7 text-[#172033]/65 sm:text-lg sm:leading-8"
            >
              Tell us who you are, what you do, and where your experience can
              contribute. We’re building a healthcare network around people,
              not profiles.
            </motion.p>

            <motion.div {...fadeUp} className="mt-10">
              <a
                href="#application"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-[#172033]"
              >
                Start your introduction
                <span className="transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </a>
            </motion.div>
          </div>

          <div className="relative">
            <ImageReveal className="aspect-[4/5] w-full max-w-[560px] lg:ml-auto">
              <img
                src="/images/professional-network.jpg"
                alt="Healthcare professional in a calm care environment"
                className="h-full w-full object-cover"
              />
            </ImageReveal>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.45,
                duration: shouldReduceMotion ? 0 : 0.7,
                ease: smoothEase,
              }}
              className="absolute -bottom-5 -left-3 max-w-[250px] bg-[#1B2D5B] p-5 text-[#F5EFE6] sm:-left-8 sm:p-6"
            >
              <p className="text-sm leading-6">
                Your experience, your perspective, your work — it all matters.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <motion.div
            {...fadeUp}
            className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"
          >
            <div>
              <Eyebrow>A different kind of network</Eyebrow>
            </div>

            <div className="max-w-[800px]">
              <h2 className="text-[clamp(2.3rem,4.5vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#172033]">
                You are not a profile.
              </h2>

              <p className="mt-7 max-w-[680px] text-base leading-7 text-[#172033]/60 sm:text-lg sm:leading-8">
                CareRify is not a marketplace where professionals compete for
                attention. We want to understand the people behind the
                experience — what you do, where you have worked, and the kind
                of care you bring to a team.
              </p>

              <div className="mt-12 grid gap-8 border-t border-[#172033]/10 pt-8 sm:grid-cols-3">
                {[
                  {
                    number: "01",
                    title: "Introduce yourself",
                    text: "Start with the person behind the profession.",
                  },
                  {
                    number: "02",
                    title: "Share your experience",
                    text: "Tell us about the work you know and the care you provide.",
                  },
                  {
                    number: "03",
                    title: "Stay connected",
                    text: "We’ll learn where your experience may fit.",
                  },
                ].map((item) => (
                  <div key={item.number}>
                    <span className="text-xs font-semibold tracking-[0.16em] text-[#1B2D5B]/50">
                      {item.number}
                    </span>

                    <h3 className="mt-4 text-lg font-medium text-[#172033]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#172033]/55">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application */}
      <section id="application" className="scroll-mt-24 bg-[#E8F0EA]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <AnimatePresence mode="wait">
            {!state.success ? (
              <motion.div
                key="form"
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                }}
              >
                <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
                  {/* Form intro */}
                  <div className="lg:sticky lg:top-28 lg:self-start">
                    <Eyebrow>Your introduction</Eyebrow>

                    <h2 className="mt-6 max-w-[420px] text-[clamp(2.4rem,4vw,4rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#172033]">
                      Let’s get to know you.
                    </h2>

                    <p className="mt-6 max-w-[390px] text-sm leading-6 text-[#172033]/60">
                      A few details are enough to start. Tell us about your
                      professional experience and where you would like to
                      contribute.
                    </p>

                    <div className="mt-10 border-l border-[#1B2D5B]/30 pl-5">
                      <p className="text-sm leading-6 text-[#172033]/65">
                        Fields marked with{" "}
                        <span className="text-[#1B2D5B]">*</span> are required.
                      </p>
                    </div>
                  </div>

                  {/* Form */}
                  <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="bg-[#F5EFE6] px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-16"
                  >
                    {/* General submission error */}
                    {!state.success && state.message && !state.errors && (
                      <div
                        role="alert"
                        className="mb-10 border border-red-700/20 bg-red-50 px-5 py-4 text-sm leading-6 text-red-800"
                      >
                        {state.message}
                      </div>
                    )}

                    {/* About you */}
                    <div>
                      <div className="flex items-start gap-5">
                        <SectionNumber number="01" />

                        <div>
                          <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#172033]">
                            About you
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-[#172033]/55">
                            Start with the basics.
                          </p>
                        </div>
                      </div>

                      <div className="mt-10 grid gap-7 sm:grid-cols-2">
                        <div>
                          <FieldLabel required>First name</FieldLabel>

                          <input
                            required
                            name="firstName"
                            type="text"
                            autoComplete="given-name"
                            placeholder="Your first name"
                            className={inputClassName}
                            aria-invalid={Boolean(errors.firstName)}
                            aria-describedby={
                              errors.firstName ? "firstName-error" : undefined
                            }
                          />

                          <div id="firstName-error">
                            <FieldError errors={errors.firstName} />
                          </div>
                        </div>

                        <div>
                          <FieldLabel required>Last name</FieldLabel>

                          <input
                            required
                            name="lastName"
                            type="text"
                            autoComplete="family-name"
                            placeholder="Your last name"
                            className={inputClassName}
                            aria-invalid={Boolean(errors.lastName)}
                            aria-describedby={
                              errors.lastName ? "lastName-error" : undefined
                            }
                          />

                          <div id="lastName-error">
                            <FieldError errors={errors.lastName} />
                          </div>
                        </div>

                        <div>
                          <FieldLabel required>Email</FieldLabel>

                          <input
                            required
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            className={inputClassName}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={
                              errors.email ? "email-error" : undefined
                            }
                          />

                          <div id="email-error">
                            <FieldError errors={errors.email} />
                          </div>
                        </div>

                        <div>
                          <FieldLabel required>Phone</FieldLabel>

                          <input
                            required
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="Your phone number"
                            className={inputClassName}
                            aria-invalid={Boolean(errors.phone)}
                            aria-describedby={
                              errors.phone ? "phone-error" : undefined
                            }
                          />

                          <div id="phone-error">
                            <FieldError errors={errors.phone} />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <FieldLabel required>City / area</FieldLabel>

                          <input
                            required
                            name="location"
                            type="text"
                            autoComplete="address-level2"
                            placeholder="Where are you based?"
                            className={inputClassName}
                            aria-invalid={Boolean(errors.location)}
                            aria-describedby={
                              errors.location ? "location-error" : undefined
                            }
                          />

                          <div id="location-error">
                            <FieldError errors={errors.location} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="my-14 border-t border-[#172033]/10" />

                    {/* Professional background */}
                    <div>
                      <div className="flex items-start gap-5">
                        <SectionNumber number="02" />

                        <div>
                          <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#172033]">
                            Your professional background
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-[#172033]/55">
                            Tell us about the work you do.
                          </p>
                        </div>
                      </div>

                      <div className="mt-10 grid gap-7 sm:grid-cols-2">
                        <div>
                          <FieldLabel required>Professional role</FieldLabel>

                          <select
                            required
                            name="professionalRole"
                            defaultValue=""
                            className={selectClassName}
                            aria-invalid={Boolean(errors.professionalRole)}
                            aria-describedby={
                              errors.professionalRole
                                ? "professionalRole-error"
                                : undefined
                            }
                          >
                            <option value="" disabled>
                              Select your role
                            </option>

                            {roles.map((role) => (
                              <option key={role.value} value={role.value}>
                                {role.label}
                              </option>
                            ))}
                          </select>

                          <div id="professionalRole-error">
                            <FieldError errors={errors.professionalRole} />
                          </div>
                        </div>

                        <div>
                          <FieldLabel required>Experience</FieldLabel>

                          <select
                            required
                            name="yearsExperience"
                            defaultValue=""
                            className={selectClassName}
                            aria-invalid={Boolean(errors.yearsExperience)}
                            aria-describedby={
                              errors.yearsExperience
                                ? "yearsExperience-error"
                                : undefined
                            }
                          >
                            <option value="" disabled>
                              Years of experience
                            </option>

                            {experienceLevels.map((level) => (
                              <option key={level} value={level}>
                                {level}
                              </option>
                            ))}
                          </select>

                          <div id="yearsExperience-error">
                            <FieldError errors={errors.yearsExperience} />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <FieldLabel required>
                            Professional experience
                          </FieldLabel>

                          <textarea
                            required
                            name="experienceSummary"
                            placeholder="Tell us briefly about your experience, the environments you have worked in, or the kind of care you are experienced in providing."
                            className={textareaClassName}
                            aria-invalid={Boolean(errors.experienceSummary)}
                            aria-describedby={
                              errors.experienceSummary
                                ? "experienceSummary-error"
                                : undefined
                            }
                          />

                          <div id="experienceSummary-error">
                            <FieldError errors={errors.experienceSummary} />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <FieldLabel required>
                            Preferred area of work
                          </FieldLabel>

                          <input
                            required
                            name="preferredArea"
                            type="text"
                            placeholder="Where would you ideally like to contribute?"
                            className={inputClassName}
                            aria-invalid={Boolean(errors.preferredArea)}
                            aria-describedby={
                              errors.preferredArea
                                ? "preferredArea-error"
                                : undefined
                            }
                          />

                          <div id="preferredArea-error">
                            <FieldError errors={errors.preferredArea} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="my-14 border-t border-[#172033]/10" />

                    {/* Documents */}
                    <div>
                      <div className="flex items-start gap-5">
                        <SectionNumber number="03" />

                        <div>
                          <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#172033]">
                            Supporting document
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-[#172033]/55">
                            Give us another way to understand your professional
                            background.
                          </p>
                        </div>
                      </div>

                      <div className="mt-10">
                        <label className="block cursor-pointer border border-dashed border-[#172033]/20 bg-white/40 p-6 transition-colors hover:border-[#1B2D5B]/50">
                          <span className="block text-sm font-medium text-[#172033]">
                            Resume or CV
                          </span>

                          <span className="mt-1 block text-xs leading-5 text-[#172033]/50">
                            Optional. PDF, DOC, or DOCX. Maximum 5 MB.
                          </span>

                          <input
                            name="document"
                            type="file"
                            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            className="mt-5 block w-full text-sm text-[#172033]/60 file:mr-4 file:border-0 file:bg-[#1B2D5B] file:px-4 file:py-2.5 file:text-xs file:font-semibold file:text-white hover:file:bg-[#172033]"
                            aria-invalid={Boolean(errors.document)}
                            aria-describedby={
                              errors.document ? "document-error" : undefined
                            }
                          />
                        </label>

                        <div id="document-error">
                          <FieldError errors={errors.document} />
                        </div>

                        <p className="mt-4 text-xs leading-5 text-[#172033]/45">
                          Your document will be stored privately and used only
                          as part of your application.
                        </p>
                      </div>
                    </div>

                    <div className="my-14 border-t border-[#172033]/10" />

                    {/* Consent */}
                    <div>
                      <div className="flex items-start gap-5">
                        <SectionNumber number="04" />

                        <div>
                          <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#172033]">
                            Before you submit
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-[#172033]/55">
                            One final step.
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 space-y-6">
                        <div>
                          <label className="flex cursor-pointer gap-4">
                            <input
                              required
                              type="checkbox"
                              name="consent"
                              className="mt-1 h-4 w-4 shrink-0 accent-[#1B2D5B]"
                              aria-invalid={Boolean(errors.consent)}
                              aria-describedby={
                                errors.consent ? "consent-error" : undefined
                              }
                            />

                            <span className="text-sm leading-6 text-[#172033]/65">
                              I understand that the information I provide will
                              be used to respond to my application and
                              communicate with me about potential opportunities.
                            </span>
                          </label>

                          <div id="consent-error" className="ml-8">
                            <FieldError errors={errors.consent} />
                          </div>
                        </div>

                        <div>
                          <label className="flex cursor-pointer gap-4">
                            <input
                              required
                              type="checkbox"
                              name="privacyAcknowledged"
                              className="mt-1 h-4 w-4 shrink-0 accent-[#1B2D5B]"
                              aria-invalid={Boolean(
                                errors.privacyAcknowledged,
                              )}
                              aria-describedby={
                                errors.privacyAcknowledged
                                  ? "privacyAcknowledged-error"
                                  : undefined
                              }
                            />

                            <span className="text-sm leading-6 text-[#172033]/65">
                              I have read and acknowledge the{" "}
                              <Link
                                href="/privacy"
                                className="font-medium text-[#1B2D5B] underline underline-offset-4"
                              >
                                Privacy Policy
                              </Link>
                              .
                            </span>
                          </label>

                          <div
                            id="privacyAcknowledged-error"
                            className="ml-8"
                          >
                            <FieldError
                              errors={errors.privacyAcknowledged}
                            />
                          </div>
                        </div>
                      </div>

                      {state.message && !state.success && state.errors && (
                        <div
                          role="alert"
                          className="mt-8 border border-red-700/20 bg-red-50 px-5 py-4 text-sm leading-6 text-red-800"
                        >
                          {state.message}
                        </div>
                      )}

                      <div className="mt-9">
                        <Button
                          type="submit"
                          size="lg"
                          arrow={!isPending}
                          disabled={isPending}
                        >
                          {isPending
                            ? "Submitting application..."
                            : "Submit my introduction"}
                        </Button>
                      </div>

                      {isPending && (
                        <p
                          className="mt-4 text-xs leading-5 text-[#172033]/45"
                          aria-live="polite"
                        >
                          Please wait while we securely submit your
                          introduction.
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.65,
                  ease: smoothEase,
                }}
                className="mx-auto max-w-[760px] py-16 text-center lg:py-24"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#1B2D5B]/20 text-xl text-[#1B2D5B]">
                  ✓
                </span>

                <Eyebrow>Introduction received</Eyebrow>

                <h2 className="mt-6 text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.06em] text-[#172033]">
                  Thank you for introducing yourself.
                </h2>

                <p className="mx-auto mt-7 max-w-[570px] text-base leading-7 text-[#172033]/60 sm:text-lg sm:leading-8">
                  {state.message}
                </p>

                <p className="mx-auto mt-4 max-w-[520px] text-sm leading-6 text-[#172033]/50">
                  We’ll use the contact information you provided if we need to
                  follow up with you.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Button
                    href="/for-healthcare-professionals"
                    variant="secondary"
                  >
                    Back to professionals
                  </Button>

                  <Button href="/" arrow>
                    Return home
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#1B2D5B] text-[#F5EFE6]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <motion.div
            {...fadeUp}
            className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end"
          >
            <div>
              <Eyebrow>CareRify</Eyebrow>
            </div>

            <div>
              <h2 className="max-w-[850px] text-[clamp(2.6rem,5vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Good care needs people who care about the work.
              </h2>

              <p className="mt-7 max-w-[600px] text-base leading-7 text-[#F5EFE6]/65 sm:text-lg sm:leading-8">
                We’re building a network grounded in experience, respect, and
                the people behind every shift.
              </p>

              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold text-[#F5EFE6]"
              >
                Have a question?
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

