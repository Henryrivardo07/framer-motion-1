import { motion } from "framer-motion"; // Import motion dari Framer Motion untuk membuat animasi
import { Center } from "../../../../components/Center"; // Import komponen Center agar elemen berada di tengah

export const XAndYRule: React.FC = () => {
  return (
    <Center>
      <motion.div
        className="w-32 h-32 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white text-lg font-semibold text-center"
        /*
        🎨 Tailwind CSS Styling:
        - w-32 h-32   -> Menentukan ukuran elemen (128px x 128px)
        - bg-blue-500 -> Warna background elemen biru (kode warna Tailwind)
        - rounded-lg  -> Membuat sudut elemen menjadi melengkung
        - shadow-lg   -> Menambahkan efek bayangan agar elemen tampak lebih menarik
        - flex items-center justify-center -> Menggunakan flexbox agar teks berada di tengah elemen
        - text-white text-lg font-semibold -> Warna teks putih, ukuran lebih besar, dan teks lebih tebal
        */

        // ✨ Menentukan keadaan awal elemen sebelum animasi dimulai
        initial={{ y: 0 }} // Elemen mulai di posisi normal (y = 0)
        // 🔥 Mengatur animasi yang terjadi setelah komponen dimuat
        animate={{ y: 200 }} // Elemen akan bergerak turun sejauh 200px di sumbu Y
        // 🎬 Pengaturan transisi animasi
        transition={{
          duration: 1, // Animasi berlangsung selama 1 detik
          delay: 0.3, // Animasi dimulai setelah jeda 0.3 detik
          ease: "easeInOut", // Jenis transisi agar animasi tampak lebih halus
        }}
        // 🖱️ Efek saat pengguna meng-hover elemen
        whileHover={{
          y: 0, // Saat di-hover, elemen kembali ke posisi awal
          backgroundColor: "#3B82F6", // Tetap menggunakan warna biru saat di-hover
          scale: 1.1, // Membuat elemen sedikit membesar saat di-hover (skala 1.1)
        }}
      >
        Geser ke Bawah {/* Teks yang tampil di dalam elemen */}
      </motion.div>
    </Center>
  );
};

/*
📌 Penjelasan Lengkap Kode:
1️⃣ Elemen awalnya berada di posisi normal (y: 0) sesuai dengan properti `initial`.
2️⃣ Saat komponen dimuat, elemen akan turun sejauh 200px di sumbu Y menggunakan properti `animate`.
3️⃣ Transisi dibuat agar animasi lebih halus menggunakan `easeInOut`, berlangsung selama 1 detik, dan dimulai setelah 0.3 detik.
4️⃣ Ketika pengguna mengarahkan mouse ke elemen (hover), elemen akan:
   - Kembali ke posisi awal (y: 0).
   - Mempertahankan warna biru agar tetap konsisten.
   - Sedikit membesar (scale: 1.1) untuk memberikan efek interaktif.
5️⃣ Elemen diberi teks "Geser ke Bawah" agar lebih intuitif bagi pengguna.
*/
