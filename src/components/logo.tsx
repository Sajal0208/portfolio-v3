'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export function Logo() {
  const router = useRouter();

  return <div className="text-5xl text-primary cursor-pointer" onClick={() => router.push("/")}><Image src="SD cropped.svg" alt="logo" width={100} height={100} /></div>;
}