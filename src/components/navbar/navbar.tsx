"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// TYPE DEFINITIONS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Sub-item untuk link yang memiliki children (ditampilkan dengan chevron accordion).
 * Contoh: "Disaster Programs" yang memiliki sub-link seperti "Disaster Response", dll.
 */
type SubItem = {
  label: string;
  href: string;
};

/**
 * Sebuah navigasi link di dalam menu.
 * - Jika tidak memiliki `children`, ditampilkan sebagai link biasa.
 * - Jika memiliki `children`, ditampilkan dengan chevron accordion yang bisa diklik
 *   untuk menampilkan daftar sub-item.
 */
type NavLink = {
  label: string;
  href: string;
  children?: SubItem[]; // sub-item dengan chevron accordion
};

/**
 * Section dalam Mega Menu. Setiap section memiliki judul dan daftar link.
 */
type MegaMenuSection = {
  title: string;
  links: NavLink[];
};

/**
 * Mega Menu: ditampilkan terpusat di bawah navbar, dibagi per-kolom (section).
 * Digunakan untuk "Donasi" dan "Tentang Kami".
 */
type NavDataMega = {
  type: "mega";
  content: MegaMenuSection[];
};

/**
 * List Menu: ditampilkan sebagai dropdown vertikal di bawah link.
 * Digunakan untuk menu selain Donasi & Tentang Kami.
 */
type NavDataList = {
  type: "list";
  links: NavLink[];
};

type NavItem = NavDataMega | NavDataList;

