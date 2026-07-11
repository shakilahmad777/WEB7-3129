import React, { use } from 'react'
import { AuthContext } from '../../Context/AuthContext'

export default function Home() {
  const authInfo = use(AuthContext);
  console.log("home auth info", authInfo)
  return (
    <div>
        <h1 className='text-red'>this is home</h1>
    </div>
  )
}
