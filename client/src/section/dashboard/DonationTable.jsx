import DashboardDonationTable from '@/components/dashboard/DashboardDonationTable'
import MyButton from '@/components/common/MyButton'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DonationTable =  () => {
  const [allFundsData, setAllFundsData] = useState([])
  useEffect(() => {
  const fetchAllFund = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/v1/fund/get-all-funds",
        { withCredentials: true }
      );

      // console.log(res.data.data);
      setAllFundsData(res.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  fetchAllFund();
}, []);
  
  return (
    <>
    {
      allFundsData && allFundsData.length > 0 ? (
         <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
      <div className='lg:col-span-2'>
    {/* <DashboardDonationTable /> */}
    <DashboardDonationTable data={allFundsData} />
      </div>
      <div className='bg-outline-border rounded-[20px] pt-[31px] pl-[26px] pr-[18px] pb-[54px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] h-fit mb-6 lg:mb-0'>
        <p className='text-xl font-poppins font-semibold mb-[10px] text-white'>Share Your Campaign</p>
        <p className='text-[13px] font-poppins mb-[19px] text-white'>Sharing on social media increases donations by 3x on average.  Get the word out!</p>
        <div className='flex flex-col items-center justify-center gap-3'>
          <MyButton variant="secondary" text="Facebook" style='w-full' />
          <MyButton variant="secondary" text="Email Parents" style='w-full' />
        </div>
      </div>
    </div>
      ) : (
        <div className="text-center py-10 text-gray-500">
        Loading funds...
      </div>
      )
    }
   
    </>
  )
}

export default DonationTable