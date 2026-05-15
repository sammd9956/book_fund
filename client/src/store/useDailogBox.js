import { create } from "zustand";

const useDailogBox = create((set)=>({
    globalDailogBoxOpenValue:false,
    setGlobalDailogBoxOpenValue:(value)=>set(()=>({globalDailogBoxOpenValue:value}))
}))

export default useDailogBox;