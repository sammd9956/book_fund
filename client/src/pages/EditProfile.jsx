import MyButton from '@/components/common/MyButton'
import MyInput from '@/components/common/MyInput'
import Profile from '@/components/common/Profile'
import useWhoFundValue from '@/store/useWhoFundValue'
import { ArrowBigLeft } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {
    const navigate = useNavigate();
      const {radioBtnValue,setRadioBtnValue} = useWhoFundValue()

    const nameLabel = radioBtnValue == "My Class" ? 'Teacher Name' : 'Organizer Name';
    const nameForId = radioBtnValue == "My Class" ? 'TeacherName' : 'OrganizerName';

     const emailLabel = radioBtnValue == "My Class" ? 'Teacher Email' : 'Organizer Email';
    const emailForId = radioBtnValue == "My Class" ? 'TeacherEmail' : 'OrganizerEmail';

    return (
        <div className=' mb-8 w-full'>
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
                <div className='border-[0.5px] border-solid border-black px-[24px] lg:px-[71px] pt-[19px] pb-10 rounded-[20px] lg:max-w-[600px] lg:mx-auto bg-card-border relative z-50 w-full'>
                    <p className='text-center font-poppins font-bold text-[32px] text-gray-800 mb-[35px]'>Edit Your Profile</p>
                    <div className='mb-[24px]'>
                        <MyInput forId={nameForId} type="text" placeholder={nameLabel} value="xyz" label={nameLabel} labelStyle="font-semibold lg:min-w-[450px] gap-0" />
                    </div>
                    <div className='mb-[24px]'>
                        <MyInput forId={emailForId} type="email" placeholder={emailLabel} value="xyz" label={emailLabel} labelStyle="font-semibold lg:min-w-[450px] gap-0" />
                    </div>
                    <div className='mb-[36px]'>
                        <MyInput forId="TeacherName" type="password" placeholder="******" value="xyz" label="Update Password" labelStyle="font-semibold lg:min-w-[450px] gap-0" />
                    </div>
                    <MyButton variant="primary" text="Save" style="!px-6 !py-4 w-full" />
                </div>
            </div>

        </div>

    )
}

export default EditProfile