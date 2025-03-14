import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ y: -50, opacity: 0 }} // Muncul dari atas dengan efek fade-in
        animate={{ y: 0, opacity: 1 }} // Bergerak ke tempatnya dan muncul
        transition={{ duration: 0.8 }} // Transisi selama 0.8 detik
      >
        Welcome to My Website
      </motion.h1>
      <motion.p
        className="mt-4 text-lg"
        initial={{ opacity: 0 }} // Mulai tidak terlihat
        animate={{ opacity: 1 }} // Fade-in setelah delay
        transition={{ delay: 0.5, duration: 1 }} // Delay 0.5 detik, transisi 1 detik
      >
        Explore amazing features with smooth animations.
      </motion.p>
      <motion.button
        className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg"
        whileHover={{ scale: 1.1 }} // Membesar saat hover
        whileTap={{ scale: 0.9 }} // Mengecil saat diklik
      >
        Get Started
      </motion.button>
    </section>
  );
}
