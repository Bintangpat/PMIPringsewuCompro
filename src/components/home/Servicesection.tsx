// ServicesSection.tsx
// Screenshot 4 — "Bersama untuk Kemanusiaan" (Donor Darah / Relawan / Pelatihan)
// Stack: React + Tailwind CSS + Framer Motion
// ──────────────────────────────────────────────────────────────────────────────

"use client";

import { motion } from "framer-motion";

// ── Types ─────────────────────────────────────────────────────────────────────
interface ServiceCard {
  title: string;
  description: string;
  link: string;
  imgPlaceholder: string; // ganti dengan URL foto asli
  accent: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────
const SERVICES: ServiceCard[] = [
  {
    title: "Donor Darah",
    description: "Donor darah dan selamatkan nyawa!",
    link: "Selengkapnya...",
    imgPlaceholder:
      "https://placehold.co/600x400/7a2020/ffffff?text=Donor+Darah",
    accent: "#CC0000",
  },
  {
    title: "Relawan",
    description: "Bantu komunitas Anda, jadilah relawan hari ini!",
    link: "Selengkapnya...",
    imgPlaceholder: "https://placehold.co/600x400/4a1515/ffffff?text=Relawan",
    accent: "#CC0000",
  },
  {
    title: "Pelatihan",
    description: "Tingkatkan keterampilan Anda dengan pelatihan kami!",
    link: "Selengkapnya...",
    imgPlaceholder: "https://placehold.co/600x400/3a1010/ffffff?text=Pelatihan",
    accent: "#CC0000",
  },
];

// ── Framer variants ───────────────────────────────────────────────────────────
const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const subVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.15, ease: "easeOut" as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2 + i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function ServicesSection() {
  return (
    <section className="py-20 px-8 bg-white">
      {/* Header */}
      <div className="text-center mb-14">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="font-black text-red-700 mb-3 tracking-tight"
          style={{
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          }}
        >
          Bersama untuk Kemanusiaan
        </motion.h2>

        <motion.p
          variants={subVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-gray-500 max-w-lg mx-auto leading-relaxed"
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
          }}
        >
          Berkontribusi untuk perubahan melalui Donor Darah, Relawan, dan
          Pendidikan
        </motion.p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {SERVICES.map((svc, i) => (
          <CardItem key={svc.title} svc={svc} index={i} />
        ))}
      </div>
    </section>
  );
}

// ── Card sub-component ────────────────────────────────────────────────────────
function CardItem({ svc, index }: { svc: ServiceCard; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="rounded-lg overflow-hidden bg-white shadow-md hover:shadow-2xl hover:shadow-red-900/15 transition-shadow duration-300 cursor-pointer group"
    >
      {/* Text area */}
      <div className="p-7 pb-4">
        <h3 className="text-red-700 font-extrabold text-xl mb-2 tracking-wide">
          {svc.title}
        </h3>
        <p
          className="text-gray-600 text-sm leading-relaxed mb-2"
          style={{ fontFamily: "'Source Serif 4', serif" }}
        >
          {svc.description}
        </p>
        <motion.span
          whileHover={{ x: 4 }}
          className="text-red-700 text-xs font-semibold underline underline-offset-2 inline-block"
        >
          {svc.link}
        </motion.span>
      </div>

      {/* Image */}
      <div className="relative mx-6 mb-6 rounded overflow-hidden h-52">
        <motion.img
          src={svc.imgPlaceholder}
          alt={svc.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}
