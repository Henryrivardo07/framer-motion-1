"use client";

import { motion } from "framer-motion";
import { Center } from "../../components/Center";

export default function BasicAnimation() {
  return (
    <Center>
      <motion.div
        className="w-40 h-40 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl"
        initial={{ opacity: 0 }} // Mulai dengan opacity 0 (tidak terlihat)
        animate={{ opacity: 1 }} // Animasi menuju opacity 1 (muncul perlahan)
        transition={{ duration: 1 }} // Transisi selama 1 detik
      >
        Hello
      </motion.div>
    </Center>
  );
}
