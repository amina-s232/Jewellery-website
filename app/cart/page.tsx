"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trash2, ShoppingBag } from "lucide-react";
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

export default function CartPage() {
  const { items, removeItem } = useCart();

  const subtotal = items.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  return (
    <div style={{ background: "var(--obsidian)" }}>
      <Navbar />
      <main className="min-h-screen">
        <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
          <div className="mx-auto max-w-[900px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <h1
                className="font-[var(--font-cormorant)] text-[clamp(2rem,4vw,3rem)] font-extralight"
                style={{ color: "var(--text-ivory)" }}
              >
                Your Cart
              </h1>
              <p
                className="mt-2 font-[var(--font-dm-sans)] text-[14px] font-light"
                style={{ color: "var(--text-muted)" }}
              >
                {items.length} item{items.length === 1 ? "" : "s"}
              </p>
            </motion.div>

            {items.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5, ease }}
                className="mt-12 flex flex-col items-center justify-center rounded-sm border py-20 text-center"
                style={{
                  borderColor: "var(--border-gold)",
                  background: "var(--obsidian-2)",
                }}
              >
                <ShoppingBag
                  size={48}
                  strokeWidth={1}
                  className="mb-4"
                  style={{ color: "var(--text-ghost)" }}
                />
                <p
                  className="font-[var(--font-cormorant)] text-xl font-light"
                  style={{ color: "var(--text-warm)" }}
                >
                  Your cart is empty
                </p>
                <p
                  className="mt-2 font-[var(--font-dm-sans)] text-[13px] font-light"
                  style={{ color: "var(--text-muted)" }}
                >
                  Add pieces you love from our collections.
                </p>
                <Link
                  href="/#collections"
                  className="mt-8 inline-flex items-center justify-center rounded-full border-2 px-8 py-4 font-[var(--font-dm-sans)] text-[12px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[var(--gold-whisper)] hover:border-[var(--gold-primary)] hover:shadow-[0_0_24px_rgba(201,168,76,0.15)]"
                  style={{
                    borderColor: "var(--border-gold)",
                    color: "var(--text-ivory)",
                  }}
                  data-clickable
                >
                  Continue Shopping
                </Link>
              </motion.div>
            ) : (
              <>
                {/* List */}
                <ul className="mt-10 space-y-0 border-b" style={{ borderColor: "var(--border-subtle)" }}>
                  {items.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4, ease }}
                      className="flex items-center gap-4 border-t py-6 first:border-t-0 sm:gap-6"
                      style={{ borderColor: "var(--border-subtle)" }}
                    >
                      <Link
                        href={`/product/${item.id}`}
                        className="group relative flex flex-1 items-center gap-4 min-w-0"
                        data-clickable
                      >
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-black/40 sm:h-24 sm:w-24 transition-transform duration-300 group-hover:scale-[1.02]">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p
                            className="font-[var(--font-cormorant)] text-[17px] font-light sm:text-[19px] transition-colors group-hover:text-[var(--gold-primary)]"
                            style={{ color: "var(--text-ivory)" }}
                          >
                            {item.name}
                          </p>
                          <p
                            className="mt-1 font-[var(--font-dm-sans)] text-[12px] font-light"
                            style={{ color: "var(--text-muted)" }}
                          >
                            Qty {item.quantity} · <span className="text-[var(--gold-primary)] opacity-80 group-hover:opacity-100">View product</span>
                          </p>
                        </div>
                      </Link>
                      <div className="flex items-center gap-4">
                        <p
                          className="font-[var(--font-dm-sans)] text-[14px] font-medium"
                          style={{ color: "var(--gold-primary)" }}
                        >
                          {item.price}
                          {item.quantity > 1 && (
                            <span className="ml-1 font-normal" style={{ color: "var(--text-muted)" }}>
                              × {item.quantity}
                            </span>
                          )}
                        </p>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name} from cart`}
                          className="p-2 transition-colors hover:text-red-400"
                          style={{ color: "var(--text-muted)" }}
                          suppressHydrationWarning
                        >
                          <Trash2 size={18} strokeWidth={1.5} />
                        </button>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                {/* Subtotal + Checkout */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5, ease }}
                  className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <p className="font-[var(--font-dm-sans)] text-[14px] font-light" style={{ color: "var(--text-muted)" }}>
                    Subtotal:{" "}
                    <span className="font-medium" style={{ color: "var(--gold-primary)" }}>
                      {formatPrice(subtotal)}
                    </span>
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                    <Link
                      href="/#collections"
                      className="group inline-flex items-center justify-center rounded-full border-2 px-8 py-4 font-[var(--font-dm-sans)] text-[12px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[var(--gold-whisper)] hover:border-[var(--gold-primary)] hover:shadow-[0_0_24px_rgba(201,168,76,0.15)]"
                      style={{
                        borderColor: "var(--border-gold)",
                        color: "var(--text-ivory)",
                      }}
                      data-clickable
                    >
                      Continue Shopping
                    </Link>
                    <Link
                      href={items.length > 0 ? "/checkout" : "/#collections"}
                      className="group inline-flex items-center justify-center rounded-full px-8 py-4 font-[var(--font-dm-sans)] text-[12px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-[0_0_28px_rgba(201,168,76,0.25)] hover:-translate-y-0.5"
                      style={{
                        background: "var(--gold-primary)",
                        color: "var(--obsidian)",
                      }}
                      data-clickable
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppChatButton />
    </div>
  );
}
