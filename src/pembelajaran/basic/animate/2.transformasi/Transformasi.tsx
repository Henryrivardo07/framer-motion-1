import { motion } from "framer-motion"; // Import motion dari Framer Motion untuk animasi
import { Center } from "../../../../components/Center"; // Import komponen Center untuk memposisikan elemen di tengah

export const Transform: React.FC = () => {
  return (
    <Center>
      <motion.div
        className="w-40 h-40 bg-green-500 rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-bold"
        // Tailwind CSS Styles:
        // w-40 h-40   -> Ukuran width & height 40 (160px)
        // bg-green-500 -> Warna background hijau sebagai default sebelum animasi
        // rounded-lg  -> Membuat sudut elemen melengkung
        // shadow-lg   -> Menambahkan efek bayangan besar
        // flex items-center justify-center -> Memposisikan teks di tengah elemen
        // text-white text-xl font-bold -> Warna teks putih, ukuran besar, dan tebal

        initial={{ scaleY: 1, scaleX: 1, skewX: 0, y: 0 }} // Keadaan awal elemen
        animate={{
          scaleY: 0.5, // Mengecilkan tinggi elemen menjadi 50% dari ukuran awal
          scaleX: 2, // Memperlebar elemen 2x lipat dari ukuran awal
          skewX: -6, // Memiringkan elemen sebesar -6 derajat
          y: -120, // Menggeser elemen ke atas sejauh 120px
        }}
        transition={{
          duration: 1, // Animasi berlangsung selama 1 detik
          delay: 0.3, // Animasi dimulai setelah 0.3 detik
          ease: "easeInOut", // Transisi lebih smooth
        }}
        whileHover={{
          scaleY: 1, // Kembali ke ukuran normal saat di-hover
          scaleX: 1, // Kembali ke lebar normal
          skewX: 0, // Tidak ada kemiringan saat di-hover
          y: 0, // Kembali ke posisi awal
          backgroundColor: "#10B981", // Mengubah warna menjadi hijau terang saat di-hover
        }}
      >
        Transform
      </motion.div>
    </Center>
  );
};
