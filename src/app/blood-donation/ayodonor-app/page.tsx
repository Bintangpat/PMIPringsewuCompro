"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SmartphoneNfc,
  CalendarDays,
  BellRing,
  ArrowRight,
  Download,
  Smartphone,
  BadgeCheck,
  Apple,
  Play,
  Droplets,
  CalendarCheck,
  Activity,
  History,
  MapPin,
  HeartHandshake,
  Search,
  Calendar,
  IdCard,
  Users,
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
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };



  return (
    <main className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-rose-200 selection:text-rose-900">
      {/* Hero Section */}
      {/* --- Hero Section --- */}
      <section className="relative overflow-hidden bg-white px-8 py-20 lg:py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 space-y-8"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
              <BadgeCheck className="w-4 h-4" />
              Aplikasi Resmi PMI Indonesia
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl lg:text-[56px] font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              Menjadi Pahlawan <span className="text-rose-600">Kemanusiaan</span> dalam Satu Genggaman.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-slate-500 max-w-lg leading-relaxed font-medium">
              Cek jadwal donor darah, cari stok darah terdekat, dan pantau riwayat donor Anda dengan mudah melalui aplikasi Ayo Donor.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#" className="flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition-all active:scale-95 shadow-lg group">
                <Apple className="w-8 h-8 fill-current" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold opacity-70 leading-none mb-1">Download on the</div>
                  <div className="text-lg font-bold font-['Plus_Jakarta_Sans'] leading-none">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition-all active:scale-95 shadow-lg group">
                <Play className="w-8 h-8 fill-current" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold opacity-70 leading-none mb-1">Get it on</div>
                  <div className="text-lg font-bold font-['Plus_Jakarta_Sans'] leading-none">Google Play</div>
                </div>
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-6 pt-10 border-t border-slate-100">
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80" alt="User" className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm" />
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" alt="User" className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" alt="User" className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm" />
                <div className="w-12 h-12 rounded-full border-4 border-white bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs z-10 shadow-sm">+50k</div>
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Bergabung dengan <span className="font-bold text-slate-900">50.000+</span> pendonor aktif minggu ini.
              </p>
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-rose-600/5 rounded-full blur-[100px] -z-10 scale-125 pointer-events-none" />

            <motion.div
              variants={floatAnimation}
              initial="initial"
              animate="animate"
              className="relative w-full max-w-[320px] aspect-[9/18.5] bg-slate-900 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden shadow-slate-900/20"
            >
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center items-end z-20">
                <div className="w-24 h-4 bg-slate-900 rounded-b-2xl" />
              </div>

              {/* App Interface Content */}
              <div className="w-full h-full bg-[#f8f9ff] pt-12 px-5 space-y-5 flex flex-col relative z-10">

                {/* Header */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[11px] text-slate-500 font-medium">Selamat Pagi,</p>
                    <p className="text-sm font-bold text-slate-900">Ahmad Fauzi</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Blood Type Card */}
                <div className="bg-rose-600 p-5 rounded-2xl text-white shadow-xl shadow-rose-200 space-y-2 relative overflow-hidden">
                  <Droplets className="absolute -right-4 -bottom-4 w-24 h-24 text-white opacity-10" />
                  <p className="text-[10px] opacity-90 uppercase tracking-widest font-bold">Golongan Darah</p>
                  <div className="flex justify-between items-end">
                    <span className="text-5xl font-black font-['Plus_Jakarta_Sans'] tracking-tighter">B+</span>
                  </div>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: CalendarCheck, label: 'Jadwal' },
                    { icon: Activity, label: 'Stok Darah' },
                    { icon: History, label: 'Riwayat' },
                    { icon: MapPin, label: 'Lokasi UDD' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-100 text-center shadow-sm flex flex-col items-center justify-center gap-2 hover:border-rose-200 transition-colors">
                      <item.icon className="w-6 h-6 text-rose-600" />
                      <p className="text-[11px] font-bold text-slate-700">{item.label}</p>
                    </div>
                  ))}
                </div>

                {/* News Card Skeleton */}
                <div className="space-y-3 mt-auto pb-6">
                  <p className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Terbaru</p>
                  <div className="bg-white p-3 rounded-xl border border-slate-100 flex gap-3 shadow-sm">
                    <div className="w-16 h-12 bg-slate-100 rounded-lg animate-pulse" />
                    <div className="flex-1 space-y-2 py-1">
                      <div className="h-2 w-full bg-slate-100 rounded animate-pulse" />
                      <div className="h-2 w-2/3 bg-slate-100 rounded animate-pulse" />
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-10 -left-8 md:-left-12 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 flex items-center gap-4 max-w-[220px] border border-slate-100 z-30"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Siap Donor</p>
                <p className="text-sm font-bold text-slate-900 leading-tight">Kamu bisa donor lagi hari ini!</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* --- Features Bento Grid --- */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16 space-y-4"
        >
          <motion.h2 variants={fadeUp} className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fitur Unggulan Ayo Donor
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Kami merancang setiap fitur untuk memudahkan langkah mulia Anda dalam membantu sesama.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Large Feature */}
          <motion.div variants={fadeUp} className="md:col-span-2 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-rose-200 transition-all duration-300 group overflow-hidden relative min-h-[300px] flex items-center">
            <div className="relative z-10 max-w-sm">
              <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-slate-900 mb-4 tracking-tight">Pencarian Stok Darah Real-time</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Cek ketersediaan kantong darah berdasarkan golongan dan lokasi di seluruh Unit Donor Darah PMI secara instan.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 md:w-[40%] h-full opacity-20 group-hover:scale-105 transition-transform duration-700 pointer-events-none mix-blend-multiply">
              <img
                src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80"
                alt="Stok Darah"
                className="w-full h-full object-cover rounded-tl-[4rem]"
              />
            </div>
          </motion.div>

          {/* Small Feature 1 */}
          <motion.div variants={fadeUp} className="bg-rose-50/50 p-10 rounded-[2.5rem] border border-rose-100/50 shadow-sm hover:shadow-md hover:bg-rose-50 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-white text-rose-600 flex items-center justify-center mb-6 shadow-sm group-hover:rotate-6 transition-transform duration-300">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-slate-900 mb-4 tracking-tight">Pengingat Jadwal</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Jangan pernah melewatkan kesempatan donor lagi. Dapatkan notifikasi saat tubuh Anda sudah siap untuk mendonorkan kembali.
            </p>
          </motion.div>

          {/* Small Feature 2 */}
          <motion.div variants={fadeUp} className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6 group-hover:-rotate-6 transition-transform duration-300 backdrop-blur-sm">
              <IdCard className="w-8 h-8" />
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white mb-4 tracking-tight">Digital Donor Card</h3>
            <p className="text-slate-300 text-sm font-medium leading-relaxed">
              Kartu donor digital yang praktis, menggantikan kartu fisik. Cukup tunjukkan QR Code saat registrasi di lokasi.
            </p>
          </motion.div>

          {/* Medium Feature */}
          <motion.div variants={fadeUp} className="md:col-span-2 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-rose-200 transition-all duration-300 flex flex-col md:flex-row gap-10 items-center group">
            <div className="flex-1">
              <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-slate-900 mb-4 tracking-tight">Komunitas Pendonor</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Lihat peringkat donor di Hall of Fame dan dapatkan lencana eksklusif sebagai bentuk apresiasi atas kepedulian Anda.
              </p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end w-full">
              <div className="relative w-48 h-48 rounded-full border-8 border-rose-50 overflow-hidden shadow-inner group-hover:border-rose-100 transition-colors duration-500">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80"
                  alt="Community"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- CTA Download Section --- */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-rose-600 rounded-[3rem] p-12 lg:p-20 text-white overflow-hidden relative shadow-2xl shadow-rose-200"
        >
          {/* Abstract Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[100px] rounded-full -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 blur-[100px] rounded-full -ml-20 -mb-20 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-2xl text-center lg:text-left space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] leading-[1.15] tracking-tight">
                Unduh Aplikasi Ayo Donor Sekarang
              </h2>
              <p className="text-rose-100 text-lg font-medium leading-relaxed">
                Mulai langkah kecilmu untuk memberikan harapan besar bagi mereka yang membutuhkan. Tersedia gratis di App Store dan Google Play.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
                <a href="#" className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-slate-50 transition-all active:scale-95 shadow-lg">
                  <Apple className="w-6 h-6 fill-current" />
                  <span>App Store</span>
                </a>
                <a href="#" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all active:scale-95 shadow-lg border border-slate-700">
                  <Play className="w-6 h-6 fill-current" />
                  <span>Google Play</span>
                </a>
              </div>
            </div>

            <div className="flex gap-8 bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/20 shadow-xl w-full max-w-md lg:w-auto shrink-0 justify-center">
              <div className="space-y-4 text-center">
                <div className="bg-white p-3 rounded-2xl w-32 h-32 mx-auto shadow-sm">
                  {/* Mock QR Code Pattern via CSS grid for visual representation */}
                  <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-1 p-1">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className={`bg-slate-900 rounded-sm ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-0'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-xs font-bold text-rose-100 uppercase tracking-widest">iOS App</p>
              </div>
              <div className="space-y-4 text-center">
                <div className="bg-white p-3 rounded-2xl w-32 h-32 mx-auto shadow-sm">
                  {/* Mock QR Code Pattern */}
                  <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-1 p-1">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className={`bg-slate-900 rounded-sm ${Math.random() > 0.3 ? 'opacity-100' : 'opacity-0'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-xs font-bold text-rose-100 uppercase tracking-widest">Android App</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
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
