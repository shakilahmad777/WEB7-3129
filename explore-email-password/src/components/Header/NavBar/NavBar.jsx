import React from 'react'
import { NavLink } from 'react-router';

export default function NavBar() {
    const links = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Contact",
            path: "/contact"
        },
        {
            name: "Registration",
            path: "/registration"
        },
        {
            name: "Login",
            path: "/login"
        },
    ];
    const link = links.map((link, index) => <NavLink className={({ isActive }) =>
    isActive ? "text-blue-500 font-bold" : "text-gray-700"
  } key={index} to={link.path}>{link.name}</NavLink>)

    return (
        <div className='bg-black'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul className='md:hidden'>
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    )
}

