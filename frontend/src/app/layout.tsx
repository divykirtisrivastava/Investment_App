import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from '../../public/logo.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Filixo",
  description: "Trade with Filixo",
  icons:{
    icon:'/logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        {children}
        </body>
    </html>
  );
}
