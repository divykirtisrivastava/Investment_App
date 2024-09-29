"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";




export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-fit md:h-[570px] w-full md:w-[300px] transition-all duration-300 ease-out bg-gradient-to-r from-blue-500 to-gray-800 inset-0",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <div className="text-center py-5">
        <h1 className="uppercase text-2xl font-bold tracking-widest border-b-2 border-slate-300 py-5">{card.rank}</h1>
        <div className="py-10 px-1 flex gap-1 justify-center">
          <div className="flex flex-col gap-5 text-end">
            <h1 className="text-blue-200 font-[600]">Minimum Deposite :</h1>
            <h1 className="text-blue-200 font-[600]">Maximum Deposite :</h1>
            <h1 className="text-blue-200 font-[600]">T.P.R. Daily :</h1>
            <h1 className="text-blue-200 font-[600]">T.P.R. Monthly :</h1>
            <h1 className="text-blue-200 font-[600]">Direct Referral :</h1>
            <h1 className="text-blue-200 font-[600]">Refferal Goal :</h1>
            <h1 className="text-blue-200 font-[600]">Refferal Income :</h1>
            <h1 className="text-blue-200 font-[600]">One Time Reward :</h1>
          </div>
          <div className="flex flex-col gap-5 text-start">
            <h1>{card.sb}</h1>
            <h1>{card.db}</h1>
            <h1>{card.td}</h1>
            <h1>{card.tm}</h1>
            <h1>{card.bm}</h1>
            <h1>{card.rd}</h1>
            <h1>{card.ri}</h1>
            <h1>{card.otr}</h1>
           
          </div>

        </div>
      </div>
      <div
        className={cn(
          "absolute inset-0  flex justify-center items-end bottom-3 py-1 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <Link href='/signup' className="text-xl md:text-2xl font-medium bg-gradient-to-r from-green-500 to-blue-500 py-3 px-5 rounded cursor-pointer">
          Start Now
        </Link>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  id: number,
  rank: string,
  sb: string,
  db: string,
  bm: string,
  tm: string,
  td: string,
  ri: string,
  otr: string,
  rd: string,
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap justify-center gap-10 w-full relative top-[-180px] px-4">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
