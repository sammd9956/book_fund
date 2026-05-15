import Profile from '@/components/common/Profile'
import CardSection from '@/section/dashboard/CardSection'
import DashboardHeader from '@/section/dashboard/DashboardHeader'
import DonationTable from '@/section/dashboard/DonationTable'
import React from 'react'

const Dashboard = () => {
  return (
      <div className='w-full'>
        <Profile/>
    <div className='container mx-auto px-2 lg:px-4'>
      <DashboardHeader/>
      <CardSection/>
      <DonationTable/>
    </div>
      </div>
  )
}

export default Dashboard