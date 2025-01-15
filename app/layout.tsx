import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Portifolio Space",
  description: "This is my Portifolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflowy-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
