import { motion } from "framer-motion"; // Import motion dari Framer Motion untuk animasi
import { Center } from "../../../components/Center"; // Import komponen Center untuk memposisikan elemen di tengah

export const TransitionTween: React.FC = () => {
  return (
    <Center>
      <motion.div
        className="w-32 h-32 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white text-lg font-bold cursor-pointer"
        // Tailwind CSS Styles:
        // w-32 h-32   -> Ukuran width & height 32 (128px)
        // bg-blue-500 -> Warna background biru
        // rounded-lg  -> Membuat sudut elemen melengkung
        // shadow-lg   -> Menambahkan efek bayangan besar
        // flex items-center justify-center -> Memposisikan teks di tengah elemen
        // text-white text-lg font-bold -> Warna teks putih, ukuran lebih besar, dan tebal
        // cursor-pointer -> Kursor berubah menjadi tangan saat di-hover

        animate={{ scale: 1.5 }} // Memperbesar elemen menjadi 1.5x dari ukuran aslinya
        transition={{
          type: "tween", // Tipe transisi tween (default)
          duration: 2, // Durasi animasi dalam 2 detik
          ease: "easeInOut", // Easing untuk efek smooth masuk dan keluar
        }}
        whileHover={{
          scale: 1.7, // Saat di-hover, elemen membesar lebih sedikit
          rotate: 10, // Memiringkan elemen saat di-hover
          transition: { duration: 0.3 }, // Efek hover terjadi dalam 0.3 detik
        }}
      >
        Tween Anim
      </motion.div>
    </Center>
  );
};

/*
🔍 Peningkatan & Penjelasan Kode:
Menambahkan teks "Tween Anim"
→ Supaya lebih jelas bahwa elemen ini mengalami animasi tween.

Menggunakan cursor-pointer
→ Memberi indikasi bahwa elemen bisa di-hover.

Efek animate: { scale: 1.5 }

Elemen membesar 1.5x dari ukuran aslinya dalam 2 detik.
Menggunakan easeInOut pada transisi tween

ease: "easeInOut" → Mulai lambat → lebih cepat di tengah → melambat di akhir.
Menambahkan efek whileHover

Saat di-hover, elemen:
Membesar hingga 1.7x ukuran aslinya
Sedikit berputar (rotate 10 derajat)
Transisi hover dalam 0.3 detik untuk efek yang lebih smooth.
*/
