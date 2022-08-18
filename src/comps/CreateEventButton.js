import React, { useContext } from 'react'
import Context from '../context/Context'

const CreateEventButton = () => {
    const {setShowModal} = useContext(Context)
    return (
        <button className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl ' onClick={()=>{setShowModal(true)}}>
            <img className='w-7 h-7' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Google_Earth_icon.svg/512px-Google_Earth_icon.svg.png"/>
            <span className='pl-3 pr-7'>Create</span>
        </button>
    )
}

export default CreateEventButton