"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // State untuk mengontrol sidebar

  return (
    <div className="flex">
      <motion.div
        className="bg-gray-800 text-white h-screen p-5"
        initial={{ x: -250 }} // Sidebar mulai tersembunyi di luar layar
        animate={{ x: isOpen ? 0 : -250 }} // Muncul jika isOpen = true, tersembunyi jika false
        transition={{ duration: 0.5 }} // Transisi selama 0.5 detik
      >
        <p>Menu</p>
        <p>About</p>
        <p>Contact</p>
      </motion.div>
      <button
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setIsOpen(!isOpen)} // Toggle state saat tombol diklik
      >
        Toggle Menu
      </button>
    </div>
  );
}
