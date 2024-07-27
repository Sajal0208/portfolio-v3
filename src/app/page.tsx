'use client'
import EducationSection from "@/components/education-section";
import ExperienceSection from "@/components/experience-section";
import HeroSection from "@/components/hero-section";
import { MainHeader } from "@/components/main-header";
import MyStorySection from "@/components/my-story-section";
import OnloadAnimation from "@/components/onload-animation";
import { useEffect } from "react";
import { useTransition } from "react";

export default function Home() {
  return (
    <main>
      <MainHeader />
      <HeroSection />
      <MyStorySection />
      <div className="flex flex-col xs:flex-row mt-16 md:mt-32 gap-y-10 md:gap-y-0  gap-x-10">
        <EducationSection />
        <ExperienceSection />
      </div>
    </main>
  );
}
