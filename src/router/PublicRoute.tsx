import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '@features'

const PublicRoute = ({ redirectPath = '/dashboard' }) => {
	if (isAuthenticated()) {
		return <Navigate to={redirectPath} replace />
	}
	return <Outlet />
}

export default PublicRoute
