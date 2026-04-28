"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  ArrowLeft,
  ArrowRight,
  MapPin,
  TrendingUp,
  BadgeCheck,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";

export default function ImpactGalleryPage() {
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

  return (
    <main className="pt-20 selection:bg-rose-200 selection:text-rose-900 ">
      {/* --- Hero Section --- */}
      <section className="relative bg-white pt-24 pb-16 px-8 border-b border-slate-100">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto flex flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-rose-600 font-bold tracking-[0.2em] text-xs mb-4 uppercase"
          >
            Jejak Kebaikan
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 max-w-3xl font-['Plus_Jakarta_Sans'] tracking-tight leading-tight"
          >
            Melihat Nyata Dampak Dari Setiap Rupiah Yang Anda Donasikan
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg text-slate-500 max-w-2xl mb-12 font-medium leading-relaxed"
          >
            Transparansi adalah janji kami. Jelajahi bagaimana dukungan Anda
            membantu memulihkan kehidupan dan membangun ketangguhan di seluruh
            nusantara.
          </motion.p>

          {/* Search and Filter Cluster */}
          <motion.div
            variants={fadeUp}
            className="w-full max-w-4xl bg-white p-2.5 rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100"
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative flex-1 w-full px-4 border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  className="w-full pl-12 pr-4 py-3 border-transparent focus:ring-0 font-medium text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder="Cari dampak berdasarkan lokasi atau aksi..."
                  type="text"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-2 px-4 py-2 w-full md:w-auto">
                {[
                  "Semua",
                  "Gempa Bumi",
                  "Kemanusiaan",
                  "Banjir",
                  "Kampanye",
                ].map((filter, i) => (
                  <button
                    key={filter}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                      i === 0
                        ? "bg-rose-100 text-rose-700"
                        : "hover:bg-slate-50 text-slate-500 border border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- Impact Gallery Grid --- */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3 font-['Plus_Jakarta_Sans'] tracking-tight">
              Cerita Dari Lapangan
            </h2>
            <p className="text-slate-500 font-medium">
              Menampilkan 12 laporan dampak terbaru dari seluruh Indonesia.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:text-rose-600 transition-colors text-slate-600">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:text-rose-600 transition-colors text-slate-600">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Card 1 */}
          <motion.article
            variants={fadeUp}
            className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-rose-200 transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80"
                alt="Konstruksi jembatan"
              />
              <div className="absolute top-5 left-5 bg-rose-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                Pesisir
              </div>
            </div>
            <div className="p-8 grow flex flex-col">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-sm mb-4">
                <MapPin className="w-4 h-4" />
                <span>Cianjur, Jawa Barat</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors font-['Plus_Jakarta_Sans'] leading-snug">
                Transformasi Pesisir: Jembatan Harapan
              </h3>
              <p className="text-slate-500 text-sm line-clamp-3 mb-8 leading-relaxed font-medium">
                Pembangunan jembatan kayu permanen yang menghubungkan dua desa
                terisolasi akibat terjangan ombak besar tahun lalu. Kini akses
                kesehatan menjadi lebih dekat.
              </p>
              <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                      alt="volunteer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                      alt="volunteer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-rose-100 flex items-center justify-center text-xs font-bold text-rose-600 z-10">
                    +12
                  </div>
                </div>
                <a
                  href="#"
                  className="text-rose-600 font-bold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                >
                  Lihat Detail <TrendingUp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.article>

          {/* Card 2 */}
          <motion.article
            variants={fadeUp}
            className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-rose-200 transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
                alt="Edukasi anak"
              />
              <div className="absolute top-5 left-5 bg-rose-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                Edukasi
              </div>
            </div>
            <div className="p-8 grow flex flex-col">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-sm mb-4">
                <MapPin className="w-4 h-4" />
                <span>Lombok, NTB</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors font-['Plus_Jakarta_Sans'] leading-snug">
                Kembali ke Sekolah Pasca Gempa
              </h3>
              <p className="text-slate-500 text-sm line-clamp-3 mb-8 leading-relaxed font-medium">
                Penyaluran perlengkapan sekolah dan renovasi 5 ruang kelas di SD
                Negeri 02 Sembalun. Memastikan 150 anak dapat belajar dengan
                layak.
              </p>
              <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
                      alt="volunteer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
                      alt="volunteer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-rose-100 flex items-center justify-center text-xs font-bold text-rose-600 z-10">
                    +8
                  </div>
                </div>
                <a
                  href="#"
                  className="text-rose-600 font-bold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                >
                  Lihat Detail <TrendingUp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.article>

          {/* Card 3 */}
          <motion.article
            variants={fadeUp}
            className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-rose-200 transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1541913164960-93fbca123df1?auto=format&fit=crop&q=80"
                alt="Pertanian dan Air"
              />
              <div className="absolute top-5 left-5 bg-rose-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                Pertanian
              </div>
            </div>
            <div className="p-8 grow flex flex-col">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-sm mb-4">
                <MapPin className="w-4 h-4" />
                <span>Sigi, Sulawesi Tengah</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors font-['Plus_Jakarta_Sans'] leading-snug">
                Pengairan Mandiri untuk Petani
              </h3>
              <p className="text-slate-500 text-sm line-clamp-3 mb-8 leading-relaxed font-medium">
                Instalasi sistem irigasi tenaga surya untuk lahan pertanian
                kering. Mengurangi biaya operasional petani hingga 40% per
                panen.
              </p>
              <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80"
                      alt="volunteer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80"
                      alt="volunteer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-rose-100 flex items-center justify-center text-xs font-bold text-rose-600 z-10">
                    +21
                  </div>
                </div>
                <a
                  href="#"
                  className="text-rose-600 font-bold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                >
                  Lihat Detail <TrendingUp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.article>

          {/* Card 4 (Bento Style Hybrid - Spans 2 columns on md) */}
          <motion.article
            variants={fadeUp}
            className="group md:col-span-2 bg-rose-600 rounded-3xl overflow-hidden shadow-xl shadow-rose-200/50 flex flex-col md:flex-row text-white hover:shadow-2xl transition-all duration-500"
          >
            <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80"
                alt="Distribusi makanan"
              />
              <div className="absolute inset-0 bg-linear-to-r from-rose-600/20 to-transparent mix-blend-multiply" />
            </div>
            <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center">
              <div className="mb-6 flex items-center gap-2 opacity-90 bg-rose-500/50 w-fit px-4 py-1.5 rounded-full backdrop-blur-sm">
                <BadgeCheck className="w-4 h-4" />
                <span className="text-[10px] font-black tracking-[0.15em]">
                  CAPAIAN UTAMA 2024
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 font-['Plus_Jakarta_Sans'] leading-tight tracking-tight">
                1 Juta Paket Pangan Tersalurkan
              </h3>
              <p className="text-rose-50 font-medium mb-10 leading-relaxed">
                Berkat kontribusi donatur reguler, kami berhasil mencapai
                tonggak sejarah penyaluran bantuan pangan darurat untuk wilayah
                3T (Terdepan, Terluar, Tertinggal).
              </p>
              <button className="bg-white text-rose-600 px-8 py-4 rounded-xl font-bold self-start hover:bg-rose-50 active:scale-95 transition-all shadow-lg">
                Baca Laporan Tahunan
              </button>
            </div>
          </motion.article>

          {/* Card 5 */}
          <motion.article
            variants={fadeUp}
            className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-rose-200 transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80"
                alt="Kesehatan"
              />
              <div className="absolute top-5 left-5 bg-rose-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                Kesehatan
              </div>
            </div>
            <div className="p-8 grow flex flex-col">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-sm mb-4">
                <MapPin className="w-4 h-4" />
                <span>Papua Barat</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors font-['Plus_Jakarta_Sans'] leading-snug">
                Klinik Terapung Menembus Batas
              </h3>
              <p className="text-slate-500 text-sm line-clamp-3 mb-8 leading-relaxed font-medium">
                Layanan kesehatan gratis bagi warga kepulauan yang tidak
                memiliki akses puskesmas. Melayani lebih dari 300 pasien setiap
                bulannya.
              </p>
              <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80"
                      alt="volunteer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-rose-100 flex items-center justify-center text-xs font-bold text-rose-600 z-10">
                    +5
                  </div>
                </div>
                <a
                  href="#"
                  className="text-rose-600 font-bold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                >
                  Detail <TrendingUp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.article>
        </motion.div>

        {/* Pagination/Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <button className="border-2 border-rose-600 text-rose-600 px-10 py-4 rounded-xl font-bold hover:bg-rose-50 transition-all active:scale-95">
            Tampilkan Lebih Banyak
          </button>
        </motion.div>
      </section>

      {/* --- Transparency Section --- */}
      <section className="bg-slate-50 py-24 px-8 border-t border-slate-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeUp} className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 font-['Plus_Jakarta_Sans'] tracking-tight">
                Komitmen Transparansi Kami
              </h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10">
                Setiap donasi yang masuk diaudit secara berkala oleh kantor
                akuntan publik independen. Kami percaya bahwa kepercayaan adalah
                modal utama dalam misi kemanusiaan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-50 p-3 rounded-xl">
                    <ReceiptText className="text-rose-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">
                      Laporan Real-time
                    </h4>
                    <p className="text-sm text-slate-500 font-medium">
                      Pantau aliran dana secara langsung di platform kami.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-rose-50 p-3 rounded-xl">
                    <ShieldCheck className="text-rose-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">
                      Audit Terpercaya
                    </h4>
                    <p className="text-sm text-slate-500 font-medium">
                      Opini Wajar Tanpa Pengecualian (WTP) selama 10 tahun.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:w-1/2 w-full">
              {/* Progress Tracking Component */}
              <div className="bg-slate-50 p-8 md:p-10 rounded-4xl border border-slate-200">
                <div className="mb-10">
                  <div className="flex justify-between items-end mb-3">
                    <span className="font-bold text-slate-700">
                      Total Donasi Terkumpul 2024
                    </span>
                    <span className="font-black text-rose-600 text-xl">
                      82%
                    </span>
                  </div>
                  <div className="h-3.5 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "82%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                      className="h-full bg-rose-600 rounded-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center py-4 border-b border-slate-200">
                    <span className="text-slate-500 font-medium text-sm">
                      Operasional & Logistik
                    </span>
                    <span className="font-bold text-slate-900">Rp 12.4M</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-slate-200">
                    <span className="text-slate-500 font-medium text-sm">
                      Bantuan Langsung Masyarakat
                    </span>
                    <span className="font-bold text-slate-900">Rp 45.8M</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-slate-500 font-medium text-sm">
                      Pengembangan Kapasitas Relawan
                    </span>
                    <span className="font-bold text-slate-900">Rp 5.2M</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
