import MyButton from '@/components/common/MyButton'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate()
  return (
    <div className="container mx-auto px-2 lg:px-4 bg-page-background flex flex-col items-center justify-center">
      <p className="text-gray-800 text-5xl lg:text-7xl font-poppins font-bold mb-[19px] text-center">
        Welcome to BookFund
      </p>
      <p className="leading-heading font-poppins text-lg lg:text-xl mb-[48px] lg:mb-[78px] text-center">
        Gather donations easily and guarantee that every child heads home with a new story.
      </p>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-6 w-full lg:w-fit'>
        <MyButton variant = "primary" text = "Start a Fund" onClick={()=>navigate("/create-bookfund")} style='w-full flex-1'/>
        <MyButton variant = "secondary" text = "Login" onClick={()=>navigate("/log-in")} style='w-full flex-1'/>

      </div>
    </div>
  )
}
export default Homepage

