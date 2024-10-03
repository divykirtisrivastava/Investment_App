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
        
    <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
<script src="https://files.bpcontent.cloud/2024/10/03/10/20241003105514-1YWN4TX3.js"></script>
    
        </body>
    </html>
  );
}
