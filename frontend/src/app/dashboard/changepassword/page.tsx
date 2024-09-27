"use client"
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const Admin_Change_Password = () => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const [otploading, setotpLoading] = useState<boolean>(false);
  const [oldpass, setOldpass] = useState<string>('');
  const [newpass, setNewpass] = useState<string>('');
  const [confirmpass, setConfirmpass] = useState<string>('');
  const [generatedOTP, setGeneratedOTP] = useState<string>('343');
  const [enteredOTP, setEnteredOTP] = useState<string>('');
  const generateOTP = (): string => {
    const otp = Math.floor(100000 + Math.random() * 999999).toString();
    setGeneratedOTP(otp);
    return otp;
  };
   // Handle OTP submission
   const handleSendOTP = async () => {
    let email = auth.userData.email;
    if (email) {
      const otp = generateOTP();

      try {
        setotpLoading(true)
        await axios.post('http://localhost:4000/trade/verifyotp', { email, otp });
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

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if(enteredOTP === generatedOTP){
      if(auth.userData && oldpass == auth.userData.password && newpass == confirmpass){
        await axios.put(`http://localhost:4000/trade/updatepassword/${auth.userData.email}`,{
          "password":newpass
        })
      alert('Password changed successfully!');
      Cookies.remove('tradetoken');
        setAuth({ token: null, userData: null });
        router.push('/signin'); // Redirect after logout
      }else{
        alert('Old password is incorrect')
      }
    }else{
      alert('OTP Not Verified..')
    }
  };

  return (
    <div className="w-[80%] h-screen m-auto flex items-center rounded-xl justify-center background-color border">
      <div className="w-full p-10 rounded-lg shadow-lg h-3/4">
        <h2 className="text-xl font-semibold text-white mb-6 text-center">Change Password</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-1">
            <label htmlFor="oldPassword" className="text-gray-300">Old Password</label>
            <input
              type="password"
              id="oldPassword"
              placeholder="Old Password"
              onChange={(e)=>setOldpass(e.target.value)}
              className="p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="newPassword" className="text-gray-300">New Password</label>
            <input
              type="password"
              id="newPassword"
              placeholder="New Password"
              onChange={(e)=>setNewpass(e.target.value)}
              className="p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="confirmPassword" className="text-gray-300">Re-Enter New Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-Enter New Password"
              onChange={(e)=>setConfirmpass(e.target.value)}
              className="p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
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
                className="bg-black text-white px-4 py-2 rounded-md"
                onClick={handleSendOTP}
                disabled={otploading}

              >
               {otploading ? 'Sending..': 'Send OTP'}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin_Change_Password;