// Проверка наличия авторизационного токена
export const isAuthenticated = () => {
	return getCookie('auth_token') !== null
}

export const logout = () => {
	document.cookie =
		'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}

// Вспомогательная функция для получения значения cookie
const getCookie = (name: string) => {
	const cookies = document.cookie.split('; ')
	for (const cookie of cookies) {
		const [cookieName, cookieValue] = cookie.split('=')
		if (cookieName === name) {
			return decodeURIComponent(cookieValue)
		}
	}
	return null
}
