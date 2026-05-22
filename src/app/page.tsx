import HeroSection from "@/components/home/Herosection";
import ServicesSection from "@/components/home/Servicesection";
import NewsSection from "@/components/home/Newssection";
import StatsFooterSection from "@/components/home/Statssection";

export default function Home() {
  return (
    <div className="w-full h-fit relative">
      <HeroSection />
      <ServicesSection />
      <NewsSection />
      <StatsFooterSection />
    </div>
  );
}
