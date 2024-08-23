'use client'
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";
import CV from "@/components/cv";
import { useEffect, useState } from "react";
import OnloadAnimation from "@/components/onload-animation";
import { MainHeader } from "@/components/main-header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [showOnload, setShowOnload] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOnload(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      {showOnload ? (
        <OnloadAnimation />
      ) : (
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
    </>
  )
}