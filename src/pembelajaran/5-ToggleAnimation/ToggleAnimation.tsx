"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ToggleAnimation() {
  const [isOpen, setIsOpen] = useState(false); // State untuk mengontrol ukuran elemen

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="w-40 h-40 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-xl mb-4"
        animate={{ scale: isOpen ? 1.5 : 1 }} // Membesar jika isOpen = true
        transition={{ duration: 0.5 }} // Transisi selama 0.5 detik
      >
        Box
      </motion.div>
      <button
        className="px-6 py-2 bg-gray-700 text-white rounded-lg"
        onClick={() => setIsOpen(!isOpen)} // Toggle state saat tombol diklik
      >
        Toggle Size
      </button>
    </div>
  );
}
