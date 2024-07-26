"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
]

export function MainHeader() {
  const pathname = usePathname();

  return (
    <div className="flex gap-x-32 py-10 items-start">
      <Logo />
      <div className="grid grid-cols-2 gap-x-24">
        {navLinks.map((link) => (
          <NavLink key={link.href} label={link.label} href={link.href} isActive={pathname === link.href} />
        ))}
      </div>
    </div>
  )
}

const NavLink = ({ label, href, isActive }: { label: string; href: string; isActive: boolean }) => {
  return (
    <Link
      className={`text-lg font-medium ${isActive
        ? "text-gray-800 font-bold"
        : "text-primary hover:text-gray-800"
        } transition-all duration-300 ease-in-out hover:scale-105`}
      href={href}
    >
      {label}
    </Link>
  );
};