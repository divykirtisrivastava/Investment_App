"use client";
import React, { useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import axios from "axios";
import useAuth from "@/hooks/useAuth"

export default function Signin() {
  const router = useRouter();
  const { clientLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
let [loading, setLoading] = useState<boolean>(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // router.push('/dashboard');
   try {
    setLoading(true)
    let result = await clientLogin(email, password)
    // let result = await axios.post('http://localhost:4000/trade/clienlogin', {email, password})
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

  return (
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
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="Enter password"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
        </LabelInputContainer>

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
