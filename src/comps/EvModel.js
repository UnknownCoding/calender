import React, { useContext, useReducer, useState } from 'react'
import Context from '../context/Context';

const EvModel = () => {
    const {setShowModal,daySelected,dispatchEv,selectedEv,setSelectedEv} = useContext(Context)
    const [title , setTitle] = useState(selectedEv ? selectedEv.title : "")
    const [desc , setDesc] = useState(selectedEv ? selectedEv.desc : "")
    
    const labelsClasses = [
        "bg-indigo-400",
        "bg-gray-400",
        "bg-green-400",
        "bg-blue-400",
        "bg-red-400",
        "bg-purple-400",];
        
    const [selectedLabel , setSelectedLabel] = useState( selectedEv ? labelsClasses.find((lbl)=> lbl=== selectedEv.label) :labelsClasses[0])

    const handleSumbmit = (e) => {
        e.preventDefault();
        const calenderEvent = {
            title,
            desc,
            label:selectedLabel,
            day:daySelected.valueOf(),
            id: selectedEv? selectedEv.id :  Date.now(),    
        }
        if(selectedEv){
            dispatchEv({type:'update',payload:calenderEvent})
            setSelectedEv(null)
        }else{
            dispatchEv({type:'push',payload:calenderEvent})
        }

        setShowModal(false)
    }
        
    return (
    <div className='h-screen w-full bg-gray-100 opacity-90  fixed left-0 top-0 flex justify-center items-center '>
        <form className='bg-white rounded-lg shadow-2xl w-1/4 !opacity-100'>
            <header className='bg-gray-300 px-4 py-2 flex justify-between items-center !opacity-100'>
                <span className='material-icons-outlined text-gray-400'>
                    drag_handle
                </span>
                <div>
                    {selectedEv && (
                        <span className='material-icons-outlined text-gray-400 cursor-pointer' onClick={()=> {dispatchEv({type:'delete',payload:selectedEv});setSelectedEv(null); setShowModal(false)}}>
                            delete
                        </span>
                    )}
                </div>
                    <button onClick={(e)=>{e.preventDefault(); setShowModal(false) }}>
                        <span className='material-icons-outlined text-gray-400'>
                            close
                        </span>
                    </button>
            </header>
            <div className='p-3'>
                <div className='grid grid-cols-1/5 items-end gap-y-7'>
                    <div>

                    </div>
                    <input  type='text' 
                            name='title' 
                            placeholder='Add title' 
                            value={title} 
                            className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200
                                        focus:outline-none focus:ring-0 focus:border-blue-500' 
                            onChange={(e)=>{setTitle(e.target.value)}}/>
                    <span className='material-icons-outlined text-gray-400'>
                        schedule
                    </span>
                    <p>{daySelected.format('dddd,MMMM DD')}</p>
                    <span className='material-icons-outlined text-gray-400'>
                        segment
                    </span>
                    <input  type='text' 
                            name='description' 
                            placeholder='Add Description' 
                            value={desc} 
                            className='pt-3 border-0 text-gray-600  font-semibold pb-2 w-full border-b-2 border-gray-200
                                        focus:outline-none focus:ring-0 focus:border-blue-500' 
                            onChange={(e)=>{setDesc(e.target.value)}}/>
                    <span className='material-icons-outlined text-gray-400'>
                        bookmark_border
                    </span>
                    <div className='flex gap-x-2'>
                        {labelsClasses.map((lblClass,i)=>(
                            <span key={i} onClick={()=>{setSelectedLabel(lblClass)}} className={`${lblClass} w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                                {selectedLabel === lblClass && (
                                    <span className='material-icons-outlined text-white text-sm'>
                                        check
                                    </span>
                                )}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <footer className='flex justify-end w-100 border-t p-3 mt-5'>
                <button onClick={handleSumbmit} type='submit'  className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white transition-all duration-200 ease-linear" >
                    Save
                </button>
            </footer>
        </form>
    </div>
    )
}

export default EvModel