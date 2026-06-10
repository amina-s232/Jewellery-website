"use client";

import { useRef } from "react";
import CollectionCard from "./CollectionCard";
import ScrollButtons from "./ScrollButtons";

const collections = [
  {
    title: "DISCOVER RINGS",
    linkText: "THIS WAY \u2192",
    href: "/collections/rings",
    imageSrc:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=90",
  },
  {
    title: "EXPLORE NECKLACES",
    linkText: "THIS WAY \u2192",
    href: "/collections/necklaces",
    imageSrc:
      "https://images.unsplash.com/photo-1659708701940-e60893ef03d0?auto=format&fit=crop&w=800&q=90",
  },
  {
    title: "VIEW EARRINGS",
    linkText: "THIS WAY \u2192",
    href: "/collections/earrings",
    imageSrc:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=90",
  },
];

export default function CollectionSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = direction === "left" ? -320 : 320;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="bg-[#0B0B0B] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="w-full text-center text-[10px] font-semibold uppercase tracking-[0.38em] text-[#A0A0A0]">
            HOW MAY I ASSIST YOU
          </p>
          <div className="hidden sm:block">
            <ScrollButtons
              onPrev={() => handleScroll("left")}
              onNext={() => handleScroll("right")}
            />
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div className="relative">
          {/* Mobile / tablet scroll buttons */}
          <div className="mb-4 flex justify-end sm:hidden">
            <ScrollButtons
              onPrev={() => handleScroll("left")}
              onNext={() => handleScroll("right")}
            />
          </div>

          <div
            ref={scrollRef}
            className="hide-scrollbar flex items-stretch gap-10 overflow-x-auto scroll-smooth"
          >
            {collections.map((item, index) => (
              <div key={item.title} className="flex items-stretch">
                <CollectionCard {...item} />
                {/* Divider between cards, except after last */}
                {index < collections.length - 1 && (
                  <div className="mx-6 hidden h-full w-px bg-[#2A2A2A] sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

