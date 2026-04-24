/**
 * pages/donation/monetary/why-donate.tsx  (Next.js Pages Router)
 * ─ atau ─
 * app/donation/monetary/why-donate/page.tsx  (Next.js App Router)
 *
 * Stack  : Next.js 14 · TypeScript · Tailwind CSS · Framer Motion
 * Fonts  : Barlow Condensed (display) + Source Serif 4 (body)
 *          → tambahkan di next.config / _document / layout:
 *            import { Barlow_Condensed, Source_Serif_4 } from "next/font/google"
 *
 * Install:
 *   npm install framer-motion
 *   npm install -D @tailwindcss/typography   # (opsional, untuk prose)
 */

"use client"; // hapus baris ini jika memakai Pages Router

import type { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA  (App Router — pindahkan ke layout.tsx / generateMetadata jika
//               perlu dynamic)
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Donasi", href: "/donasi" },
  { label: "Donor Darah", href: "/donor-darah" },
  { label: "Pelatihan & Sertifikasi", href: "/pelatihan" },
  { label: "Relawan", href: "/relawan" },
  { label: "Berita", href: "/berita" },
  { label: "Tentang Kami", href: "/tentang-kami" },
];

const BREADCRUMBS = [
  { label: "Beranda", href: "/" },
  { label: "Donasi Uang", href: "/donation/monetary" },
  { label: "Mengapa Donasi", href: "#" },
];

const REASONS = [
  {
    icon: "🚨",
    title: "Tanggap Darurat Bencana",
    body: "Indonesia sangat rentan terhadap bencana alam. Donasi Anda secara langsung mendukung upaya tanggap cepat kami, memastikan korban menerima perawatan medis darurat, tempat berlindung, makanan, dan air bersih saat mereka sangat membutuhkannya.",
  },
  {
    icon: "🏥",
    title: "Manajemen Krisis Kesehatan",
    body: "Dalam masa krisis kesehatan, seperti wabah penyakit, PMI hadir untuk memberikan dukungan penting. Donasi Anda membantu mendanai pasokan medis, layanan kesehatan, dan kampanye edukasi yang bertujuan untuk mencegah dan mengendalikan penyebaran penyakit.",
  },
  {
    icon: "🏘️",
    title: "Ketahanan & Pengembangan Komunitas",
    body: "Selain bantuan bencana langsung, PMI berkomitmen untuk membangun komunitas yang tangguh. Dukungan Anda memungkinkan kami menjalankan program yang mendidik dan mempersiapkan komunitas menghadapi bencana di masa depan.",
  },
  {
    icon: "📈",
    title: "Mendukung Pertumbuhan PMI",
    body: "PMI terus mengembangkan program dan kampanye baru yang menangani kebutuhan yang muncul. Donasi Anda berkontribusi pada pengembangan dan keberlanjutan inisiatif penting ini, memungkinkan kami untuk melayani lebih banyak orang dengan lebih efektif.",
  },
];

const SOCIAL_ICONS: { label: string; symbol: string }[] = [
  { label: "Twitter / X", symbol: "𝕏" },
  { label: "Instagram", symbol: "IG" },
  { label: "YouTube", symbol: "▶" },
  { label: "Facebook", symbol: "f" },
];

// ─────────────────────────────────────────────────────────────────────────────
// FRAMER VARIANTS
// ─────────────────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 48, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// HELPER: animated count-up
// ─────────────────────────────────────────────────────────────────────────────
function useCountUp(target: number, started: boolean, duration = 1.8) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    const ctrl = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => ctrl.stop();
  }, [started, target, duration]);
  return val;
}

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

/** Announcement bar */
function AnnouncementBar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 bg-neutral-900 px-6 py-2"
    >
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Donasi sekarang"
        className="shrink-0 bg-red-700 text-white text-xs font-semibold tracking-widest px-4 py-1 rounded-sm font-display"
      >
        DONASI
      </motion.button>
      <p className="text-gray-400 text-sm font-serif">
        Kemurahan hati Anda menyelamatkan nyawa. Setiap kontribusi sangatlah
        berarti
      </p>
      <nav
        aria-label="Sosial media PMI"
        className="ml-auto flex items-center gap-2"
      >
        {SOCIAL_ICONS.map(({ label, symbol }) => (
          <motion.a
            key={label}
            href="#"
            aria-label={label}
            whileHover={{ borderColor: "#CC0000", color: "#CC0000" }}
            className="w-7 h-7 rounded-full border border-white/20 text-white text-xs flex items-center justify-center transition-colors"
          >
            {symbol}
          </motion.a>
        ))}
        <span className="ml-2 text-gray-500 text-xs">ID ▾</span>
      </nav>
    </motion.div>
  );
}

