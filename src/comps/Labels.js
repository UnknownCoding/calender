import React, { useContext } from 'react'
import Context from '../context/Context'

const Labels = () => {
    const {labels,setLabels,updateLabel} = useContext(Context)
    return (
        <div className='-mt-[1270px]'>
            <p className='text-gray-500 font-bold mt-10'>Label</p>
            {labels.map(({label:lbl,checked},idx)=>(
                <div key={idx} className='items-center mt-3 block'>
                    <input onChange={()=>updateLabel({label:lbl,checked:!checked})} type='checkbox' checked={checked} className={`form-checkbox h-5 w-5 ${lbl} rounded focus:ring-0 cursor-pointer `}/>
                    <span className='ml-2 text-gray-700 capitalize'>{lbl}</span>
                </div>
            ))}
        </div>
    )
}

export default Labels