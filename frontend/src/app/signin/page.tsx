"use client";
import React, { useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import axios from "axios";
import useAuth from "@/hooks/useAuth"
import { BsEye, BsEyeFill, BsEyeSlash } from "react-icons/bs";
import Link from "next/link";

export default function Signin() {
  const router = useRouter();
  const { clientLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [show, setShow] = useState<boolean>(false);
  const [change, setChange] = useState<boolean>(true);
let [loading, setLoading] = useState<boolean>(false)
const [otploading, setotpLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // router.push('/dashboard');
   try {
    setLoading(true)
    let result = await clientLogin(email, password)
    // let result = await axios.post('https://filixo.com/trade/clienlogin', {email, password})
   if(result){
    router.push('/dashboard');
   }else{
    alert('You Entered The Wrong Details')
   }
   } catch (error) {
    console.log(error)
   }finally{
    setLoading(false)
   }
  }
  const [generatedOTP, setGeneratedOTP] = useState<string>('343');
  const [enteredOTP, setEnteredOTP] = useState<string>('');
  const generateOTP = (): string => {
    const otp = Math.floor(100000 + Math.random() * 999999).toString();
    setGeneratedOTP(otp);
    return otp;
  };
   // Handle OTP submission
   const handleSendOTP = async () => {
    // let email = auth.userData.email;
    if (email) {
      const otp = generateOTP();

      try {
        setotpLoading(true)
        await axios.post('https://filixo.com/trade/verifyotp', { email, otp });
        alert('OTP has been sent to your email');
      } catch (err) {
        console.error('Error sending OTP:', err);
        alert('Failed to send OTP');
      }finally{
        setotpLoading(false)
      }
    } else {
      alert("Please Enter Email");
    }
  };
  const handlePasswordChange = async (e:any) => {
    e.preventDefault();
    if(enteredOTP === generatedOTP){
      if(email && password){
        await axios.put(`https://filixo.com/trade/updatepassword/${email}`,{
          "password":password
        })
      alert('Password changed successfully!');
        setChange(true); // Redirect after logout
      }else{
        alert('All fields Required')
      }
    }else{
      alert('OTP Not Verified..')
    }
  };
  return (
    <>
    {change ?
    <div className="w-[90%] md:w-1/2 mt-[120px] md:mt-[180px] mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
    <h2 className="font-bold text-2xl text-center text-neutral-800 dark:text-neutral-200">
      Welcome to FILIXO.COM
    </h2>
    <p className="text-neutral-600 text-center text-xl mt-2 dark:text-neutral-300">
      Login to FILIXO.COM
    </p>

    {error && <div className="text-red-500">{error}</div>}

    <form className="my-8" onSubmit={handleSubmit}>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="Enter Email Address"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <div className="flex justify-between">
        <Label htmlFor="password">Password</Label>
        <div  className="text-lg font-[200] cursor-pointer" onClick={()=>setShow(!show)}>{show ? <BsEyeSlash/>: <BsEye/> }</div>
        </div>
        
        <Input
          id="password"
          placeholder="Enter password"
          type={show ? 'text' : 'password'}
          onChange={(e) => setPassword(e.target.value)}
        />
      </LabelInputContainer>
      <div className="flex justify-between pb-5">
      <h1>Do not have Account ? <Link href='/signup' className="text-blue-500">Register Now</Link></h1>
      <div onClick={()=>setChange(!change)} className="text-blue-500 cursor-pointer">Forgot Password ?</div>
      </div>
      <button
        className="relative group/btn bg-blue-500 w-full text-white rounded-md h-10 font-medium"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Processing..' : 'Sign In' }
        <BottomGradient />
      </button>
    </form>
  </div>
  :
  <div className="w-[90%] md:w-1/2 mt-[120px] md:mt-[180px] mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-2xl text-center text-neutral-800 dark:text-neutral-200">
        Change Password
      </h2>

      {error && <div className="text-red-500">{error}</div>}

      <form className="my-8" onSubmit={handlePasswordChange}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Enter Register Email Address</Label>
          <Input
            id="email"
            placeholder="Enter Email Address"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <div className="flex justify-between">
          <Label htmlFor="password">New Password</Label>
          <div  className="text-lg font-[200] cursor-pointer" onClick={()=>setShow(!show)}>{show ? <BsEyeSlash/>: <BsEye/> }</div>
          </div>
          
          <Input
            id="password"
            placeholder="Enter password"
            type={show ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
          />
        </LabelInputContainer>
        <div className="flex flex-col space-y-1">
            <label htmlFor="otp" className="text-gray-300">Enter OTP</label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="otp"
                placeholder="Please enter OTP"
                className="p-2 flex-grow bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setEnteredOTP(e.target.value)}
                required
              />
              <button
                type="button"
                className="bg-blue-900 text-white px-4 py-2 rounded-md"
                onClick={handleSendOTP}
                disabled={otploading}

              >
               {otploading ? 'Sending..': 'Send OTP'}
              </button>
            </div>
          </div>
  
        <button
          className="relative group/btn bg-blue-500 w-full text-white rounded-md h-10 font-medium mt-8"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Processing..' : 'Change Password' }
          <BottomGradient />
        </button>
      </form>
    </div>}
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
