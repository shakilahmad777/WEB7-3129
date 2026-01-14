import React from "react";
import Header from "../Header/Header";
import Asaid from "../Asaid/Asaid"
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";


export default function Root() {
  return (
    <div>
        <Header></Header>
        <div className="grid grid-cols-4 gap-4 mt-3.5">
          <div className="">
            <Asaid></Asaid>
          </div>
          <div className="col-span-3">
            <Outlet></Outlet>
          </div>
        </div>
        <Footer></Footer>
    </div>
  );
}
