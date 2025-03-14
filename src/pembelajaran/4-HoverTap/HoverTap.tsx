"use client";
import { motion } from "framer-motion";

export default function HoverTap() {
  return (
    <motion.button
      className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg"
      whileHover={{ scale: 1.1 }} // Membesar saat hover
      whileTap={{ scale: 0.9 }} // Mengecil saat diklik
    >
      Click Me
    </motion.button>
  );
}