// ─────────────────────────────────────────────────────────────────────────────
// NAVIGATION DATA
// Semua path menggunakan prefix "/" agar kompatibel dengan Next.js router.
// Sub-item (7.1, 7.2, dst.) disimpan di field `children` dan ditampilkan
// menggunakan komponen ChevronAccordion.
// ─────────────────────────────────────────────────────────────────────────────
const NAV_DATA: Record<string, NavItem> = {
  // ── DONASI (Mega Menu) ───────────────────────────────────────────────────
  Donasi: {
    type: "mega",
    content: [
      {
        title: "Donasi Uang",
        links: [
          { label: "Mengapa Donasi", href: "/donation/monetary/why-donation" },
          { label: "Donasi Sekarang", href: "/donation/monetary/donation-now" },
          { label: "Kampanye Donasi", href: "/donation/monetary/campaigns" },
        ],
      },
      {
        title: "Donasi Non-Materi",
        links: [
          {
            label: "Donasi Barang",
            href: "/donation/non-monetary/goods-donation",
          },
          {
            label: "Donasi Layanan",
            href: "/donation/non-monetary/service-donation",
          },
        ],
      },
      {
        title: "Kemitraan",
        links: [
          {
            label: "CSR",
            href: "/donation/partnership/corporate-social-responsibility-program",
          },
          {
            // Disaster Programs memiliki sub-item → ditampilkan dengan chevron
            label: "Program Bencana",
            href: "/donation/partnership/disaster-programs",
            children: [
              {
                label: "Program Respons Bencana",
                href: "/donation/partnership/disaster-programs/disaster-responses-program",
              },
              {
                label: "Pemulihan Bencana",
                href: "/donation/partnership/disaster-programs/disaster-recovery",
              },
              {
                label: "Kesiapsiagaan Bencana",
                href: "/donation/partnership/disaster-programs/disaster-preparedness",
              },
            ],
          },
          {
            // Health Programs memiliki sub-item → ditampilkan dengan chevron
            label: "Program Kesehatan",
            href: "/donation/partnership/health-programs",
            children: [
              {
                label: "Kesehatan Darurat",
                href: "/donation/partnership/health-programs/emergency-health",
              },
              {
                label: "Kesehatan Masyarakat",
                href: "/donation/partnership/health-programs/public-health",
              },
              {
                label: "Layanan Sosial",
                href: "/donation/partnership/health-programs/social-services",
              },
            ],
          },
          {
            label: "Air, Sanitasi & Higiene",
            href: "/donation/partnership/water-sanitation-hygine",
          },
          { label: "Hall of Fame", href: "/donation/partnership/hall-of-fame" },
        ],
      },
      {
        title: "Dampak Donasi",
        links: [
          {
            label: "Ke Mana Donasi Anda Pergi",
            href: "/donation/impact-of-donations/where-yours-donation-go",
          },
        ],
      },
    ],
  },

  // ── DONOR DARAH (List Menu) ──────────────────────────────────────────────
  "Donor Darah": {
    type: "list",
    links: [
      { label: "Info Stok Darah", href: "/blood-donation/bloodstock" },
      { label: "Lokasi Donor", href: "/blood-donation/where-to-donate" },
      { label: "Info Data Donor", href: "/blood-donation/donor-info" },
      { label: "FAQ", href: "/blood-donation/faq" },
      { label: "Ayo Donor App", href: "/blood-donation/ayodonor-app" },
    ],
  },

  // ── PELATIHAN & SERTIFIKASI (List Menu) ─────────────────────────────────
  "Pelatihan & Sertifikasi": {
    type: "list",
    links: [
      { label: "Pelatihan", href: "/training-certification/training" },
      {
        // Certification Area memiliki sub-item → ditampilkan dengan chevron
        label: "Area Sertifikasi",
        href: "/training-certification/certification-area",
        children: [
          {
            label: "Respons Darurat",
            href: "/training-certification/certification-area/emergency-response",
          },
          {
            label: "Pengurangan Risiko Bencana",
            href: "/training-certification/certification-area/disaster-risk-reduction",
          },
          {
            label: "Layanan Kesehatan",
            href: "/training-certification/certification-area/healthcare-services",
          },
          {
            label: "Layanan Darah",
            href: "/training-certification/certification-area/blood-services",
          },
          {
            label: "Pelatihan Kerja",
            href: "/training-certification/certification-area/job-training",
          },
          {
            label: "Pelatihan Umum",
            href: "/training-certification/certification-area/general-training",
          },
        ],
      },
      {
        label: "Tempat Uji Kompetensi",
        href: "/training-certification/competency-test-center",
      },
      {
        label: "Berita Sertifikasi",
        href: "/training-certification/certification-news",
      },
      { label: "Testimoni", href: "/training-certification/testimonials" },
      { label: "IFRC", href: "/training-certification/ifrc" },
    ],
  },

  // ── RELAWAN (List Menu) ──────────────────────────────────────────────────
  Relawan: {
    type: "list",
    links: [
      { label: "Gabung Relawan", href: "/volunteer" },
      { label: "Kisah Relawan", href: "/volunteer/volunteer-stories" },
    ],
  },

  // ── BERITA (List Menu) ───────────────────────────────────────────────────
  Berita: {
    type: "list",
    links: [
      { label: "Siaran Pers", href: "/news/press-releases" },
      { label: "Artikel", href: "/news/articles" },
      { label: "Media Sosial", href: "/news/social-media" },
    ],
  },

  // ── TENTANG KAMI (Mega Menu) ─────────────────────────────────────────────
  "Tentang Kami": {
    type: "mega",
    content: [
      {
        title: "Layanan",
        links: [
          {
            label: "Manajemen Bencana",
            href: "/about-us/services/disaster-management",
          },
          {
            label: "Layanan Kesehatan & Sosial",
            href: "/about-us/services/health-social-services",
          },
          {
            label: "Layanan Internasional",
            href: "/about-us/services/international-services",
          },
          { label: "Program", href: "/about-us/services/programs" },
        ],
      },
      {
        title: "Tentang Kami",
        links: [
          {
            label: "7 Prinsip Gerakan",
            href: "/about-us/7-fundamental-principles",
          },
          { label: "Visi & Misi", href: "/about-us/vision-mission" },
          {
            label: "Struktur Organisasi",
            href: "/about-us/organization-structure",
          },
          { label: "Tata Kelola", href: "/about-us/governance" },
          { label: "Sejarah", href: "/about-us/history" },
        ],
      },
      {
        title: "Pustaka",
        links: [
          { label: "Pustaka PMI", href: "/about-us/library/pmi-library" },
          { label: "Publikasi", href: "/about-us/library/publications" },
          { label: "FAQ", href: "/about-us/library/faq" },
        ],
      },
      {
        title: "Karir",
        links: [
          { label: "Peluang Karir", href: "/about-us/careers/job-openings" },
        ],
      },
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

// ─────────────────────────────────────────────────────────────────────────────
// CHEVRON ACCORDION COMPONENT
// Komponen ini menampilkan sebuah link yang memiliki sub-item.
// Ketika diklik, chevron berputar dan daftar sub-item muncul dengan animasi.
// ─────────────────────────────────────────────────────────────────────────────
function ChevronAccordion({ navLink }: { navLink: NavLink }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="rounded-lg overflow-hidden">
      {/* Row utama: tombol toggle yang menampilkan label dan chevron */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between py-2.5 px-4 rounded-lg text-gray-600 hover:text-red-700 hover:bg-red-50 transition-all text-[13px] font-medium group/accordion"
      >
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-100 group-hover/accordion:bg-red-500 transition-colors" />
          {navLink.label}
        </span>
        {/* Chevron: berputar 180° ketika accordion terbuka */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400 group-hover/accordion:text-red-500 text-xs"
        >
          ▾
        </motion.span>
      </button>

      {/* Daftar sub-item: muncul dengan animasi slide-down ketika accordion terbuka */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-red-50/50 rounded-b-lg border-l-2 border-red-200 ml-4"
          >
            {navLink.children!.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="block py-2 px-4 text-[12px] text-gray-500 hover:text-red-700 hover:bg-red-50 transition-all"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MEGA MENU LINK ITEM
// Untuk link di dalam Mega Menu. Jika ada `children`, render ChevronAccordion.
// Jika tidak, render link biasa dengan dot indicator.
// ─────────────────────────────────────────────────────────────────────────────
function MegaMenuItem({ navLink }: { navLink: NavLink }) {
  if (navLink.children) {
    return <ChevronAccordion navLink={navLink} />;
  }

  return (
    <li>
      <Link
        href={navLink.href}
        className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-all cursor-pointer text-[13px] py-1.5 group/item"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-red-100 group-hover/item:bg-red-500 transition-colors shrink-0" />
        {navLink.label}
      </Link>
    </li>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LIST MENU LINK ITEM
// Untuk link di dalam List Menu. Jika ada `children`, render ChevronAccordion.
// Jika tidak, render link biasa dengan panah yang muncul saat hover.
// ─────────────────────────────────────────────────────────────────────────────
function ListMenuItem({ navLink }: { navLink: NavLink }) {
  if (navLink.children) {
    return <ChevronAccordion navLink={navLink} />;
  }

  return (
    <li>
      <Link
        href={navLink.href}
        className="flex items-center justify-between py-3 px-4 rounded-lg text-gray-600 hover:text-red-700 hover:bg-red-50 transition-all text-[13px] font-medium group/list"
      >
        {navLink.label}
        {/* Panah muncul dari kiri dengan efek slide saat link di-hover */}
        <span className="opacity-0 -translate-x-2 group-hover/list:opacity-100 group-hover/list:translate-x-0 transition-all text-red-400">
          →
        </span>
      </Link>
    </li>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN NAVBAR COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <div
      className="w-full fixed top-0 z-50 "
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* ── Top Bar ─────────────────────────────────────────────────────── */}
      <div className="bg-[#1a1a1a] text-white px-8 py-2 flex font items-center justify-between text-[11px]">
        <div className="flex items-center gap-4">
          <Link
            href="/donation/monetary/donation-now"
            className="bg-[#cc0000] px-4 py-1 font-bold tracking-tighter hover:bg-[#a30000] transition-colors"
          >
            DONASI
          </Link>
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
                className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center hover:text-red-500 hover:border-red-500 transition-all cursor-pointer"
              >
                {s}
              </span>
            ))}
          </div>
          <span className="cursor-pointer uppercase hover:text-red-500 transition-colors">
            ID ▾
          </span>
        </div>
      </div>

      {/* ── Main Navbar ──────────────────────────────────────────────────── */}
      <nav className="bg-white px-8 py-5 shadow-lg flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-full border-2 border-red-700 flex items-center justify-center font-bold text-red-700 text-xl group-hover:bg-red-700 group-hover:text-white transition-all duration-300">
            ✚
          </div>
          <div className="text-[#cc0000] font-extrabold text-[10px] leading-tight uppercase tracking-tight">
            <div>Palang</div>
            <div>Merah</div>
            <div>Indonesia</div>
          </div>
        </Link>

        {/* ── Menu Links ─────────────────────────────────────────────────── */}
        <div className="flex gap-7">
          {NAV_LINKS.map((link) => {
            const itemData = NAV_DATA[link];
            const isActive = activeMenu === link;

            return (
              <div
                key={link}
                /**
                 * Mega Menu menggunakan `static` agar posisi absolutnya dihitung
                 * relatif terhadap <nav> (yang `relative`), bukan terhadap item ini.
                 * List Menu menggunakan `relative` agar dropdown muncul tepat di bawah link.
                 */
                className={`py-2 ${itemData?.type === "mega" ? "static" : "relative"}`}
                onMouseEnter={() => setActiveMenu(link)}
              >
                {/* Link label + animated underline */}
                <div className="flex flex-col items-center cursor-pointer group">
                  <span
                    className={`text-[13px] font-bold uppercase transition-all duration-300 ${
                      isActive || (link === "Beranda" && !activeMenu)
                        ? "text-red-700"
                        : "text-gray-800 group-hover:text-red-700"
                    }`}
                  >
                    {link === "Beranda" ? (
                      // Beranda langsung navigasi ke "/"
                      <Link href="/">{link}</Link>
                    ) : (
                      link
                    )}
                  </span>
                  {/* Garis merah animasi di bawah link aktif */}
                  <motion.div
                    initial={false}
                    animate={{
                      width:
                        isActive || (link === "Beranda" && !activeMenu)
                          ? "100%"
                          : "0%",
                      opacity:
                        isActive || (link === "Beranda" && !activeMenu) ? 1 : 0,
                    }}
                    className="h-[2px] bg-red-700 mt-1"
                  />
                </div>

                {/* ── Sub-navigation Dropdown ───────────────────────────── */}
                <AnimatePresence>
                  {isActive && itemData && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`absolute top-full pt-4 z-50 ${
                        itemData.type === "mega"
                          ? // Mega: terpusat di bawah navbar dengan lebar penuh hingga max-w-6xl
                            "left-0 right-0 mx-auto w-[95vw] max-w-6xl"
                          : // List: rata kiri di bawah link, lebar tetap
                            "left-0 w-72"
                      }`}
                    >
                      <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 rounded-2xl overflow-hidden backdrop-blur-md">
                        {itemData.type === "mega" ? (
                          // ── Mega Menu: grid 4 kolom ───────────────────
                          <div className="p-10 grid grid-cols-4 gap-8">
                            {itemData.content.map((section, i) => (
                              <div key={i} className="space-y-3">
                                <h3 className="text-[#cc0000] font-extrabold text-xs tracking-wider uppercase border-b border-gray-100 pb-2">
                                  {section.title}
                                </h3>
                                <ul className="space-y-1">
                                  {section.links.map((navLink) => (
                                    <MegaMenuItem
                                      key={navLink.href}
                                      navLink={navLink}
                                    />
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          // ── List Menu: list vertikal ──────────────────
                          <div className="p-2">
                            <ul className="space-y-0.5">
                              {itemData.links.map((navLink) => (
                                <ListMenuItem
                                  key={navLink.href}
                                  navLink={navLink}
                                />
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden xl:block">
          <Link
            href="/about-us/contact"
            className="bg-red-700 text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-red-800 transition-all shadow-md hover:shadow-lg active:scale-95 inline-block"
          >
            Hubungi Kami
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
