"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";
import { ChevronDown, Instagram } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const inputBase =
  "w-full bg-transparent pb-3 font-[var(--font-dm-sans)] text-[14px] font-light outline-none placeholder:text-[var(--text-ghost)]";
const inputWrapper =
  "border-b border-[var(--border-gold)] transition-[border-color,box-shadow] duration-200 hover:border-[var(--gold-primary)]/60 focus-within:border-[var(--gold-primary)] focus-within:shadow-[0_1px_0_0_var(--gold-primary)]";
const labelClass =
  "mb-2 block font-[var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.2em]";

const SERVICE_OPTIONS = [
  { value: "", label: "Select a service" },
  { value: "inquiry", label: "General Inquiry" },
  { value: "appointment", label: "Book an Appointment" },
  { value: "custom", label: "Custom Order" },
  { value: "repair", label: "Repair & Care" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: "var(--obsidian)" }}>
      <Navbar />
      <main className="min-h-screen">
        {/* Contact Card — two columns: left info, right form */}
        <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-12 lg:grid-cols-[340px_1fr] lg:gap-20">
              {/* Left — Contact info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="space-y-8"
              >
                <h1
                  className="font-[var(--font-cormorant)] text-[clamp(2.5rem,6vw,4rem)] font-extralight leading-[1.05]"
                  style={{ color: "var(--text-ivory)" }}
                >
                  Contact me
                </h1>
                <div className="space-y-1">
                  <p
                    className="font-[var(--font-dm-sans)] text-[13px] font-light"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Mumbai, Maharashtra
                  </p>
                  <p
                    className="font-[var(--font-dm-sans)] text-[13px] font-light"
                    style={{ color: "var(--text-muted)" }}
                  >
                    2025
                  </p>
                </div>
                <div>
                  <p
                    className="mb-2 font-[var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.2em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Office hours
                  </p>
                  <p
                    className="font-[var(--font-dm-sans)] text-[13px] font-light leading-relaxed"
                    style={{ color: "var(--text-warm)" }}
                  >
                    Monday — Friday
                    <br />
                    11 AM — 6 PM
                  </p>
                </div>
              </motion.div>

              {/* Right — Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6, ease }}
              >
                {submitted ? (
                  <div
                    className="rounded-sm border py-16 text-center"
                    style={{
                      borderColor: "var(--border-gold)",
                      background: "var(--gold-whisper)",
                    }}
                  >
                    <p
                      className="font-[var(--font-cormorant)] text-2xl font-light italic"
                      style={{ color: "var(--gold-primary)" }}
                    >
                      Thank you for reaching out.
                    </p>
                    <p
                      className="mt-3 font-[var(--font-dm-sans)] text-sm font-light"
                      style={{ color: "var(--text-warm)" }}
                    >
                      We&apos;ll be in touch soon.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 font-[var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-widest transition-colors hover:text-[var(--gold-primary)]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name — First + Last */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="firstName"
                          className={labelClass}
                          style={{ color: "var(--text-muted)" }}
                        >
                          Name (required)
                        </label>
                        <div className={inputWrapper}>
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            placeholder="First Name"
                            className={inputBase}
                            suppressHydrationWarning
                            style={{
                              color: "var(--text-ivory)",
                              caretColor: "var(--gold-primary)",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="invisible mb-2 block text-[11px] sm:visible"
                          aria-hidden
                        >
                          &nbsp;
                        </label>
                        <div className={inputWrapper}>
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            placeholder="Last Name"
                            className={inputBase}
                            style={{
                              color: "var(--text-ivory)",
                              caretColor: "var(--gold-primary)",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className={labelClass}
                        style={{ color: "var(--text-muted)" }}
                      >
                        Service
                      </label>
                      <div className={`${inputWrapper} relative`}>
                        <select
                          id="service"
                          name="service"
                          className={`${inputBase} appearance-none pr-8`}
                          suppressHydrationWarning
                          style={{
                            color: "var(--text-ivory)",
                            caretColor: "var(--gold-primary)",
                          }}
                        >
                          {SERVICE_OPTIONS.map((opt) => (
                            <option
                              key={opt.value}
                              value={opt.value}
                              style={{
                                background: "var(--obsidian-3)",
                                color: "var(--text-ivory)",
                              }}
                            >
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={16}
                          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2"
                          style={{ color: "var(--text-muted)" }}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className={labelClass}
                          style={{ color: "var(--text-muted)" }}
                        >
                          Email (required)
                        </label>
                        <div className={inputWrapper}>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="your@email.com"
                            className={inputBase}
                            style={{
                              color: "var(--text-ivory)",
                              caretColor: "var(--gold-primary)",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className={labelClass}
                          style={{ color: "var(--text-muted)" }}
                        >
                          Phone
                        </label>
                        <div className={inputWrapper}>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            className={inputBase}
                            suppressHydrationWarning
                            style={{
                              color: "var(--text-ivory)",
                              caretColor: "var(--gold-primary)",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project description */}
                    <div>
                      <label
                        htmlFor="description"
                        className={labelClass}
                        style={{ color: "var(--text-muted)" }}
                      >
                        Project description
                      </label>
                      <div className={inputWrapper}>
                        <textarea
                          id="description"
                          name="description"
                          required
                          rows={5}
                          placeholder="Tell us about your inquiry..."
                          className={`${inputBase} min-h-[120px] resize-y pt-2`}
                          style={{
                            color: "var(--text-ivory)",
                            caretColor: "var(--gold-primary)",
                          }}
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="flex flex-col gap-4 pt-2">
                      <button
                        type="submit"
                        className="w-full rounded-lg px-8 py-4 font-[var(--font-dm-sans)] text-[13px] font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:opacity-90"
                        style={{
                          background: "var(--gold-primary)",
                          color: "var(--obsidian)",
                        }}
                        suppressHydrationWarning
                      >
                        Submit
                      </button>
                      <Link
                        href="/"
                        className="text-center font-[var(--font-dm-sans)] text-[13px] font-light transition-colors hover:text-[var(--gold-primary)]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        ← Back to home
                      </Link>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer strip — contact details (like reference) */}
        <section
          className="border-t px-6 py-16 md:px-10 md:py-20 lg:px-16"
          style={{
            borderColor: "var(--border-gold)",
            background: "var(--obsidian-2)",
          }}
        >
          <div className="mx-auto flex max-w-[1200px] flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <a
                href="mailto:hello@aurorajewelers.com"
                className="font-[var(--font-dm-sans)] text-xl font-medium transition-colors hover:text-[var(--gold-primary)] sm:text-2xl"
                style={{ color: "var(--text-ivory)" }}
              >
                hello@aurorajewelers.com
              </a>
              <p
                className="font-[var(--font-dm-sans)] text-[13px] font-light"
                style={{ color: "var(--text-muted)" }}
              >
                Mumbai, Maharashtra · 2025
              </p>
              <p
                className="font-[var(--font-dm-sans)] text-[13px] font-light"
                style={{ color: "var(--text-muted)" }}
              >
                Monday — Friday · 11 AM — 6 PM
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="tel:+15551234567"
                className="block font-[var(--font-dm-sans)] text-xl font-medium transition-colors hover:text-[var(--gold-primary)] sm:text-2xl"
                style={{ color: "var(--text-ivory)" }}
              >
                +91 98765 43210
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/aurorajewelers"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="transition-colors hover:text-[var(--gold-primary)]"
                  style={{ color: "var(--text-muted)" }}
                >
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
              </div>
              <div className="flex flex-wrap gap-4 font-[var(--font-dm-sans)] text-[13px] font-light">
                <Link
                  href="/contact"
                  className="transition-colors hover:text-[var(--gold-primary)]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Say hello
                </Link>
                <Link
                  href="/#collections"
                  className="transition-colors hover:text-[var(--gold-primary)]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Work with us
                </Link>
                <a
                  href="#"
                  className="transition-colors hover:text-[var(--gold-primary)]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppChatButton />
    </div>
  );
}
