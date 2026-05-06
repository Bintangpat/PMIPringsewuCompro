'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Search,
    ArrowRight,
    Building2,
    ChevronLeft,
    ChevronRight,
    GraduationCap,
    BadgeCheck,
    Globe,
    Building,
    Quote,
    Share2,
    Mail
} from 'lucide-react';

// --- Data Constants ---
const SCHEDULE_DATA = [
    {
        id: '01',
        name: 'Pertolongan Pertama Dasar (Basic First Aid)',
        category: 'Individu',
        date: '15 - 17 Nov 2024',
        location: 'Pusdiklat PMI, Jakarta',
        status: 'Dibuka',
        action: 'Daftar',
    },
    {
        id: '02',
        name: 'Penanggulangan Bencana Terpadu',
        category: 'Individu',
        date: '20 - 25 Nov 2024',
        location: 'Training Center, Bogor',
        status: 'Dibuka',
        action: 'Daftar',
    },
    {
        id: '03',
        name: 'Safety at Work (K3 Kantor)',
        category: 'Mitra',
        date: '02 - 04 Des 2024',
        location: 'In-House Training',
        status: 'Penuh',
        action: 'Detail',
    },
    {
        id: '04',
        name: 'Water Rescue Specialist',
        category: 'Individu',
        date: '10 - 15 Des 2024',
        location: 'Waduk Jatiluhur',
        status: 'Segera',
        action: 'Pantau',
    },
];

const FEATURES_DATA = [
    {
        icon: GraduationCap,
        title: 'Instruktur Profesional',
        desc: 'Dilatih oleh tenaga ahli bersertifikasi nasional dan internasional dengan pengalaman lapangan nyata.',
    },
    {
        icon: BadgeCheck,
        title: 'Sertifikasi Resmi',
        desc: 'Lulusan mendapatkan sertifikat resmi PMI yang diakui secara luas oleh instansi dan industri.',
    },
    {
        icon: Globe,
        title: 'Standar Global',
        desc: 'Kurikulum kami disusun berdasarkan standar IFRC dan Protokol Pertolongan Pertama Internasional.',
    },
    {
        icon: Building,
        title: 'Fasilitas Memadai',
        desc: 'Ruang kelas nyaman, alat simulasi terkini, dan lokasi strategis untuk mendukung proses belajar.',
    },
];

const TESTIMONIALS_DATA = [
    {
        quote: "Pelatihan First Aid di PMI memberikan saya kepercayaan diri untuk bertindak saat darurat. Seminggu setelah pelatihan, saya berhasil membantu rekan kerja yang pingsan berkat ilmu yang saya dapatkan.",
        name: "Alice Johnson",
        role: "HR Manager, Tech Corp",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
        colSpan: "col-span-1 md:col-span-2",
        size: "large"
    },
    {
        quote: "Kurikulumnya sangat praktis dan mudah dipahami bahkan untuk pemula seperti saya.",
        name: "Daniel Lee",
        role: "Mahasiswa",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
        colSpan: "col-span-1",
        size: "small"
    },
    {
        quote: "PMI adalah mitra terbaik untuk sertifikasi K3 perusahaan kami.",
        name: "Sarah Wijaya",
        role: "Safety Director",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
        colSpan: "col-span-1",
        size: "small"
    }
];

const PARTNERS = [
    "Adira Finance", "Japanese Red Cross", "IFRC", "ICRC", "Bursa Efek Indonesia"
];

// --- Animation Variants ---
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as const }
};

