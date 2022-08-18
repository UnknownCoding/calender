import { createContext } from 'react'

const Context = createContext({
    month:0,
    setMonthIndex: (index) => {},
    Smallmonth:0,
    SmallsetMonthIndex: (index) => {},
    daySelected:null,
    setDaySelected:(day) => {},
    showModal:false,
    setShowModal:() => {},
    dispatchEv: ({type,payload})=> {},
    savedEv:[],
    selectedEv: null,
    setSelectedEv: () => {},
    labels:[],
    setLabels:()=>{},
    updateLabel:()=>{},
    filteredEv:[],
})

export default Context