import Image from "next/image";
import { SiVercel } from "react-icons/si";
import { IoMdLink } from "react-icons/io";
import Link from "next/link";

const experience = [
  {
    title: "Full Stack Developer",
    company: "Rekonsile",
    link: "https://app.rekonsile.com/",
    iconSrc: "/rekonsile.png",
    duration: "May 2024 - Present",
  },
  {
    title: "Freelance",
    link: "https://www.incented.co/",
    iconSrc: "",
    company: "Freelance",
    duration: "Mar 2024 - May 2024",
  },
  {
    title: "React Developer",
    link: "https://www.metafic.co/",
    iconSrc: "/metafic.png",
    company: "Metafic",
    duration: "Nov 2021 - Aug 2022",
  },
  {
    title: "Full Stack Developer Intern",
    link: "https://pcodertechnologies.com/",
    iconSrc: "/pcoder.png",
    company: "Pcoder Technologies",
    duration: "June 2021 - Aug 2021",
  },
]

export default function ExperienceSection() {
  return <div className="flex flex-col gap-y-2 w-full sm:w-[600px] tracking-widest">
    <h1 className="text-3xl text-primary">Experience</h1>
    {experience.map((item, index) => (
      <div key={index} className="flex flex-row items-start gap-x-2">
        {item.iconSrc ? <Image className="w-6 h-6 mt-1" src={item.iconSrc} alt={item.company} width={32} height={32} /> : <SiVercel className="w-6 h-6 mt-2" />}
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-bold flex flex-row items-center gap-x-2">{item.title}<Link href={item.link} className="cursor-none" target="_blank"><IoMdLink className="w-6 h-6" /></Link></h2>
          <p className="text-gray-500">{item.company}</p>
          <p className="text-gray-500">{item.duration}</p>
        </div>
      </div>
    ))}
  </div>
}