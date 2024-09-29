"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import logo from '../../public/logo.png';
import pic1 from '../../public/pic1.jpg';
import pic4 from '../../public/pic4.jpeg';
import pic7 from '../../public/pic7.jpeg';
import pic8 from '../../public/pic8.jpeg';
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <MainNavbar className="top-0" />
    </div>
  );
}

function MainNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu
let router = useRouter()
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu
  };
  function handleclick(){
    router.push('/')
  }

  return (
    <div className={cn("fixed top-10 inset-x-0 w-full mx-auto z-50 backdrop-blur-md", className)}>
      <Menu setActive={setActive}>
        <div className="relative w-full flex items-center justify-around gap-8  md:p-0 md:px-0 lg:px-10">
          {/* Logo */}
          <div className="w-full md:w-48 flex justify-between items-center">
            <Image
              src={logo}
              alt="Logo"
              onClick={handleclick}
              // className="absolute w-[300px] h-[200px] md:w-[300px] md:h-[240px] xl:w-[400px] xl:h-[340px] top-[-70px] left-0 md:top-[-70px] xl:top-[-110px] md:left-[-50px] xl:left-0 z-50"
              className="w-36 md:w-48 relative left-0 cursor-pointer z-50"
            />
            {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button className="text-white focus:outline-none mt-2" onClick={toggleMobileMenu}>
              {/* Mobile Menu Icon */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden lg:flex gap-10 md:gap-4 xl:gap-10 text-lg lg:text-lg">
            <Link href="/">
              <MenuItem setActive={setActive} active={active} item="HOME"></MenuItem>
            </Link>

            <MenuItem setActive={setActive} active={active} item="Packages">
              <div className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 p-4">
                <ProductItem
                  title="Level 1"
                  href="#packages"
                  src={pic1}
                  description="Deposit Range($1,600-$4,999) Monthly Profit(10%)"
                />
                <ProductItem
                  title="Level 2"
                  href="#packages"
                  src={pic4}
                  description="Deposit Range($5,000-$9,999) Monthly Profit(11%)"
                />
                <ProductItem
                  title="Level 3"
                  href="#packages"
                  src={pic7}
                  description="Deposit Range($10,000-$19,999) Monthly Profit(12%)"
                />
                <ProductItem
                  title="Level 4"
                  href="#packages"
                  src={pic8}
                  description="Deposit Range($20,000-$29,999) Monthly Profit(13%)"
                />
                <a className="text-xl text-blue-700 cursor-pointer" href="#packages">
                  View More..
                </a>
              </div>
            </MenuItem>

            <Link href="#about">
              <MenuItem setActive={setActive} active={active} item="About Us"></MenuItem>
            </Link>
            <Link href="/contact">
            <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
            </Link>
          </div>

          {/* Auth Buttons (Desktop Only) */}
          <div className="hidden lg:flex gap-5">
            <Link
              className="px-4 py-2 lg:px-4 lg:py-2 bg-gradient-to-l bg-blue-500 from-[#2E64C0] rounded-md font-bold text-sm lg:text-base uppercase tracking-wider"
              href="/signup"
            >
              Register
            </Link>
            <Link
              href="/signin"
              className="px-4 py-2 lg:px-4 lg:py-2 bg-gradient-to-l bg-blue-500 from-[#2E64C0] rounded-md font-bold text-sm lg:text-base uppercase tracking-wider"
            >
              Sign In
            </Link>
          </div>

          
        </div>

        {/* Mobile Menu Links */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gray-800 p-4 rounded-md mt-10 w-full flex flex-col gap-2">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="z-50">
              <MenuItem setActive={setActive} active={active} item="HOME"></MenuItem>
            </Link>
            <Link href="#packages" onClick={() => setMobileMenuOpen(false)}>
            <MenuItem setActive={setActive} active={active} item="Packages"></MenuItem>
            </Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)}>
              <MenuItem setActive={setActive} active={active} item="About Us"></MenuItem>
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
            </Link>
            

            {/* Auth Buttons (Mobile Only) */}
            <div className="mt-4">
              <Link
                className="block text-center px-5 py-1 bg-gradient-to-l bg-blue-500 from-[#2E64C0] rounded-xl font-[600] text-lg uppercase tracking-wide"
                href="/signup"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </Link>
              <Link
                href="/signin"
                className="block text-center mt-2 px-5 py-1 bg-gradient-to-l bg-blue-500 from-[#2E64C0] rounded-xl font-[600] text-lg uppercase tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </Menu>
    </div>
  );
}
