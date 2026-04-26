"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Clock,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
} from "lucide-react";

// --- Data Dummy Kampanye ---
const campaigns = [
  {
    id: 1,
    title: "Sumatera Darurat Bencana: Bantu Korban Banjir Bandang",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80",
    badge: "Mendesak",
    badgeColor: "bg-rose-600",
    collected: "Rp 750.000.000",
    target: "Rp 1.000.000.000",
    progress: 75,
    daysLeft: 12,
  },
  {
    id: 2,
    title: "Bersama, Kita Bisa Pulihkan Harapan Anak-Anak Pengungsi",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80",
    badge: "Kemanusiaan",
    badgeColor: "bg-blue-600",
    collected: "Rp 320.450.000",
    target: "Rp 800.000.000",
    progress: 42,
    daysLeft: 28,
  },
  {
    id: 3,
    title: "Bangun Kembali Hunian Layak Pasca Gempa Cianjur",
    image:
      "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80",
    badge: "Rekonstruksi",
    badgeColor: "bg-orange-600",
    collected: "Rp 2.105.000.000",
    target: "Rp 2.400.000.000",
    progress: 88,
    daysLeft: 5,
  },
  {
    id: 4,
    title: "Layanan Ambulans & Kesehatan Gratis untuk Pelosok Negeri",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80",
    badge: "Kesehatan",
    badgeColor: "bg-green-600",
    collected: "Rp 150.000.000",
    target: "Rp 500.000.000",
    progress: 30,
    daysLeft: 45,
  },
  {
    id: 5,
    title: "Pipinisasi Air Bersih untuk Warga Terdampak Kekeringan",
    image:
      "https://images.unsplash.com/photo-1541913164960-93fbca123df1?auto=format&fit=crop&q=80",
    badge: "Air Bersih",
    badgeColor: "bg-cyan-600",
    collected: "Rp 45.000.000",
    target: "Rp 300.000.000",
    progress: 15,
    daysLeft: 60,
  },
  {
    id: 6,
    title: "Sediakan Alat Penyimpanan Darah untuk RSUD Terpencil",
    image:
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80",
    badge: "Kebutuhan Darah",
    badgeColor: "bg-rose-800",
    collected: "Rp 890.000.000",
    target: "Rp 1.500.000.000",
    progress: 59,
    daysLeft: 18,
  },
];

const filters = ["Semua", "Banjir", "Krisis Kemanusiaan", "Gempa Bumi"];

export default function CampaignsPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  // --- Animation Variants ---
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-screen pt-12 bg-[#f8f9ff] text-slate-900 selection:bg-rose-200 selection:text-rose-900">
      <main className="relative px-4 md:px-8 max-w-7xl mx-auto">
        {/* Header & Search Section */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-8"
        >
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Daftar Kampanye Donasi
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Uluran tangan Anda sangat berarti untuk memulihkan harapan mereka
              yang terdampak bencana.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none transition-all shadow-sm"
                placeholder="Cari kampanye kemanusiaan..."
                type="text"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                    activeFilter === filter
                      ? "bg-rose-600 text-white shadow-md shadow-rose-200"
                      : "bg-white border border-slate-200 text-slate-500 hover:border-rose-600 hover:text-rose-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </motion.header>

        {/* Campaign Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {campaigns.map((campaign) => (
            <motion.article
              key={campaign.id}
              variants={fadeUp}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-rose-200 hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  alt={campaign.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={campaign.image}
                />
                <div
                  className={`absolute top-4 left-4 ${campaign.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-md`}
                >
                  {campaign.badge}
                </div>
              </div>

              <div className="p-6 space-y-5 grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 line-clamp-2 leading-snug tracking-tight">
                  {campaign.title}
                </h3>

                <div className="space-y-3 mt-auto">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-rose-600">
                      Terkumpul {campaign.collected}
                    </span>
                    <span className="text-slate-500">{campaign.progress}%</span>
                  </div>

                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${campaign.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-rose-600 shadow-[0_0_10px_rgba(225,29,72,0.4)]"
                    />
                  </div>

                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    Target: {campaign.target}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs">
                      {campaign.daysLeft} Hari Lagi
                    </span>
                  </div>
                  <button className="bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white px-4 py-2.5 rounded-xl font-bold text-sm active:scale-95 transition-all">
                    Donasi Sekarang
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center items-center gap-2"
        >
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-rose-600 text-white font-bold shadow-md shadow-rose-200">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 font-medium transition-colors">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 font-medium transition-colors">
            3
          </button>
          <span className="px-2 text-slate-400 font-bold tracking-widest">
            ...
          </span>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 font-medium transition-colors">
            12
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </main>

      {/* FAB (Mobile Only) */}
      <div className="fixed bottom-8 right-8 z-40 md:hidden">
        <button className="w-14 h-14 bg-rose-600 text-white rounded-full shadow-xl shadow-rose-200 flex items-center justify-center active:scale-95 transition-transform">
          <HeartHandshake className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
