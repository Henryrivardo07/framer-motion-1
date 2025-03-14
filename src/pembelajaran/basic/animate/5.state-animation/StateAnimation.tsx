import { motion } from "framer-motion"; // Import motion dari Framer Motion untuk animasi
import { useState } from "react"; // Import useState untuk menyimpan state rotasi
import { Center } from "../../../../components/Center"; // Import komponen Center untuk memposisikan elemen di tengah

export const StateAnimation: React.FC = () => {
  const [degrees, setDegrees] = useState(0); // State untuk menyimpan derajat rotasi

  function rotate() {
    setDegrees((prev) => prev + 45); // Menambah 45 derajat setiap kali ditekan
  }

  return (
    <Center>
      <motion.div
        className="w-32 h-32 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center text-white text-lg font-bold cursor-pointer active:scale-90"
        // Tailwind CSS Styles:
        // w-32 h-32   -> Ukuran width & height 32 (128px)
        // bg-purple-500 -> Warna background ungu
        // rounded-lg  -> Membuat sudut elemen melengkung
        // shadow-lg   -> Menambahkan efek bayangan besar
        // flex items-center justify-center -> Memposisikan teks di tengah elemen
        // text-white text-lg font-bold -> Warna teks putih, ukuran lebih besar, dan tebal
        // cursor-pointer -> Mengubah kursor menjadi pointer untuk interaksi klik
        // active:scale-90 -> Memberikan efek klik saat ditekan

        animate={{ rotate: degrees }} // Elemen berputar sesuai state "degrees"
        transition={{ duration: 0.3, ease: "easeInOut" }} // Animasi smooth dalam 0.3 detik
        onTap={rotate} // Menjalankan fungsi rotate() setiap kali elemen diklik
      >
        Tap Me!
      </motion.div>
    </Center>
  );
};

/*
🔍 Peningkatan & Penjelasan Kode:
Menambahkan text di dalam elemen
→ Sekarang ada teks "Tap Me!" agar pengguna tahu elemen bisa ditekan.

Menambahkan cursor-pointer & active:scale-90
→ Efek klik terasa lebih responsif:

cursor-pointer → Kursor berubah menjadi tangan saat di-hover.
active:scale-90 → Elemen sedikit mengecil saat ditekan.
Menggunakan setDegrees((prev) => prev + 45)
→ Ini memastikan state diperbarui secara optimal tanpa bergantung pada nilai lama secara langsung.

Menambahkan transition={{ duration: 0.3, ease: "easeInOut" }}
→ Perputaran terasa lebih smooth.
*/
