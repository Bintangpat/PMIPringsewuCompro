"use client";

import { motion } from "framer-motion";

const NAV_LINKS = [
  "Beranda",
  "Donasi",
  "Donor Darah",
  "Pelatihan & Sertifikasi",
  "Relawan",
  "Berita",
  "Tentang Kami",
];

const SOCIAL_ICONS = ["𝕏", "IG", "▶", "f"];

const navVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const barVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 as const } },
};

const Navbar = () => {
  return (
    <div className="font-google w-full h-fit fixed z-10">
      <motion.div
        variants={barVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-3 bg-neutral-900 px-6 py-2"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="shrink-0 bg-red-700 text-white text-xs font-bold tracking-widest px-4 py-1 rounded-sm"
        >
          DONASI
        </motion.button>
        <span className="text-gray-400 text-sm">
          Kemurahan hati Anda menyelamatkan nyawa. Setiap kontribusi sangatlah
          berarti
        </span>
        <div className="ml-auto flex items-center gap-2">
          {SOCIAL_ICONS.map((icon) => (
            <motion.button
              key={icon}
              whileHover={{ borderColor: "#CC0000", color: "#CC0000" }}
              className="w-7 h-7 rounded-full border border-white/20 text-white text-xs flex items-center justify-center transition-colors"
            >
              {icon}
            </motion.button>
          ))}
          <span className="ml-2 text-gray-500 text-xs">ID ▾</span>
        </div>
      </motion.div>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 bg-white flex items-center px-8 py-4 shadow-sm"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 mr-auto">
          <div className="w-11 h-11 rounded-full border-2 border-red-700 flex items-center justify-center shrink-0">
            <span className="text-red-700 text-2xl font-black leading-none">
              ✚
            </span>
          </div>
          <div className="leading-tight">
            {["Palang", "Merah", "Indonesia"].map((w) => (
              <div key={w} className="text-red-700 font-bold text-sm uppercase">
                {w}
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-6">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link}
              href="#"
              whileHover={{ color: "#CC0000" }}
              className={`text-sm transition-colors ${
                i === 0
                  ? "text-red-700 font-semibold"
                  : "text-gray-600 font-medium"
              }`}
            >
              {link}
            </motion.a>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