/** Main navbar */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center gap-10 px-8 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="Halaman utama PMI"
        >
          <div className="w-11 h-11 rounded-full border-2 border-red-700 flex items-center justify-center">
            <span className="text-red-700 text-2xl font-black leading-none">
              ✚
            </span>
          </div>
          <span
            className="text-red-700 font-semibold text-sm leading-tight font-display"
            aria-hidden
          >
            Palang
            <br />
            Merah
            <br />
            Indonesia
          </span>
        </Link>

        {/* Navigation */}
        <nav aria-label="Navigasi utama" className="flex gap-7 ml-auto">
          {NAV_LINKS.map(({ label, href }, i) => (
            <motion.div key={label} whileHover={{ y: -1 }}>
              <Link
                href={href}
                className={`text-sm transition-colors font-medium ${
                  label === "Donasi"
                    ? "text-red-700 font-semibold"
                    : "text-gray-600 hover:text-red-700"
                }`}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

/** Breadcrumb with JSON-LD structured data */
function Breadcrumb() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: BREADCRUMBS.map(({ label, href }, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: label,
      item: `https://www.pmi.or.id${href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <motion.nav
        aria-label="Breadcrumb"
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-8 pt-6 pb-2"
      >
        <ol className="flex items-center gap-1 text-sm text-gray-500 font-serif flex-wrap">
          {BREADCRUMBS.map(({ label, href }, i) => (
            <li key={label} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden>›</span>}
              {i < BREADCRUMBS.length - 1 ? (
                <Link
                  href={href}
                  className="hover:text-red-700 transition-colors"
                >
                  {label}
                </Link>
              ) : (
                <span
                  className="text-red-700 font-semibold"
                  aria-current="page"
                >
                  {label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </motion.nav>
    </>
  );
}

/** Hero: title + subtitle + flood image */
function HeroContent() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      className="max-w-7xl mx-auto px-8 pt-8 pb-16 text-center"
    >
      {/* H1 — SEO utama */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="text-red-700 font-black font-display tracking-tight mb-4"
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
      >
        Mengapa Anda Perlu Berdonasi
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.12}
        className="text-gray-500 font-serif text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
      >
        Kontribusi Anda Sangat Penting untuk Menyelamatkan Nyawa dan Membangun
        Komunitas yang Tangguh
      </motion.p>

      {/* Hero image with parallax */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.24}
        className="relative overflow-hidden rounded-xl shadow-2xl max-w-4xl mx-auto"
        style={{ height: "clamp(260px, 40vw, 500px)" }}
      >
        <motion.div style={{ y }} className="absolute inset-0 scale-110">
          {/* Swap src with real image: "/images/pmi-banjir.jpg" */}
          <Image
            src="https://placehold.co/1200x600/7a4a20/ffffff?text=PMI+Rescue+Team"
            alt="Relawan PMI membantu korban banjir menggunakan perahu karet di area banjir"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
          />
        </motion.div>
        {/* subtle vignette */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent rounded-xl" />
      </motion.div>
    </section>
  );
}

/** "Mengapa Donasi Anda Penting" text block */
function WhyDonateArticle() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      aria-labelledby="why-donate-heading"
      className="max-w-4xl mx-auto px-8 py-16"
    >
      {/* H2 */}
      <motion.h2
        id="why-donate-heading"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-display font-black text-gray-900 mb-10 tracking-tight"
        style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
      >
        Mengapa Donasi Anda Penting
      </motion.h2>

      {/* Reason cards grid */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {REASONS.map(({ icon, title, body }) => (
          <motion.article
            key={title}
            variants={cardVariant}
            whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(204,0,0,0.10)" }}
            className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm transition-shadow duration-300 group cursor-default"
          >
            {/* H3 */}
            <header className="flex items-start gap-3 mb-3">
              <span
                className="text-3xl leading-none mt-0.5 select-none"
                aria-hidden
              >
                {icon}
              </span>
              <h3
                className="font-display font-semibold text-gray-900 leading-tight group-hover:text-red-700 transition-colors"
                style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)" }}
              >
                {title}
              </h3>
            </header>
            <p className="text-gray-600 font-serif text-sm leading-relaxed">
              {body}
            </p>
          </motion.article>
        ))}
      </motion.div>

      {/* Long-form article paragraph (replaces wall of text from original) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0.3}
        className="mt-12 bg-red-50 border-l-4 border-red-600 rounded-r-xl px-7 py-6"
      >
        <p className="text-gray-700 font-serif text-base leading-loose">
          Mendukung Pertumbuhan PMI — untuk mempertahankan dan memperluas
          operasi kami, PMI terus mengembangkan program dan kampanye baru yang
          menangani kebutuhan yang muncul. Donasi Anda berkontribusi pada
          pengembangan dan keberlanjutan inisiatif penting ini, memungkinkan
          kami untuk melayani lebih banyak orang dengan lebih efektif.
        </p>
      </motion.div>
    </section>
  );
}

/** CTA banner — "Stop Bermain Jari" */
function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section
      ref={ref}
      aria-label="Ajakan bertindak"
      className="max-w-5xl mx-auto px-8 mb-6"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileHover={{ scale: 1.01 }}
        className="bg-linear-to-r from-red-800 via-red-700 to-red-600 rounded-xl overflow-hidden relative cursor-pointer group"
      >
        {/* animated shimmer */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{
            repeat: Infinity,
            duration: 2.8,
            ease: "linear",
            repeatDelay: 1,
          }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
        />
        <div className="relative z-10 flex items-center justify-center py-6 px-10">
          <h2
            className="text-white font-display font-black tracking-wide text-center"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)" }}
          >
            Stop Bermain Jari, Saatnya Beraksi
          </h2>
        </div>
      </motion.div>
    </section>
  );
}

/** YouTube video embed section */
function VideoSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const [playing, setPlaying] = useState(false);

  const YOUTUBE_ID = "dQw4w9WgXcQ"; // ganti dengan ID video PMI yang benar

  return (
    <section
      ref={ref}
      aria-labelledby="video-heading"
      className="max-w-4xl mx-auto px-8 py-10"
    >
      {/* H2 visually hidden — for screen readers */}
      <h2 id="video-heading" className="sr-only">
        Video Kampanye PMI
      </h2>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900"
      >
        {!playing ? (
          /* Custom thumbnail + play button */
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full group"
            aria-label="Putar video: Stop Bermain Jari, Saatnya Beraksi — PMI TV"
          >
            {/* Thumbnail image — swap src */}
            <Image
              src="https://placehold.co/1280x720/1a1a2e/ffffff?text=Stop+Bermain+Jari%2C+Saatnya+Beraksi"
              alt="Thumbnail video PMI: Stop Bermain Jari, Saatnya Beraksi"
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

            {/* Play button */}
            <motion.div
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.94 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            >
              <div className="w-20 h-14 bg-red-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:bg-red-500 transition-colors">
                <span className="text-white text-3xl ml-1">▶</span>
              </div>
              <p className="text-white font-display font-semibold text-lg drop-shadow-lg">
                Stop Bermain Jari, Saatnya Beraksi
              </p>
              <p className="text-white/70 text-sm font-serif">PMI TV</p>
            </motion.div>
          </button>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
            title="Stop Bermain Jari, Saatnya Beraksi — PMI TV"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        )}
      </motion.div>
    </section>
  );
}

/** Cara Berdonasi section */
function HowToDonate() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      aria-labelledby="how-donate-heading"
      className="max-w-4xl mx-auto px-8 py-14 text-center"
    >
      {/* H2 */}
      <motion.h2
        id="how-donate-heading"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-display font-black text-gray-900 mb-2 tracking-tight"
        style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
      >
        Cara <span className="text-red-700">Berdonasi</span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0.1}
        className="text-gray-600 font-serif text-base leading-relaxed max-w-2xl mx-auto mb-3"
      >
        Dengan sistem donasi online kami yang aman, mendukung PMI menjadi lebih
        mudah. Anda dapat memilih untuk memberikan kontribusi satu kali atau
        memilih donasi bulanan berulang, memberikan dukungan berkelanjutan untuk
        upaya kami yang sedang berlangsung. Pilih dari jumlah donasi yang telah
        ditetapkan atau masukkan jumlah kustom yang sesuai dengan anggaran Anda.
      </motion.p>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0.18}
        className="text-red-600 font-serif text-sm italic mb-10"
      >
        Setiap rupiah yang anda donasikan memberikan dampak nyata pada kehidupan
        mereka yang membutuhkan.
      </motion.p>

      {/* Donation steps */}
      <motion.ol
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-left"
        aria-label="Langkah-langkah berdonasi"
      >
        {[
          {
            step: "01",
            title: "Pilih Nominal",
            desc: "Tentukan jumlah donasi atau masukkan nominal kustom sesuai kemampuan Anda.",
          },
          {
            step: "02",
            title: "Pilih Frekuensi",
            desc: "Donasi sekali atau jadikan donasi rutin bulanan untuk dampak yang lebih besar.",
          },
          {
            step: "03",
            title: "Selesaikan Pembayaran",
            desc: "Transfer via bank, e-wallet, atau kartu kredit dengan aman dan terenkripsi.",
          },
        ].map(({ step, title, desc }) => (
          <motion.li
            key={step}
            variants={cardVariant}
            whileHover={{ y: -4 }}
            className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm group"
          >
            <span className="font-display font-black text-red-100 text-4xl leading-none block mb-3 group-hover:text-red-200 transition-colors">
              {step}
            </span>
            {/* H3 */}
            <h3 className="font-display font-semibold text-gray-900 text-base mb-2 group-hover:text-red-700 transition-colors">
              {title}
            </h3>
            <p className="text-gray-500 font-serif text-sm leading-relaxed">
              {desc}
            </p>
          </motion.li>
        ))}
      </motion.ol>

      {/* CTA button */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0.35}
      >
        <motion.a
          href="/donasi"
          whileHover={{ scale: 1.04, backgroundColor: "#991111" }}
          whileTap={{ scale: 0.96 }}
          className="inline-block bg-red-700 text-white font-display font-semibold tracking-widest text-sm px-14 py-4 rounded-lg shadow-lg hover:shadow-red-900/30 transition-all"
          aria-label="Mulai donasi sekarang"
        >
          Donasi Sekarang
        </motion.a>
      </motion.div>
    </section>
  );
}

/** Impact stats band */
function ImpactStats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const stats = [
    { value: 34, suffix: " Provinsi", label: "Jangkauan PMI" },
    { value: 514, suffix: " Kab/Kota", label: "Unit PMI Aktif" },
    { value: 5000000, suffix: "+", label: "Penerima Bantuan/Tahun" },
    { value: 400000, suffix: "+", label: "Relawan Terlatih" },
  ];

  return (
    <section
      ref={ref}
      aria-label="Statistik dampak PMI"
      className="bg-linear-to-br from-red-800 to-red-600 py-16 px-8"
    >
      {/* H2 */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center text-white font-display font-black mb-12 tracking-tight"
        style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
      >
        Dampak Nyata Donasi Anda
      </motion.h2>

      <motion.dl
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
      >
        {stats.map(({ value, suffix, label }, i) => (
          <StatItem
            key={label}
            value={value}
            suffix={suffix}
            label={label}
            started={inView}
            delay={i * 0.25}
          />
        ))}
      </motion.dl>
    </section>
  );
}

function StatItem({
  value,
  suffix,
  label,
  started,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  started: boolean;
  delay: number;
}) {
  const count = useCountUp(value, started, 2);

  return (
    <motion.div variants={cardVariant} className="text-center">
      <dt>
        <span
          className="font-display font-black text-white tabular-nums leading-none"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          {count.toLocaleString("id-ID")}
          {suffix}
        </span>
      </dt>
      <dd className="text-white/70 font-serif text-sm mt-2">{label}</dd>
    </motion.div>
  );
}

/** Footer CTA band + footer */
function FooterCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <footer ref={ref}>
      {/* CTA band */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="bg-red-700 px-10 py-7 flex flex-wrap items-center justify-between gap-5"
      >
        <motion.a
          href="/kontak"
          whileHover={{
            backgroundColor: "rgba(255,255,255,0.12)",
            scale: 1.03,
          }}
          whileTap={{ scale: 0.96 }}
          className="border-2 border-white text-white font-display font-semibold tracking-widest text-sm px-9 py-3 rounded transition-colors"
        >
          Kontak Kami
        </motion.a>

        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-white/80 font-serif text-sm italic">
            Ikuti sosial media kami:
          </span>
          {SOCIAL_ICONS.map(({ label, symbol }) => (
            <motion.a
              key={label}
              href="#"
              aria-label={label}
              whileHover={{
                scale: 1.15,
                backgroundColor: "rgba(255,255,255,0.18)",
              }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full border border-white/40 text-white text-xs flex items-center justify-center"
            >
              {symbol}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Footer bottom */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="bg-neutral-900 px-10 py-10"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap gap-10 justify-between items-start">
          <motion.address variants={fadeLeft} className="not-italic">
            <p className="text-gray-300 font-semibold text-sm mb-2 tracking-wide">
              Markas Pusat PMI
            </p>
            <p className="text-gray-500 text-sm leading-relaxed font-serif">
              Jalan Gatot Subroto Kav. 96 – Jakarta 12790
            </p>
            <a
              href="mailto:pmi@pmi.or.id"
              className="text-gray-500 text-sm hover:text-red-500 transition-colors font-serif"
            >
              ✉ pmi@pmi.or.id
            </a>
          </motion.address>

          <motion.div variants={fadeRight} className="flex gap-5 items-start">
            <motion.a
              href="/donasi"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shrink-0 bg-red-700 hover:bg-red-800 text-white font-display font-semibold tracking-widest text-sm px-6 py-3 rounded-sm transition-colors"
            >
              DONASI
            </motion.a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-serif">
              Bergabunglah dengan kami dalam membuat perbedaan dan mendukung
              misi kami untuk memberdayakan masyarakat.
            </p>
          </motion.div>
        </div>

        <motion.p
          variants={fadeUp}
          className="mt-8 pt-5 border-t border-white/10 text-center text-gray-600 text-xs tracking-wide font-serif"
        >
          © {new Date().getFullYear()} Palang Merah Indonesia. Seluruh hak cipta
          dilindungi undang-undang.
        </motion.p>
      </motion.div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ROOT PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function WhyDonatePage() {
  return (
    <>
      {/*
        Pages Router: tambahkan <Head> di sini
        App Router  : metadata export di atas sudah cukup
      */}
      <Head>
        <title>Mengapa Donasi Anda Penting | Palang Merah Indonesia</title>
        <meta
          name="description"
          content="Setiap rupiah donasi Anda membantu PMI memberikan bantuan darurat bencana, manajemen krisis kesehatan, dan membangun komunitas yang tangguh di seluruh Indonesia."
        />
        <link
          rel="canonical"
          href="https://www.pmi.or.id/donation/monetary/why-donate"
        />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,700;0,900;1,700&family=Source+Serif+4:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* JSON-LD WebPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Mengapa Donasi Anda Penting",
            description:
              "Kontribusi Anda Sangat Penting untuk Menyelamatkan Nyawa dan Membangun Komunitas yang Tangguh",
            url: "https://www.pmi.or.id/donation/monetary/why-donate",
            publisher: {
              "@type": "Organization",
              name: "Palang Merah Indonesia",
              url: "https://www.pmi.or.id",
            },
          }),
        }}
      />

      <div
        className="min-h-screen bg-gray-50 overflow-x-hidden"
        style={
          {
            "--font-display": "'Barlow Condensed', sans-serif",
            "--font-body": "'Source Serif 4', serif",
          } as React.CSSProperties
        }
      >
        {/* Utility class helpers for custom fonts */}
        <style>{`
          .font-display { font-family: var(--font-display); }
          .font-serif   { font-family: var(--font-body);    }
        `}</style>

        {/* ── Layout ─────────────────────────────────────────────── */}
        <AnnouncementBar />
        <Navbar />

        <main id="main-content">
          <Breadcrumb />
          <HeroContent />
          <WhyDonateArticle />
          <CTABanner />
          <VideoSection />
          <HowToDonate />
          <ImpactStats />
        </main>

        <FooterCTA />
      </div>
    </>
  );
}

/*
──────────────────────────────────────────────────────────────────────────────
CARA PENGGUNAAN
──────────────────────────────────────────────────────────────────────────────

1. Simpan file ini ke:
     pages/donation/monetary/why-donate.tsx   (Pages Router)
   atau:
     app/donation/monetary/why-donate/page.tsx (App Router)

2. Install dependencies:
     npm install framer-motion
     npm install next react react-dom

3. Tambahkan konfigurasi Tailwind (tailwind.config.ts):
     content: ["./app/**\/*.{ts,tsx}", "./pages/**\/*.{ts,tsx}", "./components/**\/*.{ts,tsx}"]
     theme.extend.colors: { red: { 700: "#CC0000" } }

4. Ganti placeholder gambar:
     - HeroContent  → /public/images/pmi-banjir.jpg
     - VideoSection → thumbnail YouTube asli PMI + YOUTUBE_ID yang benar

5. Untuk Pages Router, hapus:
     - "use client"
     - export const metadata
   Dan tambahkan getStaticProps jika diperlukan.

SEO HIERARCHY
──────────────────────────────────────────────────────────────────────────────
  <h1> Mengapa Anda Perlu Berdonasi
  <h2> Mengapa Donasi Anda Penting
       <h3> Tanggap Darurat Bencana
       <h3> Manajemen Krisis Kesehatan
       <h3> Ketahanan & Pengembangan Komunitas
       <h3> Mendukung Pertumbuhan PMI
  <h2> Video Kampanye PMI  (sr-only)
  <h2> Cara Berdonasi
       <h3> Pilih Nominal
       <h3> Pilih Frekuensi
       <h3> Selesaikan Pembayaran
  <h2> Dampak Nyata Donasi Anda

Structured data: BreadcrumbList + WebPage (JSON-LD)
*/
