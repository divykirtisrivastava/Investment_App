"use client";

import React from "react";
import Image from "next/image";
import { CgLock, CgSoftwareUpload, CgWebsite } from "react-icons/cg";
import { AiOutlineUsergroupAdd, AiTwotoneReconciliation, AiTwotoneUnlock } from "react-icons/ai";

export function AboutCard() {
  return (
    <div className="flex flex-wrap justify-evenly px-5 pt-10 gap-5">
      <div className="w-full relative max-w-xs">
        <div className="absolute inset-0 h-[300px] w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-4 h-[300px] overflow-hidden rounded-2xl flex flex-col justify-around items-center">
          <CgWebsite size={100} color="#A16207" className="h-[45%]"/>
         {/* <Image src="https://viptrades.com/wp-content/uploads/2024/03/yul958.png" alt="not found" className="w-[100px]" width={200} height={100}/> */}
          <h1 className="text-yellow-700 text-2xl font-bold text-center h-[15%] ">WebTrader Plateform</h1>
          <p className="font-normal text-base text-slate-500 text-justify mb-4 relative z-50 h-[40%]">
          WebTrader platforms are designed to be intuitive and easy to navigate. They typically feature a customizable layout.
          </p>
          {/* Meaty part - Meteor effect */}
          {/* <Meteors number={20} /> */}
        </div>
      </div>
      
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-[300px] w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-4 h-[300px] overflow-hidden rounded-2xl flex flex-col justify-around items-center ">
         <AiOutlineUsergroupAdd size={100} color="#A16207" className="h-[45%]"/>
          <h1 className="text-yellow-700 text-2xl font-bold text-center h-[15%]">Add Nominee</h1>
          <p className="font-normal text-base text-slate-500 h-[40%] mb-4 relative z-50 text-justify">
          Adding a Nominee provides the account holder with peace of mind, knowing that their hard-earned money will go to someone they trust and care about.
          </p>

          {/* Meaty part - Meteor effect */}
          {/* <Meteors number={20} /> */}
        </div>
      </div>
      
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-[300px] w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-4 h-[300px] overflow-hidden rounded-2xl flex flex-col justify-around items-center gap-3">
         <CgLock size={100} color="#A16207" className="h-[45%]"/>
          <h1 className="text-yellow-700 text-2xl font-bold text-center h-[15%]">Safe & Secure</h1>
          <p className="font-normal text-base text-slate-500  mb-4 relative z-50 text-justify h-[40%]">
          we prioritize the safety and security of our users investments and personal information. In the world of online trading.
          </p>

          {/* Meaty part - Meteor effect */}
          {/* <Meteors number={20} /> */}
        </div>
      </div>
      
    
    </div>
  );
}
