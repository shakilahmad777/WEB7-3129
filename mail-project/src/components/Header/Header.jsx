import React from 'react'
import NavBar from '../NavBar/NavBar'

const navPromise = fetch('linkData.json').then((res) => res.json())
export default function Header() {
  return (
    <div>
        <NavBar navPromise={navPromise}></NavBar>
    </div>
  )
}
