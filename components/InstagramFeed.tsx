"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const instaImages = [
  // These are placeholder remote images – replace with your own later.
  "https://i.pinimg.com/736x/da/53/9c/da539cf71796d419b6ba008abbe7509d.jpg",
  "https://i.pinimg.com/736x/da/53/9c/da539cf71796d419b6ba008abbe7509d.jpg",
  "https://i.pinimg.com/736x/da/53/9c/da539cf71796d419b6ba008abbe7509d.jpg",
  "https://i.pinimg.com/736x/da/53/9c/da539cf71796d419b6ba008abbe7509d.jpg",
  "https://i.pinimg.com/736x/da/53/9c/da539cf71796d419b6ba008abbe7509d.jpg",
  "https://i.pinimg.com/736x/da/53/9c/da539cf71796d419b6ba008abbe7509d.jpg",
  "https://i.pinimg.com/736x/da/53/9c/da539cf71796d419b6ba008abbe7509d.jpg",
  "https://i.pinimg.com/736x/da/53/9c/da539cf71796d419b6ba008abbe7509d.jpg",
  "https://i.pinimg.com/736x/da/53/9c/da539cf71796d419b6ba008abbe7509d.jpg",
];

export default function InstagramFeed() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-8 lg:gap-10">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
            Instagram
          </p>
          <h2 className="font-[var(--font-playfair)] text-3xl tracking-tight text-zinc-900 sm:text-4xl">
            Moments from our studio.
          </h2>
        </div>
        <a
          href="https://instagram.com/aurorajewelers"
          target="_blank"
          rel="noreferrer"
          className="text-xs uppercase tracking-[0.3em] text-zinc-700 hover:text-[#b76e79]"
        >
          @aurorajewelers
        </a>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-6">
        {instaImages.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.03 }}
            className={`group relative aspect-square overflow-hidden rounded-2xl bg-[#f5f5f5] ${
              index === 0 || index === 5 ? "md:col-span-2" : ""
            }`}
          >
            <Image
              src={src}
              alt="Aurora Jewelers Instagram highlight"
              fill
              className="object-cover object-center transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />
            <div className="pointer-events-none absolute inset-0 flex items-end justify-start p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="rounded-full bg-white/80 px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-zinc-900 backdrop-blur-sm">
                @aurorajewelers
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

