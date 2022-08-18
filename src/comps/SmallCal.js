import React, { useContext, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { getMonth } from '../util'
import ContextWrapper from '../context/ContextWrapper'
import Context from '../context/Context'

const SmallCal = () => {
    const [currMonthIndx,setCurrMonthIndex] = useState(dayjs().month())
    const [currMonth,setCurrMonth] = useState(getMonth())
    
    const {month,SmallsetMonthIndex,daySelected,setDaySelected} = useContext(Context)

    useEffect(()=>{
        setCurrMonthIndex(month)
    },[month])

    const handleBack = () =>{
        setCurrMonthIndex(currMonthIndx-1)
    }

    const handleNext = () =>{
        setCurrMonthIndex(currMonthIndx+1)
    }

    useEffect(()=>{
        setCurrMonth(getMonth(currMonthIndx))
    },[currMonthIndx])
    
    const dayClass = (day) =>{
        const format='DD-MM-YY'
        const nowDay = dayjs().format(format)
        const currDay = day.format(format)
        const slectDay = daySelected && daySelected.format(format)
        if(nowDay === currDay){
            return 'bg-blue-500 rounded-full text-white w-[29px] h-[30px] -ml-2 pb-2  '
        }else if(currDay === slectDay){
            return 'bg-blue-100 rounded-full text-blue-700 font-bold w-[29px] h-[32px] -ml-2 pb-2'
        }
    }

    return (
        <div className='mt-9'>
            <header className='flex justify-between '>
                <p className='text-gray-500 font-bold'>  
                {dayjs(new Date(dayjs().year(), currMonthIndx)).format("MMMM YYYY")}
                </p>
                <button onClick={handleBack}>
                    <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
                        chevron_left
                    </span>
                </button>
                <button onClick={handleNext}>
                    <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
                        chevron_right
                    </span>
                </button>
            </header>
            <div className='flex'>
                <div className='flex flex-col mr-2 '>
                    {currMonth[0].map((day,i)=>(
                        <span key={i} className="text-sm py-1.5 text-center" > 
                            {day.format('dd').charAt(0)}
                        </span>     
                    ))}
                </div>
                <div className='grid grid-cols-7 grid-rows-6 ml-4 w-full gap-6'>
                    {currMonth.map((row,i)=>(
                        <div key={i}  >
                            {row.map((day,idx) => (
                                <button key={idx} className={`py-1 w-full ${dayClass(day)} `} onClick={()=>{SmallsetMonthIndex(currMonthIndx); setDaySelected(day)}}>
                                    <span className='text-sm'>{day.format('D')}</span>
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SmallCal