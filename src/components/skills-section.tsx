'use client'

import { useState } from "react";

const skills = [
  { name: "React", color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", color: "#000000", category: "Frontend" },
  { name: "TypeScript", color: "#3178C6", category: "Language" },
  { name: "Redux", color: "#764ABC", category: "Frontend" },
  { name: "JavaScript", color: "#F7DF1E", category: "Language" },
  { name: "SQL", color: "#4479A1", category: "Language" },
  { name: "Rust", color: "#000000", category: "Language" },
  { name: "Node.js", color: "#339933", category: "Backend" },
  { name: "Express", color: "#000000", category: "Backend" },
  { name: "MongoDB", color: "#47A248", category: "Database" },
  { name: "PostgreSQL", color: "#336791", category: "Database" },
  { name: "Supabase", color: "#3ECF8E", category: "Database" },
  { name: "Redis", color: "#DC382D", category: "Database" },
  { name: "Tailwind CSS", color: "#06B6D4", category: "Frontend" },
  { name: "Docker", color: "#2496ED", category: "DevOps" },
  { name: "Kubernetes", color: "#326CE5", category: "DevOps" },
  { name: "GraphQL", color: "#E10098", category: "API/Tools" },
  { name: "gRPC", color: "#244C5A", category: "API/Tools" },
  { name: "REST APIs", color: "#000000", category: "API/Tools" },
  { name: "Websockets", color: "#000000", category: "API/Tools" },
  { name: "WebRTC", color: "#333333", category: "API/Tools" },
  { name: "Prisma", color: "#2D3748", category: "API/Tools" },
  { name: "Git", color: "#F05032", category: "API/Tools" },
  { name: "CI/CD", color: "#000000", category: "DevOps" },
  { name: "tRPC", color: "#3178C6", category: "API/Tools" },
  { name: "Socket.io", color: "#010101", category: "API/Tools" },
  { name: "AWS", color: "#FF9900", category: "DevOps" },
];

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(skills.map((skill) => skill.category)))];

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return <div className='max-w-2xl'>
    <div className="mt-8 md:mt-16 flex flex-row items-center gap-x-2 text-primary">
      <div className="flex flex-row flex-wrap gap-x-2 gap-y-2 items-start">
        <h1 className="text-2xl">
          Skills
        </h1>
        {categories.map((category) => (
          <button
            key={category}
            className={`flex flex-col gap-y-2 text-center px-2 py-1 rounded-full ${selectedCategory === category ? 'bg-primary text-white' : 'bg-gray-200 text-primary'
              }`}
            onClick={() => setSelectedCategory(category)}
          >
            <p className="text-base font-bold">{category}</p>
          </button>
        ))}
      </div>
    </div>

    <div className="flex flex-row flex-wrap gap-x-2 gap-y-2 mt-4">
      {filteredSkills.map((skill) => (
        <div key={skill.name} className="flex flex-col gap-y-2 items-center text-center bg-primary/90 px-2 py-1 rounded-full">
          <p className="text-base text-white font-bold">{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
}