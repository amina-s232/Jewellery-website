"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Plus, Minus, MessageCircle } from "lucide-react";
import type { Product } from "@/lib/collections";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/components/CartContext";

const ease = [0.16, 1, 0.3, 1] as const;

type ProductDetailContentProps = {
  product: Product;
  relatedProducts: Product[];
};

type AccordionItemProps = {
  label: string;
  value: string;
};

function AccordionItem({ label, value }: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--border-subtle)" }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4"
        data-clickable
      >
        <span className="type-label text-[10px]" style={{ color: "var(--text-warm)" }}>
          {label}
        </span>
        {open ? (
          <Minus size={14} strokeWidth={1.5} style={{ color: "var(--gold-primary)" }} />
        ) : (
          <Plus size={14} strokeWidth={1.5} style={{ color: "var(--gold-primary)" }} />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <p
              className="pb-4 font-[var(--font-dm-sans)] text-[13px] font-light leading-[1.7]"
              style={{ color: "var(--text-muted)" }}
            >
              {value}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductDetailContent({
  product,
  relatedProducts,
}: ProductDetailContentProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = product.images?.length ? product.images : [product.image];
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const specs = [
    product.material && { label: "Material", value: product.material },
    product.size && { label: "Dimensions", value: product.size },
    {
      label: "Care",
      value:
        "Store in soft pouch. Avoid contact with chemicals and water when possible. Professional cleaning recommended annually.",
    },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div style={{ background: "var(--obsidian)" }}>
      <main>
        {/* Split layout: left info (sticky), right images */}
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[420px_1fr]">
          {/* ─── LEFT PANEL (sticky) ─── */}
          <div
            className="order-2 flex flex-col px-6 py-10 sm:px-10 lg:sticky lg:top-0 lg:order-1 lg:h-screen lg:overflow-y-auto lg:px-12 lg:py-0"
            style={{
              background: "var(--obsidian)",
              borderRight: "1px solid var(--border-gold)",
            }}
          >
            <div className="lg:pt-[120px]">
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
                <Link
                  href={`/collections/${product.category}`}
                  className="type-label text-[10px] capitalize transition-colors duration-250 hover:text-[var(--gold-primary)]"
                  style={{ color: "var(--text-muted)" }}
                  data-clickable
                >
                  {product.category}
                </Link>
              </nav>

              {/* Category label */}
              <span
                className="type-label mb-3 block text-[10px]"
                style={{ color: "var(--gold-primary)" }}
              >
                {product.category?.toUpperCase()}
              </span>

              {/* Product name */}
              <h1
                className="font-[var(--font-cormorant)] text-[clamp(32px,4vw,42px)] font-extralight leading-[1.1]"
                style={{ color: "var(--text-ivory)" }}
              >
                {product.name}
              </h1>

              {/* Gold rule */}
              <div
                className="my-6 h-px w-[60px]"
                style={{ background: "var(--gold-primary)" }}
              />

              {/* Price */}
              <p
                className="font-[var(--font-cormorant)] text-[clamp(28px,3vw,36px)] font-extralight"
                style={{ color: "var(--gold-warm)" }}
              >
                {product.price}
              </p>

              {/* Description */}
              {product.description && (
                <p
                  className="mt-6 font-[var(--font-dm-sans)] text-[14px] font-light leading-[1.8]"
                  style={{ color: "var(--text-warm)" }}
                >
                  {product.description}
                </p>
              )}

              {/* Accordion specs */}
              <div className="mt-8">
                {specs.map((item) => (
                  <AccordionItem key={item.label} label={item.label} value={item.value} />
                ))}
              </div>

              {/* Add to Cart */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="mt-8 flex h-[52px] w-full items-center justify-center gap-2 font-[var(--font-cormorant)] text-[18px] font-light italic transition-colors duration-300"
                style={{
                  background: "var(--gold-primary)",
                  color: "var(--obsidian)",
                }}
                data-clickable
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--gold-warm)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--gold-primary)";
                }}
                onClick={() => {
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: images[0] ?? product.image,
                  });
                  setAdded(true);
                  window.setTimeout(() => setAdded(false), 2000);
                }}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {added ? "Added" : "Add to Cart"}
              </motion.button>

              {/* WhatsApp specialist */}
              <a
                href="https://wa.me/?text=Hello%20Aurora%20Jewelers!"
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-2 font-[var(--font-dm-sans)] text-[12px] font-light transition-colors duration-250 hover:text-[var(--gold-primary)]"
                style={{ color: "var(--text-muted)" }}
                data-clickable
              >
                <MessageCircle size={14} strokeWidth={1.5} />
                Chat with a Specialist
              </a>
            </div>
          </div>

          {/* ─── RIGHT PANEL (images) ─── */}
          <div
            className="order-1 px-6 py-10 sm:px-10 lg:order-2 lg:px-[60px] lg:pt-[100px]"
            style={{ background: "var(--obsidian-2)" }}
          >
            {/* Main image */}
            <div
              className="relative mx-auto w-full overflow-hidden"
              style={{ maxHeight: "680px" }}
            >
              <Image
                src={images[selectedImage] ?? product.image}
                alt={product.name}
                width={800}
                height={800}
                className="mx-auto w-full object-contain"
                style={{
                  maxHeight: "680px",
                  boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
                }}
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="mt-6 flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedImage(i)}
                    className="relative h-20 w-20 flex-shrink-0 overflow-hidden border transition-all duration-300"
                    style={{
                      borderColor:
                        selectedImage === i
                          ? "var(--gold-primary)"
                          : "transparent",
                    }}
                    data-clickable
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Related products */}
            {relatedProducts.length > 0 && (
              <div className="mt-16">
                <h2
                  className="type-editorial mb-8"
                  style={{ color: "var(--text-ivory)" }}
                >
                  You may also like
                </h2>
                <div className="grid gap-[3px] sm:grid-cols-2 lg:grid-cols-3">
                  {relatedProducts.slice(0, 3).map((rel) => (
                    <ProductCard key={rel.id} product={rel} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
