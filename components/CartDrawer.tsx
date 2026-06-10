"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useCart } from "./CartContext";

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, count } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[120] bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            className="fixed right-0 top-0 z-[130] flex h-screen w-full max-w-md flex-col bg-[#0c0b0a] border-l"
            style={{ borderColor: "var(--border-gold)" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: "var(--border-subtle)" }}>
              <div>
                <p className="type-label text-[10px]" style={{ color: "var(--text-muted)" }}>
                  Your Cart
                </p>
                <p className="mt-1 text-sm" style={{ color: "var(--text-ivory)" }}>
                  {count} item{count === 1 ? "" : "s"}
                </p>
              </div>
              <button
                aria-label="Close cart"
                onClick={onClose}
                className="p-1"
                style={{ color: "var(--text-muted)" }}
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 && (
                <p
                  className="text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  Your cart is empty.
                </p>
              )}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 border-b pb-4 last:border-b-0"
                  style={{ borderColor: "var(--border-subtle)" }}
                >
                  <div className="relative h-16 w-16 overflow-hidden bg-black/40">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1">
                    <p
                      className="font-[var(--font-cormorant)] text-[15px]"
                      style={{ color: "var(--text-ivory)" }}
                    >
                      {item.name}
                    </p>
                    <p
                      className="text-[11px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Qty {item.quantity}
                    </p>
                  </div>
                  <p
                    className="text-[13px]"
                    style={{ color: "var(--gold-primary)" }}
                  >
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t px-6 py-4" style={{ borderColor: "var(--border-subtle)" }}>
              <button
                className="w-full h-11 type-label text-[10px] tracking-[0.25em] rounded-full"
                style={{
                  background: "var(--gold-primary)",
                  color: "var(--obsidian)",
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

