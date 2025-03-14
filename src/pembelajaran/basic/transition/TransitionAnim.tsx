import { motion } from "framer-motion"; // Import motion dari Framer Motion untuk animasi
import { Center } from "../../../components/Center"; // Import komponen Center untuk memposisikan elemen di tengah

export const TransitionSpring: React.FC = () => {
  return (
    <Center>
      <motion.div
        className="w-32 h-32 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center text-white text-lg font-bold cursor-pointer"
        // Tailwind CSS Styles:
        // w-32 h-32   -> Ukuran width & height 32 (128px)
        // bg-purple-500 -> Warna background ungu
        // rounded-lg  -> Membuat sudut elemen melengkung
        // shadow-lg   -> Menambahkan efek bayangan besar
        // flex items-center justify-center -> Memposisikan teks di tengah elemen
        // text-white text-lg font-bold -> Warna teks putih, ukuran lebih besar, dan tebal
        // cursor-pointer -> Kursor berubah menjadi tangan saat di-hover

        animate={{ scale: 1.5 }} // Memperbesar elemen menjadi 1.5x dari ukuran aslinya
        transition={{
          type: "spring", // Menggunakan animasi spring untuk efek elastis
          damping: 5, // Redaman lebih rendah = efek bouncing lebih terasa
          stiffness: 100, // Kekakuan tinggi = gerakan lebih cepat dan responsif
        }}
        whileHover={{
          scale: 1.7, // Saat di-hover, elemen membesar sedikit lebih besar
          rotate: 10, // Memiringkan elemen saat di-hover
          transition: { type: "spring", stiffness: 200 }, // Hover juga pakai efek spring lebih responsif
        }}
      >
        Spring Anim
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
