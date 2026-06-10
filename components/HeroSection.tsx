"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="grain-overlay relative overflow-hidden"
      style={{ background: "var(--obsidian)" }}
    >
      {/* ── Main hero grid ── */}
      <div className="relative z-10 grid min-h-[680px] grid-cols-1 lg:grid-cols-[42%_58%] lg:gap-0">
        {/* LEFT: Obsidian editorial card */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="relative flex items-center justify-center px-5 py-16 sm:px-[6%] lg:px-0 lg:py-0"
        >
          <div
            className="will-change-transform mx-auto w-full max-w-[520px] rounded-none bg-[#0C0B09] shadow-[0_22px_70px_rgba(0,0,0,0.65)] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] lg:ml-[12%] lg:mr-[-6%] lg:rounded-[3px] lg:hover:-translate-y-[3px]"
            style={{
              padding: "60px 52px",
            }}
          >
            <div className="space-y-6">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
                className="font-[var(--font-cormorant)] italic"
                style={{
                  fontSize: "clamp(2.6rem, 5.5vw, 5rem)",
                  fontWeight: 400,
                  color: "#F5EDD8",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.08,
                }}
              >
                For those who collect light
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease }}
                className="font-[var(--font-dm-sans)]"
                style={{
                  fontWeight: 300,
                  fontSize: "clamp(0.875rem, 1.4vw, 1rem)",
                  color: "#9A9080",
                  maxWidth: 340,
                  lineHeight: 1.75,
                  letterSpacing: "0.02em",
                }}
              >
                A collection of quiet, luminous pieces designed for the way you
                move — soft edges, warm metals, and light that follows.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease }}
                className="mt-6 flex flex-wrap items-center gap-3"
              >
                {/* Primary CTA */}
                <Link
                  href="/#collections"
                  className="group will-change-transform inline-flex items-center justify-center"
                  data-clickable
                >
                  <span
                    className="inline-flex items-center justify-center uppercase tracking-[0.12em] transition-transform duration-200 ease-out group-hover:-translate-y-[1px] group-hover:shadow-[0_0_18px_rgba(201,169,110,0.45)]"
                    style={{
                      background: "#C9A96E",
                      color: "#0C0B09",
                      fontFamily: "var(--font-dm-sans)",
                      fontWeight: 500,
                      fontSize: 11,
                      padding: "14px 32px",
                      borderRadius: 2,
                    }}
                  >
                    Explore the Collection
                  </span>
                </Link>

                {/* Secondary CTA */}
                <Link
                  href="#atelier"
                  className="group will-change-transform inline-flex items-center justify-center"
                  data-clickable
                >
                  <span
                    className="inline-flex items-center justify-center uppercase tracking-[0.12em] transition-transform duration-200 ease-out group-hover:-translate-y-[1px] group-hover:shadow-[0_0_18px_rgba(245,237,216,0.35)]"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontWeight: 500,
                      fontSize: 11,
                      padding: "14px 32px",
                      borderRadius: 2,
                      border: "1px solid rgba(245,237,216,0.25)",
                      color: "#F5EDD8",
                      background: "transparent",
                    }}
                  >
                    Our Story
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Full-bleed hero image */}
        <motion.div
          className="relative order-first min-h-[70vw] overflow-hidden lg:order-last lg:min-h-[680px]"
        >
          <motion.div
            style={{ y: imageY }}
            className="hero-image-wrapper group absolute inset-0 will-change-transform"
          >
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1659708701940-e60893ef03d0?auto=format&fit=crop&w=1400&q=90"
                alt="Editorial jewelry photograph — gold necklace catching light against dark background"
                fill
                priority
                loading="eager"
                fetchPriority="high"
                className="h-full w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.012]"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />

              {/* Left gradient to blend card into image */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, #0C0B09 0%, rgba(12,11,9,0.9) 10%, transparent 18%)",
                }}
              />

              {/* Shop now pill */}
              <Link
                href="/#collections"
                className="group will-change-transform absolute bottom-8 right-8 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#C9A96E] transition-transform duration-200 ease-out"
                style={{
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  background: "rgba(12,11,9,0.55)",
                  border: "1px solid rgba(201,169,110,0.35)",
                  fontFamily: "var(--font-dm-sans)",
                }}
                data-clickable
              >
                Shop now
                <span className="ml-1.5 transition-transform duration-200 ease-out group-hover:translate-x-[2px]">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CATEGORY HASHTAG CARDS */}
      <div
        className="border-t border-white/5 bg-[#0E0D0B]"
      >
        <div className="mx-auto flex max-w-[1400px] divide-x divide-white/10">
          {["#RINGS", "#NECKLACES", "#EARRINGS"].map((label) => (
            <button
              key={label}
              type="button"
              suppressHydrationWarning
              className="group flex flex-1 items-center justify-between gap-4 px-6 py-4 text-left transition-colors duration-200 ease-out hover:bg-[#161410] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-7 w-px"
                  style={{ background: "#C9A96E" }}
                />
                <span
                  className="font-[var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.18em]"
                  style={{ color: "#9A9080" }}
                >
                  {label}
                </span>
              </div>
              <span
                className="font-[var(--font-dm-sans)] text-[11px] tracking-[0.18em]"
                style={{ color: "#9A9080" }}
              >
                →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}