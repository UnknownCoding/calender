import React from 'react'
import CreateEventButton from './CreateEventButton'
import Labels from './Labels'
import SmallCal from './SmallCal'

const Sidebar = () => {
    return (
        <aside className='border p-5 w-64'>
            <CreateEventButton/>
            <SmallCal/>
            <Labels/>
        </aside>
    )
}

export default Sidebar