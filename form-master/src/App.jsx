import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import HookForm from './components/HookForm/HookForm'
import PaymentForm from './components/PyamentForm/PyamentForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFullForm from './components/SimpleForm/StateFullForm/StateFullForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm>
      <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      <PaymentForm></PaymentForm>
      {/* <HookForm></HookForm> */}
    </>
  )
}

export default App
