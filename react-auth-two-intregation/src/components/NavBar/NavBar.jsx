import { NavLink } from 'react-router';
import './../../App'
export default function NavBar() {
    const link = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/register">Registration</NavLink>
        </li>
        <li>
            <NavLink to="/login">Login</NavLink>
        </li>
    </>
  return (
    <div className='flex justify-between py-3'>
        <div className="">
            <h2>Auth2</h2>
        </div>
        <ul className="flex gap-10">
            {link}
        </ul>
        <div className="">
            <button>Button</button>
        </div>
    </div>
  )
}
