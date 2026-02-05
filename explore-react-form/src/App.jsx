
import { NavLink, Outlet } from 'react-router-dom'
import './App.css'
import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

    return (
        <>
            <nav className='flex flex-wrap justify-around'>
                <span className='font-bold'>
                    <h2 className='text-2xl'>
                        <span className='text-amber-500'>
                            Form
                        </span>
                        <span className='text-amber-400'>
                            Example
                        </span>
                    </h2>
                </span>
                <NavLink to={'/simple'}>Simple</NavLink>
                <NavLink to={'/action'}>Action</NavLink>
                <NavLink to={'/controlled'}>Controlled</NavLink>
                <NavLink to={'/uncontrolled'}>UnControlled</NavLink>
                <NavLink to={'/hookform'}>Hook Form</NavLink>
                <NavLink to={'/productform'}>Product Form</NavLink>
            </nav>
            <h1 className='text-2xl sm:text-5xl py-5 my-5 text-amber-400'>Explore React Form</h1>
            <Outlet></Outlet>
        </>
    )
}

export default App
