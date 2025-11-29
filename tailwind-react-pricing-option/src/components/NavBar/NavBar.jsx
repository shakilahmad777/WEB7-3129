import { Menu, Route, X } from "lucide-react";
import Link from "./Link";
import { useState } from "react";

    const navigationData = [
        { id: 1, name: "Home", path: "/home" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Products", path: "/products" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Profile", path: "/profile" }
    ];

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const links = navigationData.map(route => <Link key={route.id} route={route}></Link>)
  return (
    <div>
        <nav className="flex justify-between text-amber-50">
            <span onClick={() => setOpen(!open)} className="md:hidden">
                
                {
                    open ? <X className=""></X> : 
                    <Menu className=""></Menu>
                }
                {/* this links md down size */}
                <ul className={`md:hidden absolute ${open ? 'top-15' : '-top-64'} duration-1000 bg-amber-600 rounded`}>
                    {
                        links
                    }
                </ul>
            </span> 
            
            <h3>MyBar</h3>
            {/* this links md up size */}
            <ul className="md:flex hidden">
                {
                    links
                }
            </ul>
            <button className="hover:bg-amber-500 px-3 rounded">Sign In</button>
        </nav>
    </div>
  )
}
