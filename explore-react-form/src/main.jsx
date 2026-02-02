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
import ControlledForm from './components/ControlledForm/ControlledForm';
import UnControlledField from './components/UnControlledField/UnControlledField';
import HookForm from './components/HookForm/HookForm';
import ProductManagement from './components/ProductManagement/ProductManagement';

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
			},
			{
				path: '/controlled',
				Component: ControlledForm
			}, 
			{
				path: '/uncontrolled',
				Component: UnControlledField
			},
			{
				path: '/hookform',
				Component: HookForm
			},
			{
				path: '/productform',
				Component: ProductManagement
			}
		]
	},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
