import Profile from '@/components/common/Profile'
import CardSection from '@/section/dashboard/CardSection'
import DashboardHeader from '@/section/dashboard/DashboardHeader'
import DonationTable from '@/section/dashboard/DonationTable'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [totalRaised, setTotalRaised] = useState();
  const [campaignID, setCampaignID] = useState();
  const [myProfile, setMyProfile] = useState(null)

  useEffect(() => {
   
    try {
      const getMe = async () => {
        const res = await axios.get('http://localhost:3000/api/v1/user/get-me', {withCredentials: true});
        console.log(res.data.user);
        setMyProfile(res.data.user);
        
      }
      getMe()
    } catch (error) {
      console.log(error);
      
    }
    
  }, [])
  
   if(!myProfile){
    return <h1>Loading...</h1>
  }
  return (
      <div className='w-full'>
        <Profile/>
    <div className='container mx-auto px-2 lg:px-4'>
      <DashboardHeader myProfile={myProfile} />
      <CardSection totalRaised={totalRaised}  />
      <DonationTable totalRaised={totalRaised} setTotalRaised={setTotalRaised} setCampaignID={setCampaignID} />
    </div>
      </div>
  )
}

export default Dashboard;