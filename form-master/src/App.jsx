import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
import Grandpa from './components/Grandpa/Grandpa'
// import HookForm from './components/HookForm/HookForm'
// import PaymentForm from './components/PyamentForm/PyamentForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFullForm from './components/SimpleForm/StateFullForm/StateFullForm'

function App() {
  const [count, setCount] = useState(0)

  const handleSignUpSubmit = (data) => {
    console.log('Sign Up data', data)
  }
  const handleUpdateProfileSubmit = (data) => {
    console.log('Update Profile data', data)
  }

  return (
    <>
      <h1>Vite + React</h1>

      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm>
      <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <PaymentForm></PaymentForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit} submitBtn={'Submit'}>
        <div>
          <h2>Sign In</h2>
          <p>please sign up right now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm formTitle={'Update Profile'} handleSubmit={handleUpdateProfileSubmit} submitBtn={'Update'}>
      <div>
          <h2>Update Profile</h2>
          <p>always keep your profile update</p>
        </div>
      </ReuseableForm> */}
    </>
  )
}

export default App
