import React from 'react'
import { Field } from '../ui/field'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'

const MyCheckbox = ({forID="" , label=""}) => {
  return (
    <div>
         <Field orientation="horizontal">
        <Checkbox id={forID} name={forID}  
            className="w-4 h-4 border border-black bg-white transition-all duration-200 hover:border-primary-color hover:cursor-pointer data-[state=checked]:bg-primary-color data-[state=checked]:border-primary-color data-[state=checked]:text-white"/>
        <Label htmlFor={forID} className="text-black font-poppins font-bold text-sm">{label}</Label>
      </Field>
    </div>
    
  )
}

export default MyCheckbox