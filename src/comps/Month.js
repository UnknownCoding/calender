import React from 'react'
import Day from './Day'

const Month = ({month}) => {
    return (
        <div className='flex-1 grid grid-cols-7 grid-rows-5 '>
            {month.map((row,i)=>(
                <div key={i}>
                    {row.map((col,id)=>(
                        <Day day={col} key={id} rowIndx={i}/>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Month