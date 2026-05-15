// "use client"

// import { faker } from "@faker-js/faker"
// import { useState } from "react"
// import { Calendar } from "@/components/ui/calendar"

// const now = new Date()
// const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
// const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)

// const from = faker.date.between({
//   from: startOfMonth,
//   to: new Date(now.getFullYear(), now.getMonth(), 15),
// })

// const to = faker.date.between({
//   from: new Date(now.getFullYear(), now.getMonth(), 16),
//   to: endOfMonth,
// })

// const MyCalendarRange1 = () => {
//   const [date, setDate] = useState({
//     from,
//     to,
//   })

//   const today = new Date()
//   today.setHours(0, 0, 0, 0)

//   return (
//     <Calendar
//       className="rounded-md border"
//       mode="range"
//       numberOfMonths={2}
//       selected={date}
//       onSelect={setDate}
//       disabled={(day) => {
//         const d = new Date(day)
//         d.setHours(0, 0, 0, 0)

//         return d > today || d < new Date("1900-01-01")
//       }}
//       classNames={{
//         range_start: "bg-primary-color text-white font-bold rounded-l-full",
//         range_middle: "bg-purple-500/70 text-white font-bold rounded-none",
//         range_end: "bg-primary-color text-white font-bold rounded-r-full",
//       }}
//     />
//   )
// }

// export default MyCalendarRange1


"use client"

import { faker } from "@faker-js/faker"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

const today = new Date()
today.setHours(0, 0, 0, 0)

// Safe month boundaries
const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)

// Never allow faker to go beyond today
const safeMaxDate = today

// Generate safe "from" date
const from = faker.date.between({
  from: startOfMonth,
  to: new Date(
    Math.min(
      today.getTime(),
      new Date(today.getFullYear(), today.getMonth(), 15).getTime()
    )
  ),
})

// Generate safe "to" date (must be after from, but not beyond today)
const to = faker.date.between({
  from: from,
  to: safeMaxDate,
})

const MyCalendarRange1 = () => {
  const [date, setDate] = useState({
    from,
    to,
  })

  return (
    <Calendar
      className="rounded-md border"
      mode="range"
      numberOfMonths={2}
      selected={date}
      onSelect={setDate}
      
      // Disable future dates properly
      disabled={(day) => {
        const d = new Date(day)
        d.setHours(0, 0, 0, 0)

        return d > today
      }}

      classNames={{
        range_start: "bg-primary-color text-white font-bold rounded-l-full",
        range_middle: "bg-purple-500/70 text-white font-bold rounded-none",
        range_end: "bg-primary-color text-white font-bold rounded-r-full",
      }}
    />
  )
}

export default MyCalendarRange1






// "use client"

// import { faker } from "@faker-js/faker"
// import { useState } from "react"
// import { Calendar } from "@/components/ui/calendar"

// const today = new Date()
// today.setHours(0, 0, 0, 0)

// const startOfMonth = new Date(today.getFullYear(), today.getMonth() , 1)

// const startOfMonth1 = new Date(today.getFullYear(), today.getMonth() + 1, 1)

// const safeMaxDate = today

// const from = faker.date.between({
//     from: startOfMonth,
//     to: new Date(
//         Math.min(
//             today.getTime(),
//             new Date(today.getFullYear(), today.getMonth(), 15).getTime()
//         )
//     ),
// })

// const to = faker.date.between({
//     from,
//     to: safeMaxDate,
// })

// export default function MyCalendarRange() {
//     const [date, setDate] = useState({ from, to })
//     const [open, setOpen] = useState(false)
//     const [month, setMonth] = useState(startOfMonth1)

//     const formatDate = (d) => {
//         if (!d) return ""
//         return new Date(d).toLocaleDateString()
//     }

//     return (
//         <div className="relative w-fit">

//             {/* INPUT */}
//             <input
//                 readOnly
//                 onClick={() => setOpen(!open)}
//                 value={
//                     date?.from && date?.to
//                         ? `${formatDate(date.from)} - ${formatDate(date.to)}`
//                         : "Select date range"
//                 }
//                 className="border rounded-md px-3 py-2 w-64 cursor-pointer"
//             />

//             {/* POPUP CALENDAR */}
//             {open && (
//                 <div className="absolute z-50 mt-2 bg-white shadow-lg rounded-md border p-2">
//                    <Calendar
//   mode="range"
//   month={month}
//   onMonthChange={setMonth}
//   defaultMonth={startOfMonth1}
//   numberOfMonths={2}
//   showOutsideDays={false}
//   selected={date}
//   onSelect={(range) => {
//     setDate(range)

//     if (range?.from && range?.to) {
//       setOpen(false)
//     }
//   }}
//   disabled={(day) => {
//     const d = new Date(day)
//     d.setHours(0, 0, 0, 0)
//     return d > today
//   }}
//   classNames={{
//     range_start: "bg-primary-color text-white font-bold rounded-l-full",
//     range_middle: "bg-purple-500/70 text-white font-bold rounded-none",
//     range_end: "bg-primary-color text-white font-bold rounded-r-full",
//   }}
// />

//                     <button
//                         onClick={() => setOpen(false)}
//                         className="mt-2 w-full text-sm text-center text-blue-600"
//                     >
//                         Close
//                     </button>
//                 </div>
//             )}
//         </div>
//     )
// }