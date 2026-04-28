"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  HeartHandshake,
  ChevronDown,
  ChevronRight,
  LayoutGrid,
  ArrowRight,
  Droplets,
  Camera,
  Video,
  Shield,
} from "lucide-react";

/**
 * PMI Indonesia FAQ Page
 * Re-built using Next.js (App Router), TypeScript, and Framer Motion.
 * [cite: 4, 8]
 */

const FAQ_DATA = [
  {
    question: "Mengapa kita perlu mendonorkan darah?",
    answer:
      "Darah adalah komponen vital yang tidak bisa diproduksi secara sintetis. Setiap tetes darah yang Anda donasikan dapat menyelamatkan hingga tiga nyawa. Selain membantu sesama, donor darah secara rutin membantu menjaga kesehatan jantung, meningkatkan produksi sel darah merah baru, dan memberikan rasa kepuasan batin yang mendalam.",
  },
  {
    question: "Apa itu Pelatihan Ayo Siaga Bencana tingkat PMR?",
    answer:
      "PMR akan mempelajari mengenai karakteristik bencana, siklus penanganan bencana, dan bagaimana mempersiapkan diri jika terjadi bencana.",
  },
  {
    question:
      "Apakah kita bisa membantu PMI saat terjadi bencana di dalam negeri dan luar negeri?",
    answer:
      "Bisa, dapat datang secara langsung ke PMI setempat untuk mendaftar dan mendapatkan orientasi penugasan terlebih dahulu.",
  },
  {
    question: "Apa saja syarat pemeriksaan kesehatan sebelum donor?",
    answer: (
      <>
        <p>
          Sebelum donor, tim medis PMI akan melakukan pemeriksaan kesehatan
          dasar meliputi:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Berat badan minimal 45kg</li>
          <li>Kadar hemoglobin (Hb) minimal 12,5 g/dl</li>
          <li>Tekanan darah normal (Sistole 110-160, Diastole 70-100)</li>
          <li>Tidak sedang dalam pengaruh obat-obatan atau alkohol</li>
          <li>Istirahat cukup minimal 5 jam sebelumnya</li>
        </ul>
      </>
    ),
  },
  {
    question: "Apakah proses donor darah itu sakit?",
    answer:
      "Rasa sakit yang dirasakan hanya sekejap saat jarum dimasukkan, seringkali digambarkan seperti gigitan semut. Proses pengambilan darahnya sendiri tidak terasa sakit. Tim perawat kami yang profesional akan memastikan Anda merasa nyaman selama 10-15 menit proses pengambilan darah berlangsung.",
  },
  {
    question: "Berapa lama interval waktu antar donor darah?",
    answer:
      "Interval minimal untuk donor darah lengkap adalah 2 bulan atau 60 hari. Hal ini bertujuan agar tubuh memiliki waktu yang cukup untuk memproduksi kembali sel darah merah yang telah didonorkan.",
  },
];

const CATEGORIES = [
  { id: "donor", label: "Donor Darah", active: true },
  { id: "volunteer", label: "Relawan (Volunteering)" },
  { id: "donation", label: "Donasi Dana" },
  { id: "ambulance", label: "Layanan Ambulans" },
  { id: "training", label: "Pendidikan & Pelatihan" },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#f8f9ff]  text-[#0b1c30]">
      {/* TopAppBar - [cite: 9] */}

      <main className="pt-12 pb-20 max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main FAQ Content (Left) - [cite: 5] */}
          <div className="flex-1 space-y-12">
            <header className="space-y-4">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[#b80035] font-bold tracking-[0.2em] text-xs uppercase block"
              >
                Pusat Bantuan
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-extrabold"
              >
                Pertanyaan yang Sering Diajukan
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-500 max-w-2xl leading-relaxed"
              >
                Temukan jawaban atas segala pertanyaan Anda mengenai donor
                darah, kegiatan sosial, dan bagaimana Anda bisa berkontribusi.
              </motion.p>
            </header>

            {/* Donor Darah Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#ffdada] p-3 rounded-2xl text-[#b80035]">
                  <HeartHandshake className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Donor Darah
                </h2>
              </div>

              {/* Accordion Items - [cite: 10] */}
              <div className="space-y-4">
                {FAQ_DATA.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() =>
                        setActiveIndex(activeIndex === index ? null : index)
                      }
                      className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors group"
                    >
                      <span className="font-bold text-lg pr-4">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        className="text-[#b80035] shrink-0"
                      >
                        <ChevronDown className="w-6 h-6" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 text-slate-500 leading-relaxed border-t border-slate-50 pt-6">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA Card */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-[#b80035] text-white p-10 rounded-4xlex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">
                  Belum menemukan jawaban?
                </h3>
                <p className="text-rose-100 font-medium">
                  Tim kami siap membantu Anda 24/7 untuk segala informasi
                  kemanusiaan.
                </p>
              </div>
              <button className="relative z-10 bg-white text-[#b80035] px-10 py-4 rounded-full font-bold hover:bg-rose-50 transition-colors shadow-lg whitespace-nowrap">
                Hubungi Kami
              </button>
            </motion.div>
          </div>

          {/* Category Sidebar (Right) - [cite: 5] */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="sticky top-28 space-y-6">
              <div className="bg-slate-50 p-8 rounded-4xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-xl mb-8 flex items-center gap-3">
                  <LayoutGrid className="text-[#b80035] w-6 h-6" />
                  Kategori
                </h4>
                <nav className="space-y-3">
                  {CATEGORIES.map((cat) => (
                    <a
                      key={cat.id}
                      href="#"
                      className={`flex items-center justify-between p-4 rounded-xl transition-all font-bold text-sm ${
                        cat.active
                          ? "bg-[#ffdada] text-[#b80035] shadow-sm"
                          : "text-slate-500 hover:bg-slate-100"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <ChevronRight
                        className={`w-4 h-4 ${cat.active ? "text-[#b80035]" : "text-slate-300"}`}
                      />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Secondary Widget: Stats */}
              <div className="relative rounded-4xl overflow-hidden h-52 group shadow-lg">
                <img
                  alt="Donor Darah"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                    Dampak Anda
                  </span>
                  <p className="text-white font-bold text-lg leading-tight">
                    3,421 Kantong darah didistribusikan bulan ini
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