export default function PMITrainingCenter() {
    return (
        <div className="bg-[#f8f9ff] text-[#0b1c30] selection:bg-[#ffdada] selection:text-[#b80035] min-h-screen">


            {/* Hero Section */}
            <header className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
                <motion.div
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
                        alt="Medical training"
                    />
                    <div className="absolute inset-0 bg-[#0b1c30]/70 mix-blend-multiply" />
                </motion.div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center md:text-left">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-2xl"
                    >
                        <motion.span variants={fadeUp} className="inline-block bg-[#b80035]/20 text-[#ffdada] border border-[#b80035]/30 px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-widest backdrop-blur-sm">
                            Membangun Kapasitas, Menyelamatkan Jiwa
                        </motion.span>
                        <motion.h1 variants={fadeUp} className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                            Program Pelatihan Palang Merah Indonesia
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-lg text-white/80 mb-10 leading-relaxed font-medium">
                            Meningkatkan kesiapsiagaan dan keahlian kemanusiaan melalui pelatihan bersertifikasi standar internasional untuk individu maupun organisasi mitra.
                        </motion.p>
                        <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-4">
                            <button className="bg-[#b80035] text-white px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 hover:bg-[#920028] shadow-lg shadow-[#b80035]/20 active:scale-95 transition-all">
                                Cari Program
                                <Search className="w-5 h-5" />
                            </button>
                            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/20 active:scale-95 transition-all">
                                Pelajari Lebih Lanjut
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </header>

            {/* Training Categories */}
            <section className="py-24 bg-[#f8f9ff]">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {/* Individual Training */}
                        <motion.div variants={fadeUp} className="group bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-[#b80035]/30 hover:shadow-xl transition-all duration-300">
                            <div className="relative h-64 mb-8 overflow-hidden rounded-2xl">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                                    alt="Pelatihan Individu"
                                />
                            </div>
                            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold mb-4">Pelatihan Individu</h3>
                            <p className="text-[#5c5f61] mb-8 leading-relaxed">
                                Program terbuka untuk masyarakat umum yang ingin memiliki keahlian dasar hingga tingkat lanjut dalam bidang pertolongan pertama, penanggulangan bencana, dan kerelawanan.
                            </p>
                            <a className="inline-flex items-center gap-2 text-[#b80035] font-bold group-hover:gap-3 transition-all" href="#">
                                Daftar Program Individu
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </motion.div>

                        {/* Partner Training */}
                        <motion.div variants={fadeUp} className="group bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-[#b80035]/30 hover:shadow-xl transition-all duration-300">
                            <div className="relative h-64 mb-8 overflow-hidden rounded-2xl">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                                    alt="Pelatihan Mitra"
                                />
                            </div>
                            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold mb-4">Pelatihan Mitra</h3>
                            <p className="text-[#5c5f61] mb-8 leading-relaxed">
                                Solusi pelatihan khusus untuk perusahaan, instansi pemerintah, dan organisasi sosial guna meningkatkan standar K3 dan kesiapsiagaan darurat di lingkungan kerja.
                            </p>
                            <a className="inline-flex items-center gap-2 text-[#b80035] font-bold group-hover:gap-3 transition-all" href="#">
                                Kerjasama Institusi
                                <Building2 className="w-5 h-5" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Current Schedule Section */}
            <section className="py-24 bg-[#eff4ff] border-y border-[#dce9ff]">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">Cek Jadwal Kami</h2>
                            <p className="text-[#5c5f61] text-lg font-medium">Pelatihan yang Sedang Berlangsung & Akan Datang</p>
                        </motion.div>
                        <div className="flex items-center gap-3">
                            <button className="bg-white border border-slate-200 p-3 rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button className="bg-white border border-slate-200 p-3 rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overflow-x-auto bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
                    >
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead className="bg-[#f8f9ff] text-[#0b1c30] border-b border-slate-100">
                                <tr>
                                    <th className="px-8 py-5 font-bold text-sm tracking-wide uppercase">No</th>
                                    <th className="px-8 py-5 font-bold text-sm tracking-wide uppercase">Nama Pelatihan</th>
                                    <th className="px-8 py-5 font-bold text-sm tracking-wide uppercase">Kategori</th>
                                    <th className="px-8 py-5 font-bold text-sm tracking-wide uppercase">Jadwal</th>
                                    <th className="px-8 py-5 font-bold text-sm tracking-wide uppercase">Lokasi</th>
                                    <th className="px-8 py-5 font-bold text-sm tracking-wide uppercase">Status</th>
                                    <th className="px-8 py-5 font-bold text-sm tracking-wide uppercase text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {SCHEDULE_DATA.map((row) => (
                                    <tr key={row.id} className="hover:bg-slate-50 transition-colors group">
                                        <td className="px-8 py-6 text-sm text-[#5c5f61] font-semibold">{row.id}</td>
                                        <td className="px-8 py-6 font-bold text-[#0b1c30]">{row.name}</td>
                                        <td className="px-8 py-6">
                                            <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${row.category === 'Individu' ? 'bg-[#e5eeff] text-[#0b1c30]' : 'bg-[#e0e3e5] text-[#191c1e]'
                                                }`}>
                                                {row.category}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-sm font-medium">{row.date}</td>
                                        <td className="px-8 py-6 text-sm text-[#5c5f61] font-medium">{row.location}</td>
                                        <td className="px-8 py-6">
                                            <span className={`font-bold text-sm flex items-center gap-2 ${row.status === 'Penuh' ? 'text-[#5c5f61]' : 'text-[#b80035]'
                                                }`}>
                                                {row.status !== 'Penuh' && <span className="w-2 h-2 bg-[#b80035] rounded-full animate-pulse" />}
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <button className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95 ${row.status === 'Penuh'
                                                ? 'border border-slate-200 text-slate-400 cursor-not-allowed bg-slate-50'
                                                : 'bg-[#b80035] text-white hover:bg-[#920028] shadow-md shadow-[#b80035]/20'
                                                }`}>
                                                {row.action}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                    <div className="mt-10 text-center">
                        <button className="text-[#b80035] font-bold border-b-2 border-[#b80035] pb-1 hover:text-[#920028] transition-colors">
                            Lihat Seluruh Jadwal Tahunan
                        </button>
                    </div>
                </div>
            </section>

            {/* Features/Benefits Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">Mengapa Memilih Pelatihan Kami?</h2>
                        <div className="w-24 h-1.5 bg-[#b80035] mx-auto rounded-full" />
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid sm:grid-cols-2 md:grid-cols-4 gap-10"
                    >
                        {FEATURES_DATA.map((feature, idx) => (
                            <motion.div key={idx} variants={fadeUp} className="text-center group hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-20 h-20 bg-[#ffdada]/40 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#ffdada] transition-colors duration-300">
                                    <feature.icon className="text-[#b80035] w-8 h-8" />
                                </div>
                                <h4 className="font-['Plus_Jakarta_Sans'] text-xl font-bold mb-4">{feature.title}</h4>
                                <p className="text-[#5c5f61] text-sm leading-relaxed font-medium">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section (Bento Layout) */}
            <section className="py-24 bg-[#213145] text-white overflow-hidden relative">
                {/* Subtle background grain or pattern effect can go here, simulated by a gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#111c2d] to-transparent opacity-80" />

                <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Kisah Nyata. Dampak Nyata.</h2>
                        <p className="text-[#cbdbf5] text-lg font-medium">Dengar langsung dari mereka yang telah bergabung bersama kami</p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-4 gap-6"
                    >
                        {TESTIMONIALS_DATA.map((t, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                className={`${t.colSpan} bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors`}
                            >
                                <div>
                                    <Quote className="text-[#ffb3b6] w-10 h-10 mb-6 opacity-80" />
                                    <p className={`font-['Plus_Jakarta_Sans'] italic mb-10 text-[#f8f9ff] leading-relaxed ${t.size === 'large' ? 'text-xl md:text-2xl font-semibold' : 'text-base font-medium'}`}>
                                        "{t.quote}"
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 mt-auto">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-[#ffb3b6]"
                                    />
                                    <div>
                                        <p className="font-bold text-[#ffb3b6]">{t.name}</p>
                                        <p className="text-sm text-[#cbdbf5] font-medium">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <h3 className="font-bold text-sm text-[#5c5f61] text-center uppercase tracking-[0.2em] mb-12">
                        Dipercaya oleh organisasi terkemuka
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                        {PARTNERS.map(partner => (
                            <span key={partner} className="font-['Plus_Jakarta_Sans'] text-2xl text-[#5c5f61] font-extrabold tracking-tight">
                                {partner}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-[#b80035] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 blur-[100px] rounded-full" />

                <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                            Siap Untuk Memulai Perubahan?
                        </h2>
                        <p className="text-[#ffdada] text-lg mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                            Bergabunglah dengan ribuan alumni kami dan jadilah bagian dari solusi kemanusiaan di Indonesia.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-5">
                            <button className="bg-white text-[#b80035] px-10 py-4 rounded-xl font-bold text-base hover:bg-slate-50 active:scale-95 transition-all shadow-xl shadow-black/10">
                                Konsultasi Gratis
                            </button>
                            <button className="border-2 border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-bold text-base hover:bg-white/10 active:scale-95 transition-all">
                                Unduh Brosur
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#111c2d] py-20 px-6 md:px-8 flex flex-col items-center gap-8 text-center border-t border-[#0b1c30]">
                <div className="flex flex-col items-center gap-4 mb-8">
                    <span className="font-['Plus_Jakarta_Sans'] text-2xl font-black text-[#ffb3b6] tracking-tight">
                        PMI Training Center
                    </span>
                    <p className="text-[#cbdbf5] max-w-md text-sm leading-relaxed font-medium">
                        Menyelenggarakan pelatihan berkualitas untuk mencetak insan kemanusiaan yang tangguh dan profesional di seluruh Indonesia.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mb-8">
                    {['Kebijakan Privasi', 'Syarat & Ketentuan', 'Hubungi Kami', 'Pusat Bantuan'].map(link => (
                        <a key={link} className="text-[#cbdbf5] hover:text-white transition-colors font-medium text-sm underline underline-offset-4 decoration-[#cbdbf5]/30 hover:decoration-white" href="#">
                            {link}
                        </a>
                    ))}
                </div>

                <div className="flex gap-6 mb-8">
                    <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#cbdbf5] hover:bg-[#b80035] hover:text-white transition-all">
                        <Globe className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#cbdbf5] hover:bg-[#b80035] hover:text-white transition-all">
                        <Share2 className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#cbdbf5] hover:bg-[#b80035] hover:text-white transition-all">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                <div className="w-full h-px bg-white/10 max-w-5xl" />
                <p className="text-[#cbdbf5]/60 text-sm font-medium pt-4">
                    © 2026 Palang Merah Indonesia. Menjaga Kemanusiaan, Menanam Kebaikan.
                </p>
            </footer>
        </div>
    );
}