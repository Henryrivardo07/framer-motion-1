"use client";
import { motion } from "framer-motion";

export default function EntryAnimation() {
  return (
    <motion.div
      className="w-40 h-40 bg-red-500 rounded-lg flex items-center justify-center text-white text-xl"
      initial={{ y: 50, opacity: 0 }} // Mulai dari bawah (y: 50) dan tidak terlihat (opacity: 0)
      animate={{ y: 0, opacity: 1 }} // Naik ke posisi normal (y: 0) dan muncul (opacity: 1)
      transition={{ duration: 0.5 }} // Transisi selama 0.5 detik
    >
      Slide Up
    </motion.div>
  );
}
