'use client'
import Image from "next/image";
import Link from "next/link";
import { FaGithub, } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { GoMoveToTop } from "react-icons/go";
import { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { SiSimilarweb } from "react-icons/si";

interface Link {
  id: string,
  href: string,
  icon: any
}

const links: Link[] = [
  {
    id: "X",
    href: "https://x.com/DewanganSajal",
    icon: FaXTwitter
  },
  {
    id: 'Github',
    href: 'https://github.com/Sajal0208',
    icon: FiGithub
  },
  {
    id: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sajaldewangan/',
    icon: FaLinkedinIn
  },
  {
    id: "Portfolio",
    href: "https://sajaldewangan.netlify.app",
    icon: SiSimilarweb
  }
]

export default function Sidebar() {
  return <div className='hidden md:flex flex-col fixed top-0 left-0 w-[80px] h-full bg-transparent justify-center items-center'>
    <div className="flex flex-col gap-y-8 flex-1 justify-end">
      {links.map((link: Link) => (
        <Link target="_blank" key={link.id} href={link.href}>
          <link.icon className="text-3xl text-gray-300 transition-all duration-500 ease-in-out hover:text-gray-800 hover:scale-110" />
        </Link>
      ))}
    </div>
    <div className="flex flex-col gap-y-8 flex-1 justify-end">
      <MoveToTop />
    </div>
  </div>;
}

const MoveToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className="bg-transparent border-none mb-10 transition-all duration-500 ease-in-out hover:scale-110"
      onClick={scrollToTop}
    >
      <GoMoveToTop className="text-3xl text-gray-300 hover:text-gray-800" />
    </button>
  );
}