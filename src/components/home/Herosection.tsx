// HeroSection.tsx
// Screenshot 1 — Announcement bar + Navbar + Hero Slider
// Stack: React + Tailwind CSS + Framer Motion
//
// Install deps (jika belum):
//   npm install framer-motion
//
// Tambahkan font di index.html / root layout:
//   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google Sans Flex+Condensed:ital,wght@0,400;0,700;0,900;1,700&family=Google Sans Flex:wght@400;500;600&family=Source+Serif+4:wght@400;600&display=swap" />
// ──────────────────────────────────────────────────────────────────────────────

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Types ────────────────────────────────────────────────────────────────────
interface Slide {
  title: string;
  subtitle: string;
  bg: string; // ganti dengan URL gambar asli
}

// ── Data ─────────────────────────────────────────────────────────────────────
const SLIDES: Slide[] = [
  {
    title: "Tahun Berganti,\nDedikasi Tak Berhenti",
    subtitle:
      "Bergabunglah dalam misi kami untuk memberikan bantuan dan harapan yang menyelamatkan jiwa bagi mereka yang membutuhkan.",
    bg: "https://placehold.co/1600x700/7a2020/ffffff?text=Slide+1",
  },
  {
    title: "Bersama Kita\nSelamatkan Lebih Banyak Nyawa",
    subtitle:
      "Setiap tetes darah, setiap jam relawan, dan setiap rupiah donasi Anda berarti bagi mereka yang membutuhkan.",
    bg: "https://placehold.co/1600x700/1a3a5c/ffffff?text=Slide+2",
  },
];

const NAV_LINKS = [
  "Beranda",
  "Donasi",
  "Donor Darah",
  "Pelatihan & Sertifikasi",
  "Relawan",
  "Berita",
  "Tentang Kami",
];

const SOCIAL_ICONS = ["𝕏", "IG", "▶", "f"];

// ── Framer variants ───────────────────────────────────────────────────────────
const navVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const barVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 as const } },
};

const slideTextVariants = {
  enter: { x: 40, opacity: 0 },
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
  exit: { x: -40, opacity: 0, transition: { duration: 0.35 } },
};

const dotVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.8 + i * 0.08, duration: 0.4 },
  }),
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((c) => (c + 1) % SLIDES.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[current];

  return (
    <div>
      {/* ── Announcement bar ─────────────────────────────────── */}

      {/* ── Hero Slider ──────────────────────────────────────── */}
      <div
        className="relative z-0 overflow-hidden"
        style={{ height: "clamp(420px, 55vw, 620px)" }}
      >
        {/* Background image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current + "-bg"}
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.bg}')` }}
          />
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/30 to-transparent" />

        {/* Slide text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current + "-text"}
            variants={slideTextVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex flex-col justify-center px-16"
          >
            <h1
              className="text-white font-black leading-tight mb-5 whitespace-pre-line drop-shadow-2xl"
              style={{
                fontFamily: "'Google Sans Flex', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                maxWidth: 560,
              }}
            >
              {slide.title}
            </h1>
            <p
              className="text-white/90 mb-8 leading-relaxed"
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "clamp(0.85rem, 1.3vw, 1.05rem)",
                maxWidth: 480,
              }}
            >
              {slide.subtitle}
            </p>
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: "#991111" }}
                whileTap={{ scale: 0.96 }}
                className="bg-red-700 text-white font-semibold tracking-widest text-sm px-8 py-3 rounded-sm"
              >
                DONASI
              </motion.button>
              <span className="text-white/30 text-2xl font-thin">//</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        {[
          {
            dir: -1,
            label: "‹",
            pos: "left-4",
          },
          {
            dir: 1,
            label: "›",
            pos: "right-4",
          },
        ].map(({ dir, label, pos }) => (
          <motion.button
            key={dir}
            whileHover={{ backgroundColor: "#CC0000", scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() =>
              setCurrent((c) => (c + dir + SLIDES.length) % SLIDES.length)
            }
            className={`absolute top-1/2 -translate-y-1/2 ${pos} z-10 w-10 h-10 rounded-full bg-black/40 text-white text-2xl flex items-center justify-center border border-white/20 transition-colors`}
          >
            {label}
          </motion.button>
        ))}

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {SLIDES.map((_, i) => (
            <motion.button
              key={i}
              custom={i}
              variants={dotVariants}
              initial="hidden"
              animate="visible"
              onClick={() => setCurrent(i)}
              className="h-2 rounded-full border-none transition-all duration-300"
              style={{
                width: i === current ? 24 : 8,
                background:
                  i === current ? "#CC0000" : "rgba(255,255,255,0.45)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
