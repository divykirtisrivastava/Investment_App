"use client";

import { useState } from "react";
import pic from '../../../public/paymentW.jpeg'
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
const Payment = () => {
let navigation = useRouter()
  const [amount, setAmount] = useState<string>("");
  let [documentAmountFile, setdocumentAmountFile] = useState(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>) => {
    const { id, value, files } = e.target;
    if (files) {
        setdocumentAmountFile(e.target.files[0]);
    }
  };
  const handleAddBalance = async () => {
    let email = localStorage.getItem('userWealthhifyEmail')
    if(email){
        let result = await axios.put(`http://157.173.220.43:4000/updatepayment/${email}`, {amount, documentAmountFile}, {
            headers: {
                'Content-Type': 'multipart/form-data',
              }
        })
        if(result.data){
            navigation.push('/signin')
        }else{
            alert("server error")
        }
    }
  };


  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center mt-[100px]">
      <div className="max-w-md w-full bg-gray-900 rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Payment For Account</h2>
        <Image src={pic} alt="" className="w-full h-1/2"/>
        <p className="text-center py-3">TN37JKrtJ3cGiyEyam3vFh7AEMPnoHTwkt</p>
        {/* Balance Display */}
        {/* <div className="text-center mb-6">
          <p className="text-lg">Current Balance</p>
          <p className="text-4xl font-bold text-green-500">${balance.toFixed(2)}</p>
        </div> */}

        {/* Amount Input */}
        <div className="mb-4">
            <h1>Enter Amount:-</h1>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white rounded-md"
            required
          />
        </div>
        <div className="mb-4">
        <h1>Upload Screenshot of the Payment:-</h1>
          <input
            type="file"
            placeholder="Enter amount"
             accept="image/*"
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white rounded-md"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center">
          <button
            onClick={handleAddBalance}
            className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 rounded-md"
            type="submit"
          >
           Submit
          </button>
          {/* <button
            onClick={handleWithdrawBalance}
            className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 rounded-md"
          >
            Withdraw Balance
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Payment;
