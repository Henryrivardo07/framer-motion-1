"use client";
import { motion } from "framer-motion";
import { Center } from "../../components/Center";
import { fadeIn } from "../../animations/variant";

export default function MoveAndScale() {
  return (
    <Center>
      <motion.div
        className="w-40 h-40 bg-green-500 rounded-lg flex items-center justify-center text-white text-xl"
        animate={{ x: 100, scale: 1.2 }} // Bergerak ke kanan sejauh 100px dan membesar 1.2x
        transition={{ type: "spring", stiffness: 100 }} // Menggunakan efek pegas
        variants={fadeIn}
      >
        Move Me
      </motion.div>
    </Center>
  );
}
