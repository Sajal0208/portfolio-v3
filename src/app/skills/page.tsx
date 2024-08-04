"use client";
import { FloatingCards } from "@/components/floating-cards";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
];

export default function Skills() {
  return <main>
    <FloatingCards skills={skills} />
  </main>
}
