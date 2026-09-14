"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

const revealViewport = {
  once: true,
  amount: 0.22,
};

const softViewport = {
  once: true,
  amount: 0.3,
};

type RequestStaffingState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

const initialState: RequestStaffingState = {
  success: false,
  message: "",
};

export function RequestStaffingPage() {
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;

  const [state, setState] = useState<RequestStaffingState>(initialState);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsPending(true);

    setState(initialState);

    try {
      const formData = new FormData(event.currentTarget);

      const data = Object.fromEntries(formData.entries());

      const response = await fetch("/api/request-staffing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setState({
          success: false,
          message:
            result.message ||
            "We couldn't submit your request right now. Please try again.",
          errors: result.errors,
        });

        return;
      }

      setState({
        success: true,
        message: result.message || "We've received your staffing request.",
      });
    } catch (error) {
      console.error("Failed to submit staffing request:", error);

      setState({
        success: false,
        message:
          "We couldn't submit your request right now. Please try again.",
      });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section
        aria-labelledby="request-staffing-heading"
        className="relative overflow-hidden bg-[var(--cream)]"
      >
        <Container>
          <div className="relative min-h-[78vh] py-32 sm:py-40 lg:flex lg:min-h-[82vh] lg:items-end lg:py-20">
            <div className="grid w-full gap-16 lg:grid-cols-[0.27fr_0.73fr] lg:gap-16 xl:gap-24">
              <motion.div
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.8,
                  ease,
                  delay: 0.05,
                }}
                className="pt-2"
              >
                <Eyebrow number="01">Request staffing</Eyebrow>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 14,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.7,
                    ease,
                    delay: reducedMotion ? 0 : 0.22,
                  }}
                  className="mt-8 max-w-[210px] text-sm leading-[1.8] text-[#172033]/45"
                >
                  Tell us what your organization needs. We&apos;ll start with
                  understanding.
                </motion.p>
              </motion.div>

              <div>
                <motion.h1
                  id="request-staffing-heading"
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 55,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: reducedMotion ? 0.01 : 1.05,
                    ease,
                    delay: reducedMotion ? 0 : 0.12,
                  }}
                  className="
                    max-w-[1100px]
                    font-[var(--font-display)]
                    text-[clamp(3.7rem,8.4vw,9.5rem)]
                    font-medium
                    leading-[0.86]
                    tracking-[-0.075em]
                    text-[var(--navy)]
                  "
                >
                  Tell us what
                  <br />
                  <span className="text-[var(--sage)]">you need.</span>
                </motion.h1>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: reducedMotion ? 0.01 : 0.8,
                    ease,
                    delay: reducedMotion ? 0 : 0.34,
                  }}
                  className="mt-12 max-w-[570px] border-t border-[#172033]/10 pt-6"
                >
                  <p className="text-[1rem] leading-[1.85] text-[#172033]/60 sm:text-[1.08rem]">
                    A few details help us understand your staffing requirement
                    and begin the right conversation.
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div
              aria-hidden="true"
              initial={{
                scaleX: reducedMotion ? 1 : 0,
                opacity: reducedMotion ? 1 : 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                duration: reducedMotion ? 0.01 : 1.2,
                ease,
                delay: reducedMotion ? 0 : 0.55,
              }}
              className="absolute bottom-0 left-0 h-px w-full origin-left bg-[#172033]/10"
            />
          </div>
        </Container>
      </section>

      {/* FORM AREA */}
      <section
        aria-labelledby="staffing-form-heading"
        className="relative bg-white"
      >
        <Container>
          <div className="grid gap-16 py-[clamp(7rem,12vw,11rem)] lg:grid-cols-[0.3fr_0.7fr] lg:gap-20">
            {/* SIDEBAR */}
            <motion.aside
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 22,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={softViewport}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                ease,
              }}
              className="lg:sticky lg:top-32 lg:self-start"
            >
              <Eyebrow number="02">Start here</Eyebrow>

              <h2
                id="staffing-form-heading"
                className="
                  mt-8
                  max-w-[280px]
                  font-[var(--font-display)]
                  text-[clamp(2.2rem,4vw,4rem)]
                  font-medium
                  leading-[0.92]
                  tracking-[-0.06em]
                  text-[var(--navy)]
                "
              >
                A clear
                <br />
                first step.
              </h2>

              <p className="mt-8 max-w-[260px] text-sm leading-[1.8] text-[#172033]/45">
                You do not need to have everything figured out before reaching
                out. Give us the information you have and we can start from
                there.
              </p>

              <div className="mt-10 hidden border-t border-[#172033]/10 pt-6 lg:block">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#172033]/35">
                  What happens next
                </p>

                <div className="mt-5 space-y-4">
                  <StepHint number="01">
                    We review your request.
                  </StepHint>

                  <StepHint number="02">
                    We understand the requirement.
                  </StepHint>

                  <StepHint number="03">
                    We continue the conversation.
                  </StepHint>
                </div>
              </div>
            </motion.aside>

            {/* FORM */}
            <motion.div
              initial={{
                opacity: 1,
                y: 0,
              }}
              whileInView={
                reducedMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={softViewport}
              transition={
                reducedMotion
                  ? undefined
                  : {
                      duration: 0.9,
                      delay: 0.08,
                      ease,
                    }
              }
            >
              {state.success ? (
                <SuccessState reducedMotion={reducedMotion} />
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="border-t border-[#172033]/10"
                >
                  {/* GENERAL SERVER ERROR */}
                  {!state.success && state.message ? (
                    <div
                      role="alert"
                      className="border-b border-red-900/10 bg-red-50 px-5 py-4 text-sm leading-6 text-red-900"
                    >
                      {state.message}
                    </div>
                  ) : null}

                  <FormSection number="01" title="About your organization">
                    <div className="grid gap-7 sm:grid-cols-2">
                      <Field
                        label="Organization name"
                        name="organizationName"
                        placeholder="Your organization"
                        required
                        error={state.errors?.organizationName?.[0]}
                      />

                      <Field
                        label="Your name"
                        name="contactName"
                        placeholder="Full name"
                        required
                        error={state.errors?.contactName?.[0]}
                      />

                      <Field
                        label="Work email"
                        name="email"
                        type="email"
                        placeholder="you@organization.ca"
                        required
                        error={state.errors?.email?.[0]}
                      />

                      <Field
                        label="Phone"
                        name="phone"
                        type="tel"
                        placeholder="Your phone number"
                        required
                        error={state.errors?.phone?.[0]}
                      />
                    </div>
                  </FormSection>

                  <FormSection number="02" title="What do you need?">
                    <div className="grid gap-7 sm:grid-cols-2">
                      <SelectField
                        label="Staffing role"
                        name="staffingRole"
                        required
                        error={state.errors?.staffingRole?.[0]}
                        options={[
                          "Personal Support Worker",
                          "Registered Practical Nurse",
                          "Registered Nurse",
                          "Dietary & Support Staff",
                          "Other",
                        ]}
                      />

                      <SelectField
                        label="Type of support"
                        name="staffingNeed"
                        required
                        error={state.errors?.staffingNeed?.[0]}
                        options={[
                          "Additional coverage",
                          "Ongoing staffing support",
                          "Changing staffing needs",
                          "Not sure yet",
                        ]}
                      />

                      <Field
                        label="Location"
                        name="location"
                        placeholder="City / community"
                        required
                        error={state.errors?.location?.[0]}
                      />

                      <Field
                        label="Approximate number of staff needed"
                        name="approximateStaffCount"
                        type="number"
                        min="1"
                        placeholder="e.g. 2"
                        error={state.errors?.approximateStaffCount?.[0]}
                      />
                    </div>

                    <div className="mt-7">
                      <TextAreaField
                        label="Tell us more"
                        name="details"
                        placeholder="Tell us about the staffing need, role, timing, or anything else that would help us understand your situation."
                        error={state.errors?.details?.[0]}
                      />
                    </div>
                  </FormSection>

                  <FormSection number="03" title="Anything else?">
                    <p className="max-w-[560px] text-sm leading-7 text-[#172033]/50">
                      You can submit the request with the information above.
                      We can clarify any additional details when we follow up.
                    </p>

                    <label className="mt-8 flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        aria-invalid={Boolean(state.errors?.consent)}
                        className="
                          mt-1
                          h-4
                          w-4
                          shrink-0
                          accent-[var(--navy)]
                        "
                      />

                      <span className="text-sm leading-[1.7] text-[#172033]/50">
                        I agree that CareRify may use the information provided
                        to respond to my staffing request and continue the
                        conversation about my organization&apos;s needs.
                      </span>
                    </label>

                    {state.errors?.consent?.[0] ? (
                      <p
                        role="alert"
                        className="mt-3 text-xs leading-5 text-red-700"
                      >
                        {state.errors.consent[0]}
                      </p>
                    ) : null}
                  </FormSection>

                  <div className="flex flex-col gap-5 border-t border-[#172033]/10 py-10 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-[360px] text-xs leading-[1.7] text-[#172033]/35">
                      By submitting this form, you are providing information
                      for the purpose of responding to your request. See our{" "}
                      <a
                        href="/privacy"
                        className="text-[#172033]/55 underline underline-offset-4 transition-colors hover:text-[var(--navy)]"
                      >
                        privacy policy
                      </a>{" "}
                      for more information.
                    </p>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isPending}
                    >
                      {isPending ? "Sending request..." : "Send request"}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* REASSURANCE */}
      <section
        aria-labelledby="reassurance-heading"
        className="relative overflow-hidden bg-[var(--navy)] text-white"
      >
        <Container>
          <div className="relative py-[clamp(7rem,13vw,12rem)]">
            <motion.div
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 22,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={softViewport}
              transition={{
                duration: reducedMotion ? 0.01 : 0.8,
                ease,
              }}
            >
              <Eyebrow light>Built around people</Eyebrow>

              <motion.h2
                id="reassurance-heading"
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={revealViewport}
                transition={{
                  duration: reducedMotion ? 0.01 : 1,
                  delay: reducedMotion ? 0 : 0.08,
                  ease,
                }}
                className="
                  mt-10
                  max-w-[1000px]
                  font-[var(--font-display)]
                  text-[clamp(3.5rem,7.5vw,8.5rem)]
                  font-medium
                  leading-[0.87]
                  tracking-[-0.075em]
                "
              >
                Good staffing
                <br />
                <span className="text-[var(--sage)]">
                  starts with listening.
                </span>
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 22,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={softViewport}
                transition={{
                  duration: reducedMotion ? 0.01 : 0.75,
                  delay: reducedMotion ? 0 : 0.2,
                  ease,
                }}
                className="mt-8 max-w-[540px] text-[1rem] leading-[1.8] text-white/55 sm:text-[1.08rem]"
              >
                Tell us what is happening inside your organization. We will
                start by understanding the requirement before determining the
                next step.
              </motion.p>
            </motion.div>

            <motion.div
              aria-hidden="true"
              initial={{
                opacity: reducedMotion ? 1 : 0,
                scale: reducedMotion ? 1 : 0.75,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={softViewport}
              transition={{
                duration: reducedMotion ? 0.01 : 1.3,
                ease,
              }}
              className="pointer-events-none absolute -right-48 top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-white/[0.07] md:block"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}

type FormSectionProps = {
  number: string;
  title: string;
  children: React.ReactNode;
};

function FormSection({
  number,
  title,
  children,
}: FormSectionProps) {
  return (
    <fieldset className="border-b border-[#172033]/10 py-12 sm:py-14">
      <legend className="mb-9 block w-full">
        <span className="mr-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#172033]/30">
          {number}
        </span>

        <span className="font-[var(--font-display)] text-[1.5rem] font-medium tracking-[-0.04em] text-[var(--navy)] sm:text-[1.7rem]">
          {title}
        </span>
      </legend>

      {children}
    </fieldset>
  );
}

type FieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  min?: string;
  error?: string;
};

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
  min,
  error,
}: FieldProps) {
  return (
    <label className="group block">
      <span className="mb-3 block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#172033]/45">
        {label}

        {required ? (
          <span
            className="ml-1 text-[var(--sage)]"
            aria-hidden="true"
          >
            *
          </span>
        ) : null}
      </span>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        min={min}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`
          h-14
          w-full
          border-b
          bg-transparent
          px-0
          text-[0.98rem]
          text-[var(--navy)]
          outline-none
          placeholder:text-[#172033]/25
          transition-colors
          duration-300
          ${
            error
              ? "border-red-500 focus:border-red-600"
              : "border-[#172033]/15 focus:border-[var(--navy)]"
          }
        `}
      />

      {error ? (
        <p
          id={`${name}-error`}
          role="alert"
          className="mt-2 text-xs leading-5 text-red-700"
        >
          {error}
        </p>
      ) : null}
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  error?: string;
};

