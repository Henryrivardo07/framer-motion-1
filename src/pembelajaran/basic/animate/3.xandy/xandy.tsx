import { motion } from "framer-motion"; // Import motion dari Framer Motion untuk animasi
import { Center } from "../../../../components/Center";

export const XAndYRule: React.FC = () => {
  return (
    <Center>
      <motion.div
        className="w-32 h-32 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white text-lg font-semibold  text-center"
        // Tailwind CSS Styles:
        // w-32 h-32   -> Ukuran width & height 32 (128px)
        // bg-blue-500 -> Warna background biru
        // rounded-lg  -> Membuat sudut elemen melengkung
        // shadow-lg   -> Menambahkan efek bayangan besar
        // flex items-center justify-center -> Memposisikan teks di tengah elemen
        // text-white text-lg font-semibold -> Warna teks putih, ukuran teks lebih besar, dan tebal

        initial={{ y: 0 }} // Posisi awal elemen sebelum animasi
        animate={{ y: 200 }} // Menggeser elemen ke bawah sejauh 200px
        transition={{
          duration: 1, // Animasi berlangsung selama 1 detik
          delay: 0.3, // Animasi mulai setelah 0.3 detik
          ease: "easeInOut", // Transisi lebih smooth
        }}
        whileHover={{
          y: 0, // Saat di-hover, elemen kembali ke posisi awal
          backgroundColor: "#3B82F6", // Warna biru tetap saat hover
          scale: 1.1, // Sedikit membesar saat di-hover
        }}
      >
        Geser ke Bawah
      </motion.div>
    </Center>
  );
};

/*
🔍 Peningkatan dan Penjelasan Kode:
Menggunakan initial={{ y: 0 }}
→ Supaya elemen memulai dari posisi normal sebelum bergerak.
animate={{ y: 200 }}
→ Elemen akan bergerak ke bawah sejauh 200px dalam 1 detik.
Menambahkan ease: "easeInOut"
→ Animasi terasa lebih smooth.
Menambahkan efek whileHover
→ Saat di-hover, elemen akan:
Kembali ke posisi awal (y: 0)
Sedikit membesar (scale: 1.1)
Warna tetap biru (backgroundColor: "#3B82F6")
Menambahkan teks di dalam elemen
→ Sekarang elemen memiliki teks "Geser ke Bawah", sehingga lebih interaktif.
*/
