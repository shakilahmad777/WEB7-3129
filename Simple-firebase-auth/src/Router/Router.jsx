import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import App from "../App";
import Root from "../Layout/Root";
import Login from "../components/Login/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true, path: '/', Component: Home
            },
            {path: '/login', Component: Login}
        ]
    }
])