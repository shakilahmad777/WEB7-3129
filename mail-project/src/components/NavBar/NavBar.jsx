import { use, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Menu, X } from "lucide-react";

export default function NavBar({ navPromise }) {
  const [open, setOpen] = useState(false);
  const navLinks = use(navPromise);
  const links = navLinks.map((link) => (
    <NavLink key={link.id} to={link.path}>
      {link.name}
    </NavLink>
  ));
  return (
    <div className="flex justify-between linear-bg rounded items-center px-3.5 py-2.5">
      <h2 className="logo flex">
        <span className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X></X> : <Menu></Menu>}
        </span>
        <ul className={`grid absolute rounded ${open ? 'top-24' : '-top-64'} duration-1000`}>{links}</ul>
        MyBar
      </h2>
      <ul className="md:flex gap-3.5 hidden">{links}</ul>
      <button style={{ color: "#ff0099", fontWeight: "bold" }}>Sign Up</button>
    </div>
  );
}
