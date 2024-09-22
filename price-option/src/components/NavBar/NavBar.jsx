import NavLilnk from '../NavLink/NavLilnk';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import './NavBar.css'
import { useState } from 'react';

const NavBar = () => {
    const [open, setOpen] = useState(false) // the state menu icon

    const routes = [
        { id: 1, name: "Home", path: "/home" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Contact", path: "/contact" },
        { id: 4, name: "Services", path: "/services" },
        { id: 5, name: "Profile", path: "/profile" }
      ];
      
    return (
        <nav className='bg-orange-500 p-6 text-black'>
            <div className='text-2xl md:hidden'  onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoMdClose /> : <IoMdMenu />
                }
            </div>
            <ul className={`md:flex bg-orange-500 absolute duration-1000 
                ${open ? 'top-16' : '-top-60'} md:static -left-0`}>
                {
                    routes.map(route => <NavLilnk  key={route.id} route={route}></NavLilnk>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;