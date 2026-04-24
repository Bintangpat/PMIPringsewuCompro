import HeroSection from "@/src/components/home/Herosection";
import ServicesSection from "@/src/components/home/Servicesection";
import NewsSection from "@/src/components/home/Newssection";
import StatsFooterSection from "@/src/components/home/Statssection";
import Navbar from "@/src/components/navbar/navbar";

export default function Page() {
  return (
    <div className="w-full h-fit relative">
      <HeroSection />
      <ServicesSection />
      <NewsSection />
      <StatsFooterSection />
    </div>
  );
}
