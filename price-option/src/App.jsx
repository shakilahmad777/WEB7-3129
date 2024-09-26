import DaisyUi from './components/DaisyUi/DaisyUi'
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'

function App() {

  return (
    <div className='bg-slate-700'>
      {/* <DaisyUi></DaisyUi> */}
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </div>
  )
}

export default App
