'use client'
import EducationSection from "@/components/education-section";
import ExperienceSection from "@/components/experience-section";
import HeroSection from "@/components/hero-section";
import { MainHeader } from "@/components/main-header";
import MyStorySection from "@/components/my-story-section";
import SkillsSection from "@/components/skills-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MyStorySection />
      <SkillsSection />
      <div className="flex flex-col sm:flex-row mt-8 md:mt-16 gap-y-10 md:gap-y-0  gap-x-10">
        <EducationSection />
        <ExperienceSection />
      </div>
    </main>
  );
}
