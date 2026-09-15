"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { motion, useReducedMotion } from "framer-motion";

import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export default function AdminLoginPage() {
  const shouldReduceMotion = useReducedMotion();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      console.error("Admin login failed:", error);

      setStatus("error");
      setErrorMessage("Invalid email or password. Please try again.");

      return;
    }

    window.location.href = "/admin";
  }

  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#172033]">
      <Container>
        <div className="flex min-h-screen flex-col">
          <header className="flex items-center justify-between py-7">
            <Link
              href="/"
              aria-label="CareRify home"
              className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2D5B] focus-visible:ring-offset-2"
            >
              <Logo />
            </Link>

            <Link
              href="/"
              className="font-sans text-xs font-medium text-[#172033]/50 transition-colors hover:text-[#1B2D5B] focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#1B2D5B]"
            >
              Back to website
            </Link>
          </header>

          <div className="flex flex-1 items-center justify-center py-16">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
              }
              className="w-full max-w-[460px]"
            >
              <div className="rounded-[28px] border border-[#1B2D5B]/10 bg-[#FBF8F3] p-7 shadow-[0_24px_80px_rgba(23,32,51,0.06)] sm:p-10">
                <div>
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1B2D5B]/50">
                    CareRify administration
                  </p>

                  <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-[#1B2D5B]">
                    Welcome back.
                  </h1>

                  <p className="mt-4 font-sans text-sm leading-7 text-[#172033]/60">
                    Sign in with your authorized CareRify administration
                    account.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8">
                  <div>
                    <label
                      htmlFor="admin-email"
                      className="font-sans text-sm font-semibold text-[#172033]"
                    >
                      Admin email
                    </label>

                    <input
                      id="admin-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@company.com"
                      disabled={status === "loading"}
                      className="mt-2 h-12 w-full rounded-xl border border-[#1B2D5B]/15 bg-white px-4 font-sans text-sm text-[#172033] outline-none transition-all placeholder:text-[#172033]/30 hover:border-[#1B2D5B]/25 focus:border-[#1B2D5B]/40 focus:ring-2 focus:ring-[#1B2D5B]/10 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="admin-password"
                      className="font-sans text-sm font-semibold text-[#172033]"
                    >
                      Password
                    </label>

                    <input
                      id="admin-password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Enter your password"
                      disabled={status === "loading"}
                      className="mt-2 h-12 w-full rounded-xl border border-[#1B2D5B]/15 bg-white px-4 font-sans text-sm text-[#172033] outline-none transition-all placeholder:text-[#172033]/30 hover:border-[#1B2D5B]/25 focus:border-[#1B2D5B]/40 focus:ring-2 focus:ring-[#1B2D5B]/10 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>

                  {status === "error" && (
                    <div
                      role="alert"
                      className="mt-4 rounded-xl border border-red-900/10 bg-red-50 px-4 py-3"
                    >
                      <p className="font-sans text-xs leading-5 text-red-900">
                        {errorMessage}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={
                      status === "loading" ||
                      !email.trim() ||
                      !password
                    }
                    className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-[#1B2D5B] px-5 font-sans text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#152449] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2D5B] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                        />
                        Signing in…
                      </span>
                    ) : (
                      "Sign in"
                    )}
                  </button>
                </form>

                <div className="mt-8 border-t border-[#1B2D5B]/10 pt-6">
                  <p className="font-sans text-xs leading-5 text-[#172033]/40">
                    Administration access is restricted to authorized
                    CareRify personnel.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <footer className="py-6 text-center">
            <p className="font-sans text-[11px] text-[#172033]/35">
              CareRify Health Staffing
            </p>
          </footer>
        </div>
      </Container>
    </main>
  );
}