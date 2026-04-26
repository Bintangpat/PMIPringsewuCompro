// NewsSection.tsx
// Screenshot 3 — Siaran Pers | Artikel | Pustaka PMI
// Stack: React + Tailwind CSS + Framer Motion
// ──────────────────────────────────────────────────────────────────────────────

"use client";

import { motion } from "framer-motion";

// ── Types ─────────────────────────────────────────────────────────────────────
interface NewsItem {
  category: string;
  date?: string;
  views?: number;
  title?: string;
  isLibrary?: boolean;
  img: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────
const NEWS_ITEMS: NewsItem[] = [
  {
    category: "Siaran Pers",
    date: "9 April 2026",
    views: 122,
    title: "PMI SIAP SALURKAN BANTUAN MASYARAKAT INDONESIA UNTUK IRAN",
    img: "https://placehold.co/600x400/c8b8a0/333333?text=Siaran+Pers",
  },
  {
    category: "Artikel",
    date: "21 April 2026",
    views: 6,
    title: "PELATIHAN PP UNTUK PERKUAT SIBAT DI JEMBER",
    img: "https://placehold.co/600x400/a0c8b0/333333?text=Artikel",
  },
  {
    category: "Pustaka PMI",
    isLibrary: true,
    img: "https://placehold.co/600x400/8090a8/ffffff?text=e-Library",
  },
];

// ── Framer variants ───────────────────────────────────────────────────────────
const sectionTitleVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: 0.1 + i * 0.18,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const imgHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.06,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function Newssection() {
  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
        {NEWS_ITEMS.map((item, i) => (
          <NewsCard key={item.category} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

// ── Card sub-component ────────────────────────────────────────────────────────
function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:shadow-red-900/10 transition-shadow duration-300 cursor-pointer group"
    >
      {/* Category heading */}
      <div className="px-6 pt-7 pb-0">
        <motion.h2
          custom={index}
          variants={sectionTitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-red-700 font-black italic mb-5"
        >
          {item.category}
        </motion.h2>
      </div>

      {/* Image */}
      <div className="mx-6 rounded overflow-hidden relative h-56">
        <motion.img
          src={item.img}
          alt={item.category}
          className="w-full h-full object-cover"
          variants={imgHover}
          initial="rest"
          whileHover="hover"
        />

        {/* Library overlay */}
        {item.isLibrary && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center gap-3"
          >
            <div className="w-16 h-16 rounded-xl bg-white/90 flex items-center justify-center text-3xl shadow-lg">
              📚
            </div>
            <span className="text-white font-bold tracking-widest text-sm">
              e-Library
            </span>
          </motion.div>
        )}

        {/* Hover overlay for news cards */}
        {!item.isLibrary && (
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>

      {/* Meta + Title */}
      {!item.isLibrary && (
        <div className="px-6 py-5 text-center">
          <p
            className="text-gray-400 text-xs mb-3 tracking-wide"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            {item.date} &nbsp;|&nbsp; Dilihat {item.views} kali
          </p>
          <h3
            className="text-gray-800 font-bold leading-snug text-sm tracking-wide uppercase"
            style={{
              fontFamily: "'Jakarta Plus Sans', sans-serif",
              fontSize: "0.95rem",
            }}
          >
            {item.title}
          </h3>
        </div>
      )}

      {item.isLibrary && <div className="h-6" />}
    </motion.div>
  );
}
