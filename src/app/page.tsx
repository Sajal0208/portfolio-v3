import EducationSection from "@/components/education-section";
import ExperienceSection from "@/components/experience-section";
import HeroSection from "@/components/hero-section";
import { MainHeader } from "@/components/main-header";
import MyStorySection from "@/components/my-story-section";
import ProjectsSection from "@/components/projects-section";

export default function Home() {
  return (
    <main>
      <MainHeader />
      <HeroSection />
      <MyStorySection />
      <div className="flex flex-row mt-32 gap-x-10">
        <EducationSection />
        <ExperienceSection />
      </div>
    </main>
  );
}
