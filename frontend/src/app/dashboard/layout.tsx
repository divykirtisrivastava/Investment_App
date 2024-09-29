import Admin_SideBar from "@/components/Admin_SideBar";
import AdminNavbar from "@/components/AdminNavbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Filixo",
  description: "Trade with Filixo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <>
  <div className='w-full h-auto background-color text-color flex'>
      <div className='w-[22%] h-screen overflow-auto background-color hidden md:block fixed'>
        <Admin_SideBar/>
      </div>
      <div className='w-full md:w-[78%] h-auto relative md:left-[22%]'>
        <AdminNavbar/>
        <div className='w-full h-auto p-5'>
            {children}
        </div>
      </div>
    </div>
   </>
  );
}
