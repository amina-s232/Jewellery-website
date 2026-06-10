"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type CollectionCardProps = {
  title: string;
  linkText: string;
  href: string;
  imageSrc: string;
};

export default function CollectionCard({
  title,
  linkText,
  href,
  imageSrc,
}: CollectionCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group flex min-w-[260px] max-w-sm flex-col items-center text-center text-[#EAEAEA]"
    >
      <div className="relative mb-6 w-full overflow-hidden rounded-[28px] bg-[#151515]">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 30vw, 22vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        </div>
      </div>

      <h3 className="font-[var(--font-playfair)] text-lg tracking-[0.16em] text-[#EAEAEA] transition-colors duration-300 group-hover:text-[#D4AF37]">
        {title}
      </h3>
      <Link
        href={href}
        className="mt-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A0A0A0] transition-colors duration-300 hover:text-[#D4AF37]"
      >
        {linkText}
      </Link>
    </motion.div>
  );
}

