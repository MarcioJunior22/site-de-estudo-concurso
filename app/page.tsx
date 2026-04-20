import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ExamInfoSection } from "@/components/exam-info-section";
import { PositionsSection } from "@/components/positions-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ExamInfoSection />
        <PositionsSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
