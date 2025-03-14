import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { Basic } from "./pembelajaran/basic/animate/1.properti-animate/AnimasiDasar";
import { Transform } from "./pembelajaran/basic/animate/2.transformasi/Transformasi";
import { XAndYRule } from "./pembelajaran/basic/animate/3.xandy/xandy";
import { Colors } from "./pembelajaran/basic/animate/4.colors/colors";
import { StateAnimation } from "./pembelajaran/basic/animate/5.state-animation/StateAnimation";
import { MultipleProperties } from "./pembelajaran/basic/animate/6.multiple-property/MultipleProperty";
import { RepeatAndDelay } from "./pembelajaran/basic/transition/RepeatAndDelay";
import { InitialOpacity } from "./pembelajaran/basic/initial/InitialOpacity";
import { InitialScale } from "./pembelajaran/basic/initial/InitialScale";
import { InitialTranslate } from "./pembelajaran/basic/initial/InitialTranslate";
import { TransitionTween } from "./pembelajaran/basic/transition/TransitionTween";
import { TransitionSpring } from "./pembelajaran/basic/transition/TransitionAnim";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/AnimasiDasar" element={<Basic />} />
        <Route path="/transform" element={<Transform />} />
        <Route path="/xandyrule" element={<XAndYRule />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/state-animation" element={<StateAnimation />} />
        <Route path="/multiple-properties" element={<MultipleProperties />} />
        <Route path="/repeat-and-delay" element={<RepeatAndDelay />} />
        <Route path="/initial-opacity" element={<InitialOpacity />} />
        <Route path="/initial-scale" element={<InitialScale />} />
        <Route path="/initial-translate" element={<InitialTranslate />} />
        <Route path="/transition-tween" element={<TransitionTween />} />
        <Route path="/transition-spring" element={<TransitionSpring />} />
      </Routes>
    </Router>
  );
}

export default App;

/*
🔍 Peningkatan & Penjelasan Kode:
Menambahkan teks "Rotating"
→ Supaya lebih jelas bahwa elemen ini berputar terus-menerus.

Menggunakan cursor-pointer
→ Memberi indikasi bahwa elemen bisa di-hover.

Animasi rotate: 360 dengan pengulangan tak terbatas (repeat: Infinity)

Rotasi penuh setiap 2 detik.
repeatDelay: 1 → Ada jeda 1 detik setiap kali animasi selesai sebelum mulai lagi.
Menambahkan efek whileHover

Saat di-hover, elemen akan membesar 1.5x dalam 0.3 detik.

*/
