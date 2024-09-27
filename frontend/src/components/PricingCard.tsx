"use client"
import { FocusCards } from "@/components/ui/focus-cards";

export function PricingCard() {
   let cards = [
        {
            id: 1,
            rank: "Level 1",
            sb: "1600 $",
            db: "4,999 $",
            bm: "1,600 $",
            tm: "10%",
            td: "0.33%",
            ri: "5%",
            otr: "150 $",
            rd: "5000 $",
        },
        {
            id: 2,
            rank: "Level 2",
            sb: "5,000 $",
            db: "9,999 $",
            bm: "5000 $",
            tm: "11%",
            td: "0.37%",
            ri: "5%",
            otr: "250 $",
            rd: "1,5000 $",
        },
        {
            id: 3,
            rank: "Level 3",
            sb: "10,000 $",
            db: "19,999 $",
            bm: "10,000 $",
            tm: "12%",
            td: "0.40%",
            ri: "5%",
            otr: "500 $",
            rd: "50,000 $",
        },
        {
            id: 4,
            rank: "Level 4",
            sb: "20,000 $",
            db: "29,999 $",
            bm: "20,000 $",
            tm: "13%",
            td: "0.43%",
            ri: "5%",
            otr: "3,000 $",
            rd: "1,50,000 $",
        },
        {
            id: 5,
            rank: "Level 5",
            sb: "30,000 $",
            db: "39,999 $",
            bm: "30,000 $",
            tm: "14%",
            td: "0.47%",
            ri: "5%",
            otr: "15,000 $",
            rd: "5,50,000 $",
        },
        {
            id: 6,
            rank: "Level 6",
            sb: "40,000 $",
            db: "50,000 $",
            bm: "40,000 $",
            tm: "15%",
            td: "0.50%",
            ri: "5%",
            otr: "25,000 $",
            rd: "1,550,000 $",
        }
        
    ]
    
    
  return <FocusCards cards={cards} />;
}
