"use client"
import { BackgroundOverlayCard } from "@/components/blocks/background-overlay-card";
import { ExpandableCardDemo } from "@/components/blocks/expandable-cards";
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
    tags: ["NextJs", "Tailwind CSS", "SaaS", "Supabase", "Fullstack"],
    content: () => {
      return (
        <ul className="list-disc list-inside">
          <li>
            Building Mergit, a SaaS platform enabling developers to aggregate and showcase GitHub contributions across multiple accounts, streamlining portfolio management and professional presentation.
          </li>
          <li>
            Implemented premium features including lifetime contribution preservation, safeguarding users' work history even after organizational repository access is revoked, thus enhancing career continuity and achievement documentation.
          </li>
        </ul>
      )
    }
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
    tags: ["ReactJs", "NodeJs", "PostgreSQL", "DevOps", "AWS", "Fullstack"],
    content: () => {
      return (
        <ul className="list-disc list-inside">
          <li>
            Developed a full-stack web application for seamless front-end deployment, utilizing React.js, Node.js, PostgreSQL, and AWS services (ECS, S3) to clone, build, and serve GitHub repositories.
          </li>
          <li>
            Implemented a scalable architecture with Redis for caching, Prisma ORM for database interactions, and a custom build server hosted on AWS ECS, demonstrating proficiency in cloud infrastructure and modern web technologies.
          </li>
        </ul>
      )
    }
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
    tags: ["ReactJs", "NodeJs", "WebRTC", "Fullstack"],
    content: () => {
      return (
        <ul className="list-disc list-inside">
          <li>
            Developed a video-calling application using raw WebRTC implementation, providing users with a seamless and immersive real-time communication experience.
          </li>
          <li>
            Enabled users to engage in both video calls and text-based chat interactions within the application
          </li>
        </ul>
      )
    }
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
    tags: ["NextJs", "Tailwind CSS", "Fullstack", "Video Streaming", "Prisma"],
    content: () => {
      return (
        <ul className="list-disc list-inside">
          <li>
            Developed a feature-rich platform enabling users to upload, like, and dislike videos, enhancing the overall content discovery and user engagement.
          </li>
          <li>
            Implemented a robust subscription system, allowing users to connect and engage with content creators. Users can seamlessly subscribe to their favorite creators, fostering a vibrant and connected community.
          </li>
        </ul>
      )
    }
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
    tags: ["NextJs", "Fullstack", "Prisma"],
    content: () => {
      return (
        <ul className="list-disc list-inside">
          <li>
            Developed a web application to provide a coding practice platform akin to LeetCode.
          </li>
          <li>
            Implemented a user-friendly interface and coding environment, enabling users to solve coding problems.
          </li>
        </ul>
      )
    }
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
    tags: ["ReactJs", "Tailwind CSS"],
    content: () => {
      return (
        <ul className="list-disc list-inside">
          <li>
            A fully responsive portfolio website which enables light and dark mode made using ReactJs.
          </li>
          <li>
            It is fully integrated with Firebase with the use of axios to send a get and post request.
          </li>
          <li>
            Managed different states for form submissions where client can contact me by sending an email.
          </li>
        </ul>
      )
    }
  },
]

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const allTags = projects.flatMap((project) => project.tags);
  const uniqueTags = Array.from(new Set(allTags));
  return (
    <main className="flex flex-col gap-4 w-full">
      <div className="grid grid-cols-3 md:flex md:flex-row gap-4 flex-wrap">
        <AnimatePresence>
          {selectedTags.map((tag, index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedTags(selectedTags.filter((t) => t !== tag))}
              className="bg-primary px-2 py-1 rounded-md cursor-pointer whitespace-nowrap"
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
                className="bg-gray-200 px-2 py-1 rounded-md cursor-pointer whitespace-nowrap"
              >
                {tag}
              </motion.div>
            );
          })}
        </AnimatePresence>
        {selectedTags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedTags([])}
            className="bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer"
          >
            Clear All
          </motion.div>
        )}
      </div>
      <ExpandableCardDemo projects={projects} tags={selectedTags} />
    </main>
  )
}

