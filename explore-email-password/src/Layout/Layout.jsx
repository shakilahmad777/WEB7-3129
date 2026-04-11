import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Header/NavBar/NavBar'

export default function Layout() {
  return (
    <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
