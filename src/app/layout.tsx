import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import CustomCursor from "@/components/custom-cursor";


export const metadata: Metadata = {
  title: "Sajal Dewangan",
};

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
  return (
    <html lang="en">
      <body className={`${alternateGotNo2D.className} bg-[#f7f9fb]`}>
        <CustomCursor />
        <Sidebar />
        <div className="bg-[#f7f9fb] md:ml-[80px] p-4">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
