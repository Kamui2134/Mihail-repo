// src/App.jsx
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import { Login, Users, NotFound, Registration } from '@pages/index'

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
				element: <Navigate to='/users' replace />,
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
])

export default router
