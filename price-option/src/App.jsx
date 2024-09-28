import DaisyUi from './components/DaisyUi/DaisyUi'
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'
import Mobile from './components/Mobile/Mobile'

function App() {

  return (
    <div className='bg-slate-700'>
      {/* <DaisyUi></DaisyUi> */}
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      {/* <Phones></Phones> */}
      <Mobile></Mobile>
      
    </div>
  )
}

export default App
