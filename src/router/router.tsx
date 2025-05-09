// src/App.jsx
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import { Login, Customers, Registration, Cards } from '@pages'
import { Dashboard } from '@pages'

const router = createBrowserRouter([
	{
		element: <PublicRoute />,
		children: [
			{
				path: '/registration',
				element: <Registration />,
			},
			{
				path: '/login',
				element: <Login />,
			},
		],
	},
	{
		element: <ProtectedRoute />,
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
			{
				path: '/cards',
				element: <Cards/>,
			},
			{
				path: '/customers',
				element: <Customers />,
			},
			{
				path: '*',
				element: <Navigate to='/dashboard' replace />,
			},
		],
	},
])

export default router
