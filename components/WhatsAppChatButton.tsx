"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppChatButton() {
  return (
    <motion.a
      href="https://wa.me/?text=Hello%20Aurora%20Jewelers!"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-[#25D366]/60"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0, 0.4] }}
        transition={{
          repeat: Infinity,
          duration: 2.4,
          ease: "easeOut",
        }}
      />
      <FaWhatsapp className="relative z-10 h-5 w-5" />
    </motion.a>
  );
}

