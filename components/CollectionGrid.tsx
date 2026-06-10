"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HomeCollectionProductCard from "./HomeCollectionProductCard";
import ScrollButtons from "./ScrollButtons";
import { ALL_PRODUCTS } from "@/lib/collections";
import { useRef } from "react";

const collectionProducts = ALL_PRODUCTS.slice(0, 14);

export default function CollectionGrid() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = direction === "left" ? -320 : 320;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      id="collections"
      className="border-t border-white/10 px-6 py-16 sm:px-10 sm:py-20 lg:px-16"
      style={{ background: "var(--obsidian)" }}
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Single horizontal strip: content block + cards (all move together on swipe) */}
          <div
            ref={scrollRef}
            className="collection-swipe hide-scrollbar flex gap-6 overflow-x-auto overflow-y-hidden pb-2 scroll-smooth"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* First item: title + description + More Product (scrolls with cards) */}
            <div
              className="flex min-w-[280px] shrink-0 snap-start flex-col justify-center sm:min-w-[320px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <h2
                className="font-[var(--font-cormorant)] text-3xl font-light tracking-tight text-[var(--text-ivory)] sm:text-4xl lg:text-[2.25rem]"
              >
                Diamonds & Engagement Ring
              </h2>
              <p
                className="mt-4 font-[var(--font-dm-sans)] text-sm font-light leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                Experience the beauty of diamond jewellery and find your perfect
                piece for a special occasion.
                <br />
                Engagement, wedding, anniversary or a luminous everyday moment.
              </p>
              <Link
                href="/collections/rings"
                className="mt-6 inline-flex w-fit items-center justify-center rounded-xl px-6 py-3 font-[var(--font-dm-sans)] text-sm font-medium transition-colors hover:bg-white/5"
                style={{
                  background: "var(--obsidian-4)",
                  color: "var(--text-ivory)",
                  border: "1px solid var(--border-subtle)",
                }}
                data-clickable
              >
                More Product
              </Link>
            </div>

            {/* Product cards in the same row — fade in while scrolling */}
            {collectionProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="shrink-0 snap-start"
                style={{ scrollSnapAlign: "start" }}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: index * 0.03,
                }}
              >
                <HomeCollectionProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex justify-end">
            <ScrollButtons
              onPrev={() => handleScroll("left")}
              onNext={() => handleScroll("right")}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

