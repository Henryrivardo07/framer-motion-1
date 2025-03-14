import { Center } from "../../../../components/Center"; // Import komponen Center dari direktori components/Center
import { motion } from "framer-motion"; // Import motion dari Framer Motion untuk animasi

export const Basic: React.FC = () => {
  // Deklarasi komponen Basic sebagai Functional Component (FC)
  return (
    <Center>
      {" "}
      {/* Membungkus elemen dalam komponen Center agar tetap berada di tengah */}
      <motion.div
        className="w-40 h-40 rounded-lg shadow-lg mx-auto flex items-center justify-center text-white text-xl"
        // className menjelaskan styling Tailwind:
        // w-40 h-40 -> Lebar & tinggi 40 (160px jika base 4px)
        // rounded-lg -> Sudut elemen dibuat melengkung
        // shadow-lg -> Menambahkan efek bayangan besar
        // mx-auto -> Margin otomatis kiri dan kanan agar elemen berada di tengah horizontal
        // flex items-center justify-center -> Menggunakan flexbox untuk posisi konten di tengah
        // text-white -> Warna teks putih
        // text-xl -> Ukuran teks lebih besar (extra large)

        animate={{
          rotate: [0, 360], // Animasi rotasi dari 0° ke 360° secara terus-menerus
          backgroundColor: "orange", // Warna background berubah menjadi orange
        }}
        transition={{
          repeat: Infinity, // Animasi akan terus diulang tanpa henti
          duration: 2, // Setiap rotasi penuh berlangsung selama 2 detik
          ease: "linear", // Menggunakan easing linear agar rotasi berjalan mulus tanpa percepatan/perlambatan
        }}
      >
        Animasi Mutar {/* Teks yang akan ditampilkan di dalam kotak */}
      </motion.div>
    </Center>
  );
};
