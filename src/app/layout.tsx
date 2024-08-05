'use client'
import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";
import CV from "@/components/cv";
import { useEffect, useTransition } from "react";
import OnloadAnimation from "@/components/onload-animation";
import { MainHeader } from "@/components/main-header";


// export const metadata: Metadata = {
//   title: "Sajal Dewangan",
// };

const alternateGotNo2D = localFont({
  src: [
    {
      path: '../../public/font/regular.ttf',
      weight: 'normal',
      style: 'normal'
    }
  ]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isPending, startTransition] = useTransition()
  useEffect(() => {
    startTransition(() => {
      return new Promise((resolve) => setTimeout(resolve, 3000))
    })
  }, [])

  return (
    <html lang="en">
      <body className={`${alternateGotNo2D.className} max-w-screen`}>
        <CustomCursor />
        {isPending ? <OnloadAnimation /> : (
          <>
            <Sidebar />
            <div className="md:ml-[80px] flex flex-col min-h-screen p-4">
              <MainHeader />
              {children}
              <Footer />
            </div>
            <CV />
          </>
        )}
      </body>
    </html>
  );
}
