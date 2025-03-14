import { motion } from "framer-motion"; // Import motion dari Framer Motion untuk animasi
import { Center } from "../../../components/Center"; // Import komponen Center untuk memposisikan elemen di tengah

export const InitialTranslate: React.FC = () => {
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

        initial={{ x: -200 }} // Elemen mulai dari posisi -200px di sumbu X (di luar layar sebelah kiri)
        animate={{
          x: 0, // Elemen bergerak ke posisi x = 0 (posisi normal)
        }}
        transition={{
          duration: 3, // Animasi berjalan selama 3 detik
          ease: "easeOut", // Efek easing untuk pergerakan yang halus di akhir
        }}
        whileHover={{
          scale: 1.1, // Saat di-hover, elemen sedikit membesar
          transition: { duration: 0.2 }, // Efek hover terjadi dalam 0.2 detik
        }}
      >
        Moving In
      </motion.div>
    </Center>
  );
};

/*
🔍 Peningkatan & Penjelasan Kode:
Menambahkan teks "Moving In"
→ Supaya lebih jelas bahwa elemen ini bergerak masuk dari kiri.

Menggunakan cursor-pointer
→ Memberi indikasi bahwa elemen bisa di-hover.

Efek initial: { x: -200 }

Elemen mulai dari posisi -200px di sumbu X (di luar layar sebelah kiri).
animate: { x: 0 } → Perlahan masuk ke posisi normal (0).
Menggunakan easeOut transition

ease: "easeOut" → Animasi berjalan cepat di awal lalu melambat di akhir.
Menambahkan efek whileHover

Saat di-hover, elemen membesar 1.1x dalam 0.2 detik.

*/
