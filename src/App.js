import './App.css';
import {getMonth} from './util'
import CalenderHeader from './comps/CalenderHeader';
import Month from './comps/Month';
import Sidebar from './comps/Sidebar';
import { useContext, useEffect, useState } from 'react';
import Context from './context/Context';
import dayjs from 'dayjs'
import EvModel from './comps/EvModel';

function App() {
  const [currMonth , setCurrMonth] = useState(getMonth())
  const {month,setMonthIndex,showModal,} = useContext(Context)
  
  
  useEffect(()=>{
    setCurrMonth(getMonth(month))
  },[month])


  return (
    <div >
      <div className='h-screen flex flex-col'>
        <CalenderHeader/>
        <div className='flex flex-1'>
          <Sidebar/>
          <Month month={currMonth}/>
        </div>
      </div>
      {showModal && (<EvModel/>)}
    </div>
  );
}

export default App;
