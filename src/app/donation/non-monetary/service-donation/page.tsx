"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Brain,
  Users,
  ArrowRight,
  BarChart2,
  Globe,
  Camera,
  Mail,
  Phone,
} from "lucide-react";

export default function ServiceDonationPage() {
  // Animation Variants
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

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-slate-900 selection:bg-rose-200 selection:text-rose-900">
      {/* TopNavBar */}

      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80"
            alt="Relawan PMI membantu masyarakat"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl text-white"
          >
            <motion.span
              variants={fadeUpVariant}
              className="inline-block px-4 py-1.5 bg-rose-600 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-6"
            >
              Program Relawan PMI
            </motion.span>
            <motion.h1
              variants={fadeUpVariant}
              className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6"
            >
              Jadilah Bagian dari <br />{" "}
              <span className="text-rose-400">Perubahan Nyata</span>
            </motion.h1>
            <motion.p
              variants={fadeUpVariant}
              className="text-lg text-slate-200 mb-10 max-w-xl leading-relaxed"
            >
              Setiap detik sangat berarti. Bergabunglah dengan ribuan relawan
              kami untuk memberikan bantuan kemanusiaan kepada mereka yang
              paling membutuhkan.
            </motion.p>
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-rose-700 shadow-xl shadow-rose-500/20 active:scale-95 transition-all">
                Gabung Sekarang
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 active:scale-95 transition-all">
                Lihat Panduan
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section (Asymmetric Bento Grid) */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Mengapa Menjadi Relawan?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Bergabung dengan PMI bukan hanya tentang memberi, tapi juga tentang
            tumbuh dan bertransformasi menjadi pribadi yang lebih tangguh.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Large Feature (Span 2) */}
          <motion.div
            variants={fadeUpVariant}
            className="md:col-span-2 bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between group hover:border-rose-200 hover:shadow-[0_8px_30px_rgb(225,29,72,0.08)] transition-all duration-500"
          >
            <div>
              <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-8 text-rose-600 group-hover:scale-110 transition-transform duration-500">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">
                Membuat Perbedaan Nyata
              </h3>
              <p className="text-slate-500 leading-relaxed max-w-xl">
                Aksi nyata Anda di lapangan membantu jutaan jiwa di seluruh
                pelosok negeri. Dari tanggap darurat bencana hingga layanan
                kesehatan masyarakat.
              </p>
            </div>
            <div className="mt-10 overflow-hidden rounded-2xl">
              <img
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80"
                alt="Relawan bersalaman"
              />
            </div>
          </motion.div>

          {/* Column Features */}
          <div className="flex flex-col gap-6">
            <motion.div
              variants={fadeUpVariant}
              className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-rose-200 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-6 text-rose-600 group-hover:rotate-12 transition-transform duration-300">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Mengembangkan Keterampilan
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Dapatkan pelatihan profesional dalam pertolongan pertama,
                manajemen bencana, dan kepemimpinan.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-rose-200 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-6 text-rose-600 group-hover:-rotate-12 transition-transform duration-300">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Jaringan Pertemanan</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Bertemu dengan orang-orang hebat yang memiliki visi kemanusiaan
                yang sama dengan Anda.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              className="bg-rose-600 p-8 rounded-[2rem] shadow-xl shadow-rose-200 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3">
                  Sudah Siap Melangkah?
                </h3>
                <p className="text-sm text-rose-100 mb-6 leading-relaxed">
                  Pendaftaran dibuka sepanjang tahun untuk seluruh warga
                  Indonesia.
                </p>
                <button className="w-full bg-white text-rose-600 font-bold py-3.5 rounded-xl hover:bg-rose-50 active:scale-95 transition-all shadow-sm">
                  Daftar Sekarang
                </button>
              </div>
              {/* Decorative background shapes */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Volunteer Stories Section */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-rose-600 font-bold tracking-widest uppercase text-xs">
                Testimoni
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Kisah Relawan
              </h2>
              <p className="text-slate-500 mt-4 max-w-lg leading-relaxed">
                Dengarkan pengalaman inspiratif dari mereka yang telah terjun
                langsung di garis depan kemanusiaan.
              </p>
            </div>
            <button className="flex items-center gap-2 text-rose-600 font-bold hover:gap-4 transition-all pb-2">
              Lihat Semua Kisah <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Story Card 1 */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                  alt="Layanan Kesehatan"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-rose-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg">
                    Layanan Kesehatan
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-4 tracking-tight leading-snug">
                  "Senyum Pasien Adalah Energi Terbesar Saya"
                </h3>
                <p className="text-sm text-slate-500 mb-8 line-clamp-3 leading-relaxed">
                  Membantu di posko kesehatan saat banjir Jakarta memberikan
                  perspektif baru bagi saya tentang arti syukur dan
                  kebersamaan...
                </p>
                <div className="mt-auto flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                      alt="Sarah Rahmawati"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-900">
                      Sarah Rahmawati
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      Relawan Medis, 3 Tahun
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Story Card 2 */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full border-t-[6px] border-t-rose-600 border-x border-b border-slate-100"
            >
              <div className="relative h-64 overflow-hidden group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&q=80"
                  alt="Tanggap Bencana"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg">
                    Tanggap Bencana
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-4 tracking-tight leading-snug">
                  Membangun Kembali Harapan di Cianjur
                </h3>
                <p className="text-sm text-slate-500 mb-8 line-clamp-3 leading-relaxed">
                  Bukan hal yang mudah melihat rumah-rumah runtuh, tapi melihat
                  anak-anak mulai bisa tertawa lagi di tenda pengungsian
                  adalah...
                </p>
                <div className="mt-auto flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                      alt="Ahmad Fauzi"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-900">
                      Ahmad Fauzi
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      KSR Unit Markas, 5 Tahun
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Story Card 3 */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80"
                  alt="Edukasi Remaja"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-rose-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg">
                    Edukasi Remaja
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-4 tracking-tight leading-snug">
                  Menanamkan Jiwa Kemanusiaan Sejak Dini
                </h3>
                <p className="text-sm text-slate-500 mb-8 line-clamp-3 leading-relaxed">
                  Melalui Palang Merah Remaja (PMR), kami mengajarkan bahwa
                  kepedulian adalah bahasa universal yang harus dipelajari...
                </p>
                <div className="mt-auto flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
                      alt="Maya Pertiwi"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-900">
                      Maya Pertiwi
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      Pembina PMR, 2 Tahun
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center bg-rose-50/50 border border-rose-100 rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-rose-200/40 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-rose-200/40 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-rose-600 mb-6 tracking-tight">
              Siap Menjadi Pahlawan Kemanusiaan?
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Keahlian apapun yang Anda miliki, PMI selalu punya tempat bagi
              Anda yang ingin berkontribusi. Bergabunglah dengan keluarga besar
              kami hari ini.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-rose-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-rose-200 hover:bg-rose-700 active:scale-95 transition-all">
                Gabung Sekarang
              </button>
              <button className="bg-white border border-slate-200 text-slate-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all shadow-sm">
                Hubungi Markas Terdekat
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 mt-10 border-t border-slate-200 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8 py-12">
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

        <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-slate-100">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 text-center">
            © 2026 Palang Merah Indonesia. Profesional, Responsif, Mandiri.
          </p>
        </div>
      </footer>
    </div>
  );
}
