import React, { useContext } from 'react'
import Context from '../context/Context'
import dayjs from 'dayjs'

const CalenderHeader = () => {
    const {month,setMonthIndex} = useContext(Context)

    const prevMonth = () =>{
        setMonthIndex(month-1)
    }
    const nextMonth = () =>{
        setMonthIndex(month+1)
    }
    const handleReset = () =>{
        setMonthIndex(month === dayjs().month() ? month + Math.floor(Math.random()) : dayjs().month())
    }

    return (
        <header className='px-4 py-2 flex items-center'>
            <img className='w-12 h-12 mr-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1024px-Google_Calendar_icon_%282020%29.svg.png'/>
            <h1 className='mr-10 text-xl text-gray-500 font-bold'>Calender</h1>
            <button className='border rounded-md py-2 px-4 mr-5 outline-none' onClick={handleReset}>
                Today
            </button>
            <button className='outline-none'>
                <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2' onClick={prevMonth}>
                    chevron_left
                </span>
            </button>
            <button className='outline-none'>
                <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2' onClick={nextMonth}>
                    chevron_right
                </span>
            </button>
            <h2 className='mt-4 text-xl text-gray-500 font-bold'>
                {dayjs(new Date(dayjs().year(),month)).format('MMMM YYYY')}
            </h2>
        </header>
    )
}

export default CalenderHeader