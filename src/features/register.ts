import { useState, useCallback, Dispatch, SetStateAction } from 'react'
import { useDebounce } from '@features'

export const useEmailValidation = () => {
	const [email, setEmail] = useState<string>('')
	const [error, setError] = useState<string>('')
	const [isValid, setIsValid] = useState<boolean>(false)

	const debouncedValidation = useDebounce((email: string) => {
 		setIsValid(true)
	}, 1000)

	// Функция для обработки изменений
	const handleChange = useCallback(
		(value: string) => {
			setIsValid(false)
			debouncedValidation(value)
		},
		[debouncedValidation]
	)

	return {
		email,
		setEmail,
		error,
		isValid,
		handleChange,
	}
}

export const useUsernameValidation = () => {
	const [username, setUsername] = useState<string>('')
	const [error, setError] = useState<string>('')
	const [isValid, setIsValid] = useState<boolean>(false)

	const debouncedValidation = useDebounce((username: string) => {
		setIsValid(true)
	}, 1000)

	// Функция для обработки изменений
	const handleChange = useCallback(
		(value: string) => {
			setIsValid(false)
			debouncedValidation(value)
		},
		[debouncedValidation]
	)

	return {
		username,
		setUsername,
		error,
		isValid,
		handleChange,
	}
}

export const usePasswordValidation = () => {
	const [password, setPassword] = useState<string>('')
	const [error, setError] = useState<string>('')
	const [isValid, setIsValid] = useState<boolean>(false)

	const debouncedValidation = useDebounce((password: string) => {
		setIsValid(true)
	}, 1000)

	// Функция для обработки изменений
	const handleChange = useCallback(
		(value: string) => {
			setIsValid(false)
			debouncedValidation(value)
		},
		[debouncedValidation]
	)

	return {
		password,
		setPassword,
		error,
		isValid,
		handleChange,
	}
}
