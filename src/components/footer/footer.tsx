// StatsFooterSection.tsx
// Screenshot 2 — Visitor stats counter + CTA band + Footer
// Stack: React + Tailwind CSS + Framer Motion
// ──────────────────────────────────────────────────────────────────────────────

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { BarChart2, Globe, Camera, Mail, Phone } from "lucide-react";
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
    <footer className="bg-neutral-900 flex flex-col">
      <div className="w-full py-12  border-t border-slate-200 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 container mx-auto px-8 py-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-black text-rose-600 tracking-tighter mb-6">
              PMI Indonesia
            </div>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed">
              Mewujudkan PMI yang profesional, netral, mandiri dan bergerak
              bersama masyarakat.
            </p>
            <div className="flex gap-5">
              <button className="text-slate-400 hover:text-rose-600 transition-colors">
                <BarChart2 className="w-5 h-5" />
              </button>
              <button className="text-slate-400 hover:text-rose-600 transition-colors">
                <Globe className="w-5 h-5" />
              </button>
              <button className="text-slate-400 hover:text-rose-600 transition-colors">
                <Camera className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">
              Tentang Kami
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li>
                <a className="hover:text-rose-600 transition-colors" href="#">
                  Visi & Misi
                </a>
              </li>
              <li>
                <a className="hover:text-rose-600 transition-colors" href="#">
                  Struktur Organisasi
                </a>
              </li>
              <li>
                <a className="hover:text-rose-600 transition-colors" href="#">
                  Transparency Report
                </a>
              </li>
              <li>
                <a className="hover:text-rose-600 transition-colors" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">
              Layanan
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li>
                <a className="hover:text-rose-600 transition-colors" href="#">
                  Donor Darah
                </a>
              </li>
              <li>
                <a className="hover:text-rose-600 transition-colors" href="#">
                  Bantuan Bencana
                </a>
              </li>
              <li>
                <a className="hover:text-rose-600 transition-colors" href="#">
                  Ambulans 24 Jam
                </a>
              </li>
              <li>
                <a className="hover:text-rose-600 transition-colors" href="#">
                  Diklat Relawan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">
              Kontak
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-400" /> info@pmi.or.id
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-400" /> (021) 7992325
              </li>
              <li className="pt-2">
                <a className="hover:text-rose-600 transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-rose-600 transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap gap-10 justify-between items-start container px-8 py-12 mx-auto"
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
        className="mt-8 py-5 border-t border-white/10 text-center"
      >
        <p className="text-gray-600 text-xs tracking-wide uppercase">
          © {new Date().getFullYear()} Palang Merah Indonesia. All rights
          reserved.
        </p>
      </motion.div>
    </footer>
  );
}
