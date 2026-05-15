"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar } from "@/components/ui/calendar"

const today = new Date()
today.setHours(0, 0, 0, 0)

const previousMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1)

export default function MyCalendarRange() {
    const [date, setDate] = useState(undefined)
    const [open, setOpen] = useState(false)
    const [month, setMonth] = useState(previousMonth)

    const calendarRef = useRef(null)

    const formatDate = (d) =>
        d ? new Date(d).toLocaleDateString() : ""

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                calendarRef.current &&
                !calendarRef.current.contains(event.target)
            ) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () =>
            document.removeEventListener("mousedown", handleClickOutside)
    }, [])

        

    return (
        <div className="relative">

            {/* INPUT */}
            <input
                readOnly
                onClick={() => setOpen(!open)}
                value={
                    date?.from && date?.to
                        ? `${formatDate(date.from)} - ${formatDate(date.to)}`
                        : "Select date range"
                }
                className="border border-solid border-gray-300 rounded-md outline-none ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-500 font-inter font-normal text-base px-4 py-3 bg-white w-full"
            />

            {/* CALENDAR */}
            {open && (
                <div
                    ref={calendarRef}
                    className="absolute z-50 mt-1 bg-page-background shadow-lg rounded-md border p-2"
                >
                    <Calendar
                        mode="range"
                        month={month}
                        onMonthChange={setMonth}
                        numberOfMonths={2}
                        showOutsideDays={false}
                        selected={date}

                        modifiers={{
                            startOnly:
                                date?.from && !date?.to
                                    ? [date.from]
                                    : [],
                        }}

                        modifiersClassNames={{
                            startOnly:
                                "!bg-primary-color !text-white font-bold rounded-full",
                        }}

                       
                        onSelect={(range, selectedDay) => {
                            // FIRST CLICK
                            if (!date?.from && !date?.to) {
                                setDate({
                                    from: selectedDay,
                                    to: undefined,
                                })
                                return
                            }

                            // SECOND CLICK (select end)
                            if (date?.from && !date?.to) {
                                // prevent same date
                                if (
                                    selectedDay.getTime() === date.from.getTime()
                                ) {
                                    return
                                }

                                // if selected before start date
                                if (selectedDay < date.from) {
                                    setDate({
                                        from: selectedDay,
                                        to: date.from,
                                    })
                                } else {
                                    setDate({
                                        from: date.from,
                                        to: selectedDay,
                                    })
                                }

                                setOpen(false)
                                return
                            }

                            // THIRD CLICK → RESET RANGE
                            if (date?.from && date?.to) {
                                setDate({
                                    from: selectedDay,
                                    to: undefined,
                                })

                                setOpen(true)
                            }
                        }}

                        disabled={(day) => {
                            const d = new Date(day)
                            d.setHours(0, 0, 0, 0)
                            return d > today
                        }}
                        classNames={{
                            day:
                                "h-7 w-7",

                            day_button:
                                "h-7 w-7 transition-all duration-200 hover:bg-leading-heading hover:text-white hover:cursor-pointer",

                            day_disabled:
                                "text-gray-300 opacity-40 pointer-events-none cursor-not-allowed  hover:!cursor-default",

                            range_start:
                                "!bg-primary-color !text-white font-bold !rounded-l-full hover:!bg-primary-color",

                            range_middle:
                                "!bg-purple-500/70 !text-white font-semibold rounded-none hover:!bg-purple-500/70",

                            range_end:
                                "!bg-primary-color !text-white font-bold !rounded-r-full hover:!bg-primary-color",

                            day_selected:
                                "!bg-primary-color !text-white font-bold hover:!bg-primary-color focus:!bg-primary-color",

                            day_today:
                                "border border-purple-500 font-bold text-purple-700",

                            day_outside:
                                "invisible",

                            months:
                                "flex gap-6",

                            month:
                                "space-y-0",

                            table:
                                "w-full border-collapse",

                            head_row:
                                "flex",

                            row:
                                "flex w-full mt-2",

                            cell:
                                "relative p-0 text-center text-sm",
                        }}
                    />
                </div>
            )}
        </div>
    )
}