"use client";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";

export function BackgroundOverlayCard({ textColor, title, description, image, link, githubLink, gif, backgroundImageColorShade }: { textColor: string, title: string, description: string, image: string, link: string, githubLink: string, gif: string, backgroundImageColorShade: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-xs w-full">
      <div
        style={{
          backgroundImage: `url(${isHovered ? gif : image})`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "group cursor-pointer overflow-hidden relative card w-[530px] h-[300px] rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          `bg-cover bg-center bg-no-repeat`,
          `hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-[${backgroundImageColorShade === "white" ? "black" : "white"}] hover:after:opacity-50`,
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h1 className={cn("font-bold text-xl md:text-3xl relative", textColor)}>
            {title}
          </h1>
          <p className={cn("font-normal text-base relative my-4", textColor)}>
            {description}
          </p>
        </div>
        <GithubIcon link={githubLink} />
      </div>
    </div>
  );
}

const GithubIcon = ({ link }: { link: string }) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer" className="z-50 absolute top-4 right-4 text-gray-50 hover:scale-150 transition-all duration-300">
      <GitHubLogoIcon className="w-6 h-6" />
    </Link>
  )
}