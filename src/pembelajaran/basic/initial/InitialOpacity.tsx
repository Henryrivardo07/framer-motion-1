import { motion } from "framer-motion"; // Import motion dari Framer Motion untuk animasi
import { Center } from "../../../components/Center"; // Import komponen Center untuk memposisikan elemen di tengah

export const InitialOpacity: React.FC = () => {
  return (
    <Center>
      <motion.div
        className="w-32 h-32 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white text-lg font-bold cursor-pointer"
        // Tailwind CSS Styles:
        // w-32 h-32   -> Ukuran width & height 32 (128px)
        // bg-blue-500 -> Warna background biru
        // rounded-lg  -> Membuat sudut elemen melengkung
        // shadow-lg   -> Menambahkan efek bayangan besar
        // flex items-center justify-center -> Memposisikan teks di tengah elemen
        // text-white text-lg font-bold -> Warna teks putih, ukuran lebih besar, dan tebal
        // cursor-pointer -> Kursor berubah menjadi tangan saat di-hover

        initial={{ opacity: 0 }} // Elemen mulai dengan opacity 0 (tidak terlihat)
        animate={{
          opacity: 1, // Berangsur muncul hingga opacity 1
        }}
        transition={{
          duration: 3, // Durasi animasi muncul selama 3 detik
        }}
        whileHover={{
          scale: 1.1, // Saat di-hover, elemen sedikit membesar
          transition: { duration: 0.3 }, // Efek hover terjadi dalam 0.3 detik
        }}
      >
        Fading In
      </motion.div>
    </Center>
  );
};

/*
🔍 Peningkatan & Penjelasan Kode:
Menambahkan teks "Fading In"
→ Supaya lebih jelas bahwa elemen ini mengalami efek fade-in.

Menggunakan cursor-pointer
→ Memberi indikasi bahwa elemen bisa di-hover.

Efek initial: { opacity: 0 }

Elemen mulai dalam keadaan tidak terlihat.
animate: { opacity: 1 } → Perlahan muncul hingga opacity penuh.
Durasi transition: { duration: 3 }

Elemen muncul perlahan selama 3 detik untuk efek fade-in yang smooth.
Menambahkan efek whileHover

Saat di-hover, elemen membesar 1.1x dalam 0.3 detik.

*/
