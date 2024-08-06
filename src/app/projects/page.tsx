"use client"
import { BackgroundOverlayCard } from "@/components/blocks/background-overlay-card";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    description: "Merge your github contributions",
    title: "Mergit",
    image: "/mergit.png",
    link: "https://mergit.io",
    githubLink: "https://github.com/Sajal0208/mergit",
    gif: "/mergit.gif",
    textColor: "text-black",
    backgroundImageColorShade: "white",
    tags: ["NextJs", "Tailwind CSS", "SaaS", "Supabase", "Fullstack"]
  },
  {
    description: "Deploy your frontend application seamlessly",
    title: "Deploy-with-ease",
    image: "/deploy-with-ease.png",
    link: "https://deploy-with-ease.vercel.app",
    githubLink: "https://github.com/Sajal0208/netlify-client",
    gif: "/deploy-with-ease.gif",
    textColor: "text-white",
    backgroundImageColorShade: "black",
    tags: ["ReactJs", "NodeJs", "PostgreSQL", "DevOps", "AWS", "Fullstack"]
  },
  {
    description: "A video-calling application that allows users to communicate with each other in real-time.",
    title: "Chatify",
    image: "/chatify.png",
    link: "https://chatify.vercel.app",
    githubLink: "https://github.com/Sajal0208/chatify",
    gif: "/chatify.gif",
    textColor: "text-white",
    backgroundImageColorShade: "black",
    tags: ["ReactJs", "NodeJs", "WebRTC", "Fullstack"]
  },
  {
    description: "A feature-rich platform that allows users to upload, like, and dislike videos.",
    title: "Streamify",
    image: "/streamify.png",
    link: "https://streamify.vercel.app",
    githubLink: "https://github.com/Sajal0208/streamify",
    gif: "/streamify.gif",
    textColor: "text-black",
    backgroundImageColorShade: "white",
    tags: ["NextJs", "Tailwind CSS", "Fullstack", "Video Streaming"]
  },
  {
    description: "A coding practice platform similar to LeetCode.",
    title: "SolveQuest",
    image: "/solvequest.png",
    link: "https://solvequest.vercel.app",
    githubLink: "https://github.com/Sajal0208/solvequest",
    gif: "/solvequest.gif",
    textColor: "text-white",
    backgroundImageColorShade: "black",
    tags: ["NextJs", "Fullstack"]
  },
  {
    description: "A completely free web app service that allows you to do the following: Schedule a post on Dev.to && Cross-Post between Dev.to Medium Hash node",
    title: "Integrate.io",
    image: "/integrate.io.png",
    link: "https://devpost.com/software/394520?ref_content=existing_user_added_to_software_team&ref_feature=portfolio&ref_medium=email&utm_campaign=software&utm_content=added_to_software_team&utm_medium=email&utm_source=transactional#app-team",
    githubLink: "https://github.com/integrateme-co/integrate-io",
    gif: "/integrate.io.png",
    textColor: "text-white",
    backgroundImageColorShade: "white",
    tags: ["ReactJs", "NodeJs", "Fullstack"]
  },
  {
    description: "A fully responsive portfolio website which enables light and dark mode made using ReactJs.",
    title: "Portfolio V1",
    image: "/my-portfolio.png",
    link: "https://sajaldewnagan.netlify.app",
    githubLink: "https://github.com/Sajal0208/my-portfolio",
    gif: "/my-portfolio.gif",
    textColor: "text-white",
    backgroundImageColorShade: "black",
    tags: ["ReactJs", "Tailwind CSS"]
  },
]

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const allTags = projects.flatMap((project) => project.tags);
  const uniqueTags = Array.from(new Set(allTags));
  return <main className="flex flex-col gap-4">
    <div className="flex flex-row gap-4">
      <AnimatePresence>
        {selectedTags.map((tag, index) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedTags(selectedTags.filter((t) => t !== tag))}
            className="bg-primary px-2 py-1 rounded-md cursor-pointer"
          >
            {tag}
          </motion.div>
        ))}
      </AnimatePresence>
      <AnimatePresence>
        {uniqueTags.map((tag) => {
          if (selectedTags.includes(tag)) return null;
          return (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedTags([...selectedTags, tag])}
              className="bg-gray-200 px-2 py-1 rounded-md cursor-pointer"
            >
              {tag}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[1200px]">
      {projects.map((project, index) => {
        if (selectedTags.length > 0 && !project.tags.some((t) => selectedTags.includes(t))) return null;
        return (
          <BackgroundOverlayCard
            key={index}
            textColor={project.textColor}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            githubLink={project.githubLink}
            gif={project.gif}
            backgroundImageColorShade={project.backgroundImageColorShade}
            tags={project.tags}
          />
        )
      })}
    </div>
  </main>
}
