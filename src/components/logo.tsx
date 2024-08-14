'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export function Logo() {
  const router = useRouter();

  return <div className="text-5xl text-primary cursor-pointer" onClick={() => router.push("/")}><Image src="SDSVG cropped.svg" alt="logo" width={200} height={200} /></div>;
}