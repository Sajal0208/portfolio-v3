import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import MainLayout from "./main-layout";

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
      <body className={`${alternateGotNo2D.className} max-w-screen`}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
