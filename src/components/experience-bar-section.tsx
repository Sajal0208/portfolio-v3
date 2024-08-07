'use client'
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { IoMdLink } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { Switch } from './ui/switch';

const experience = [
  {
    id: 'rekonsile',
    title: "Full Stack Developer",
    company: "Rekonsile",
    link: "https://rekonsile.com/",
    iconSrc: "/rekonsile.png",
    duration: "May 2024 - Present",
    startDate: new Date("2024-05-21"),
    endDate: new Date(),
    description: [
      "Engineered end-to-end features for Rekonsile's e-commerce analytics platform. Optimized MongoDB schemas and implemented Node.js streams, achieving 3x faster file exports and significantly enhanced dashboard performance.",
      "Developed efficient data pipelines for multi-marketplace e-commerce analytics. Created high-performance business insight tools, balancing complex calculations with rapid query times for real-time data analysis.",
    ]
  },
  {
    id: 'incented',
    title: "NextJs FullStack Developer",
    link: "https://www.incented.co/",
    iconSrc: "",
    company: "Contract",
    duration: "Mar 2024 - May 2024",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-05-30"),
    description: [
      "Core Developer on Decentralized Incentivization Platform: Contributing to the development of a Web3 protocol facilitating autonomous task management.",
      "Staking Mechanisms Integration: Innovated within the platform by integrating complex staking mechanisms that enable autonomous task prioritization and validation. This system allows community members to directly influence task significance and assure quality through stake-based validation",
      "Full-Stack Development: Developed end-to-end solutions for task proposals, prioritization, and validation to ensure secure and transparent community contributions.",
    ]
  },
  {
    id: 'freelance',
    title: "NextJs FullStack Developer",
    link: "",
    iconSrc: "",
    company: "Freelance",
    duration: "Aug 2023 - Feb 2024",
    startDate: new Date("2023-08-01"),
    endDate: new Date("2024-02-01"),
    description: []
  },
  {
    id: 'college',
    title: "Offline College",
    link: "",
    iconSrc: "",
    company: "Offline College",
    duration: "July 2022 - July 2023",
    startDate: new Date("2022-07-01"),
    endDate: new Date("2023-07-01"),
    description: []
  },
  {
    id: 'metafic',
    title: "React Developer",
    link: "https://www.metafic.co/",
    iconSrc: "/metafic.png",
    company: "Metafic",
    duration: "Nov 2021 - Aug 2022",
    startDate: new Date("2021-11-01"),
    endDate: new Date("2022-08-01"),
    description: [
      "Developed a platform for designers to sell their designs, allowing them to showcase their work and interact with other designers through voting and liking designs.",
      "Implemented chat feature for designers to communicate within groups and through direct messages, fostering collaboration and networking opportunities.",
      "Added features to allow designers to follow each other, buy each other's designs, and facilitate a thriving creative community."
    ]
  },
  {
    id: 'pcoder',
    title: "Full Stack Developer Intern",
    link: "https://pcodertechnologies.com/",
    iconSrc: "/pcoder.png",
    company: "Pcoder",
    duration: "June 2021 - Aug 2021",
    startDate: new Date("2021-06-01"),
    endDate: new Date("2021-08-01"),
    description: [
      "Responsible for API designs and development of RESTful Services for the enterprise product in the business.",
      "Developed an in-house web app using NodeJs, MongoDB,ExpressJs and JWT for Authentication.",
      "Used: Typescript, NodeJs, ReactJs, HTML/CSS, AWS, MongoDB, JWT, Git"
    ]
  },
]

const professionalExperience = ['rekonsile', 'incented', 'metafic', 'pcoder'];

export default function ExperienceBarSection() {
  const [isProfessional, setIsProfessional] = useState(true);
  const [heading, setHeading] = useState("");
  const sortedExperience = useMemo(() => {
    return [...experience].sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
  }, []);

  const earliestDate = sortedExperience[sortedExperience.length - 1].startDate;
  const latestDate = new Date();
  const totalDuration = latestDate.getTime() - earliestDate.getTime();
  const years = Math.ceil((new Date().getTime() - earliestDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000));

  const getHeading = () => {
    if (!isProfessional) {
      return `Timeline (What I did in last ${years} years)`;
    }
    return "Professional Experience";
  }

  return (
    <div className="w-full max-w-4xl tracking-wide">
      <h2 className="text-2xl font-bold mb-4 text-primary">
        {getHeading()} <Switch checked={isProfessional} onCheckedChange={() => setIsProfessional(!isProfessional)} />
      </h2>
      <div className="relative h-64 rounded-lg overflow-hidden">
        <AnimatePresence>
          {sortedExperience.map((job, index) => {
            if (isProfessional && !professionalExperience.includes(job.id)) {
              return null;
            }
            const isNonProfessional = !professionalExperience.includes(job.id);
            const startOffset = (job.startDate.getTime() - earliestDate.getTime()) / totalDuration * 100;
            const duration = (job.endDate.getTime() - job.startDate.getTime()) / totalDuration * 100;
            return (
              <motion.div
                key={job.id}
                className="absolute h-10 bg-primary rounded-md flex items-center justify-center text-white text-xs"
                style={{
                  left: `${startOffset}%`,
                  width: `${duration}%`,
                }}
                initial={{ top: !isNonProfessional ? `${index * 40}px` : '400px', zIndex: 100, rotateX: 45, rotateY: 45, }}
                animate={{ top: !isNonProfessional ? `${index * 40}px` : `${index * 40}px`, zIndex: 100, rotateX: 0, rotateY: 0, rotateZ: 0 }}
                exit={{
                  top: '100%',
                  transition: { duration: 1, ease: 'easeInOut' },
                  rotateX: 45,
                  rotateY: 45,
                  rotateZ: 45,
                }}
                transition={{ duration: 1 }}
              >
                {job.company}
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <AnimatePresence>
          {sortedExperience.map((job, index) => {
            if (isProfessional && !professionalExperience.includes(job.id)) {
              return null;
            }
            return (
              <motion.div
                key={job.id}
                className="mb-4"
                initial={{ y: '900px', rotateX: 45, rotateY: 45, rotateZ: 45, }}
                animate={{ y: 0, rotateX: 0, rotateY: 0, rotateZ: 0, }}
                exit={{
                  y: '900px',
                  transition: { duration: 1, ease: 'easeInOut' },
                  rotateX: 45,
                  rotateY: 45,
                }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-2xl text-primary font-semibold flex items-center">
                  {job.title}
                  {job.link && (
                    <Link href={job.link} className="ml-2" target="_blank" rel="noopener noreferrer">
                      <IoMdLink className="w-5 h-5" />
                    </Link>
                  )}
                </h3>
                <p className="text-sm text-gray-600">{job.company} • {job.duration}</p>
                <ul className="list-disc list-inside tracking-wider">
                  {job.description.map((desc, index) => (
                    <li key={index} className="text-base text-gray-600">{desc}</li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}