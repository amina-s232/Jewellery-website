"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/components/CartContext";
import type { Product } from "@/lib/collections";

type HomeCollectionProductCardProps = {
  product: Product;
};

export default function HomeCollectionProductCard({
  product,
}: HomeCollectionProductCardProps) {
  const { addItem } = useCart();
  const [wishlisted, setWishlisted] = useState(false);
  const categoryLabel = product.category
    ? product.category.charAt(0).toUpperCase() + product.category.slice(1)
    : "Jewellery";

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlisted((prev) => !prev);
  };

  return (
    <Link
      href={`/product/${product.id}`}
      className="group block w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-white/20 hover:shadow-lg hover:shadow-black/20 sm:w-[300px]"
      data-clickable
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="relative aspect-[4/5] w-full">
        {/* Image fills entire card */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
          sizes="300px"
        />
        {/* Top overlay: Categories + badge + heart */}
        <div className="absolute left-0 right-0 top-0 flex items-start justify-between gap-2 p-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-[var(--font-dm-sans)] text-[10px] uppercase tracking-wider text-white/80">
              Categories
            </span>
            <span className="font-[var(--font-dm-sans)] text-sm font-semibold text-white">
              {categoryLabel}
            </span>
            {product.badge && (
              <span className="rounded bg-[var(--gold-primary)] px-2 py-0.5 font-[var(--font-dm-sans)] text-[10px] font-medium uppercase text-[#111]">
                {product.badge}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={handleWishlist}
            suppressHydrationWarning
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/40 transition-all duration-300 ease-out hover:border-white/50 hover:bg-black/60"
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              size={18}
              strokeWidth={1.5}
              className={wishlisted ? "fill-red-500 text-red-500" : "text-white"}
            />
          </button>
        </div>
        {/* Bottom overlay: gradient + price + Add To Cart */}
        <div
          className="absolute inset-x-0 bottom-0 p-4 pt-16"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
          }}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="font-[var(--font-dm-sans)] text-base font-semibold text-white">
                {product.price.replace(/^From\s+/i, "")}
              </p>
              <p className="mt-0.5 truncate font-[var(--font-dm-sans)] text-xs text-white/80">
                {product.name}
              </p>
            </div>
            <button
              type="button"
              onClick={handleAddToCart}
              suppressHydrationWarning
              className="flex shrink-0 items-center gap-2 rounded-xl bg-white/15 px-3 py-2 font-[var(--font-dm-sans)] text-xs font-medium text-white transition-all duration-300 ease-out hover:bg-white/25"
            >
              <span className="hidden sm:inline">Add To Cart</span>
              <ShoppingCart size={16} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
