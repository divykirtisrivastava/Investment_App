"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import pic from '../../public/about.jpg'

export function About3DCard() {
  return (
    <CardContainer className="inter-var relative top-[-300px] px-2 md:px-0">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border  ">
        <div className="flex flex-col md:flex-row lg:flex-row  gap-10 w-full md:p-5">
            <div>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={pic}
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
            </div>
            <div>
           
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-[18px] text-justify max-w-sm mt-2 dark:text-neutral-300"
        >
         At Filixo, we bring over 15 years of collective expertise in the forex industry to empower traders worldwide with cutting-edge technology and unparalleled support. Founded by a team of seasoned professionals, our mission is to revolutionize the way traders engage with the financial markets.
        </CardItem>
        
        <div className="flex justify-between items-center mt-2">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-3 rounded-xl bg-black dark:bg-blue-500 dark:text-white text-white font-bold"
          >
            Read More
          </CardItem>
        </div>
            </div>
        </div>
        
      </CardBody>
    </CardContainer>
  );
}
