"use client";

import { ChevronDown } from "lucide-react";
import type { Product } from "@/lib/collections";

const SORT_OPTIONS = [
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A–Z" },
  { value: "name-desc", label: "Name: Z–A" },
] as const;

export type SortValue = (typeof SORT_OPTIONS)[number]["value"];

function parsePrice(priceStr: string): number {
  const match = priceStr.replace(/,/g, "").match(/[₹$]?(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

export function sortProducts(products: Product[], sortBy: SortValue): Product[] {
  const copy = [...products];
  switch (sortBy) {
    case "price-asc":
      return copy.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    case "price-desc":
      return copy.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    case "name-asc":
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return copy.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return copy;
  }
}

type ProductFilterProps = {
  sortBy: SortValue;
  onSortChange: (value: SortValue) => void;
  totalCount: number;
};

export default function ProductFilter({
  sortBy,
  onSortChange,
  totalCount,
}: ProductFilterProps) {
  return (
    <div className="flex flex-col items-end gap-2">
      <p
        className="font-[var(--font-dm-sans)] text-[10px] font-light tracking-[0.15em] uppercase"
        style={{ color: "var(--text-muted)" }}
      >
        {totalCount} {totalCount === 1 ? "piece" : "pieces"}
      </p>
      <div className="relative">
        <select
          id="product-sort"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortValue)}
          className="appearance-none rounded-sm border py-2.5 pl-4 pr-10 font-[var(--font-dm-sans)] text-[11px] font-light tracking-[0.12em] uppercase transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[var(--gold-primary)] focus:ring-offset-0"
          style={{
            color: "var(--text-ivory)",
            backgroundColor: "var(--obsidian-3)",
            borderColor: "var(--border-gold)",
          }}
          data-clickable
        >
          {SORT_OPTIONS.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              style={{ backgroundColor: "var(--obsidian-4)" }}
            >
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={12}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
          style={{ color: "var(--gold-warm)" }}
        />
      </div>
    </div>
  );
}
