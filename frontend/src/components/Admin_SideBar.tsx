"use client"

import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { AiFillDashboard } from "react-icons/ai";
import { FaHouseUser } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { FaUserPlus } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { BsBank2 } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import Image from 'next/image';
import logo from '../../public/logo.png'



export default function Admin_SideBar() {
    let [isOpen ,setIsOpen] = useState(false)
    let [isOpen1 ,setIsOpen1] = useState(false)
    let [isOpen2 ,setIsOpen2] = useState(false)
    let [isOpen3 ,setIsOpen3] = useState(false)
    let [isOpen4 ,setIsOpen4] = useState(false)
    let [isOpen5 ,setIsOpen5] = useState(false)
    let {logout , showmenu} = useAuth()
    // function handleLogout(){
    //     clientLogout()
    //     window.location.reload()
    // }
    function handleLogout(){
        logout()
    }
  return (
    <>
    <div className='' >
        <h1 className='text-center text-3xl font-bold uppercase h-[150px] bg-black text-black flex justify-center items-center'> <Link href="/dashboard"><Image src={logo} alt='no found' className='w-full '/></Link></h1>
        <div className=''>
            <ul>
                {/* Dashboard */}
                <li><Link href='/dashboard' className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl font-semibold'><AiFillDashboard className='inline text-2xl' /> &nbsp;&nbsp;Dashboard</Link></li>

                {/* Profile */}
                <li
                onClick={()=>setIsOpen(!isOpen)}
                ><Link href='#' className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaHouseUser  className='inline text-2xl' /> &nbsp;&nbsp;Profile{isOpen?<TiArrowSortedUp className='inline relative left-[120px]' />:<TiArrowSortedDown className='inline relative left-[120px]' />}</Link>
                    <ul className={`${isOpen?"block":"hidden"}`}>
                        <li><Link href='/dashboard/editprofile' className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'> <FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;Edit Profile</Link></li>
                        <li><Link href='/dashboard/changepassword' className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;Change Password</Link></li>
                    </ul>
                </li>

                {/* <li><Link href='/dashboard/' className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl font-semibold'><FaUserPlus  className='inline text-2xl' /> &nbsp;&nbsp;Investment</Link></li>

                <li><Link href='/dashboard/' className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl font-semibold'><FaUserPlus  className='inline text-2xl' /> &nbsp;&nbsp;Octafx IB</Link></li> */}



                {/* Diposit */}
                <li
                onClick={()=>setIsOpen1(!isOpen1)}
                ><Link href='#' className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaWallet   className='inline text-2xl' /> &nbsp;&nbsp;Deposit{isOpen1?<TiArrowSortedUp className='inline relative left-[110px]' />:<TiArrowSortedDown className='inline relative left-[110px]' />}</Link>
                    <ul className={`${isOpen1?"block":"hidden"}`}>
                        <li><Link href='/dashboard/senddepositerequest' className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'> <FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;Send Request</Link></li>
                        <li><Link href='/dashboard/depositehistory' className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp; Request History</Link></li>
                    </ul>
                </li>

                {/* Fund Transfer */}
                {/* <li
                onClick={()=>setIsOpen2(!isOpen2)}
                ><Link href='#' className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><BiTransfer   className='inline text-2xl' /> &nbsp;&nbsp;Fund Transfer{isOpen2?<TiArrowSortedUp className='inline relative left-[60px]' />:<TiArrowSortedDown className='inline relative left-[60px]' />}</Link>
                    <ul className={`${isOpen2?"block":"hidden"}`}>
                        <li><Link href='/dashboard/ptoptransfer' className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'> <FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;P To P Transfer</Link></li>
                        <li><Link href='' className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;Internal Transfer</Link></li>
                        <li><Link href='/dashboard/ptophistory' className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;P To P Transfer History</Link></li>
                        <li><Link href='/dashboard/selfdepositchargehistory' className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;Self Diposit Charge History</Link></li>
                        <li><Link href='' className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;Admin Transfer History</Link></li>
                    </ul>
                </li> */}

                {/* WithDrawal section */}
                <li
                onClick={()=>setIsOpen3(!isOpen3)}
                ><Link href='#' className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><BsBank2   className='inline text-2xl' /> &nbsp;&nbsp;WithDrawal section{isOpen3?<TiArrowSortedUp className='inline relative left-[8px]' />:<TiArrowSortedDown className='inline relative left-[8px]' />}</Link>
                    <ul className={`${isOpen3?"block":"hidden"}`}>
                        <li><Link href='/dashboard/sendwithrawalrequest' className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'> <FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;Send Request</Link></li>
                        <li><Link href='/dashboard/withdrawalhistory' className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp; WithDrawal History</Link></li>
                    </ul>
                </li>




                {/* My Team */}



                {/* <li
                onClick={()=>setIsOpen4(!isOpen4)}
                ><Link href='#' className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaUsers   className='inline text-2xl' /> &nbsp;&nbsp;My Team{isOpen4?<TiArrowSortedUp className='inline relative left-[105px]' />:<TiArrowSortedDown className='inline relative left-[105px]' />}</Link>
                    <ul className={`${isOpen4?"block":"hidden"}`}>
                        <li><Link href='' className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'> <FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;Sponsor Team</Link></li>
                        <li><Link href='' className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;All Team Member</Link></li>
                    </ul>
                </li> */}






                {/* Payout Suummary */}

                <li><Link href='/dashboard/withdrawalhistory' className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl font-semibold'><GiMoneyStack  className='inline text-2xl' /> &nbsp;&nbsp;Payout Summary</Link></li>


                {/* Income Reports */}

                {/* <li
                onClick={()=>setIsOpen5(!isOpen5)}
                ><Link href='#' className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><MdOutlineAttachMoney   className='inline text-2xl' /> &nbsp;&nbsp;Income Reports{isOpen5?<TiArrowSortedUp className='inline relative left-[40px]' />:<TiArrowSortedDown className='inline relative left-[40px]' />}</Link>
                    <ul className={`${isOpen5?"block":"hidden"}`}>
                        <li><Link href='' className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'> <FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;Trade Profit Income</Link></li>
                        <li><Link href='' className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;Referral Income</Link></li>
                        <li><Link href='' className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;Royalty Income</Link></li>
                        <li><Link href='' className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;Reward Income</Link></li>
                        <li><Link href='' className='block pl-10 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl  font-semibold'><FaRegDotCircle className='inline text-sm'/>&nbsp;&nbsp;Rewards bonus Income </Link></li>
                    </ul>
                </li> */}



                {/* Member Tree */}


                {/* <li><Link href='/dashboard/' className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl font-semibold'><FaPeopleGroup  className='inline text-2xl' /> &nbsp;&nbsp;Member Tree</Link></li> */}


                {/* Help Center */}

                <li><Link href='/dashboard/help' className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl font-semibold'><FaQuestion  className='inline text-2xl' /> &nbsp;&nbsp;Help Center</Link></li>


                {/* Signuot */}
                <li><button onClick={handleLogout} className='block pl-5 p-2 hover:bg-gray-700 active:bg-slate-950 ease-linear  border-b border-b-gray-500 text-xl font-semibold'><RiLogoutCircleRLine  className='inline text-2xl' /> &nbsp;&nbsp;Signout</button></li>
            </ul>
        </div>
    </div>
    </>
  )
}
