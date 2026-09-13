"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ImageReveal } from "@/components/motion/image-reveal";
import { TextReveal } from "@/components/motion/text-reveal";

const roles = [
  "Personal Support Worker (PSW)",
  "Registered Practical Nurse (RPN)",
  "Registered Nurse (RN)",
  "Dietary & Support Staff",
  "Other",
];

const experienceLevels = [
  "Less than 1 year",
  "1–3 years",
  "3–5 years",
  "5–10 years",
  "10+ years",
];

const inputClassName =
  "mt-2 w-full rounded-none border-0 border-b border-[#172033]/20 bg-transparent px-0 py-3 text-[15px] text-[#172033] outline-none transition-colors placeholder:text-[#172033]/40 focus:border-[#1B2D5B]";

const selectClassName =
  "mt-2 w-full appearance-none rounded-none border-0 border-b border-[#172033]/20 bg-transparent px-0 py-3 text-[15px] text-[#172033] outline-none transition-colors focus:border-[#1B2D5B]";

const textareaClassName =
  "mt-2 min-h-[130px] w-full resize-y rounded-none border border-[#172033]/15 bg-white/50 px-4 py-3 text-[15px] text-[#172033] outline-none transition-colors placeholder:text-[#172033]/40 focus:border-[#1B2D5B]";

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