function SelectField({
  label,
  name,
  options,
  required = false,
  error,
}: SelectFieldProps) {
  return (
    <label className="group block">
      <span className="mb-3 block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#172033]/45">
        {label}

        {required ? (
          <span
            className="ml-1 text-[var(--sage)]"
            aria-hidden="true"
          >
            *
          </span>
        ) : null}
      </span>

      <div className="relative">
        <select
          name={name}
          required={required}
          defaultValue=""
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`
            h-14
            w-full
            appearance-none
            border-b
            bg-transparent
            px-0
            pr-8
            text-[0.98rem]
            text-[var(--navy)]
            outline-none
            transition-colors
            duration-300
            ${
              error
                ? "border-red-500 focus:border-red-600"
                : "border-[#172033]/15 focus:border-[var(--navy)]"
            }
          `}
        >
          <option value="" disabled>
            Select an option
          </option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#172033]/40"
        >
          <Arrow direction="down" size="sm" />
        </span>
      </div>

      {error ? (
        <p
          id={`${name}-error`}
          role="alert"
          className="mt-2 text-xs leading-5 text-red-700"
        >
          {error}
        </p>
      ) : null}
    </label>
  );
}

type TextAreaFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
};

function TextAreaField({
  label,
  name,
  placeholder,
  required = false,
  error,
}: TextAreaFieldProps) {
  return (
    <label className="group block">
      <span className="mb-3 block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#172033]/45">
        {label}

        {required ? (
          <span
            className="ml-1 text-[var(--sage)]"
            aria-hidden="true"
          >
            *
          </span>
        ) : null}
      </span>

      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={5}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`
          w-full
          resize-y
          border-b
          bg-transparent
          px-0
          py-3
          text-[0.98rem]
          leading-[1.7]
          text-[var(--navy)]
          outline-none
          placeholder:text-[#172033]/25
          transition-colors
          duration-300
          ${
            error
              ? "border-red-500 focus:border-red-600"
              : "border-[#172033]/15 focus:border-[var(--navy)]"
          }
        `}
      />

      {error ? (
        <p
          id={`${name}-error`}
          role="alert"
          className="mt-2 text-xs leading-5 text-red-700"
        >
          {error}
        </p>
      ) : null}
    </label>
  );
}

