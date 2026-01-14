import React, { use, useState } from "react";
import "./NavBar.css";
import Link from './../Link/Link';

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  },
  {
    id: 6,
    name: "Profile",
    path: "/profile"
  },
  {
    id: 7,
    name: "Users",
    path: "/users"
  }
];


export default function NavBar() {
  const [open, setOpen] = useState(false);
  const links = navLinks.map(link => <Link key={link.id} link={link}></Link>)
  return (
    <div className="menu">
      <span className="logo">
        MyBar
      </span>
      <ul>
        {links}
      </ul>
      <button>Sing Up</button>
    </div>
  );
}
