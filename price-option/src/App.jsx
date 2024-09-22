import DaisyUi from './components/DaisyUi/DaisyUi'
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      {/* <DaisyUi></DaisyUi> */}
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
