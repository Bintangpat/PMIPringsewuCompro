"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SmartphoneNfc,
  Droplets,
  CalendarDays,
  BellRing,
  MapPin,
  History,
  ArrowRight,
  Download,
  Smartphone,
} from "lucide-react";

export default function AyoDonorPage() {
  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <main className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-rose-200 selection:text-rose-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block py-1.5 px-4 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-widest mb-6">
          Eksplorasi Fitur Ayo Donor
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Mendonor Darah Jadi Lebih <br className="hidden md:block" />
          <span className="text-rose-600">Mudah & Modern</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
          Aplikasi Ayo Donor hadir untuk mendampingi perjalanan kemanusiaan Anda
          dengan fitur-fitur pintar yang dirancang untuk kenyamanan pendonor.
        </p>
      </motion.section>

      {/* Features Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        {/* Feature 1: Kartu Donor Digital (Large Feature) */}
        <motion.div
          variants={fadeUp}
          className="md:col-span-8 bg-white rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-slate-100 hover:border-rose-200 transition-all duration-500 group flex flex-col md:flex-row"
        >
          <div className="p-10 md:w-1/2 flex flex-col justify-center">
            <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600 group-hover:scale-110 transition-transform duration-300">
              <SmartphoneNfc className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
              Kartu Donor Digital
            </h3>
            <p className="text-slate-500 leading-relaxed mb-8 font-medium">
              Lupakan kartu fisik. Akses kartu ID pendonor Anda kapan saja
              langsung dari ponsel. Proses registrasi di lokasi donor jadi lebih
              cepat dengan scan QR code.
            </p>
            <button className="flex items-center text-rose-600 font-bold group-hover:gap-3 transition-all duration-300">
              Pelajari lebih lanjut <ArrowRight className="w-5 h-5 ml-1" />
            </button>
          </div>
          <div className="md:w-1/2 bg-rose-50/50 p-8 flex items-center justify-center overflow-hidden relative">
            {/* Decorative background blur */}
            <div className="absolute inset-0 bg-linear-to-br from-rose-100/50 to-transparent opacity-50" />

            <motion.div
              variants={floatAnimation}
              initial="initial"
              animate="animate"
              className="w-64 h-auto rounded-[2.5rem] shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700 bg-white border-[6px] border-white overflow-hidden relative z-10"
            >
              <img
                alt="Kartu Digital"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?auto=format&fit=crop&q=80"
              />
              <div className="absolute inset-0 bg-linear-to-t from-rose-600/90 via-rose-600/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="text-xs font-bold opacity-80 uppercase tracking-widest mb-1">
                  ID Pendonor
                </div>
                <div className="text-lg font-black tracking-widest">
                  A+ Positive
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Feature 2: Periksa Stok Darah (Medium Feature) */}
        <motion.div
          variants={fadeUp}
          className="md:col-span-4 bg-white rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-slate-100 hover:border-rose-200 transition-all duration-500 group p-10 flex flex-col"
        >
          <div className="w-14 h-14 bg-rose-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-rose-200 group-hover:rotate-12 transition-transform duration-300">
            <Droplets className="w-7 h-7 fill-current" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
            Periksa Stok Darah
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed font-medium mb-8">
            Pantau ketersediaan stok darah di berbagai UDD PMI secara real-time
            sebelum Anda berangkat.
          </p>
          <div className="mt-auto pt-6 border-t border-slate-100 w-full">
            <div className="flex items-center justify-between text-sm font-bold mb-3">
              <span className="text-slate-700">Golongan A+</span>
              <span className="text-rose-600">Tersedia</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-rose-600 rounded-full shadow-[0_0_10px_rgba(225,29,72,0.4)]"
              />
            </div>
          </div>
        </motion.div>

        {/* Feature 3: Jadwal Acara (Small) */}
        <motion.div
          variants={fadeUp}
          className="md:col-span-4 bg-white rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:-translate-y-1 hover:border-rose-200 transition-all duration-300 group p-8"
        >
          <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
            <CalendarDays className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
            Jadwal Acara
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Cari tahu lokasi Mobile Unit PMI terdekat yang sedang mengadakan
            kegiatan donor darah di kota Anda.
          </p>
        </motion.div>

        {/* Feature 4: Pengingat Cerdas (Small) */}
        <motion.div
          variants={fadeUp}
          className="md:col-span-4 bg-white rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:-translate-y-1 hover:border-rose-200 transition-all duration-300 group p-8"
        >
          <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
            <BellRing className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
            Pengingat Cerdas
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Kami akan mengingatkan Anda saat sudah waktunya untuk mendonor
            kembali berdasarkan riwayat medis.
          </p>
        </motion.div>

        {/* Feature 5: Lokasi Donasi (Small) */}
        <motion.div
          variants={fadeUp}
          className="md:col-span-4 bg-white rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:-translate-y-1 hover:border-rose-200 transition-all duration-300 group p-8"
        >
          <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
            Lokasi Donasi
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Navigasi mudah ke UDD PMI atau gerai donor terdekat menggunakan
            integrasi peta yang akurat.
          </p>
        </motion.div>

        {/* Feature 6: Pantau Riwayat Donor (Wide Focus) */}
        <motion.div
          variants={fadeUp}
          className="md:col-span-12 bg-rose-600 rounded-[2.5rem] shadow-xl shadow-rose-200 overflow-hidden group flex flex-col md:flex-row items-center text-white relative"
        >
          {/* Decorative blur elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />

          <div className="p-10 md:p-14 md:w-1/2 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              <History className="w-4 h-4" />
              Data Terintegrasi
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight leading-snug">
              Pantau Riwayat <br /> Donor Anda
            </h2>
            <p className="text-rose-100 leading-relaxed font-medium mb-10 max-w-md">
              Setiap tetes darah yang Anda berikan tercatat dengan rapi. Pantau
              jumlah donasi, tanggal terakhir donor, dan progres pencapaian Anda
              dalam membantu sesama.
            </p>

            <div className="grid grid-cols-3 gap-6 bg-rose-700/50 p-6 rounded-2xl backdrop-blur-md border border-rose-500/30">
              <div className="text-center">
                <div className="text-3xl font-black mb-1">12</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-rose-200">
                  Total Donor
                </div>
              </div>
              <div className="text-center border-x border-rose-500/30">
                <div className="text-3xl font-black mb-1">4.2L</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-rose-200">
                  Volume Darah
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-1">36</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-rose-200">
                  Nyawa Dibantu
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-8 relative flex justify-center w-full z-10">
            {/* Mockup Phone UI built with Tailwind */}
            <div className="relative w-full max-w-[280px] h-[520px] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden shadow-black/40 group-hover:-translate-y-2 transition-transform duration-500">
              {/* Phone Notch */}
              <div className="absolute top-0 w-full h-7 bg-slate-900 flex justify-center items-end pb-1.5 z-20">
                <div className="w-24 h-4 bg-black rounded-full" />
              </div>

              {/* Screen Content */}
              <div className="p-6 pt-12 bg-slate-50 h-full w-full text-slate-900 flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-sm tracking-tight">
                      Andi Pratama
                    </div>
                    <div className="text-[10px] font-bold text-rose-600 uppercase tracking-wider">
                      Donor Aktif
                    </div>
                  </div>
                </div>

                <div className="space-y-4 grow">
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">
                      Donor Terakhir
                    </div>
                    <div className="font-black text-lg text-slate-900">
                      15 Oktober 2025
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
                    <div className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-3">
                      Riwayat Aktivitas
                    </div>
                    <div className="space-y-1">
                      {[
                        { loc: "UDD Jakarta Pusat", date: "Jan 2025" },
                        { loc: "Gerai Senayan City", date: "Okt 2024" },
                        { loc: "Mobile Unit PMI", date: "Jul 2024" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-xl transition-colors"
                        >
                          <div className="text-xs font-semibold text-slate-700">
                            {item.loc}
                          </div>
                          <div className="text-[10px] font-bold text-slate-400">
                            {item.date}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mock Bottom Nav */}
                <div className="mt-auto pt-4 flex justify-around border-t border-slate-200 text-slate-300">
                  <div className="w-5 h-5 rounded bg-rose-600" />
                  <div className="w-5 h-5 rounded bg-slate-200" />
                  <div className="w-5 h-5 rounded bg-slate-200" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 bg-white p-12 md:p-16 rounded-[2.5rem] border border-slate-100 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-rose-600 via-rose-400 to-rose-600" />

        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Siap Menjadi Pahlawan Hari Ini?
        </h2>
        <p className="text-slate-500 font-medium mb-10 max-w-xl mx-auto leading-relaxed">
          Download aplikasi Ayo Donor sekarang dan rasakan kemudahan dalam
          memberikan bantuan bagi mereka yang membutuhkan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#"
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-slate-900/20"
          >
            <Smartphone className="w-7 h-7" />
            <div className="text-left">
              <div className="text-[10px] font-medium leading-tight opacity-80">
                Download on the
              </div>
              <div className="text-sm font-bold leading-tight tracking-wide">
                App Store
              </div>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-slate-900/20"
          >
            <Download className="w-7 h-7" />
            <div className="text-left">
              <div className="text-[10px] font-medium leading-tight opacity-80">
                Get it on
              </div>
              <div className="text-sm font-bold leading-tight tracking-wide">
                Google Play
              </div>
            </div>
          </a>
        </div>
      </motion.section>
    </main>
  );
}
