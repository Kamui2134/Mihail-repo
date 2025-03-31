import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '@features/index'

const ProtectedRoute = ({ redirectPath = '/registration' }) => {
	if (!isAuthenticated()) {
		return <Navigate to={redirectPath} replace />
	}
	return <Outlet />
}

export default ProtectedRoute
