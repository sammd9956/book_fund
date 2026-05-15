import React, { useState } from "react"
import { Switch } from "../ui/switch"

const MySwitch = ({setChecked,checked}) => {

  return (
    <div className="flex items-center space-x-3">
      <Switch
        id="airplane-mode"
        checked={checked}
        onCheckedChange={setChecked}
        className="
          peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent
          transition-colors
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-50

          data-[state=checked]:bg-[#00B94A]
          data-[state=unchecked]:bg-gray-300

          [&>span]:pointer-events-none
          [&>span]:block
          [&>span]:h-5
          [&>span]:w-5
          [&>span]:rounded-full
          [&>span]:bg-white
          [&>span]:shadow-lg
          [&>span]:transition-transform

          data-[state=checked]:[&>span]:translate-x-3
          data-[state=unchecked]:[&>span]:translate-x-0
        "
      />

      {/* Dynamic Text */}
     
    </div>
  )
}

export default MySwitch