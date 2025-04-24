import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '@features'
import { Header } from '@widgets'

const ProtectedRoute = ({ redirectPath = '/registration' }) => {
	// if (!isAuthenticated()) {
	// 	return <Navigate to={redirectPath} replace />
	// }
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}

export default ProtectedRoute