export function JoinNetworkPage() {
  const shouldReduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const fadeUp = {
    initial: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  };

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
              <TextReveal
                text="Bring your work where it matters."
                className="max-w-[760px] text-[clamp(3.2rem,7vw,7rem)] font-medium leading-[0.92] tracking-[-0.065em] text-[#172033]"
              />
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
            <ImageReveal
              src="/images/professional-network.jpg"
              alt="Healthcare professional in a calm care environment"
              className="aspect-[4/5] w-full max-w-[560px] lg:ml-auto"
            />

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.45,
                duration: shouldReduceMotion ? 0 : 0.7,
                ease: [0.22, 1, 0.36, 1],
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
            {!submitted ? (
              <motion.div
                key="form"
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
              >
                <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
                  {/* Form intro */}
                  <div className="lg:sticky lg:top-28 lg:self-start">
                    <Eyebrow>Your introduction</Eyebrow>

                    <h2 className="mt-6 max-w-[420px] text-[clamp(2.4rem,4vw,4rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#172033]">
                      Let’s get to know you.
                    </h2>

                    <p className="mt-6 max-w-[390px] text-sm leading-6 text-[#172033]/60">
                      A few details are enough to start. You can tell us more
                      about your experience as you move through the form.
                    </p>

                    <div className="mt-10 border-l border-[#1B2D5B]/30 pl-5">
                      <p className="text-sm leading-6 text-[#172033]/65">
                        Fields marked with <span className="text-[#1B2D5B]">*</span>{" "}
                        are required.
                      </p>
                    </div>
                  </div>

                  {/* Form */}
                  <form
                    onSubmit={handleSubmit}
                    className="bg-[#F5EFE6] px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-16"
                  >
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
                          />
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
                          />
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
                          />
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
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <FieldLabel>City / area</FieldLabel>
                          <input
                            name="location"
                            type="text"
                            autoComplete="address-level2"
                            placeholder="Where are you based?"
                            className={inputClassName}
                          />
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
                            name="role"
                            defaultValue=""
                            className={selectClassName}
                          >
                            <option value="" disabled>
                              Select your role
                            </option>

                            {roles.map((role) => (
                              <option key={role} value={role}>
                                {role}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <FieldLabel required>Experience</FieldLabel>

                          <select
                            required
                            name="experience"
                            defaultValue=""
                            className={selectClassName}
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
                        </div>

                        <div className="sm:col-span-2">
                          <FieldLabel>Professional experience</FieldLabel>

                          <textarea
                            name="professionalExperience"
                            placeholder="Tell us briefly about your experience, the environments you have worked in, or the kind of care you are experienced in providing."
                            className={textareaClassName}
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <FieldLabel>Preferred area of work</FieldLabel>

                          <input
                            name="preferredArea"
                            type="text"
                            placeholder="Where would you ideally like to contribute?"
                            className={inputClassName}
                          />
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
                            Supporting documents
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-[#172033]/55">
                            Share anything that helps us understand your
                            professional background.
                          </p>
                        </div>
                      </div>

                      <div className="mt-10 space-y-6">
                        <label className="block cursor-pointer border border-dashed border-[#172033]/20 bg-white/40 p-6 transition-colors hover:border-[#1B2D5B]/50">
                          <span className="block text-sm font-medium text-[#172033]">
                            Resume or CV
                          </span>

                          <span className="mt-1 block text-xs leading-5 text-[#172033]/50">
                            Optional. PDF, DOC, or DOCX.
                          </span>

                          <input
                            name="resume"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="mt-5 block w-full text-sm text-[#172033]/60 file:mr-4 file:border-0 file:bg-[#1B2D5B] file:px-4 file:py-2.5 file:text-xs file:font-semibold file:text-white hover:file:bg-[#172033]"
                          />
                        </label>

                        <label className="block cursor-pointer border border-dashed border-[#172033]/20 bg-white/40 p-6 transition-colors hover:border-[#1B2D5B]/50">
                          <span className="block text-sm font-medium text-[#172033]">
                            Professional documents
                          </span>

                          <span className="mt-1 block text-xs leading-5 text-[#172033]/50">
                            Optional. Add relevant certificates or supporting
                            documents if appropriate.
                          </span>

                          <input
                            name="professionalDocuments"
                            type="file"
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            multiple
                            className="mt-5 block w-full text-sm text-[#172033]/60 file:mr-4 file:border-0 file:bg-[#1B2D5B] file:px-4 file:py-2.5 file:text-xs file:font-semibold file:text-white hover:file:bg-[#172033]"
                          />
                        </label>

                        <p className="text-xs leading-5 text-[#172033]/45">
                          Document upload is currently part of the application
                          experience only. Secure storage and processing will
                          be connected before launch.
                        </p>
                      </div>
                    </div>

                    <div className="my-14 border-t border-[#172033]/10" />

                    {/* About your interest */}
                    <div>
                      <div className="flex items-start gap-5">
                        <SectionNumber number="04" />

                        <div>
                          <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#172033]">
                            Anything else?
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-[#172033]/55">
                            Give us a little more context if you’d like.
                          </p>
                        </div>
                      </div>

                      <div className="mt-10">
                        <FieldLabel>
                          Tell us anything you think we should know
                        </FieldLabel>

                        <textarea
                          name="additionalInformation"
                          placeholder="Is there anything about your experience, interests, or professional background you would like to share?"
                          className={textareaClassName}
                        />
                      </div>
                    </div>

                    <div className="my-14 border-t border-[#172033]/10" />

                    {/* Consent */}
                    <div>
                      <div className="flex items-start gap-5">
                        <SectionNumber number="05" />

                        <div>
                          <h3 className="text-2xl font-medium tracking-[-0.03em] text-[#172033]">
                            Before you submit
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-[#172033]/55">
                            One final step.
                          </p>
                        </div>
                      </div>

                      <label className="mt-8 flex cursor-pointer gap-4">
                        <input
                          required
                          type="checkbox"
                          name="consent"
                          className="mt-1 h-4 w-4 shrink-0 accent-[#1B2D5B]"
                        />

                        <span className="text-sm leading-6 text-[#172033]/65">
                          I understand that the information I provide will be
                          used to respond to my application and communicate
                          with me about potential opportunities. I have read
                          the{" "}
                          <Link
                            href="/privacy"
                            className="font-medium text-[#1B2D5B] underline underline-offset-4"
                          >
                            Privacy Policy
                          </Link>
                          .
                        </span>
                      </label>

                      <div className="mt-9">
                        <Button type="submit" size="lg" arrow>
                          Submit my introduction
                        </Button>
                      </div>
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
                  ease: [0.22, 1, 0.36, 1],
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
                  We’ve received your information. Your introduction gives us
                  a better understanding of your experience and where you may
                  be able to contribute.
                </p>

                <p className="mx-auto mt-4 max-w-[520px] text-sm leading-6 text-[#172033]/50">
                  We’ll use the contact information you provided if we need to
                  follow up with you.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Button href="/for-healthcare-professionals" variant="secondary">
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