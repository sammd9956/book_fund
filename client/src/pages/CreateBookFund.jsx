import MyButton from '@/components/common/MyButton'
import MyCalendarRange from '@/components/common/MyCalenderRange'
import  MyCalendarRange1  from '@/components/common/MyCalenderRange1'
import MyInput from '@/components/common/MyInput'
import MyRadioButton from '@/components/common/MyRadioButton'
import MySelect from '@/components/common/MySelect'
import MyTextArea from '@/components/common/MyTextArea'
import useWhoFundValue from '@/store/useWhoFundValue'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateBookFund = () => {

    const radioGroupData = ["My Class", "Whole School"]

    const goalPrice = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000]

    // const[radioBtnValue , setRadioBtnValue] = useState(''); 


    const {radioBtnValue,setRadioBtnValue} = useWhoFundValue()

    const navigate = useNavigate()

    return (
        <div className='flex items-center justify-center my-6 lg:my-11 container mx-auto px-2 lg:px-4'>
            <div className='border border-solid rounded-xl border-black pt-[19px] px-[27px] lg:px-[71px] pb-[29px] bg-card-border shadow-[0_12px_40px_rgba(0,0,0,0.12)] w-full lg:w-fit'>
                <p className='text-gray-800 text-[32px] font-poppins font-bold lg:text-center mb-2'>Create a BookFund</p>
                <div className='mb-[13px]'>
                    <p className='font-poppins font-semibold text-base text-black mb-1'>Who is this fund for?</p>
                    <MyRadioButton radioGroupData={radioGroupData} labelStyle="text-gray-800 font-poppins text-base font-normal" setRadioBtnValue={setRadioBtnValue}/>
                </div>
               <div className='flex flex-col gap-[13px] mb-[26px]'>
                 <MyInput forId="School" type="text" placeholder="School Name" value="xyz" label="School" labelStyle="font-semibold lg:min-w-[450px] gap-0" star='yes' />
                <MyInput forId="NameOfFund" type="text" placeholder="Name your campaign" value="xyz" label="Name of Fund" labelStyle="font-semibold lg:min-w-[450px] gap-0" star='yes'/>
               </div>
                 <div className='mb-[21px]'>
                    <p className='font-poppins font-semibold text-base text-black mb-1'>Enter start and end date<span className='text-blood-red text-base font-semibold'>*</span></p>
                    <MyCalendarRange/>
                </div>
                
                {/* <MyCalendarRange1/> */}
                <div className='mb-[26px]'>
                    <MyInput forId="TeacherName" type="text" placeholder={radioBtnValue == "My Class"?'Teacher Name':'Organizers Name'} value="xyz" label={radioBtnValue == "My Class"?'Teacher Name':'Organizers Name'} labelStyle="font-semibold lg:min-w-[450px] gap-0" star='yes' />
                </div>
                 <div className='mb-[19px]'>
                <MyInput forId="TeacherEmail" type="email" placeholder={radioBtnValue == "My Class"?'Teacher Email':'Organizers Email'} value="xyz" label={radioBtnValue == "My Class"?'Teacher Email':'Organizers Email'} labelStyle="font-semibold lg:min-w-[450px] gap-0" star='yes' />
                 </div>
                 <div className='mb-4'>
                <MyInput forId="CreatePassword" type="password" placeholder="*******" value="xyz" label="Create Password" labelStyle="font-semibold lg:min-w-[450px] gap-0" star='yes' />
                 </div>

                <div className='mb-[28px]'>
                    <p className='font-poppins font-semibold text-base text-black mb-1'>Goal ($)</p>
                    <MySelect goalPrice={goalPrice} />
                </div>
                <div className='mb-[21px]'>
                    <p className='font-poppins font-semibold text-base text-black mb-1'>Message (optional)</p>
                    <MyTextArea style="p-4 bg-white border border-solid border-black !outline-0 focus:!ring-0 focus:ring-primary-color/40 focus:border-primary-color transition-all min-h-[100px] text-base text-gray-500" placeholder="Enter Your Message" />
                </div>
                <MyButton variant="primary" text="Launch Dashboard" style="!px-6 !py-4 w-full" onClick={()=>navigate("/dashboard")}/>
            </div>
        </div>
    )
}

export default CreateBookFund