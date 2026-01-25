import { Children, Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import SimpleForm from './components/SimpleForm/SimpleForm';
import ActionForm from './components/ActionForm/ActionForm';

const route = createBrowserRouter([
	{
		path: '/',
		Component: App,
		children: [
			{
				path: '/simple',
				Component: SimpleForm
			},
			{
				path: '/action',
				Component: ActionForm
			}
		]
	},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
