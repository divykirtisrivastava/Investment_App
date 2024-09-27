"use client"
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import { useState } from 'react';

const SearchForm = () => {
    let { auth } = useAuth()
    let [data, setdata] = useState<string | any>([])
    const [paymentMethod, setPaymentMethod] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const handleSearch = async () => {
        // console.log('Searching with:', { paymentMethod, fromDate, toDate });
        let result = await axios.get(`http://localhost:4000/trade/getdepositeHistory/${auth.userData.email}/${paymentMethod}/${fromDate}/${toDate}`)
        // console.log(result)
       setdata(result.data)
    };
console.log(data)
    return (
        <div className="flex justify-center min-h-screen background-color border rounded-xl p-4">
            <div className="bg-gray-700 p-6 rounded mb-4 w-full ">
                <div className="flex items-end w-full gap-2">
                    {/* Payment Method */}
                    <div className="w-1/4 text-xl">
                        <h1>Select Payment Method:</h1>
                        <select
                            className="border-2 border-white rounded text-black w-full py-1"
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                            <option value="">Select Method</option>
                            <option value="Indian Cash">Indian Cash</option>
                            <option value="USDT">USDT</option>
                        </select>
                    </div>

                    {/* From Date */}
                    <div className="w-1/4 text-xl">
                        <h1>From Date:</h1>
                        <input
                            type="date"
                            className="border-2 border-white rounded text-black w-full py-1"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                        />
                    </div>

                    {/* To Date */}
                    <div className="w-1/4 text-xl">
                        <h1>To Date:</h1>
                        <input
                            type="date"
                            className="border-2 border-white rounded text-black w-full py-1"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                        />
                    </div>

                    {/* Search Button */}
                    <div className="w-1/4 text-xl">
                        <button
                            className="bg-black rounded text-white w-full py-2"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
                {paymentMethod == 'Indian Cash' ? <table className="min-w-full bg-white border border-gray-200 mt-5 text-black">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-gray-200 font-bold text-left">No.</th>
                            <th className="py-2 px-4 bg-gray-200 font-bold text-left">Amount</th>
                            <th className="py-2 px-4 bg-gray-200 font-bold text-left">Date</th>
                            <th className="py-2 px-4 bg-gray-200 font-bold text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data:any, index:any) => (
                            <tr key={index} className="border-t border-gray-200">
                                <td className="py-2 px-4">{index + 1}</td>
                                <td className="py-2 px-4">{data.depositeAmount}</td>
                                <td className="py-2 px-4">{data.transactionDate}</td>
                                <td className="py-2 px-4">{data.transactionStatus}</td>
                            </tr>
                        ))}
                       
                    </tbody>
                </table> : <table className="min-w-full bg-white border border-gray-200 mt-5 text-black">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-gray-200 font-bold text-left">No.</th>
                            <th className="py-2 px-4 bg-gray-200 font-bold text-left">Amount</th>
                            <th className="py-2 px-4 bg-gray-200 font-bold text-left">Date</th>
                            <th className="py-2 px-4 bg-gray-200 font-bold text-left">Transaction ID</th>
                            <th className="py-2 px-4 bg-gray-200 font-bold text-left">Transaction Image</th>
                            <th className="py-2 px-4 bg-gray-200 font-bold text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data:any, index:any) => (
                            <tr key={index} className="border-t border-gray-200">
                                <td className="py-2 px-4">{index + 1}</td>
                                <td className="py-2 px-4">{data.depositeAmount}</td>
                                <td className="py-2 px-4">{data.transactionDate}</td>
                                <td className="py-2 px-4">{data.transactionId}</td>
                                <td className="py-2 px-4"><img src={`http://localhost:4000/${data.transactionImage}`} alt="" className='w-40 h-16'/></td>
                                <td className="py-2 px-4">{data.transactionStatus}</td>
                            </tr>
                        ))}
                       
                    </tbody>
                </table>}
            </div>
        </div>
    );
};

export default SearchForm;
