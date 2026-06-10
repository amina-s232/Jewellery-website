"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";
import { useCart } from "@/components/CartContext";

const ease = [0.16, 1, 0.3, 1] as const;

function parsePrice(priceStr: string): number {
  const match = priceStr.replace(/,/g, "").match(/[₹$]?(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export default function CheckoutPage() {
  const { items } = useCart();

  const subtotal = items.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  // If cart is empty, redirect to cart after a short delay (client-side)
  useEffect(() => {
    if (items.length === 0 && typeof window !== "undefined") {
      window.location.href = "/cart";
    }
  }, [items.length]);

  if (items.length === 0) {
    return (
      <div style={{ background: "var(--obsidian)" }}>
        <Navbar />
        <main className="flex min-h-[60vh] items-center justify-center px-6">
          <p style={{ color: "var(--text-muted)" }}>Redirecting to cart...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ background: "var(--obsidian)" }}>
      <Navbar />
      <main className="min-h-screen">
        <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
          <div className="mx-auto max-w-[720px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <h1
                className="font-[var(--font-cormorant)] text-[clamp(2rem,4vw,3rem)] font-extralight"
                style={{ color: "var(--text-ivory)" }}
              >
                Checkout
              </h1>
              <p
                className="mt-2 font-[var(--font-dm-sans)] text-[14px] font-light"
                style={{ color: "var(--text-muted)" }}
              >
                Review your order and complete your purchase.
              </p>
            </motion.div>

            {/* Order summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease }}
              className="mt-10 rounded-sm border py-6 px-6"
              style={{
                borderColor: "var(--border-gold)",
                background: "var(--obsidian-2)",
              }}
            >
              <h2
                className="font-[var(--font-dm-sans)] text-[11px] font-medium uppercase tracking-[0.2em] mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Order Summary
              </h2>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-4 border-b pb-4 last:border-b-0"
                    style={{ borderColor: "var(--border-subtle)" }}
                  >
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden bg-black/40">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-[var(--font-cormorant)] text-[15px] font-light" style={{ color: "var(--text-ivory)" }}>
                        {item.name}
                      </p>
                      <p className="text-[12px]" style={{ color: "var(--text-muted)" }}>
                        Qty {item.quantity} × {item.price}
                      </p>
                    </div>
                    <p className="text-[13px] font-medium" style={{ color: "var(--gold-primary)" }}>
                      {formatPrice(parsePrice(item.price) * item.quantity)}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-between border-t pt-4" style={{ borderColor: "var(--border-subtle)" }}>
                <span className="font-[var(--font-dm-sans)] text-[14px] font-light" style={{ color: "var(--text-muted)" }}>
                  Subtotal
                </span>
                <span className="font-[var(--font-dm-sans)] text-[16px] font-medium" style={{ color: "var(--gold-primary)" }}>
                  {formatPrice(subtotal)}
                </span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
            >
              <Link
                href="/cart"
                className="group inline-flex items-center justify-center rounded-full border-2 px-8 py-4 font-[var(--font-dm-sans)] text-[12px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[var(--gold-whisper)] hover:border-[var(--gold-primary)]"
                style={{
                  borderColor: "var(--border-gold)",
                  color: "var(--text-ivory)",
                }}
                data-clickable
              >
                Back to Cart
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-full px-8 py-4 font-[var(--font-dm-sans)] text-[12px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-[0_0_28px_rgba(201,168,76,0.25)] hover:-translate-y-0.5"
                style={{
                  background: "var(--gold-primary)",
                  color: "var(--obsidian)",
                }}
                data-clickable
              >
                Complete Order
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppChatButton />
    </div>
  );
}
