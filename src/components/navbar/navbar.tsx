"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// 1. Definisikan TypeScript Interfaces
type MegaMenuContent = {
  title: string;
  links: string[];
};

type NavDataMega = {
  type: "mega";
  content: MegaMenuContent[];
};

type NavDataList = {
  type: "list";
  links: string[];
};

type NavItem = NavDataMega | NavDataList;

// 2. Terapkan tipe pada NAV_DATA
const NAV_DATA: Record<string, NavItem> = {
  Donasi: {
    type: "mega",
    content: [
      {
        title: "Donasi Uang",
        links: ["Mengapa Donasi", "Donasi Sekarang", "Kampanye Donasi"],
      },
      {
        title: "Donasi Non-Materi",
        links: ["Donasi Barang", "Keterampilan / Layanan"],
      },
      {
        title: "Kemitraan",
        links: [
          "Alat Pemasaran / Katalog Program",
          "Disaster Management Programs",
          "Health Programs",
          "Hall of Fame",
        ],
      },
      { title: "Dampak Donasi", links: ["Ke mana Donasi Anda Pergi"] },
    ],
  },
  "Donor Darah": {
    type: "list",
    links: [
      "Info Stok Darah",
      "Lokasi",
      "Info Data Donor",
      "FAQ",
      "Ayo Donor App",
    ],
  },
  "Pelatihan & Sertifikasi": {
    type: "list",
    links: [
      "Pelatihan",
      "Certification Area",
      "Tempat Uji Kompetensi",
      "Berita Sertifikasi",
      "Testimoni",
      "IFRC",
    ],
  },
  Relawan: {
    type: "list",
    links: ["Gabung Relawan", "Kisah Relawan"],
  },
  Berita: {
    type: "list",
    links: ["Siaran Pers", "Artikel", "Media Sosial"],
  },
  "Tentang Kami": {
    type: "mega",
    content: [
      {
        title: "Layanan",
        links: [
          "Manajemen Bencana",
          "Layanan Kesehatan & Sosial",
          "Layanan Internasional",
          "Program",
        ],
      },
      {
        title: "Tentang Kami",
        links: [
          "7 Prinsip Gerakan",
          "Visi & Misi",
          "Struktur Organisasi",
          "Tata Kelola",
          "Sejarah",
        ],
      },
      { title: "Pustaka", links: ["Pustaka PMI", "Laporan Tahunan", "FAQ"] },
      { title: "Karir", links: ["Peluang Karir"] },
    ],
  },
};

const NAV_LINKS = [
  "Beranda",
  "Donasi",
  "Donor Darah",
  "Pelatihan & Sertifikasi",
  "Relawan",
  "Berita",
  "Tentang Kami",
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Variabel bantuan untuk Type Narrowing
  const activeData = activeMenu ? NAV_DATA[activeMenu] : null;

  return (
    <div
      className="w-full fixed top-0 z-50 font-sans"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] text-white px-8 py-2 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-4">
          <button className="bg-[#cc0000] px-4 py-1 font-bold tracking-tighter">
            DONASI
          </button>
          <span className="text-gray-400 hidden lg:inline">
            Kemurahan hati Anda menyelamatkan nyawa. Setiap kontribusi sangatlah
            berarti
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            {["𝕏", "IG", "YT", "FB"].map((s) => (
              <span
                key={s}
                className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center hover:text-red-500 cursor-pointer"
              >
                {s}
              </span>
            ))}
          </div>
          <span className="cursor-pointer uppercase">ID ▾</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white px-8 py-5 shadow-md flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-red-700 flex items-center justify-center font-bold text-red-700 text-xl">
            ✚
          </div>
          <div className="text-[#cc0000] font-bold text-[10px] leading-tight uppercase">
            <div>Palang</div>
            <div>Merah</div>
            <div>Indonesia</div>
          </div>
        </div>

        {/* Menu Links */}
        <div className="flex gap-7">
          {NAV_LINKS.map((link) => (
            <div
              key={link}
              className="relative cursor-pointer py-2"
              onMouseEnter={() => setActiveMenu(link)}
            >
              <span
                className={`text-[13px] font-bold uppercase transition-colors ${
                  activeMenu === link || (link === "Beranda" && !activeMenu)
                    ? "text-red-700"
                    : "text-gray-800 hover:text-red-700"
                }`}
              >
                {link}
              </span>
            </div>
          ))}
        </div>

        {/* Dropdown Container */}
        <AnimatePresence>
          {activeData && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100"
            >
              <div className="max-w-7xl mx-auto px-20 py-10">
                {/* Type Narrowing: TypeScript sekarang tahu pasti struktur datanya */}
                {activeData.type === "mega" ? (
                  <div className="grid grid-cols-4 gap-12">
                    {activeData.content.map((section, i) => (
                      <div key={i}>
                        <h3 className="text-[#cc0000] font-bold text-lg mb-4">
                          {section.title}
                        </h3>
                        <ul className="space-y-3">
                          {section.links.map((link) => (
                            <li
                              key={link}
                              className="text-gray-500 hover:text-red-600 transition-colors cursor-pointer text-sm"
                            >
                              {link}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : activeData.type === "list" ? (
                  <div className="flex justify-end pr-20">
                    <ul className="bg-white w-64 space-y-1">
                      {activeData.links.map((link) => (
                        <li
                          key={link}
                          className="border-b border-gray-50 last:border-0"
                        >
                          <a
                            href="#"
                            className="block py-3 px-4 text-gray-600 hover:text-red-700 hover:bg-gray-50 transition-colors text-sm"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
