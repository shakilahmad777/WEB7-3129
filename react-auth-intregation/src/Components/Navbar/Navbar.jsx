import React from 'react'
import { NavLink } from 'react-router'

export default function Navbar() {

    const navActive = ({isActive}) => isActive ? "font-bold text-white" : "";
    const links = <>
        <li><NavLink className={navActive} to="/">Home</NavLink></li>
        <li><NavLink className={navActive} to="/login">Login</NavLink></li>
        <li><NavLink className={navActive} to="/register">Register</NavLink></li>
    </>

  return (
    <div className='flex justify-between bg-amber-500 p-1.5'>
        <div className="">
            <h2>Logo</h2>
        </div>
        <div className="">
            <ul className={`flex gap-5`}>
                {links}
            </ul>
        </div>
        <div className="img">
            {/* <h2>img</h2>
            <img src="" alt="" /> */}
            <input type="file" name="" id="" />
        </div>
    </div>
  )
}
