"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Heart,
  Globe,
  Camera,
  Video,
  CheckCircle2,
  Shield,
  CreditCard,
} from "lucide-react";

const presetAmounts = [25000, 50000, 100000, 200000, 500000, 1000000];

export default function DonationFormPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50000);
  const [customAmount, setCustomAmount] = useState<string>("");

  // --- Animation Variants ---
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
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
      transition: { staggerChildren: 0.1 },
    },
  };

  // Format currency for display
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-slate-900 selection:bg-rose-200 selection:text-rose-900">
      <main className="pt-12 pb-20 px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Left Side: Campaign Context */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              variants={fadeUp}
              className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white"
            >
              <img
                className="w-full aspect-video object-cover"
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80"
                alt="Bantuan Kemanusiaan"
              />
              <div className="p-6 md:p-8">
                <span className="inline-block px-3 py-1.5 rounded-lg bg-rose-50 text-rose-600 font-bold text-xs uppercase tracking-wider mb-4">
                  Darurat Kemanusiaan
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight leading-snug">
                  Bantuan Kemanusiaan Untuk Korban Bencana
                </h1>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium">
                  Setiap tetes kepedulian Anda membantu kami memberikan bantuan
                  medis, pangan, dan perlindungan bagi saudara-saudara kita yang
                  membutuhkan.
                </p>

                {/* Progress Section */}
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-sm text-slate-500 font-bold">
                      Terkumpul
                    </span>
                    <span className="text-xl font-extrabold text-rose-600">
                      Rp 425.000.000
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                      className="h-full bg-rose-600 rounded-full shadow-[0_0_10px_rgba(225,29,72,0.4)]"
                    />
                  </div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400">
                    <span>
                      Dari Target{" "}
                      <strong className="text-slate-600">Rp 650.000.000</strong>
                    </span>
                    <span>12 Hari Lagi</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 flex items-start gap-4"
            >
              <ShieldCheck className="text-rose-600 w-8 h-8 shrink-0" />
              <div>
                <h3 className="font-bold text-slate-900 mb-1">
                  Donasi Aman & Transparan
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  Laporan penggunaan dana dikirimkan secara rutin kepada para
                  donatur melalui email dan situs resmi PMI.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Donation Form */}
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">
                Formulir Donasi
              </h2>

              <form className="space-y-8">
                {/* Amount Selection */}
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">
                    Pilih Nominal Donasi{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountClick(amount)}
                        className={`py-4 rounded-xl font-bold text-sm transition-all ${
                          selectedAmount === amount
                            ? "border-2 border-rose-600 bg-rose-50 text-rose-600"
                            : "border border-slate-200 text-slate-600 hover:border-rose-300 hover:bg-rose-50/50"
                        }`}
                      >
                        {formatCurrency(amount).replace(",00", "")}
                      </button>
                    ))}
                  </div>
                  <div className="relative mt-4">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 font-bold text-slate-400">
                      Rp
                    </span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="w-full h-14 pl-14 pr-5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-200 focus:border-rose-500 font-bold text-slate-900 outline-none transition-all placeholder:font-normal placeholder:text-slate-400 bg-slate-50 focus:bg-white"
                      placeholder="Nominal Lainnya"
                    />
                  </div>
                </div>

                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Nama Lengkap <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-200 focus:border-rose-500 font-medium text-slate-900 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Email / No. HP <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-200 focus:border-rose-500 font-medium text-slate-900 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="Untuk konfirmasi donasi"
                    />
                  </div>
                </div>

                {/* Donation Purpose & Identity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Kategori Donatur
                    </label>
                    <select className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-200 focus:border-rose-500 font-medium text-slate-900 outline-none transition-all bg-slate-50 focus:bg-white appearance-none">
                      <option>Individu</option>
                      <option>Perusahaan</option>
                      <option>Komunitas</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Peruntukan Dana
                    </label>
                    <select className="w-full h-12 px-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-200 focus:border-rose-500 font-medium text-slate-900 outline-none transition-all bg-slate-50 focus:bg-white appearance-none">
                      <option>Bencana Alam</option>
                      <option>Kesehatan Masyarakat</option>
                      <option>Stok Darah</option>
                      <option>Pendidikan</option>
                    </select>
                  </div>
                </div>

                {/* Toggles */}
                <div className="space-y-5 pt-2">
                  <label className="flex items-center cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                    </div>
                    <span className="ml-4 text-sm font-medium text-slate-700">
                      Saya ingin menerima tanda terima donasi via Email
                    </span>
                  </label>

                  <label className="flex items-center cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-600"></div>
                    </div>
                    <span className="ml-4 text-sm font-medium text-slate-700">
                      Sembunyikan nama saya (Donasi Anonim)
                    </span>
                  </label>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-slate-100">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full h-14 bg-rose-600 text-white font-bold text-lg rounded-xl shadow-xl shadow-rose-200 hover:bg-rose-700 transition-all flex items-center justify-center gap-2"
                  >
                    <Heart className="w-5 h-5 fill-current" />
                    Donasi Sekarang
                  </motion.button>
                  <p className="text-center text-xs font-medium text-slate-500 mt-5">
                    Dengan berdonasi, Anda menyetujui{" "}
                    <a href="#" className="text-rose-600 hover:underline">
                      Syarat & Ketentuan
                    </a>{" "}
                    PMI.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-white w-full py-12 mt-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-black text-rose-600 mb-4 tracking-tighter">
              PMI Indonesia
            </div>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed font-medium">
              Lembaga kemanusiaan terdepan di Indonesia yang berkomitmen untuk
              membantu tanpa membedakan.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">
              Navigasi
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li>
                <a className="hover:text-rose-600 transition-colors" href="#">
                  Campaigns
                </a>
              </li>
              <li>
                <a className="hover:text-rose-600 transition-colors" href="#">
                  Volunteering
                </a>
              </li>
              <li>
                <a className="hover:text-rose-600 transition-colors" href="#">
                  News
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
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">
              Kebijakan
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li>
                <a className="hover:text-rose-600 transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-rose-600 transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="hover:text-rose-600 transition-colors" href="#">
                  Transparency Report
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">
              Kontak
            </h4>
            <p className="text-sm font-medium text-slate-500 mb-2">
              Jl. Gatot Subroto No.12, Jakarta
            </p>
            <p className="text-sm font-medium text-slate-500 mb-6">
              info@pmi.or.id
            </p>
            <div className="flex gap-4">
              <button className="text-slate-400 hover:text-rose-600 transition-colors">
                <Globe className="w-5 h-5" />
              </button>
              <button className="text-slate-400 hover:text-rose-600 transition-colors">
                <Camera className="w-5 h-5" />
              </button>
              <button className="text-slate-400 hover:text-rose-600 transition-colors">
                <Video className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 text-center md:text-left">
            © 2026 Palang Merah Indonesia. Profesional, Responsif, Mandiri.
          </p>
          <div className="flex gap-5">
            <CheckCircle2 className="w-5 h-5 text-slate-300" />
            <Shield className="w-5 h-5 text-slate-300" />
            <CreditCard className="w-5 h-5 text-slate-300" />
          </div>
        </div>
      </footer>
    </div>
  );
}
