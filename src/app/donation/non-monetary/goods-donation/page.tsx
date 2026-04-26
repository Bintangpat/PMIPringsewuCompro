"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Utensils,
  CheckCircle2,
  Stethoscope,
  Sparkles,
  Shirt,
  PhoneCall,
  FileText,
  Truck,
  Info,
} from "lucide-react";

/**
 * PMI Indonesia - Donate Goods Page
 * * Design Direction: Industrial/Utilitarian x Humanitarian
 * Typography: Plus Jakarta Sans (Headings), Inter (Body)
 * Features: Framer Motion staggering, Tailwind Grid/Bento layout
 */

export default function DonateGoodsPage() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30]  selection:bg-rose-100 selection:text-rose-900">
      <Head>
        <title>Donasi Barang | PMI Indonesia</title>
        <meta
          name="description"
          content="Salurkan bantuan logistik melalui Palang Merah Indonesia"
        />
      </Head>

      {/* --- Hero Section --- */}
      <section className="relative h-161 flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80"
            alt="Humanitarian Aid"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0b1c30]/95 via-[#0b1c30]/70 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-rose-600 px-3 py-1 text-white text-[10px] font-black tracking-[0.2em] uppercase mb-6 rounded">
              LOGISTICS DONATION
            </span>
            <h1 className=" text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
              Salurkan Kepedulian <br />
              <span className="text-rose-400">Lewat Logistik.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed font-medium">
              Bantuan Anda dalam bentuk barang sangat berarti bagi mereka yang
              terdampak bencana dan krisis kemanusiaan di seluruh pelosok
              negeri.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Bento Terms Section --- */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900  mb-4 tracking-tight">
            Ketentuan Donasi Barang
          </h2>
          <div className="h-1.5 w-20 bg-rose-600 mx-auto rounded-full"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Bento Item 1: Food */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="p-5 bg-rose-50 rounded-2xl">
              <Utensils className="w-8 h-8 text-rose-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 ">
                Bahan Pangan & Makanan
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 font-medium">
                {[
                  "Masa kedaluwarsa min. 6 bulan",
                  "Kemasan utuh & tidak rusak",
                  "Susu Formula & Makanan Bayi",
                  "Beras, Minyak & Kaleng",
                ].map((text) => (
                  <li key={text} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-rose-500" /> {text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Bento Item 2: Medicine */}
          <motion.div
            variants={itemVariants}
            className="bg-rose-600 text-white p-10 rounded-3xl flex flex-col justify-between shadow-xl shadow-rose-200"
          >
            <div>
              <Stethoscope className="w-10 h-10 mb-6 text-rose-200" />
              <h3 className="text-2xl font-bold mb-4 ">Obat-obatan</h3>
              <p className="text-rose-50 leading-relaxed opacity-90">
                Hanya menerima obat OTC (bebas) yang tersegel dan memiliki izin
                BPOM resmi.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-[10px] font-black uppercase tracking-widest text-rose-200">
                PROHIBITED
              </p>
              <p className="text-sm font-semibold">
                No prescription meds or opened seals.
              </p>
            </div>
          </motion.div>

          {/* Bento Item 3: Hygiene */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100"
          >
            <Sparkles className="w-8 h-8 text-rose-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4 ">Hygiene Kit</h3>
            <p className="text-slate-600 font-medium">
              Sabun, pasta gigi, pembalut, dan popok bayi sangat dibutuhkan di
              lokasi pengungsian.
            </p>
          </motion.div>

          {/* Bento Item 4: Clothing */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-slate-900 text-white p-10 rounded-3xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
          >
            <div className="relative z-10 flex-1">
              <h3 className="text-2xl font-bold mb-4 text-rose-500 ">
                Pakaian & Selimut
              </h3>
              <p className="text-slate-400 font-medium mb-6">
                Kami mengutamakan pakaian baru atau layak pakai (bersih dan
                tidak sobek). Selimut dan handuk sangat diprioritaskan.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Pakaian Bayi", "Selimut Hangat", "Sarung"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-slate-800 rounded-full text-xs font-bold border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3 h-48 md:h-full relative">
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
                src="https://images.unsplash.com/photo-1489066604574-233c5a548ba6?auto=format&fit=crop&q=80"
                alt="Blankets"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- Process Section --- */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-slate-900  mb-4">
              Bagaimana Cara Donasi?
            </h2>
            <p className="text-slate-500 font-medium">
              Alur mudah untuk memastikan bantuan Anda sampai ke tangan yang
              tepat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-slate-200"></div>

            {[
              {
                step: "1",
                title: "Hubungi PMI",
                desc: "Konsultasikan jenis barang melalui call center atau kantor PMI terdekat.",
                icon: PhoneCall,
              },
              {
                step: "2",
                title: "Dokumentasi",
                desc: "Lengkapi daftar barang dan isi formulir untuk verifikasi cepat.",
                icon: FileText,
              },
              {
                step: "3",
                title: "Pengiriman",
                desc: "Kirim barang ke Markas Pusat atau Gudang Regional sesuai arahan.",
                icon: Truck,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center relative z-10 group"
              >
                <div className="w-24 h-24 rounded-3xl bg-white shadow-xl border-2 border-slate-100 flex items-center justify-center mb-8 group-hover:border-rose-600 group-hover:rotate-6 transition-all duration-300">
                  <item.icon className="w-10 h-10 text-rose-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 ">
                  {item.title}
                </h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-[250px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Form Section --- */}
      <section className="py-24 max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-4xl shadow-2xl border border-slate-100 overflow-hidden"
        >
          <div className="bg-slate-900 p-12 text-white relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <FileText className="w-32 h-32" />
            </div>
            <h2 className="text-3xl font-bold mb-3 ">Formulir Donasi Barang</h2>
            <p className="text-slate-400 font-medium">
              Mohon lengkapi data berikut agar tim logistik kami dapat segera
              memproses.
            </p>
          </div>

          <form className="p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                  Nama Lengkap / Instansi
                </label>
                <input
                  className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none font-medium"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                  Nomor WhatsApp
                </label>
                <input
                  className="w-full h-14 px-5 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none font-medium"
                  placeholder="0812xxxx"
                  type="tel"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                Jenis Barang Donasi
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Pangan", "Obat", "Pakaian", "Lainnya"].map((type) => (
                  <label
                    key={type}
                    className="flex items-center justify-center gap-2 p-4 border-2 border-slate-100 rounded-2xl cursor-pointer hover:border-rose-600 hover:bg-rose-50 transition-all font-bold text-sm"
                  >
                    <input
                      className="text-rose-600 rounded-md focus:ring-rose-500 w-5 h-5"
                      type="checkbox"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                Rincian Barang
              </label>
              <textarea
                className="w-full p-5 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-rose-500 transition-all outline-none font-medium"
                placeholder="Sebutkan rincian, jumlah, dan kondisi barang..."
                rows={5}
              ></textarea>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl flex items-start gap-4">
              <Info className="w-6 h-6 text-blue-600 shrink-0" />
              <p className="text-xs text-blue-700 font-medium leading-relaxed">
                Dengan menekan tombol di bawah, Anda menyetujui bahwa barang
                yang didonasikan adalah hak milik sah dan akan dikelola oleh PMI
                secara transparan untuk kepentingan kemanusiaan.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-rose-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-rose-200 hover:bg-rose-700 transition-all"
              type="button"
            >
              Kirim Formulir Donasi
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
