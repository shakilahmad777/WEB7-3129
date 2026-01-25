
import { NavLink, Outlet } from 'react-router-dom'
import './App.css'
import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  return (
    <>
      <nav className='flex gap-3'>
        <NavLink to={'/simple'}>Simple</NavLink>
        <NavLink to={'/action'}>Action</NavLink>
        <NavLink to={'/controlled'}>Controlled</NavLink>
      </nav>
      <h1>Explore React Form</h1>
      <Outlet></Outlet>
    </>
  )
}

export default App
