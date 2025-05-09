import { useNavigate } from 'react-router-dom'

// Проверка наличия авторизационного токена
export const isAuthenticated = () => {
	return (
		localStorage.hasOwnProperty('user_id') &&
		localStorage.hasOwnProperty('business_id')
	)
}

export const useLogout = () => {
	const navigate = useNavigate()

	const logout = () => {
		localStorage.removeItem('user_id')
		localStorage.removeItem('business_id')
		navigate('/dashboard', { replace: true })
	}

	return logout
}
