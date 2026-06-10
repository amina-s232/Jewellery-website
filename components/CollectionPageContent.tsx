"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import ProductFilter, {
  sortProducts,
  type SortValue,
} from "@/components/ProductFilter";
import type { Product } from "@/lib/collections";

const ease = [0.16, 1, 0.3, 1] as const;

type Collection = {
  id: string;
  name: string;
  description: string;
  image: string;
};

type CollectionPageContentProps = {
  collection: Collection;
  products: Product[];
};

export default function CollectionPageContent({
  collection,
  products,
}: CollectionPageContentProps) {
  const [sortBy, setSortBy] = useState<SortValue>("price-asc");
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.05 });

  const sortedProducts = useMemo(
    () => sortProducts(products, sortBy),
    [products, sortBy]
  );

  return (
    <div style={{ background: "var(--obsidian)" }}>
      <main className="pb-20">
        {/* Breadcrumb + header */}
        <section
          className="px-6 pb-12 pt-28 sm:px-10 lg:px-16"
          style={{
            background: "var(--obsidian)",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <div className="mx-auto max-w-[1400px]">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2">
              <Link
                href="/"
                className="type-label text-[10px] transition-colors duration-250 hover:text-[var(--gold-primary)]"
                style={{ color: "var(--text-muted)" }}
                data-clickable
              >
                Home
              </Link>
              <span style={{ color: "var(--text-muted)" }}>&rsaquo;</span>
              <Link
                href="/#collections"
                className="type-label text-[10px] transition-colors duration-250 hover:text-[var(--gold-primary)]"
                style={{ color: "var(--text-muted)" }}
                data-clickable
              >
                Collections
              </Link>
              <span style={{ color: "var(--text-muted)" }}>&rsaquo;</span>
              <span className="type-label text-[10px]" style={{ color: "var(--text-ivory)" }}>
                {collection.name}
              </span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between"
            >
              <div>
                <span
                  className="type-label mb-4 block text-[10px]"
                  style={{ color: "var(--gold-primary)" }}
                >
                  COLLECTION
                </span>
                <h1
                  className="type-display"
                  style={{ color: "var(--text-ivory)" }}
                >
                  {collection.name}
                </h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ delay: 0.3, duration: 0.6, ease }}
                  className="mt-4 h-px"
                  style={{ background: "var(--gold-primary)" }}
                />
                <p
                  className="mt-4 max-w-xl font-[var(--font-dm-sans)] text-[14px] font-light leading-[1.8]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {collection.description}
                </p>
              </div>
              {products.length > 0 && (
                <div className="shrink-0">
                  <ProductFilter
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                    totalCount={sortedProducts.length}
                  />
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Product grid */}
        <section className="px-6 py-12 sm:px-10 lg:px-16" ref={gridRef}>
          <div className="mx-auto max-w-[1400px]">
            {products.length === 0 ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-[var(--font-dm-sans)] text-[14px] font-light"
                style={{ color: "var(--text-muted)" }}
              >
                No pieces in this collection yet. Check back soon.
              </motion.p>
            ) : (
              <div className="grid gap-[3px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {sortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: 0.1 + index * 0.1,
                      duration: 0.8,
                      ease,
                    }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
