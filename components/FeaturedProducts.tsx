"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { ALL_PRODUCTS } from "@/lib/collections";

const ease = [0.16, 1, 0.3, 1] as const;

// Featured product (big image) + grid (remaining 9 for 3x3)
const featuredProduct = ALL_PRODUCTS[0];
const gridProducts = ALL_PRODUCTS.slice(1, 10); // 9 products for 3x3

const SECTION_DESCRIPTION =
  "Hand-picked pieces that balance timeless elegance with a modern touch. " +
  "Each piece is crafted with care for those who appreciate understated luxury.";

export default function FeaturedProducts() {
  const stackProduct = featuredProduct;
  const stackImage = stackProduct?.image;

  return (
    <section
      id="shop"
      className="relative py-24 lg:py-32"
      style={{ background: "var(--obsidian-2)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        {/* Section Header: title + description centered, same level as image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="mb-14 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-xl text-center lg:text-left">
            <span
              className="type-label mb-4 block text-[10px]"
              style={{ color: "var(--gold-primary)" }}
            >
              NEW ARRIVALS
            </span>
            <h2 className="type-display">
              <span style={{ color: "var(--text-ivory)" }}>Curated </span>
              <span
                className="italic"
                style={{ color: "var(--gold-warm)" }}
              >
                Pieces
              </span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.6, ease }}
              className="mx-auto mt-4 h-px lg:mx-0"
              style={{ background: "var(--gold-primary)" }}
            />
            <p
              className="mt-4 font-[var(--font-dm-sans)] text-[14px] font-light leading-[1.75]"
              style={{ color: "var(--text-muted)" }}
            >
              {SECTION_DESCRIPTION}
            </p>
          </div>

          {/* Featured image block — lower, bigger, with editorial details */}
          {stackProduct && stackImage && (
            <div className="mt-8 flex flex-col items-center text-center lg:mt-0 lg:items-end lg:text-right">
              <Link
                href={`/product/${stackProduct.id}`}
                className="relative block h-[320px] w-[240px] shrink-0 sm:h-[400px] sm:w-[300px] lg:h-[480px] lg:w-[360px]"
                data-clickable
              >
                {/* Back card */}
                <div
                  className="absolute inset-0 origin-bottom-left transition-transform duration-300"
                  style={{
                    transform: "translate(-12px, 12px) rotate(-4deg)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: 4,
                    background: "var(--obsidian-4)",
                  }}
                />
                {/* Middle card */}
                <div
                  className="absolute inset-0 origin-bottom-left transition-transform duration-300"
                  style={{
                    transform: "translate(-6px, 6px) rotate(-2deg)",
                    border: "1px solid var(--border-gold)",
                    borderRadius: 4,
                    background: "var(--obsidian-3)",
                    boxShadow: "var(--shadow-deep)",
                  }}
                />
                {/* Front card — image with hover animation */}
                <motion.div
                  className="absolute inset-0 overflow-hidden rounded-sm cursor-pointer"
                  style={{
                    border: "1px solid var(--border-gold)",
                    boxShadow: "var(--shadow-deep)",
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                    boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
                    transition: { duration: 0.28, ease: "easeOut" },
                  }}
                >
                  <Image
                    src={stackImage}
                    alt={stackProduct.name}
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 1024px) 300px, 360px"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 40%, rgba(8,7,5,0.7) 100%)",
                    }}
                  />

                  {/* In-card title + description, inspired by reference layout */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p
                      className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em]"
                      style={{ color: "var(--text-ghost)" }}
                    >
                      New Arrivals
                    </p>
                    <h3
                      className="font-[var(--font-cormorant)] text-[22px] sm:text-[24px] font-light leading-tight"
                      style={{ color: "var(--text-ivory)" }}
                    >
                      {stackProduct.name}
                    </h3>
                    <p
                      className="mt-2 max-w-xs text-[11px] font-[var(--font-dm-sans)] font-light leading-relaxed"
                      style={{ color: "var(--text-warm)" }}
                    >
                      The beauty of simplicity, captured in a single luminous
                      piece for your everyday rituals.
                    </p>
                  </div>
                </motion.div>
              </Link>
            </div>
          )}
        </motion.div>

        {/* Product Grid — 3x3 uniform cards with scroll fade-in */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gridProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                delay: 0.12 + i * 0.06,
                duration: 0.55,
                ease,
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
