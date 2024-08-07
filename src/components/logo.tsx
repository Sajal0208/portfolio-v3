'use client'

import { useRouter } from "next/navigation";

export function Logo() {
  const router = useRouter();

  return <div className="text-5xl text-primary cursor-pointer" onClick={() => router.push("/")}>Logo</div>;
}