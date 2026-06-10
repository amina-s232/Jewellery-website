"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const footerLinks = {
  collections: [
    { label: "Rings", href: "/collections/rings" },
    { label: "Necklaces", href: "/collections/necklaces" },
    { label: "Earrings", href: "/collections/earrings" },
    { label: "Bracelets", href: "/collections/bracelets" },
    { label: "Watches", href: "/collections/watches" },
  ],
  info: [
    { label: "About", href: "/#atelier" },
    { label: "Atelier", href: "/#atelier" },
    { label: "Contact", href: "/contact" },
    { label: "Book a Visit", href: "/contact" },
  ],
};

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <>
      {/* ─── Main Footer ─── */}
      <footer
        ref={sectionRef}
        className="relative overflow-hidden py-20 lg:py-24"
        style={{
          background: "var(--obsidian)",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        {/* Massive background "AURORA" ghost text */}
        <div
          className="pointer-events-none absolute select-none font-[var(--font-cormorant)] font-extralight leading-none"
          style={{
            fontSize: "22vw",
            color: "rgba(201,168,76,0.03)",
            top: "-0.1em",
            left: "-0.02em",
          }}
          aria-hidden="true"
        >
          AURORA
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
          {/* 4 columns */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <span
                  className="font-[var(--font-cormorant)] text-[22px] font-extralight tracking-[0.35em]"
                  style={{ color: "var(--text-ivory)" }}
                >
                  AURORA
                </span>
                <br />
                <span
                  className="font-[var(--font-dm-sans)] text-[9px] font-light tracking-[0.5em]"
                  style={{ color: "var(--gold-primary)" }}
                >
                  JEWELERS
                </span>
              </div>
              <p
                className="mb-6 max-w-[240px] font-[var(--font-dm-sans)] text-[13px] font-light leading-[1.7]"
                style={{ color: "var(--text-muted)" }}
              >
                Timeless fine jewellery crafted with a focus on light,
                reflection, and ritual.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/aurorajewelers"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="transition-colors duration-250 hover:text-[var(--gold-primary)]"
                  style={{ color: "var(--text-muted)" }}
                  data-clickable
                >
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
                <a
                  href="https://wa.me/?text=Hello%20Aurora%20Jewelers!"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="transition-colors duration-250 hover:text-[var(--gold-primary)]"
                  style={{ color: "var(--text-muted)" }}
                  data-clickable
                >
                  <MessageCircle size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Collections */}
            <div>
              <h4
                className="type-label mb-6 text-[10px]"
                style={{ color: "var(--text-muted)" }}
              >
                Collections
              </h4>
              <ul className="space-y-3">
                {footerLinks.collections.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-[var(--font-dm-sans)] text-[13px] font-light transition-colors duration-250 hover:text-[var(--gold-primary)]"
                      style={{ color: "var(--text-muted)" }}
                      data-clickable
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information */}
            <div>
              <h4
                className="type-label mb-6 text-[10px]"
                style={{ color: "var(--text-muted)" }}
              >
                Information
              </h4>
              <ul className="space-y-3">
                {footerLinks.info.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-[var(--font-dm-sans)] text-[13px] font-light transition-colors duration-250 hover:text-[var(--gold-primary)]"
                      style={{ color: "var(--text-muted)" }}
                      data-clickable
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visit */}
            <div>
              <h4
                className="type-label mb-6 text-[10px]"
                style={{ color: "var(--text-muted)" }}
              >
                Visit Us
              </h4>
              <p
                className="font-[var(--font-dm-sans)] text-[13px] font-light leading-[1.7]"
                style={{ color: "var(--text-warm)" }}
              >
                123, Aurora Lane, Bandra West
                <br />
                Mumbai, Maharashtra 400050
              </p>
              <p
                className="mt-4 font-[var(--font-cormorant)] text-[16px] font-light italic"
                style={{ color: "var(--gold-primary)" }}
              >
                By appointment only
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-16 flex flex-col items-start justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center"
            style={{ borderColor: "var(--border-subtle)" }}
          >
            <p
              className="font-[var(--font-dm-sans)] text-[11px] font-light"
              style={{ color: "var(--text-ghost)" }}
            >
              &copy; 2025 Aurora Jewelers. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="font-[var(--font-dm-sans)] text-[11px] font-light transition-colors duration-250 hover:text-[var(--text-ivory)]"
                style={{ color: "var(--text-ghost)" }}
                data-clickable
              >
                Privacy Policy
              </a>
              <span style={{ color: "var(--text-ghost)" }}>·</span>
              <a
                href="#"
                className="font-[var(--font-dm-sans)] text-[11px] font-light transition-colors duration-250 hover:text-[var(--text-ivory)]"
                style={{ color: "var(--text-ghost)" }}
                data-clickable
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
