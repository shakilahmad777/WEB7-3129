import { StrictMode } from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Service from "./components/Service/Service.jsx";
import Mobile from "./components/Mobile/Mobile.jsx";
import Laptop from "./components/Laptop/Laptop.jsx";
import Tables from "./components/Tables/Tables.jsx";
import Watch from "./components/Watch/Watch.jsx";
import PowerBank from "./components/PowerBank/PowerBank.jsx";
import Users from "./components/Users/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/header", Component: Header },
      { path: "/about", Component: About },
      { path: "/contact", Component: Contact },
      { path: "/service", Component: Service },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      { path: "/mobile", Component: Mobile },
      { path: "/laptop", Component: Laptop },
      { path: "/tables", Component: Tables },
      { path: "/watch", Component: Watch },
      { path: "/powerbank", Component: PowerBank },
      { path: "/footer", Component: Footer },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
