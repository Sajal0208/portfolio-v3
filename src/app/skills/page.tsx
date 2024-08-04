import { FloatingCards } from "@/components/floating-cards";
const skills = [
  { name: "React", color: "#61DAFB", category: "Libraries/Frameworks" },
  { name: "Next.js", color: "#000000", category: "Libraries/Frameworks" },
  { name: "TypeScript", color: "#3178C6", category: "Programming Languages" },
  { name: "JavaScript", color: "#F7DF1E", category: "Programming Languages" },
  { name: "SQL", color: "#4479A1", category: "Programming Languages" },
  { name: "Rust", color: "#000000", category: "Programming Languages" },
  { name: "Node.js", color: "#339933", category: "Libraries/Frameworks" },
  { name: "Express", color: "#000000", category: "Libraries/Frameworks" },
  { name: "MongoDB", color: "#47A248", category: "Databases" },
  { name: "PostgreSQL", color: "#336791", category: "Databases" },
  { name: "Supabase", color: "#3ECF8E", category: "Databases" },
  { name: "Redis", color: "#DC382D", category: "Databases" },
  { name: "Tailwind CSS", color: "#06B6D4", category: "Libraries/Frameworks" },
  { name: "Docker", color: "#2496ED", category: "Tools/Platforms" },
  { name: "GraphQL", color: "#E10098", category: "APIs/Protocols" },
  { name: "gRPC", color: "#244C5A", category: "APIs/Protocols" },
  { name: "REST APIs", color: "#000000", category: "APIs/Protocols" },
  { name: "Websockets", color: "#000000", category: "APIs/Protocols" },
  { name: "WebRTC", color: "#333333", category: "APIs/Protocols" },
  { name: "Prisma", color: "#2D3748", category: "Tools/Platforms" },
  { name: "Git", color: "#F05032", category: "Tools/Platforms" },
  { name: "CI/CD", color: "#000000", category: "Tools/Platforms" },
  { name: "Microservices", color: "#000000", category: "Tools/Platforms" },
];

export default function Skills() {
  return <main>
    <FloatingCards skills={skills} />
  </main>
}
