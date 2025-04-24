// src/App.jsx
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import { Login, Users, NotFound, Registration } from '@pages'

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
				path: '/users',
				element: <Users />,
			},
			{
				path: '*',
				element: <Navigate to='/dashboard' replace />,
			},
		],
	},
])

export default router
