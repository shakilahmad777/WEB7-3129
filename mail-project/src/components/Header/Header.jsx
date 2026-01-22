import React from 'react'
import NavBar from '../NavBar/NavBar'

const navPromise = fetch('linkData.json').then((res) => res.json())
export default function Header() {
  return (
    <div className='sticky top-0 z-50'>
        <NavBar navPromise={navPromise}></NavBar>
    </div>
  )
}
