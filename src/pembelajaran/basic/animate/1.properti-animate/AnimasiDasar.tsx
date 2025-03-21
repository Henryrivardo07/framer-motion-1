import { Center } from "../../../../components/Center"; // Import komponen Center untuk membantu memposisikan elemen ke tengah
import { motion, Variants } from "framer-motion"; // Import motion dari Framer Motion untuk animasi

export const AnimasiDasar: React.FC = () => {
  // Definisi variants untuk berbagai state animasi
  const variants: Variants = {
    initial: { rotate: 0, backgroundColor: "#ff4500", borderRadius: "10px" }, // Warna awal orange-merah, sudut agak melengkung
    animate: {
      rotate: 360, // Memutar elemen 360 derajat
      backgroundColor: "#ffa500", // Warna berubah menjadi orange
      transition: {
        repeat: Infinity, // Animasi akan terus diulang tanpa batas
        duration: 2, // Durasi animasi 2 detik
        ease: "linear", // Rotasi berjalan dengan kecepatan konstan
      },
    },
    hover: {
      scale: 1.2, // Membesarkan elemen saat hover
      borderRadius: "50px", // Membuat sudut lebih membulat saat hover
      transition: { duration: 0.3 }, // Efek hover berjalan dalam 0.3 detik
    },
    tap: {
      scale: 0.9, // Mengecilkan elemen sedikit saat ditekan
      backgroundColor: "#ffd700", // Mengubah warna menjadi emas saat ditekan
    },
  };

  return (
    <Center>
      <motion.div
        className="w-40 h-40 shadow-lg mx-auto flex items-center justify-center text-white text-xl"
        variants={variants} // Menghubungkan motion.div dengan variants
        initial="initial" // Status awal sebelum animasi
        animate="animate" // Status saat animasi berjalan
        whileHover="hover" // Status saat di-hover
        whileTap="tap" // Status saat ditekan
      >
        Animasi Variants
      </motion.div>
    </Center>
  );
};
