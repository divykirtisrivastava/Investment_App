"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import pic9 from '../../public/pic9.jpeg'
export function GlobalTrends() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-5xl font-bold text-black dark:text-white mb-9">
            Trading Symbols From Global Markets <br />
              {/* <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span> */}
            </h1>
          </>
        }
      >
        <Image
          src={pic9}
          alt="hero"
          width={1400}
          className="mx-auto rounded-2xl object-cover  object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
