import { motion } from "framer-motion"; // Import motion dari Framer Motion untuk animasi
import { Center } from "../../../../components/Center"; // Import komponen Center untuk memposisikan elemen di tengah

export const Colors: React.FC = () => {
  return (
    <Center>
      <div className="w-96 h-96 relative bg-gray-100 rounded-lg shadow-lg flex items-center justify-center">
        {/* Container utama dengan ukuran 400x400, posisi relatif */}
        <motion.div
          className="w-40 h-40 rounded-2xl bg-white absolute left-10 top-10 shadow-md"
          // Tailwind CSS Styles:
          // w-40 h-40       -> Ukuran width & height 40 (160px)
          // rounded-2xl     -> Sudut lebih melengkung
          // bg-white        -> Warna awal putih sebelum animasi
          // absolute left-10 top-10 -> Posisi elemen di dalam container
          // shadow-md       -> Efek bayangan lembut

          animate={{ backgroundColor: "#ff6347" }} // Warna berubah ke merah tomato
          transition={{ duration: 1, ease: "easeInOut" }} // Perubahan warna berlangsung 1 detik dengan transisi smooth
          whileHover={{ backgroundColor: "#34D399" }} // Saat di-hover, warna berubah ke hijau
        />
      </div>
    </Center>
  );
};
/*
🔍 Peningkatan & Penjelasan Kode:
Menggunakan className dengan Tailwind CSS

✅ Container utama sekarang memiliki background abu-abu terang (bg-gray-100) dan bayangan (shadow-lg), sehingga terlihat lebih menarik.
✅ Kotak berubah warna (motion.div) kini memiliki sudut lebih melengkung (rounded-2xl) dan bayangan lembut (shadow-md).
Menambahkan ease: "easeInOut"
→ Transisi warna lebih halus saat animasi berjalan.

Menambahkan whileHover={{ backgroundColor: "#34D399" }}
→ Saat di-hover, kotak berubah menjadi hijau terang (#34D399) untuk menambah efek interaktif.
*/
