"use client"
import { BackgroundOverlayCard } from "@/components/blocks/background-overlay-card";
import Image from "next/image";

const projects = [
  {
    description: "Project 1 description",
    title: "Mergit",
    image: "/mergit.png",
    link: "https://mergit.io",
    githubLink: "https://github.com/Sajal0208/mergit",
    gif: "/mergit.gif",
    textColor: "text-black",
    backgroundImageColorShade: "white"
  },
  {
    description: "Project 1 description",
    title: "Deploy-with-ease",
    image: "/deploy-with-ease.png",
    link: "https://deploy-with-ease.vercel.app",
    githubLink: "https://github.com/Sajal0208/netlify-client",
    gif: "/deploy-with-ease.gif",
    textColor: "text-white",
    backgroundImageColorShade: "black"
  },
  {
    description: "Developed a video-calling application using raw WebRTC implementation, providing users with a seamless and immersive real-time communication experience.",
    title: "Chatify",
    image: "/chatify.png",
    link: "https://chatify.vercel.app",
    githubLink: "https://github.com/Sajal0208/chatify",
    gif: "/chatify.gif",
    textColor: "text-white",
    backgroundImageColorShade: "black"
  },
  {
    description: "Developed a feature-rich platform enabling users to upload, like, and dislike videos, enhancing the overall content discovery and user engagement.",
    title: "Streamify",
    image: "/streamify.png",
    link: "https://streamify.vercel.app",
    githubLink: "https://github.com/Sajal0208/streamify",
    gif: "/streamify.gif",
    textColor: "text-black",
    backgroundImageColorShade: "white"
  },
  {
    description: "Developed a web application to provide a coding practice platform akin to LeetCode.",
    title: "SolveQuest",
    image: "/solvequest.png",
    link: "https://solvequest.vercel.app",
    githubLink: "https://github.com/Sajal0208/solvequest",
    gif: "/solvequest.gif",
    textColor: "text-white",
    backgroundImageColorShade: "black"
  },
  {
    description: "A completely free web app service that allows you to do the following: Schedule a post on Dev.to && Cross-Post between Dev.to Medium Hash node",
    title: "Integrate.io",
    image: "/integrate.io.png",
    link: "https://sajaldewnagan.netlify.app",
    githubLink: "https://github.com/Sajal0208/my-portfolio",
    gif: "/integrate.io.png",
    textColor: "text-white",
    backgroundImageColorShade: "white"
  },
  {
    description: "A fully responsive portfolio website which enables light and dark mode made using ReactJs.",
    title: "Portfolio V1",
    image: "/my-portfolio.png",
    link: "https://sajaldewnagan.netlify.app",
    githubLink: "https://github.com/Sajal0208/my-portfolio",
    gif: "/solvequest.gif",
    textColor: "text-white",
    backgroundImageColorShade: "black"
  },
]

export default function ProjectsPage() {
  return <main className="flex flex-col gap-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[1200px]">
      {projects.map((project, index) => {
        return (
          <BackgroundOverlayCard key={index} textColor={project.textColor} title={project.title} description={project.description} image={project.image} link={project.link} githubLink={project.githubLink} gif={project.gif} backgroundImageColorShade={project.backgroundImageColorShade} />
        )
      })}
    </div>
  </main>
}
