import React, { useEffect, useMemo, useReducer, useState } from 'react'
import Context from './Context'
import dayjs from 'dayjs'


function saveEventReducer(state,{type , payload }) {
    console.log(state)
    switch (type) {
        case "push":
            return [...state, payload];
        case "update":
            return state.map((evt) =>evt.id === payload.id ? payload : evt);
        case "delete":
                return state.filter((evt) => evt.id !== payload.id);
        default:
            throw new Error();
    }
}

function initEvent(){
    const storageEvents = localStorage.getItem('savedEvents')
    const parsedEvents = storageEvents ?  JSON.parse(storageEvents) : []
    return parsedEvents
}


const ContextWrapper = (props) => {
    const [month,setMonthIndex] = useState(dayjs().month())
    const [Smallmonth,SmallsetMonthIndex] = useState(null)
    const [daySelected,setDaySelected] = useState(dayjs())
    const [showModal,setShowModal] = useState(false)
    const [selectedEv,setSelectedEv] = useState(null)
    const [savedEv,dispatchEv] = useReducer(saveEventReducer,[],initEvent)
    const [labels,setLabels] = useState([])
    
    const filteredEv = useMemo(()=>{
        return savedEv.filter(ev=>labels.filter(lbl => lbl.checked).filter((lbl)=>lbl.checked).map((lbl)=>lbl.label).includes(ev.label))
    },[savedEv,labels])

    useEffect(()=>{
        localStorage.setItem('savedEvents',JSON.stringify(savedEv))
    },[savedEv])

    // what is happenein over here man please someone help me for pls sake man 

    useEffect(()=>{
        setLabels((prev)=>{ return[...new Set(savedEv.map((event)=>event.label))].map(label => {
            const currentLabel = prev.find(lbl => lbl.label === label)
            return{
                label,
                checked: currentLabel ? currentLabel.checked : true,
            }
        })
        
        })
    },[savedEv])


    useEffect(()=>{
        console.log('intial; ')
        if(Smallmonth !== null) setMonthIndex(Smallmonth)
    },[Smallmonth])

    useEffect(()=>{
        if(showModal===false){
            setSelectedEv(null)
        }
    },[showModal])

    const updateLabel = (label) => {
        setLabels(labels.map((lbl)=> lbl.label === label.label ? label :lbl))
    }

    return (
        <Context.Provider value={{filteredEv,updateLabel,labels,setLabels,month,setMonthIndex,Smallmonth,SmallsetMonthIndex,daySelected,setDaySelected,showModal,setShowModal,dispatchEv,savedEv,selectedEv,setSelectedEv}}>
            {props.children}
        </Context.Provider>
        )
}

export default ContextWrapper