type StepHintProps = {
  number: string;
  children: React.ReactNode;
};

function StepHint({
  number,
  children,
}: StepHintProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="pt-[0.1rem] text-[0.58rem] font-semibold tracking-[0.14em] text-[var(--sage)]">
        {number}
      </span>

      <span className="text-xs leading-[1.6] text-[#172033]/45">
        {children}
      </span>
    </div>
  );
}

function SuccessState({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: reducedMotion ? 0 : 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: reducedMotion ? 0.01 : 0.8,
        ease,
      }}
      className="border-t border-[#172033]/10 py-16 sm:py-20"
      role="status"
      aria-live="polite"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--light-sage)]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6 text-[var(--navy)]"
          aria-hidden="true"
        >
          <path
            d="M5 12.5 9.2 17 19 7"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h2 className="mt-8 max-w-[700px] font-[var(--font-display)] text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.065em] text-[var(--navy)]">
        We&apos;ve received
        <br />
        <span className="text-[var(--sage)]">your request.</span>
      </h2>

      <p className="mt-8 max-w-[540px] text-[1rem] leading-[1.85] text-[#172033]/55">
        Thank you for reaching out to CareRify. Your information has been
        submitted and the next step is to review the staffing requirement.
      </p>

      <div className="mt-8">
        <Button href="/" variant="secondary">
          Return home
        </Button>
      </div>
    </motion.div>
  );
}

