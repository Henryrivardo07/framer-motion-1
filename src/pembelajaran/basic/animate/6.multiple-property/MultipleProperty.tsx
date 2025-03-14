import { motion } from "framer-motion"; // Import motion dari Framer Motion untuk animasi
import { Center } from "../../../../components/Center"; // Import komponen Center untuk memposisikan elemen di tengah

export const MultipleProperties: React.FC = () => {
  return (
    <Center>
      <motion.div
        className="w-32 h-32 bg-yellow-500 rounded-lg shadow-lg flex items-center justify-center text-white text-lg font-bold cursor-pointer"
        // Tailwind CSS Styles:
        // w-32 h-32   -> Ukuran width & height 32 (128px)
        // bg-yellow-500 -> Warna background kuning cerah
        // rounded-lg  -> Membuat sudut elemen melengkung
        // shadow-lg   -> Menambahkan efek bayangan besar
        // flex items-center justify-center -> Memposisikan teks di tengah elemen
        // text-white text-lg font-bold -> Warna teks putih, ukuran lebih besar, dan tebal
        // cursor-pointer -> Kursor berubah menjadi tangan saat di-hover

        whileTap={{
          scale: 1.25, // Membesar 1.25x saat diklik
          rotate: 90, // Berputar 90 derajat saat diklik
        }}
        whileHover={{
          scale: 1.1, // Membesar sedikit saat di-hover
        }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }} // Efek animasi lebih elastis
      >
        Interact Me!
      </motion.div>
    </Center>
  );
};

/*
🔍 Peningkatan & Penjelasan Kode:
Menambahkan teks "Interact Me!"
→ Sekarang elemen memiliki teks agar pengguna tahu bisa berinteraksi.

Menggunakan cursor-pointer
→ Menandakan bahwa elemen bisa diklik.

Meningkatkan whileHover & whileTap

Saat di-hover → Elemen membesar sedikit (1.1x).
Saat diklik → Elemen membesar lebih besar (1.25x) dan berputar 90°.
Menambahkan transition dengan efek pegas (spring)

type: "spring" → Animasi terasa lebih elastis.
stiffness: 200 → Pegas lebih kuat (respon cepat).
damping: 10 → Mengurangi getaran agar animasi lebih smooth.

*/
