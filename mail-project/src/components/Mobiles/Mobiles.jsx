import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Mobile from './Mobile'

export default function Mobiles() {
  const mobiles = useLoaderData()
  console.log("khfgsdlkfkdjh",mobiles)
  return (
    <div className='grid md:grid-cols-3 gap-2.5'>
      {
        mobiles.map(mobile => <Mobile key={mobile.id} mobile={mobile}></Mobile>)
      }
    </div>
  )
}
