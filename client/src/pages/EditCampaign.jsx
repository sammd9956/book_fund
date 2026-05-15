import MyButton from '@/components/common/MyButton'
import MyCalendarRange from '@/components/common/MyCalenderRange'
import MyInput from '@/components/common/MyInput'
import MySelect from '@/components/common/MySelect'
import MyTextArea from '@/components/common/MyTextArea'
import Profile from '@/components/common/Profile'
import useWhoFundValue from '@/store/useWhoFundValue'
import { ArrowBigLeft } from 'lucide-react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const EditCampaign = () => {

    const navigate = useNavigate();

    const { radioBtnValue } = useWhoFundValue()

    const nameLabel = radioBtnValue == "My Class" ? 'Name of Fund' : 'Name of Campaign';
    const namePlaceholder = radioBtnValue == "My Class" ? "Class Book Fund" : "Organizer Book Fund";
    const nameForId = radioBtnValue == "My Class" ? 'NameOfFund' : 'NameOfCampaign';

    const calenderLabel = radioBtnValue == "My Class" ? 'Enter start and end date' : 'Date of Campaign ';

    const location = useLocation();

    const isCreatePage = location.pathname;

    const goalPrice = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000]
    return (
        <div className='mb-8 w-full'>
            <Profile />
            <div className='flex flex-col gap-[76px] container mx-auto px-2 lg:px-4'>
                <p
                    onClick={() => navigate("/dashboard")}
                    className="group flex items-center gap-2 cursor-pointer w-fit font-poppins font-semibold text-[13px] transition-all duration-300 ease-in-out active:translate-y-0.5 relative z-50"
                >
                    <span className="bg-primary-color group-hover:bg-primary-color-dark rounded-full p-2 flex items-center justify-center transition-all duration-300 ease-in-out">
                        <ArrowBigLeft color="#FFF" fill="#FFF" size={20} />
                    </span>

                    <span className="text-purple-purple-500 group-hover:text-primary-color-dark transition-all duration-300 ease-in-out">
                        Back
                    </span>
                </p>
                <div className='border-[0.5px] border-solid border-black px-[24px] lg:px-[71px] pt-[19px] pb-10 rounded-[20px] lg:max-w-[600px] mx-auto bg-card-border relative z-50 w-full'>
                    {
                        isCreatePage == '/create-new-campaign' ?
                            <p className='text-center font-poppins font-bold text-[32px] text-gray-800 mb-[21px]'>Create a New Campaign</p>
                            :
                            <p className='text-center font-poppins font-bold text-[32px] text-gray-800 mb-[21px]'>Edit Your Campaign</p>
                    }
                    <div className='mb-[36px]'>
                        <MyInput forId={nameForId} type="text" placeholder={namePlaceholder} value="xyz" label={nameLabel} labelStyle="font-semibold lg:min-w-[450px] gap-0" />
                    </div>
                    <div className='mb-[21px]'>
                        {/* <p className='font-poppins font-semibold text-base text-black mb-1'>Enter start and end date<span className='text-blood-red text-base font-semibold'>*</span></p> */}
                        <p className='font-poppins font-semibold text-base text-black mb-1'>{calenderLabel}</p>
                        <MyCalendarRange />
                    </div>
                    <div className='mb-[21px]'>
                        <p className='font-poppins font-semibold text-base text-black mb-1'>Goal ($)</p>
                        <MySelect goalPrice={goalPrice} />
                    </div>
                    <div className='mb-[26px]'>
                        <p className='font-poppins font-semibold text-base text-black mb-1'>Message (optional)</p>
                        <MyTextArea style="p-4 bg-white border border-solid border-black !outline-0 focus:!ring-0 focus:ring-primary-color/40 focus:border-primary-color transition-all min-h-[100px] text-base text-gray-500" placeholder="Enter Your Message" />
                    </div>

                    {
                        isCreatePage == '/create-new-campaign' ?
                            <MyButton variant="primary" text="Create New Campaign" style="!px-6 !py-4 w-full" />
                            :
                            <MyButton variant="primary" text="Save" style="!px-6 !py-4 w-full" />
                    }
                </div>
            </div>
        </div>

    )
}

export default EditCampaign