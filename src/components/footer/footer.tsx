// StatsFooterSection.tsx
// Screenshot 2 — Visitor stats counter + CTA band + Footer
// Stack: React + Tailwind CSS + Framer Motion
// ──────────────────────────────────────────────────────────────────────────────

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

// ── Types ─────────────────────────────────────────────────────────────────────
interface StatItem {
  value: number;
  label: string;
  icon: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────
const STATS: StatItem[] = [
  { value: 1205, label: "Total Pengunjung Hari Ini", icon: "👤" },
  { value: 30477, label: "Total Pengunjung Sepanjang Waktu", icon: "👤" },
  { value: 6026, label: "Total Unduhan", icon: "📄" },
];

const SOCIAL_ICONS = ["𝕏", "IG", "▶", "f"];

// ── Framer variants ───────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};
export default function Footer() {
  return (
    <footer className="bg-neutral-900 px-10 pt-10 pb-7">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap gap-10 justify-between items-start max-w-6xl mx-auto"
      >
        {/* Address */}
        <motion.div variants={fadeUp}>
          <p className="text-gray-300 font-semibold text-sm mb-2 tracking-wide">
            Markas Pusat PMI
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Jalan Gatot Subroto Kav. 96 – Jakarta 12790
          </p>
          <p className="text-gray-500 text-sm mt-1">
            ✉{" "}
            <a
              href="mailto:pmi@pmi.or.id"
              className="hover:text-red-500 transition-colors"
            >
              pmi@pmi.or.id
            </a>
          </p>
        </motion.div>

        {/* Donation CTA */}
        <motion.div
          variants={fadeUp}
          custom={1}
          className="flex gap-5 items-start"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0 bg-red-700 hover:bg-red-800 text-white font-bold tracking-widest text-sm px-6 py-3 rounded-sm transition-colors"
          >
            DONASI
          </motion.button>
          <p
            className="text-gray-500 text-sm leading-relaxed max-w-xs"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Bergabunglah dengan kami dalam membuat perbedaan dan mendukung misi
            kami untuk memberdayakan masyarakat
          </p>
        </motion.div>
      </motion.div>

      {/* Divider + copyright */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-8 pt-5 border-t border-white/10 text-center"
      >
        <p className="text-gray-600 text-xs tracking-wide">
          © {new Date().getFullYear()} Palang Merah Indonesia. All rights
          reserved.
        </p>
      </motion.div>
    </footer>
  );
}
