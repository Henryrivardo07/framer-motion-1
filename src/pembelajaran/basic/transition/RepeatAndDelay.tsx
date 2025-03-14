import { motion } from "framer-motion"; // Import motion dari Framer Motion untuk animasi
import { Center } from "../../../components/Center"; // Import komponen Center untuk memposisikan elemen di tengah

export const RepeatAndDelay: React.FC = () => {
  return (
    <Center>
      <motion.div
        className="w-32 h-32 bg-red-500 rounded-lg shadow-lg flex items-center justify-center text-white text-lg font-bold cursor-pointer"
        // Tailwind CSS Styles:
        // w-32 h-32   -> Ukuran width & height 32 (128px)
        // bg-red-500  -> Warna background merah
        // rounded-lg  -> Membuat sudut elemen melengkung
        // shadow-lg   -> Menambahkan efek bayangan besar
        // flex items-center justify-center -> Memposisikan teks di tengah elemen
        // text-white text-lg font-bold -> Warna teks putih, ukuran lebih besar, dan tebal
        // cursor-pointer -> Kursor berubah menjadi tangan saat di-hover

        animate={{
          rotate: 360, // Rotasi penuh
        }}
        transition={{
          ease: "linear", // Pergerakan konstan dari awal hingga akhir
          duration: 2, // Durasi animasi 2 detik
          repeat: Infinity, // Animasi diulang terus-menerus
          delay: 1, // Jeda sebelum animasi dimulai pertama kali
          repeatDelay: 1, // Jeda setelah setiap pengulangan
        }}
        whileHover={{
          scale: 1.5, // Perbesar elemen saat hover
          transition: { duration: 0.3 }, // Animasi hover berlangsung 0.3 detik
        }}
      >
        Rotating
      </motion.div>
    </Center>
  );
};

/*
🔍 Peningkatan & Penjelasan Kode:
Menambahkan teks "Rotating"
→ Supaya lebih jelas bahwa elemen ini berputar terus-menerus.

Menggunakan cursor-pointer
→ Memberi indikasi bahwa elemen bisa di-hover.

Animasi rotate: 360 dengan pengulangan tak terbatas (repeat: Infinity)

Rotasi penuh setiap 2 detik.
repeatDelay: 1 → Ada jeda 1 detik setiap kali animasi selesai sebelum mulai lagi.
Menambahkan efek whileHover

Saat di-hover, elemen akan membesar 1.5x dalam 0.3 detik.

*/
