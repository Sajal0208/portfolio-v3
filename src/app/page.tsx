import HeroSection from "@/components/HeroSection";
import { MainHeader } from "@/components/main-header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <MainHeader />
      <HeroSection />
    </main>
  );
}
