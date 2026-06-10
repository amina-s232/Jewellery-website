"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const testimonials = [
  {
    quote:
      "Every piece feels like it was designed just for me. The metals catch the light in the most cinematic way.",
    name: "Elena M.",
    role: "Creative Director",
  },
  {
    quote:
      "The in-studio appointment felt like a spa ritual. Calm lighting, quiet details, and jewelry that glows.",
    name: "James A.",
    role: "Art Collector",
  },
  {
    quote:
      "Aurora created my wedding set and I still catch myself staring at the way it shimmers in low light.",
    name: "Sofia L.",
    role: "Architect",
  },
];

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      id="atelier"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
      style={{
        background: "var(--obsidian-3)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-16"
        >
          <span
            className="type-label mb-4 block text-[10px]"
            style={{ color: "var(--gold-primary)" }}
          >
            THE ATELIER
          </span>
          <h2 className="type-display">
            <span style={{ color: "var(--text-ivory)" }}>A quiet kind </span>
            <span className="italic" style={{ color: "var(--gold-warm)" }}>
              of luxury.
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease }}
            className="mt-4 h-px"
            style={{ background: "var(--gold-primary)" }}
          />
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease }}
              className="relative border-t p-8"
              style={{ borderColor: "var(--border-gold)" }}
            >
              {/* Gold quote mark */}
              <span
                className="mb-6 block font-[var(--font-cormorant)] text-[48px] font-extralight leading-none"
                style={{ color: "var(--gold-primary)", opacity: 0.6 }}
              >
                &ldquo;
              </span>

              <blockquote
                className="mb-8 font-[var(--font-dm-sans)] text-[14px] font-light leading-[1.8]"
                style={{ color: "var(--text-warm)" }}
              >
                {t.quote}
              </blockquote>

              <figcaption>
                <p
                  className="font-[var(--font-cormorant)] text-[18px] font-light"
                  style={{ color: "var(--text-ivory)" }}
                >
                  {t.name}
                </p>
                <p
                  className="mt-1 font-[var(--font-dm-sans)] text-[11px] font-light tracking-[0.15em] uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  {t.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
