import { motion } from "framer-motion"; // Import motion dari Framer Motion untuk animasi
import { Center } from "../../../components/Center"; // Import komponen Center untuk memposisikan elemen di tengah

export const InitialScale: React.FC = () => {
  return (
    <Center>
      <motion.div
        className="w-32 h-32 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center text-white text-lg font-bold cursor-pointer"
        // Tailwind CSS Styles:
        // w-32 h-32   -> Ukuran width & height 32 (128px)
        // bg-purple-500 -> Warna background ungu
        // rounded-lg  -> Membuat sudut elemen melengkung
        // shadow-lg   -> Menambahkan efek bayangan besar
        // flex items-center justify-center -> Memposisikan teks di tengah elemen
        // text-white text-lg font-bold -> Warna teks putih, ukuran lebih besar, dan tebal
        // cursor-pointer -> Kursor berubah menjadi tangan saat di-hover

        initial={{ scale: 0 }} // Elemen mulai dengan ukuran 0 (tidak terlihat)
        animate={{
          scale: 1, // Berangsur membesar hingga skala penuh (1)
        }}
        transition={{
          type: "spring", // Menggunakan transisi spring untuk efek elastis
          stiffness: 100, // Semakin besar stiffness, semakin cepat animasi
          damping: 10, // Redaman untuk memperhalus animasi
        }}
        whileHover={{
          scale: 1.1, // Saat di-hover, elemen sedikit membesar
          transition: { duration: 0.2 }, // Efek hover terjadi dalam 0.2 detik
        }}
      >
        Scaling In
      </motion.div>
    </Center>
  );
};

/*
🔍 Peningkatan & Penjelasan Kode:
Menambahkan teks "Scaling In"
→ Supaya lebih jelas bahwa elemen ini mengalami efek scale-in.

Menggunakan cursor-pointer
→ Memberi indikasi bahwa elemen bisa di-hover.

Efek initial: { scale: 0 }

Elemen mulai dalam keadaan tidak terlihat (skala 0).
animate: { scale: 1 } → Perlahan membesar hingga ukuran normal.
Menggunakan spring transition

type: "spring" → Memberikan efek elastis saat animasi scaling terjadi.
stiffness: 100 → Semakin besar nilai ini, semakin cepat elemen mencapai skala akhir.
damping: 10 → Mengontrol efek redaman agar animasi tidak terlalu bergetar.
Menambahkan efek whileHover

Saat di-hover, elemen membesar 1.1x dalam 0.2 detik.
*/
