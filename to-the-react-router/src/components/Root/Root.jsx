import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './Root.css';
import AsaidBar from '../AsaidBar/AsaidBar';

export default function Root() {
  return (
    <div className='container'>
        <Header></Header>
        <div className='asaid'>
          <aside>
            <AsaidBar></AsaidBar>
          </aside>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}
