"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  badge?: string;
  modelPath?: string;
  category?: string;
  description?: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const categoryLabel = product.category
    ? product.category.toUpperCase()
    : "FINE JEWELLERY";
  const description = product.description
    ? product.description.slice(0, 120) + (product.description.length > 120 ? "…" : "")
    : "Hand-finished in our studio for a luminous, understated elegance.";

  return (
    <Link
      href={`/product/${product.id}`}
      className="product-card group relative block h-full overflow-hidden rounded-[2px] border border-transparent transition-all duration-400"
      style={{
        background: "#111",
        borderColor: hovered ? "rgba(201, 168, 76, 0.9)" : "transparent",
        boxShadow: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-clickable
    >
      {/* Full-bleed image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-[0.7s]"
          style={{
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Dark gradient overlay — transparent top 50%, dark band at bottom (reference) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.85) 100%)",
          }}
        />

        {/* Content in dark band: category → rule → name → description → price + icon */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col p-4 pt-8 sm:p-5 sm:pt-10">
          <span
            className="font-[var(--font-dm-sans)] text-[10px] font-normal uppercase tracking-[0.2em]"
            style={{ color: "#C9A84C" }}
          >
            {categoryLabel}
          </span>
          <span
            className="mt-2 block h-px w-10 shrink-0"
            style={{ background: "rgba(201, 168, 76, 0.3)" }}
          />
          <h3
            className="mt-2 font-[var(--font-cormorant)] font-light leading-tight text-[#fff]"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.4rem)",
              letterSpacing: "0.04em",
            }}
          >
            {product.name}
          </h3>
          <p
            className="mt-2 max-w-full font-[var(--font-cormorant)] text-[11px] font-light leading-relaxed text-white/90 sm:text-[12px]"
            style={{ lineHeight: 1.5 }}
          >
            {description}
          </p>
          <div className="mt-3 flex items-end justify-between gap-2">
            <span
              className="font-[var(--font-cormorant)] text-[0.9rem]"
              style={{ color: "#C9A84C" }}
            >
              {product.price}
            </span>
            <span className="flex shrink-0">
              <ShoppingBag
                size={20}
                strokeWidth={1.5}
                style={{ color: "#C9A84C" }}
              />
            </span>
          </div>
        </div>

        {/* Optional badge — top-right */}
        {product.badge && (
          <div
            className="absolute right-3 top-3 rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.15em]"
            style={{
              borderColor: "#C9A84C",
              color: "#C9A84C",
              background: "transparent",
            }}
          >
            {product.badge}
          </div>
        )}
      </div>
    </Link>
  );
}
