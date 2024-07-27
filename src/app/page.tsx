import EducationSection from "@/components/education-section";
import HeroSection from "@/components/hero-section";
import { MainHeader } from "@/components/main-header";
import ProjectsSection from "@/components/projects-section";

export default function Home() {
  return (
    <main>
      <MainHeader />
      <HeroSection />
      <div className="flex flex-row mt-32 gap-x-32">
        <EducationSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
