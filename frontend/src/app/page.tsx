"use client";
import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";
import pic1 from '../../public/pic1.jpg'
import pic2 from '../../public/pic2.png'
import pic3 from '../../public/pic3.jpg'
import pic4 from '../../public/pic4.jpeg'
import pic5 from '../../public/pic5.jpeg'
import pic6 from '../../public/pic6.jpeg'
import pic7 from '../../public/pic7.jpeg'
import { AboutCard } from "@/components/AboutCard";
import { PricingCard } from "@/components/PricingCard";
import { About3DCard } from "@/components/About3DCard";
import { LampContainer } from "@/components/ui/lamp";

import { motion } from "framer-motion";
import { TimeLine } from "@/components/TimeLine";
import { GlobalTrends } from "@/components/GlobalTrends";
import Footer from "@/components/Footer";
import { StaticImageData } from "next/image";
import { Navbar } from "@/components/Navbar";
export default function Home() {
  interface Product {
    title: string;
    link: string;
    thumbnail: StaticImageData;
  }
  
  let products: Product[] = [
    {
      title: "Filixo.com",
      link: "/",
      thumbnail: pic1,
    },
    {
      title: "Filixo.com",
      link: "/",
      thumbnail:pic2,
    },
    {
      title: "Filixo.com",
      link: "/",
      thumbnail:
        pic3,
    },
  
    {
      title: "Filixo.com",
      link: "/",
      thumbnail:
        pic4,
    },
    {
      title: "Filixo.com",
      link: "/",
      thumbnail:
        pic5,
    },
    {
      title: "Filixo.com",
      link: "/",
      thumbnail:
        pic6,
    },
  
    {
      title: "Filixo.com",
      link: "/",
      thumbnail:
        pic7,
    },
    {
      title: "Filixo.com",
      link: "/",
      thumbnail:
        pic1,
    },
    {
      title: "Filixo.com",
      link: "/",
      thumbnail:
       pic2,
    },
    {
      title: "Filixo.com",
      link: "/",
      thumbnail:
        pic3,
    },
    {
      title: "Filixo.com",
      link: "/",
      thumbnail:
        pic4,
    },
  
    {
      title: "Filixo.com",
      link: "/",
      thumbnail:
        pic5,
    },
    {
      title: "Filixo.com",
      link: "/",
      thumbnail:
       pic6,
    },
    {
      title: "Filixo.com",
      link: "/",
      thumbnail:
        pic7,
    },
    {
      title: "Filixo.com",
      link: "/",
      thumbnail:
       pic1,
    },
  ];
  return (
    <>
      <Navbar/>
    <HeroParallax products={products} />
    
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-1 bg-gradient-to-br from-slate-300 to-slate-500 py-1 px-2 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      >
       Filixo Packed With Thoushand of <br /> Feacture
      </motion.h1>
    </LampContainer>
 <div className="relative top-[-250px]">
 <AboutCard/>
 </div>
 <div className="relative top-[-250px]">
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-1 bg-gradient-to-br from-slate-300 to-slate-500 py-1 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      id="packages"
      >
       Trading Account <br /> 
      </motion.h1>
    </LampContainer> 
    <PricingCard/>
    </div>
    <div className="relative top-[-380px]">
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-1 bg-gradient-to-br from-slate-300 to-slate-500 py-1 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        id="about"
      >
      ABOUT US
      </motion.h1>
    </LampContainer> 
      <About3DCard/>
    </div>
    <div className="relative top-[-600px]">
      <TimeLine/>
    </div>
    {/* <div className="relative top-[-540px]">
    <GlobalTrends/>
    </div> */}
    <div className="absolute top-[1250vh] md:top-[1150vh] xl:top-[1020vh] w-full">
    <Footer/>
    </div>
   
    </>
  );
}

