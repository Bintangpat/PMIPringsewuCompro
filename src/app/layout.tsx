import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/navbar/navbar";
import Footer from "@/src/components/footer/footer";

const Plus_JakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PMI Pringsewu",
  description: "Website Resmi Palang Merah Indonesia Kabupaten Pringsewu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${Plus_JakartaSans.variable} ${Plus_JakartaSans.variable} ${Plus_JakartaSans.className}  h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col relative">
        <Navbar />
        <div className="w-full h-[120px] relative z-0"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
