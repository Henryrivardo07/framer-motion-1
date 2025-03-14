import { motion } from "framer-motion"; // Import motion dari Framer Motion untuk animasi
import { Center } from "../../../../components/Center"; // Import komponen Center untuk memposisikan elemen di tengah

export const Transform: React.FC = () => {
  return (
    <Center>
      {/* Membungkus elemen dalam komponen Center agar tetap berada di tengah */}
      <motion.div
        className="w-40 h-40 bg-green-500 rounded-lg shadow-lg flex items-center justify-center text-white text-xl font-bold"
        // Styling menggunakan Tailwind CSS:
        // w-40 h-40       -> Mengatur lebar & tinggi 40 (160px jika base 4px)
        // bg-green-500    -> Warna background hijau sebelum animasi berjalan
        // rounded-lg      -> Membuat sudut elemen lebih melengkung
        // shadow-lg       -> Menambahkan efek bayangan agar terlihat lebih menarik
        // flex items-center justify-center -> Menggunakan flexbox agar teks berada di tengah elemen
        // text-white      -> Warna teks putih agar kontras dengan background
        // text-xl         -> Ukuran teks besar (extra large)
        // font-bold       -> Teks dibuat lebih tebal

        initial={{ scaleY: 1, scaleX: 1, skewX: 0, y: 0 }}
        // initial -> Menentukan keadaan awal sebelum animasi dimulai:
        // scaleY: 1   -> Tinggi normal (tidak ada perubahan skala)
        // scaleX: 1   -> Lebar normal (tidak ada perubahan skala)
        // skewX: 0    -> Tidak ada kemiringan awal
        // y: 0        -> Tidak ada pergeseran posisi awal

        animate={{
          scaleY: 0.5, // Mengecilkan tinggi elemen menjadi 50% dari ukuran awal
          scaleX: 2, // Memperlebar elemen 2x lipat dari ukuran awal
          skewX: -6, // Memiringkan elemen sebesar -6 derajat ke kiri
          y: -120, // Menggeser elemen ke atas sejauh 120px
        }}
        // animate -> Menentukan bagaimana elemen berubah selama animasi:
        // scaleY: 0.5  -> Elemen menjadi lebih pendek (hanya setengah dari ukuran awal)
        // scaleX: 2    -> Elemen menjadi lebih lebar (dua kali lipat dari ukuran awal)
        // skewX: -6    -> Elemen dimiringkan ke kiri sebanyak -6 derajat
        // y: -120      -> Elemen akan naik ke atas sejauh 120px

        transition={{
          duration: 1, // Animasi berlangsung selama 1 detik
          delay: 0.3, // Animasi dimulai setelah jeda 0.3 detik
          ease: "easeInOut", // Transisi lebih smooth (perlahan di awal & akhir)
        }}
        // transition -> Mengontrol bagaimana animasi terjadi:
        // duration: 1     -> Animasi akan selesai dalam waktu 1 detik
        // delay: 0.3      -> Animasi akan mulai setelah 0.3 detik
        // ease: easeInOut -> Pergerakan lebih halus (perlahan di awal & akhir)

        whileHover={{
          scaleY: 1, // Kembali ke tinggi normal saat di-hover
          scaleX: 1, // Kembali ke lebar normal saat di-hover
          skewX: 0, // Tidak ada kemiringan saat di-hover
          y: 0, // Kembali ke posisi awal saat di-hover
          backgroundColor: "#10B981", // Warna berubah menjadi hijau terang saat di-hover
        }}
        // whileHover -> Efek animasi saat elemen di-hover oleh mouse:
        // scaleY: 1  -> Elemen kembali ke tinggi normal
        // scaleX: 1  -> Elemen kembali ke lebar normal
        // skewX: 0   -> Tidak ada efek miring saat di-hover
        // y: 0       -> Elemen kembali ke posisi awal (tidak bergeser)
        // backgroundColor -> Warna elemen berubah menjadi hijau terang saat di-hover
      >
        Transform {/* Teks yang ditampilkan di dalam kotak */}
      </motion.div>
    </Center>
  );
};

/*
🔹 Penjelasan yang Bisa Diajarkan ke Murid:
Apa itu initial?

initial adalah keadaan awal elemen sebelum animasi dimulai.
Di sini, elemen mulai dalam keadaan tanpa perubahan ukuran, kemiringan, atau posisi.
Apa itu animate?

animate menentukan bagaimana elemen berubah selama animasi berjalan.
Contoh: scaleY: 0.5 membuat elemen lebih pendek, scaleX: 2 membuatnya lebih lebar, dan y: -120 menggesernya ke atas.
Apa itu transition?

transition mengontrol cara animasi terjadi.
Misalnya, duration: 1 berarti animasi berlangsung selama 1 detik.
Apa itu whileHover?

whileHover menentukan apa yang terjadi saat elemen di-hover oleh mouse.
Dalam contoh ini, saat di-hover, elemen kembali ke bentuk awal & berubah warna menjadi hijau terang.

*/
