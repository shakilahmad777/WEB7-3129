import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes';
import { RouterProvider } from 'react-router/dom';
import AuthProvider from './Context/AuthProvider';

// const authContext = useContext(null);
// const userInfo = {
//     email : "shakilahmadpip3@gmail.com"
// }

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </StrictMode>,
)
