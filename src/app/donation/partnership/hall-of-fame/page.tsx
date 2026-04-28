"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Gem,
  BadgeCheck,
  Medal,
  Star,
  Trophy,
  HeartHandshake,
  Heart,
  ShieldPlus,
  Users,
  Globe,
  Siren,
} from "lucide-react";

export default function HallOfFamePage() {
  // --- Animation Variants ---
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const popIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto  selection:bg-rose-200 selection:text-rose-900">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24"
      >
        <span className="inline-block px-5 py-2 mb-6 bg-rose-100 text-rose-700 font-bold text-xs rounded-full uppercase tracking-widest">
          Penghargaan Kemanusiaan
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 font-['Plus_Jakarta_Sans'] tracking-tight">
          Hall of Fame
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
          Apresiasi setinggi-tingginya bagi para mitra dan donatur yang telah
          memberikan kontribusi luar biasa dalam mendukung misi kemanusiaan
          Palang Merah Indonesia.
        </p>
      </motion.header>

      <div className="space-y-24">
        {/* Platinum Tier */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-5 border-b border-slate-200 pb-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-xl shadow-slate-900/20">
              <Crown className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] tracking-tight">
                Platinum Sponsors
              </h2>
              <p className="text-sm font-medium text-slate-500 mt-1">
                Donasi Rp 5 miliar ke atas
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Platinum Card 1 */}
            <motion.div
              variants={fadeUp}
              className="bg-slate-900 text-white rounded-4xl p-8 shadow-2xl border border-slate-800 hover:border-rose-500/50 transition-all duration-500 group overflow-hidden relative flex flex-col h-full hover:-translate-y-1"
            >
              <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700">
                <Gem className="w-48 h-48" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-24 h-24 bg-white rounded-2xl p-4 flex items-center justify-center mb-8 shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=200&q=80"
                    alt="Partner Logo"
                    className="max-w-full rounded-lg mix-blend-multiply"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                    PT Bank Mandiri (Persero) Tbk
                  </h3>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">
                    Kontribusi dalam Penanggulangan Bencana Nasional 2023-2024
                  </p>
                </div>
                <div className="mt-auto pt-8 flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider">
                  <BadgeCheck className="w-5 h-5" />
                  <span>Mitra Utama Platinum</span>
                </div>
              </div>
            </motion.div>

            {/* Platinum Card 2 */}
            <motion.div
              variants={fadeUp}
              className="bg-slate-900 text-white rounded-4xl p-8 shadow-2xl border border-slate-800 hover:border-rose-500/50 transition-all duration-500 group overflow-hidden relative flex flex-col h-full hover:-translate-y-1"
            >
              <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700">
                <Gem className="w-48 h-48" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-24 h-24 bg-white rounded-2xl p-4 flex items-center justify-center mb-8 shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80"
                    alt="Partner Logo"
                    className="max-w-full rounded-lg mix-blend-multiply"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                    Telkom Indonesia
                  </h3>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">
                    Penyedia Infrastruktur Komunikasi Darurat & Donasi Tunai
                  </p>
                </div>
                <div className="mt-auto pt-8 flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider">
                  <BadgeCheck className="w-5 h-5" />
                  <span>Mitra Utama Platinum</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Gold Tier */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-5 border-b border-slate-200 pb-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-400 flex items-center justify-center text-white shadow-xl shadow-amber-400/20">
              <Medal className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] tracking-tight">
                Gold Sponsors
              </h2>
              <p className="text-sm font-medium text-slate-500 mt-1">
                Rp 1 miliar - 4.9 miliar
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              "Astra International",
              "Unilever Indonesia",
              "Kalbe Farma",
              "Bank Central Asia",
              "Tokopedia",
            ].map((company, i) => (
              <motion.div
                key={company}
                variants={popIn}
                className="aspect-square bg-white border-2 border-amber-100/50 rounded-4xl p-6 flex flex-col items-center justify-center gap-5 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-100 transition-all duration-300 group hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img
                    src={`https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=100&q=80&sig=${i}`}
                    alt={company}
                    className="w-full h-full object-cover mix-blend-multiply"
                  />
                </div>
                <span className="font-bold text-sm text-slate-500 group-hover:text-amber-600 text-center transition-colors">
                  {company}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Silver Tier */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-5 border-b border-slate-200 pb-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-300 flex items-center justify-center text-slate-700 shadow-xl shadow-slate-300/20">
              <Star className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] tracking-tight">
                Silver Sponsors
              </h2>
              <p className="text-sm font-medium text-slate-500 mt-1">
                Rp 500 juta - 999 juta
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-10 md:p-12"
          >
            <div className="flex flex-wrap gap-10 md:gap-16 justify-center items-center">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 cursor-pointer"
                >
                  <div className="w-24 h-12 bg-slate-200 rounded-lg flex items-center justify-center text-xs font-bold text-slate-400">
                    LOGO
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Bronze Tier */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-5 border-b border-slate-200 pb-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-orange-300 flex items-center justify-center text-orange-900 shadow-xl shadow-orange-300/20">
              <Trophy className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] tracking-tight">
                Bronze Sponsors
              </h2>
              <p className="text-sm font-medium text-slate-500 mt-1">
                Rp 100 juta - 499 juta
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              "Mitra Abadi Ltd",
              "CV Cahaya Baru",
              "Yayasan Bakti",
              "PT Maju Jaya",
              "Global Tech ID",
              "Karya Mandiri",
              "Sinar Dunia",
              "Prima Boga",
            ].map((name) => (
              <motion.div
                key={name}
                variants={popIn}
                className="py-5 px-3 border border-orange-100 bg-orange-50/50 rounded-2xl text-center hover:bg-orange-100 transition-colors cursor-pointer group"
              >
                <span className="font-bold text-xs text-slate-600 group-hover:text-orange-900 transition-colors">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Thank You CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-rose-600 rounded-[3rem] p-12 md:p-20 overflow-hidden relative text-white shadow-2xl shadow-rose-200"
        >
          {/* Decorative background icons */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 rotate-12 -translate-y-10 scale-150">
              <HeartHandshake className="w-32 h-32" />
              <Heart className="w-32 h-32" />
              <ShieldPlus className="w-32 h-32" />
              <Users className="w-32 h-32" />
              <Globe className="w-32 h-32" />
              <Siren className="w-32 h-32" />
            </div>
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tight">
              Menjadi Bagian dari Perubahan
            </h2>
            <p className="text-lg text-rose-100 font-medium leading-relaxed max-w-2xl mx-auto">
              Kontribusi Anda, sekecil apapun, membawa harapan bagi mereka yang
              membutuhkan. Bergabunglah menjadi mitra strategis PMI hari ini.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
              <button className="bg-white text-rose-600 px-10 py-4 rounded-xl font-bold hover:bg-rose-50 active:scale-95 transition-all shadow-xl shadow-rose-900/20">
                Daftar Sebagai Mitra
              </button>
              <button className="bg-rose-700/40 backdrop-blur-sm text-white border border-rose-400/50 px-10 py-4 rounded-xl font-bold hover:bg-rose-700 transition-all active:scale-95">
                Konsultasi CSR
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
