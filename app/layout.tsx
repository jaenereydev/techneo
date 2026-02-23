import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Home/Navbar/Nav";
import NavContainer from "@/components/Home/Navbar/NavContainer";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechNeo Laboratories",
  description: "Engineering the Future of Intelligent Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-[#1f242c]`}>
        <NavContainer />
        {children}
      </body>
    </html>
  );
}
