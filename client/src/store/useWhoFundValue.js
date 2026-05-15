import { create } from "zustand";

const useWhoFundValue = create((set)=>({
    radioBtnValue:"My Class",
    setRadioBtnValue:(value)=>set(()=>({radioBtnValue:value}))
}))

export default useWhoFundValue;