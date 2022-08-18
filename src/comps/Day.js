import React, { useContext, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import Context from '../context/Context'

const Day = ({day,rowIndx}) => {
    const {setDaySelected,setShowModal,filteredEv,savedEv,setSelectedEv} = useContext(Context)
    const [dayEvents,setDayEvents] = useState([])
    useEffect(()=>{
        const events = filteredEv.filter((evt) =>dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY"))
        setDayEvents(events)
    },[filteredEv,day])

    const haveCurrentDayClass = () => {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') 
        ?'bg-blue-500 text-white rounded-full w-7 h-7   '
        :''
    }
    return (
        <div className='border border-gray-200 flex flex-col'>
            <header className='flex  items-center justify-center '>
                {rowIndx === 0 && <p  className='text-xs mt-1 mr-10 inline'> {day.format('ddd').toUpperCase()}</p>}
                <p className={`text-sm p-1 my-4 text-center relative ${haveCurrentDayClass()}`} onClick={()=>{setDaySelected(day); setShowModal(true)}}>
                    {day.format('DD')}
                </p>
            </header>
            <div className='flex-1 cursor-pointer w-full text-white ' >
                {dayEvents.map((evn,iddd)=>(
                    <div onClick={()=>{setSelectedEv(evn); setShowModal(true)}} key={iddd} className={`${evn.label} p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}>
                        {evn.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Day