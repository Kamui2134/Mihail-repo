import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { isAuthenticated } from '@features'
import { Header } from '@widgets'
import { pathsAfterRegistration } from '@entities'

const ProtectedRoute = ({ redirectPath = '/registration' }) => {
	const location = useLocation()

	if (
		!isAuthenticated() ||
		!pathsAfterRegistration.includes(location.pathname)
	) {
		return <Navigate to={redirectPath} replace />
	}

	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}

export default ProtectedRoute
