"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Menu, X, Instagram, ChevronDown } from "lucide-react";
import { useCart } from "./CartContext";
import { COLLECTIONS } from "@/lib/collections";

const navLinks = [
  { href: "/#boutique", label: "Boutique" },
  { href: "/#atelier", label: "Atelier" },
  { href: "/contact", label: "Contact" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const [scrollDir, setScrollDir] = useState<"up" | "down" | null>(null);
  const [open, setOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const lastY = useRef(0);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      if (y < 20) setScrollDir(null);
      else if (y > lastY.current + 5) setScrollDir("down");
      else if (y < lastY.current - 5) setScrollDir("up");
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const atTop = scrollY < 80;
  const visible = scrollDir !== "down" || atTop;
  const frosted = scrollY > 80;

  return (
    <>
      {/* ─── Desktop + Mobile Navbar ─── */}
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.5, ease }}
        className="fixed inset-x-0 top-0 z-50 overflow-visible transition-colors duration-500"
        style={{
          background: frosted ? "rgba(8,7,5,0.82)" : "transparent",
          backdropFilter: frosted ? "blur(24px) saturate(160%)" : "none",
          WebkitBackdropFilter: frosted ? "blur(24px) saturate(160%)" : "none",
          borderBottom: frosted
            ? "1px solid var(--border-gold)"
            : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between overflow-visible px-6 md:px-10 lg:px-16">
          {/* Logo */}
          <Link href="/" className="group relative z-10 flex flex-col" data-clickable>
            <span
              className="font-[var(--font-cormorant)] text-[22px] font-extralight tracking-[0.35em]"
              style={{ color: "var(--text-ivory)" }}
            >
              AURORA
            </span>
            <span
              className="font-[var(--font-dm-sans)] text-[9px] font-light tracking-[0.5em]"
              style={{ color: "var(--gold-primary)" }}
            >
              JEWELERS
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-10 overflow-visible md:flex">
            {/* Collections dropdown */}
            <div
              ref={dropdownRef}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setCollectionsOpen(true)}
              onMouseLeave={() => setCollectionsOpen(false)}
            >
              <button
                type="button"
                className="type-label flex items-center gap-1 transition-colors duration-250"
                style={{
                  color: collectionsOpen ? "var(--text-ivory)" : "var(--text-warm)",
                }}
                aria-expanded={collectionsOpen}
                aria-haspopup="true"
                data-clickable
                suppressHydrationWarning
              >
                Collections
                <ChevronDown
                  size={12}
                  strokeWidth={2}
                  className="transition-transform duration-200"
                  style={{
                    transform: collectionsOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              <AnimatePresence>
                {collectionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease }}
                    className="absolute top-full left-1/2 z-50 mt-2 min-w-[180px] -translate-x-1/2 rounded-sm border py-2"
                    style={{
                      background: "rgba(18,16,14,0.98)",
                      borderColor: "var(--border-gold)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                    }}
                  >
                    {COLLECTIONS.map((col) => (
                      <Link
                        key={col.id}
                        href={`/collections/${col.id}`}
                        className="block px-5 py-2.5 font-[var(--font-dm-sans)] text-[11px] font-light tracking-[0.15em] uppercase transition-colors duration-200 hover:bg-[var(--gold-whisper)] hover:text-[var(--gold-primary)]"
                        style={{ color: "var(--text-warm)" }}
                        data-clickable
                        onClick={() => setCollectionsOpen(false)}
                      >
                        {col.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <span
                className="mt-1.5 h-[2px] w-[2px] rounded-full transition-all duration-300"
                style={{
                  background: "var(--gold-primary)",
                  opacity: collectionsOpen ? 1 : 0,
                  transform: collectionsOpen ? "scale(1)" : "scale(0)",
                }}
              />
            </div>

            {navLinks.map((link) => {
              const href = link.href;

              return (
                <Link
                  key={href}
                  href={href}
                  className="group relative flex flex-col items-center pb-0.5"
                  data-clickable
                >
                  <span
                    className="type-label transition-colors duration-250 group-hover:text-[var(--text-ivory)]"
                    style={{ color: "var(--text-warm)" }}
                  >
                    {link.label}
                  </span>
                  <span
                    className="absolute bottom-0 left-0 right-0 h-px w-full origin-center scale-x-0 bg-[var(--gold-primary)] transition-transform duration-300 group-hover:scale-x-100"
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden items-center gap-5 md:flex">
            <button
              aria-label="Search"
              className="transition-colors duration-250 hover:text-[var(--gold-primary)]"
              style={{ color: "var(--text-muted)" }}
              data-clickable
            >
              <Search size={18} strokeWidth={1.5} />
            </button>

            <Link
              href="/cart"
              aria-label="Cart"
              className="relative transition-colors duration-250 hover:text-[var(--gold-primary)]"
              style={{ color: "var(--text-muted)" }}
              data-clickable
              suppressHydrationWarning
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {count > 0 && (
                <span
                  className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full font-[var(--font-dm-sans)] text-[10px] font-normal"
                  style={{
                    background: "var(--gold-primary)",
                    color: "var(--obsidian)",
                  }}
                >
                  {count}
                </span>
              )}
            </Link>

            <Link
              href="/contact"
              className="type-label ml-2 rounded-full border px-5 py-2.5 transition-all duration-300"
              style={{
                borderColor: "var(--gold-primary)",
                color: "var(--gold-primary)",
              }}
              data-clickable
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "var(--gold-primary)";
                el.style.color = "var(--obsidian)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "transparent";
                el.style.color = "var(--gold-primary)";
              }}
            >
              Book a Visit
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="relative z-[201] md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ color: "var(--gold-primary)" }}
            data-clickable
            suppressHydrationWarning
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} strokeWidth={1.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* ─── Full-Screen Mobile Menu ─── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center md:hidden"
            style={{ background: "var(--obsidian)" }}
          >
            {/* Centered logo */}
            <div className="absolute top-6 left-6">
              <span
                className="font-[var(--font-cormorant)] text-[22px] font-extralight tracking-[0.35em]"
                style={{ color: "var(--text-ivory)" }}
              >
                AURORA
              </span>
            </div>

            {/* Nav links — large Cormorant */}
            <nav className="flex flex-col items-center gap-8">
              {/* Collections (expandable on mobile) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0, duration: 0.5, ease }}
                className="flex flex-col items-center gap-4"
              >
                <span
                  className="font-[var(--font-cormorant)] text-[24px] font-extralight"
                  style={{ color: "var(--text-muted)" }}
                >
                  Collections
                </span>
                <div className="flex flex-col items-center gap-3">
                  {COLLECTIONS.map((col) => (
                    <Link
                      key={col.id}
                      href={`/collections/${col.id}`}
                      onClick={() => setOpen(false)}
                      className="font-[var(--font-dm-sans)] text-[13px] font-light uppercase tracking-[0.2em] transition-colors duration-200 hover:text-[var(--gold-primary)]"
                      style={{ color: "var(--text-ivory)" }}
                      data-clickable
                    >
                      {col.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: (i + 1) * 0.08, duration: 0.5, ease }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-[var(--font-cormorant)] text-[48px] font-extralight transition-colors duration-300"
                    style={{ color: "var(--text-ivory)" }}
                    data-clickable
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom: Book a Visit + social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease }}
              className="absolute bottom-12 flex flex-col items-center gap-6"
            >
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="type-label rounded-full border px-8 py-3 transition-all duration-300"
                style={{
                  borderColor: "var(--gold-primary)",
                  color: "var(--gold-primary)",
                }}
                data-clickable
              >
                Book a Visit
              </Link>
              <div className="flex items-center gap-4">
                {[Instagram].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="transition-colors duration-250"
                    style={{ color: "var(--text-muted)" }}
                    data-clickable
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}