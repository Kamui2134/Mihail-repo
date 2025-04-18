import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '@features'

const ProtectedRoute = ({ redirectPath = '/registration' }) => {
	if (!isAuthenticated()) {
		return <Navigate to={redirectPath} replace />
	}
	return <Outlet />
}

export default ProtectedRoute
