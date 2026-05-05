import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true, Component: Home
            },
            {
                path: '/registration',
                Component: Registration
            },
            {
                path: '/login',
                Component: Login
            }
        ]
    }
])
