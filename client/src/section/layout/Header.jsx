import useDailogBox from '@/store/useDailogBox'
import { Heart } from 'lucide-react'
import React from 'react'

const Header = () => {
    const {globalDailogBoxOpenValue} = useDailogBox();

    const dailogBasedWidth = globalDailogBoxOpenValue == true ? 'w-screen' : 'w-full';

  return (
    <div className={`bg-primary-color sticky top-0 z-70 ${dailogBasedWidth} relative`}>
      {
        globalDailogBoxOpenValue && (
<div className='absolute inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0'/>
        )
      }
      
        <div className='container mx-auto px-2 lg:px-4 py-1.5 flex items-center justify-between'>
            <p className='text-white font-bold text-[23px] font-inter'>BookFund</p>
            <p className='text-white text-xs font-bold font-inter flex items-center gap-1'>Built with <span><Heart fill="#fff" stroke="none" size={12}/></span> by Bookworm Central</p>
        </div>

    </div>
  )
}

export default Header