"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Siren,
  HeartHandshake,
  Stethoscope,
  Users,
  Brain,
  Info,
} from "lucide-react";

export default function DisasterRecoveryPage() {
  // --- Animation Variants ---
  const fadeUpVariant = {
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

  const scaleUpVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-slate-900 selection:bg-rose-200 selection:text-rose-900">
      <main className="">
        {/* Hero Section */}
        <section className="relative h-161 flex items-center justify-center text-center text-white px-6 overflow-hidden">
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070')",
              }}
            />
            <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-4xl mx-auto space-y-6"
          >
            <motion.div
              variants={fadeUpVariant}
              className="inline-flex items-center justify-center p-4 bg-white rounded-full mb-4 shadow-2xl"
            >
              <img
                alt="PMI Logo"
                className="h-16 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Palang_Merah_Indonesia_logo.svg/1200px-Palang_Merah_Indonesia_logo.svg.png"
              />
            </motion.div>
            <motion.h1
              variants={fadeUpVariant}
              className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Pemulihan Pasca
              <br />
              <span className="text-rose-400">Bencana</span>
            </motion.h1>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              Program Pemulihan Bencana didedikasikan untuk mendukung komunitas
              dalam perjalanan mereka untuk memulihkan dan membangun kembali
              setelah bencana melanda.
            </motion.p>
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            >
              <button className="bg-rose-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-rose-600/30 hover:bg-rose-700 active:scale-95 transition-all flex items-center justify-center gap-2">
                <Siren className="w-5 h-5" />
                Respon Cepat Sekarang
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 active:scale-95 transition-all">
                Pelajari Protokol Kami
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Content Grid Section */}
        <section className="container mx-auto px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Importance Section (Left side) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7 space-y-12"
            >
              <motion.div variants={fadeUpVariant} className="space-y-6">
                <h2 className="text-3xl font-bold text-rose-600 border-l-4 border-rose-600 pl-5 tracking-tight">
                  Pentingnya Program Ini
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  Bencana alam seringkali meninggalkan dampak jangka panjang
                  yang tidak langsung terlihat, seperti kehilangan mata
                  pencaharian, gangguan kesehatan mental, hingga melemahnya
                  struktur sosial masyarakat. Tanpa program pemulihan yang
                  terarah, proses bangkit dari kondisi tersebut dapat
                  berlangsung lama dan tidak merata.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  variants={fadeUpVariant}
                  className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-t-[6px] border-rose-600 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <HeartHandshake className="text-rose-600 w-10 h-10 mb-5 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Dukungan Kesehatan dan Psikososial
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Perbaikan dan pembangunan kembali fasilitas penting seperti
                    rumah, jalan, sekolah, dan sarana kesehatan agar aktivitas
                    masyarakat dapat kembali berjalan normal.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUpVariant}
                  className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-t-[6px] border-rose-600 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <Stethoscope className="text-rose-600 w-10 h-10 mb-5 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Dukungan Kesehatan dan Psikososial
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Penyediaan layanan kesehatan serta pendampingan psikologis
                    bagi korban terdampak untuk mengatasi trauma dan stres pasca
                    bencana.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUpVariant}
                  className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-t-[6px] border-rose-600 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <Users className="text-rose-600 w-10 h-10 mb-5 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Penyediaan Kebutuhan Dasar
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Distribusi bantuan berupa pangan, air bersih, dan kebutuhan
                    pokok lainnya selama masa transisi menuju kondisi stabil.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUpVariant}
                  className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-t-[6px] border-rose-600 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <Brain className="text-rose-600 w-10 h-10 mb-5 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Penguatan Kapasitas dan Ketahanan Komunitas
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Edukasi dan pelatihan terkait kesiapsiagaan bencana, agar
                    masyarakat lebih siap menghadapi kemungkinan bencana di masa
                    mendatang.
                  </p>
                </motion.div>
              </div>

              <motion.div
                variants={scaleUpVariant}
                className="relative rounded-2xl overflow-hidden h-64 bg-slate-900 group"
              >
                <img
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&q=80"
                  alt="Logistical hub"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent flex items-end p-10">
                  <div className="text-white">
                    <div className="text-3xl font-extrabold mb-2 tracking-tight">
                      120+ Posko Nasional
                    </div>
                    <div className="text-slate-300 font-medium leading-relaxed">
                      Tersebar di seluruh provinsi untuk menjamin kecepatan
                      respon dalam 6 jam pertama.
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form Section (Right side) */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-28 bg-white p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100"
              >
                <div className="space-y-3 mb-10">
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                    Formulir Kontak
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    Jadilah mitra kemanusiaan kami. Isi formulir di bawah ini
                    untuk kolaborasi program tanggap darurat.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="space-y-2.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Nama Perusahaan / Organisasi{" "}
                      <span className="text-rose-600">*</span>
                    </label>
                    <input
                      className="w-full h-14 px-5 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all font-medium"
                      placeholder="Masukkan nama resmi"
                      type="text"
                    />
                  </div>

                  <div className="space-y-2.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Tujuan Kemitraan <span className="text-rose-600">*</span>
                    </label>
                    <select className="w-full h-14 px-5 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all font-medium appearance-none">
                      <option>Donasi Perusahaan (CSR)</option>
                      <option>Dukungan Logistik</option>
                      <option>Kemitraan Jangka Panjang</option>
                      <option>Lainnya</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Email Kontak <span className="text-rose-600">*</span>
                      </label>
                      <input
                        className="w-full h-14 px-5 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all font-medium"
                        placeholder="email@perusahaan.com"
                        type="email"
                      />
                    </div>
                    <div className="space-y-2.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Nomor Telepon <span className="text-rose-600">*</span>
                      </label>
                      <input
                        className="w-full h-14 px-5 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all font-medium"
                        placeholder="0812..."
                        type="tel"
                      />
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Detail Pesan
                    </label>
                    <textarea
                      className="w-full p-5 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all font-medium resize-none"
                      placeholder="Ceritakan rencana kolaborasi Anda..."
                      rows={4}
                    ></textarea>
                  </div>

                  <div className="bg-rose-50/50 p-5 rounded-xl border border-rose-100 flex gap-4 items-start">
                    <Info className="text-rose-600 w-5 h-5 shrink-0 mt-0.5" />
                    <p className="text-xs text-rose-800 leading-relaxed font-medium">
                      Tim Partnership kami akan menghubungi Anda dalam waktu
                      maksimal 2x24 hari kerja untuk mendiskusikan langkah
                      selanjutnya.
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-rose-600 text-white h-14 rounded-xl font-bold text-base hover:bg-rose-700 shadow-xl shadow-rose-200 transition-all mt-4"
                    type="button"
                  >
                    Kirim Permintaan Kemitraan
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-slate-50 py-24 border-t border-slate-200">
          <div className="container mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Transparansi & Akuntabilitas
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                Kami mengelola setiap bantuan dengan standar internasional dan
                audit berkala untuk memastikan manfaat maksimal bagi penyintas.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            >
              {[
                { value: "100%", label: "Amanah Penyaluran" },
                { value: "24/7", label: "Respon Siaga" },
                { value: "34", label: "Provinsi Terjangkau" },
                { value: "10jt+", label: "Penerima Manfaat" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUpVariant}
                  className="text-center p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:-translate-y-1 hover:border-rose-100 transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-extrabold text-rose-600 mb-3 tracking-tighter">
                    {stat.value}
                  </div>
                  <p className="text-sm font-bold text-slate-600 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
