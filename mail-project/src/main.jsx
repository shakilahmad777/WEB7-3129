import { Children, Component, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Service from "./components/Service/Service.jsx";
import Users from "./components/Users/Users.jsx";
import Blog from './components/Blog/Blog';
import Profile from './components/Profile/Profile';
import Laptop from './components/Laptop/Laptop';
import Mobiles from './components/Mobiles/Mobiles';
import Watch from './components/Watch/Watch';
import PowerBank from './components/PowerBank/PowerBank';
import HeadPhone from './components/HeadPhone/HeadPhone';
import Users2 from "./components/Users2/Users2.jsx";
import UsersDetails from "./components/UsersDetails/UsersDetails.jsx";


const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/services',
                Component: Service
            },
            {
                path: '/blog',
                Component: Blog
            },
            {
                path: '/profile',
                Component: Profile
            },
            // {
            //     path: '/users',
            //     Component: Users,
            //     loader: () => fetch('https://jsonplaceholder.typicode.com/users')
            // },
            {
                path: '/users',
                Component: Users,
                loader: () => fetch('https://jsonplaceholder.typicode.com/users')
            },
            {
                path: '/users2',
                element: <Suspense fallback={<span>Loader...</span>}>
                    <Users2 usersPromise={usersPromise}></Users2>
                </Suspense>
            },
            {
                path: '/users/:usersId',
                loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`),
                Component: UsersDetails
            },
            {
                path: '/laptop',
                loader: () => fetch(`./laptop.json`),
                Component: Laptop
            },
            {
                path: '/mobiles',
                loader: () => fetch(`./mobile.json`),
                Component: Mobiles
            },
            {
                path: '/watch',
                Component: Watch
            },
            {
                path: '/powerbank',
                Component: PowerBank
            },
            {
                path: '/headphone',
                Component: HeadPhone
            }
        ]
    }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
