import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/src/components/navbar/navbar";

const Plus_JakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mengapa Donasi Anda Penting | Palang Merah Indonesia",
  description:
    "Setiap rupiah donasi Anda membantu PMI memberikan bantuan darurat bencana, manajemen krisis kesehatan, dan membangun komunitas yang tangguh di seluruh Indonesia.",
  keywords: [
    "donasi PMI",
    "Palang Merah Indonesia",
    "donasi kemanusiaan",
    "bantuan bencana Indonesia",
    "relawan PMI",
  ],
  openGraph: {
    title: "Mengapa Donasi Anda Penting | PMI",
    description:
      "Bergabunglah bersama jutaan orang yang telah membantu PMI menyelamatkan nyawa di seluruh Indonesia.",
    type: "website",
    locale: "id_ID",
    siteName: "Palang Merah Indonesia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mengapa Donasi Anda Penting | PMI",
    description: "Setiap rupiah yang Anda donasikan memberikan dampak nyata.",
  },
  alternates: {
    canonical: "https://www.pmi.or.id/donation/monetary/why-donate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      lang="en"
      className={`${Plus_JakartaSans.variable} ${Plus_JakartaSans.variable} ${Plus_JakartaSans.className} h-full antialiased`}
    >
      {children}
    </div>
  );
}
