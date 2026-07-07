import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from 'react-router'
import './../../App'

export default function Root() {
  return (
    <div className="mx-5 md:mx-10">
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
