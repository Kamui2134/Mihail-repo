import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '@features/auth'

const PublicRoute = ({ redirectPath = '/users' }) => {
	if (isAuthenticated()) {
		return <Navigate to={redirectPath} replace />
	}
	return <Outlet />
}

export default PublicRoute
