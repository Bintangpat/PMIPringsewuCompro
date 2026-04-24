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

// ── Animated counter ─────────────────────────────────────────────────────────
function AnimatedCounter({
  value,
  label,
  icon,
  delay,
}: StatItem & { delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 2,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="flex flex-col items-center gap-2 flex-1 min-w-[180px]"
    >
      <span className="text-4xl opacity-40">{icon}</span>
      <span
        className="text-red-700 font-black leading-none tabular-nums"
        style={{
          fontFamily: "'Google Sans Flex', sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
        }}
      >
        {display.toLocaleString("id-ID")}
      </span>
      <span
        className="text-gray-500 text-sm text-center"
        style={{ fontFamily: "'Source Serif 4', serif" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Statsection() {
  return (
    <div style={{ fontFamily: "'Google Sans Flex', sans-serif" }}>
      {/* ── Stats section ─────────────────────────────────────── */}
      <section className="py-20 px-8 bg-white text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-gray-400 text-xs tracking-[0.12em] uppercase mb-2"
          style={{ fontFamily: "'Source Serif 4', serif" }}
        >
          Komunitas Kami yang Terus Berkembang
        </motion.p>

        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-red-700 font-black mb-16 tracking-tight"
          style={{
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          }}
        >
          Pengunjung
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap gap-12 justify-center max-w-4xl mx-auto"
        >
          {STATS.map((s, i) => (
            <AnimatedCounter key={s.label} {...s} delay={i * 0.3} />
          ))}
        </motion.div>
      </section>

      {/* ── CTA Red band ──────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="bg-red-700 px-10 py-7 flex flex-wrap items-center justify-between gap-5"
      >
        <motion.button
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            scale: 1.04,
            backgroundColor: "rgba(255,255,255,0.15)",
          }}
          whileTap={{ scale: 0.96 }}
          className="border-2 border-white text-white font-semibold tracking-widest text-sm px-9 py-3 rounded transition-colors"
        >
          Kontak Kami
        </motion.button>

        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-4 flex-wrap"
        >
          <span
            className="text-white/80 text-sm italic"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Ikuti sosial media kami:
          </span>
          {SOCIAL_ICONS.map((icon) => (
            <motion.button
              key={icon}
              whileHover={{
                scale: 1.15,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full border border-white/40 text-white text-xs flex items-center justify-center transition-colors"
            >
              {icon}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Footer ────────────────────────────────────────────── */}
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
              className="shrink-0 bg-red-700 hover:bg-red-800 text-white font-semibold tracking-widest text-sm px-6 py-3 rounded-sm transition-colors"
            >
              DONASI
            </motion.button>
            <p
              className="text-gray-500 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'Source Serif 4', serif" }}
            >
              Bergabunglah dengan kami dalam membuat perbedaan dan mendukung
              misi kami untuk memberdayakan masyarakat
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
    </div>
  );
}
