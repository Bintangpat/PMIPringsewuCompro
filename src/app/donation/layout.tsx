import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${geistSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
