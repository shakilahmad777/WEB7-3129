import React from 'react'
import { NavLink } from 'react-router-dom'
import './AsaidBar.css'

export default function AsaidBar() {
  return (
    <asaid>
        <h2>this is asid</h2>
        <nav className='left-asaid'>
          <NavLink to="/mobile">Mobile</NavLink>
          <NavLink to="/laptop">Laptop</NavLink>
          <NavLink to="/tables">Tables</NavLink>
          <NavLink to="/watch">Watch</NavLink>
          <NavLink to="/powerbank">PowerBank</NavLink>
        </nav>
    </asaid>
  )
}
