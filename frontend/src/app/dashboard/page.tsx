"use client";

import React, { useEffect } from 'react'
import { FaCopy } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { FcMoneyTransfer } from "react-icons/fc";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaAward } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import { CgOrganisation } from "react-icons/cg";
import { RiHotelFill } from "react-icons/ri";
import { FaBusinessTime } from "react-icons/fa";
import { TbAwardFilled } from "react-icons/tb";
import useAuth from '@/hooks/useAuth';


const Dashboard: React.FC = () => {
  let { auth } = useAuth();
  const sponsorEmail: string | undefined = auth?.userData?.sponsorEmail;

  // Split the sponsor email if it exists, otherwise handle safely
  const sponsor = sponsorEmail ? sponsorEmail.split('@')[0] + '@flixxo.com' : 'No sponsor email available';
  function handleCopy(){
    navigator.clipboard.writeText(sponsor).then(() => {
        alert('Copied to clipboard!!');
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
}
  return (
    <>
      <div className='flex flex-col justify-start items-start gap-6'>
        <h1 className='px-5 py-2 bg-gray-400 inline-block rounded-md text-3xl text-black font-bold uppercase'>Dashboard</h1>


        <div>
          <p className='text-2xl font-bold'>Status: <span className='text-red-700 text-3xl'>{auth.userData?.status ?? 'N/A'}</span></p>
        </div>


        {/* <div className='w-full h-[80px] border rounded-lg shadow-lg shadow-cyan-500/50 flex items-center px-5'>
          <div className='marquee'><h1 className='text-xl md:text-2xl lg:text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, temporibus!</h1></div>
          <style jsx>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          box-sizing: border-box;
        }

        .marquee h1 {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
        </div> */}


        {/* <div className='w-full h-[120px] border rounded-xl px-2 py-5'>
          <p className='text-xl md:text-2xl lg:text-3xl font-bold mb-5'>OctaFX Referral Id:</p>
          <p className='text-xl font-bold inline-block'>https://www.google.com <FaCopy className='inline text-2xl ml-3 cursor-pointer' /></p>
        </div> */}



        <div className=" flex flex-col justify-center items-center p-4">
          {/* Card Container */}
          <div className="grid gap-6 md:grid-cols-2 w-full">

            {/* First Card */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex">
              <div className='w-full text:xl md:text-2xl font-semibold text-gray-400'>
                <p>User Name: <span className='text-xl uppercase text-white'>{auth.userData?.first_name ?? 'N/A'}</span></p>
                <p>User Email: <span className='text-xl uppercase text-white'>{auth.userData?.email ?? 'N/A'}</span></p>
                <p>Sponsor Name: <span className='text-xl uppercase text-white'>{auth.userData?.sponsorName ?? 'N/A'}</span></p>
                <p>Sponsor Email: <span className='text-xl uppercase text-white'>{auth.userData?.sponsorEmail ?? 'N/A'}</span></p>
              </div>
              {/* <div className='w-1/2 text:xl md:text-2xl font-semibold'>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div> */}
            </div>

            {/* Second Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
              <h2 className="text-2xl font-bold mb-4">Referral Program  :  Earn a stable income by</h2>
              <p className="text-xl font-bold mb-4">
                introducing clients to Enter Company Name
              </p>
              <div className='w-full h-10  bg-gray-200 rounded-full flex items-center text-black text-xl font-bold justify-between overflow-hidden border'>
                <p className='pl-5'>{sponsor ?? 'N/A'}</p>
                <button onClick={handleCopy} className='background-color p-5 rounded-full text-white cursor-pointer'>Copy</button>
              </div>
            </div>

          </div>
        </div>



        <div className=" flex flex-col justify-center items-center p-4">
          {/* Card Container */}
          <div className="grid gap-6 md:grid-cols-4 w-full text-xl">

            {/* First Card */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl font-semibold'>
                <p>Self Deposit </p>
                <p>$ {auth.userData?.deposite ?? '0'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <FcMoneyTransfer className='inline text-2xl md:text-4xl' />
              </div>
            </div>

            {/* Second Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Trade Profit Income </p>
                <p>$ {auth.userData?.tradeTotalIncome ?? '0'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <GiTakeMyMoney className='inline text-2xl md:text-4xl' />
              </div>
            </div>

            {/* Third Card with Search Field */}

            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Referral Income</p>
                <p>$ {auth.userData?.referralIncome ?? 'N/A'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <GiReceiveMoney className='inline text-2xl md:text-4xl' />
              </div>
            </div>


            {/* Fourth Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Royalty Income</p>
                <p>$ {auth.userData?.royaltyIncome ?? 'N/A'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <RiMoneyDollarCircleFill className='inline text-2xl md:text-4xl' />
              </div>
            </div>

            {/* 
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Self Deposit Charges </p>
                <p>$ 0.00</p>
              </div>
              <div className=' text:xl font-semibold'>
                <BsCashCoin className='inline text-2xl md:text-4xl' />
              </div>
            </div> */}

            {/* Six Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Reward Income</p>
                <p>$ {auth.userData?.rewardIncome ?? 'N/A'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <FaAward className='inline text-2xl md:text-4xl' />
              </div>
            </div>

            {/* Seven Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Total Income </p>
                <p>$ {auth.userData?.totalIncome ?? 'N/A'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <GiMoneyStack className='inline text-2xl md:text-4xl' />
              </div>
            </div>

            {/* Eight Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Total P2P Transfer </p>
                <p>$ {auth.userData?.p2pTransfer ?? 'N/A'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <TbMoneybag className='inline text-2xl md:text-4xl' />
              </div>
            </div>

            {/* Nine Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Total P2P Received </p>
                <p>$ {auth.userData?.p2pRecived ?? 'N/A'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <FaMoneyCheckDollar className='inline text-2xl md:text-4xl' />
              </div>
            </div>

            {/* ten Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Total Internal Transfer </p>
                <p>$ {auth.userData?.totalInternalTransfer ?? 'N/A'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                < FaMoneyBillTransfer className='inline text-2xl md:text-4xl' />
              </div>
            </div>

            {/* Eleven Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Total Withdrawal</p>
                <p>$ {auth.userData?.totalWithrawal ?? 'N/A'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <FaMoneyBillWave className='inline text-2xl md:text-4xl' />
              </div>
            </div>

            {/* Tweleve Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Withdrawable Balance </p>
                <p>$ {auth.userData?.withrawableBalance ?? 'N/A'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <GiCash className='inline text-2xl md:text-4xl' />
              </div>
            </div>

            {/* thirteen Card with Search Field */}
            {/* <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Fund Wallet Balance</p>
                <p>$ {auth.userData?.rewardIncome ?? 'N/A'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <GiWallet className='inline text-2xl md:text-4xl' />
              </div>
            </div> */}

            {/* fourteen Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Organization 1</p>
                <p>$ {auth.userData?.onganizationOne ?? 'N/A'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <CgOrganisation className='inline text-2xl md:text-4xl' />
              </div>
            </div>

            {/* Fifteen Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Organization 2 </p>
                <p>$ {auth.userData?.onganizationTwo ?? 'N/A'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <RiHotelFill className='inline text-2xl md:text-4xl' />
              </div>
            </div>

            {/* sixteen Card with Search Field */}
            <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Total Direct Business</p>
                <p>$ {auth.userData?.totalDirectBusiness ?? 'N/A'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <FaBusinessTime className='inline text-2xl md:text-4xl' />
              </div>
            </div>

            {/* seventeen Card with Search Field */}
            {/* <div className="background-color border p-6 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex gap-5 items-center justify-between">
              <div className='text:xl  font-semibold'>
                <p>Rewards / Bonus Section </p>
                <p>$ {auth.userData?.rewardIncome ?? 'N/A'}</p>
              </div>
              <div className=' text:xl font-semibold'>
                <TbAwardFilled className='inline text-2xl md:text-4xl' />
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;