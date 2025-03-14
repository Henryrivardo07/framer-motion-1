import { Center } from "../../../../components/Center"; // Import komponen Center untuk membantu memposisikan elemen ke tengah
import { motion } from "framer-motion"; // Import motion dari Framer Motion untuk animasi

export const AnimasiDasar: React.FC = () => {
  // Deklarasi komponen AnimasiDasar sebagai Functional Component (FC)
  return (
    <Center>
      {/* Membungkus elemen dalam komponen Center agar tetap berada di tengah halaman */}
      <motion.div
        className="w-40 h-40 rounded-lg shadow-lg mx-auto flex items-center justify-center text-white text-xl"
        // className adalah styling menggunakan Tailwind CSS:
        // w-40 h-40 -> Mengatur lebar dan tinggi 40 (160px, jika base 4px)
        // rounded-lg -> Membuat sudut elemen melengkung
        // shadow-lg -> Menambahkan efek bayangan besar
        // mx-auto -> Menjadikan margin kiri dan kanan otomatis agar berada di tengah horizontal
        // flex items-center justify-center -> Menggunakan flexbox agar teks berada di tengah elemen
        // text-white -> Warna teks putih agar kontras dengan background
        // text-xl -> Mengatur ukuran teks lebih besar

        animate={{
          rotate: [0, 360], // Elemen akan berputar dari 0° ke 360° secara bertahap
          backgroundColor: "orange", // Background berubah warna menjadi orange selama animasi berlangsung
        }}
        // `animate` adalah objek yang berisi properti animasi yang ingin kita ubah
        // `rotate` adalah salah satu properti dalam `animate`, yang mengatur perputaran elemen

        transition={{
          repeat: Infinity, // Animasi akan terus diulang tanpa batas (infinite loop)
          duration: 2, // Setiap rotasi penuh berlangsung selama 2 detik
          ease: "linear", // Menggunakan easing linear agar rotasi berjalan mulus tanpa percepatan/perlambatan
        }}
        // `transition` adalah objek yang menentukan bagaimana animasi berjalan
        // repeat: Infinity -> Mengulangi animasi terus-menerus
        // duration: 2 -> Animasi akan selesai dalam waktu 2 detik sebelum mulai ulang
        // ease: "linear" -> Menggunakan pergerakan linear tanpa efek percepatan/perlambatan
      >
        Animasi Mutar {/* Teks yang akan ditampilkan di dalam kotak */}
      </motion.div>
    </Center>
  );
};

/*
🔹 Penjelasan yang Bisa Diajarkan ke Murid:
Apa itu animate?

animate adalah properti utama dalam Framer Motion untuk menentukan apa yang akan dianimasikan.
Di dalamnya, ada beberapa properti seperti rotate dan backgroundColor.
Dalam contoh ini, elemen akan berputar 360 derajat dan berubah warna menjadi orange.
Apa itu transition?

transition mengontrol bagaimana animasi berjalan, termasuk durasi, pengulangan, dan efek percepatan.
Properti repeat: Infinity membuat animasi berjalan terus-menerus tanpa berhenti.
Properti duration: 2 mengatur durasi animasi menjadi 2 detik per siklus.
Properti ease: "linear" memastikan kecepatan animasi tetap sama dari awal sampai akhir.
Mengapa ada properti dalam properti?

rotate adalah properti di dalam animate → menentukan elemen akan berputar.
duration adalah properti di dalam transition → mengatur lamanya animasi berjalan.

*/
