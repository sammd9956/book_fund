import React from 'react'
import { Field, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'

const MyInput = ({forId = "", type = "text", placeholder="", value="" , label="" , labelStyle="" , star="" , inputStyle=""}) => {
  return (
    <Field className="gap-1.5">
      <FieldLabel htmlFor={forId} className={`font-poppins text-base font-bold text-black ${labelStyle}`}>{label}{star== 'yes' && (<span className='text-blood-red text-base font-semibold'>*</span>)}</FieldLabel>
      <Input id={forId} type={type} placeholder={placeholder} className={`border border-solid border-gray-300 rounded-md outline-none ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-500 font-inter font-normal text-base px-4 py-3 h-auto bg-white ${inputStyle}`}/>
    </Field>
  )
}

export default MyInput