import { useState, useCallback, ChangeEvent, FormEvent, useRef } from 'react'
import { api, useDebounce } from '@features'
import axios from 'axios'
import { userDataType, businessDataType, FieldNamesType } from '@entities'

export const useRegistrationUserEmailValidation = () => {
	const [userEmail, setUserEmail] = useState<string>('')
	const [error, setError] = useState<string>('')
	const [isValid, setIsValid] = useState<boolean>(false)

	const debouncedValidation = useDebounce((userEmail: string) => {
		setIsValid(true)
	}, 1000)

	// Функция для обработки изменений
	const handleChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setUserEmail(event.target.value)
			setIsValid(false)
			debouncedValidation(event.target.value)
		},
		[debouncedValidation]
	)

	return {
		userEmail,
		error,
		isValid,
		handleChange,
	}
}

export const useRegistrationUsernameValidation = () => {
	const [username, setUsername] = useState<string>('')
	const [error, setError] = useState<string>('')
	const [isValid, setIsValid] = useState<boolean>(false)

	const debouncedValidation = useDebounce((username: string) => {
		setIsValid(true)
	}, 1000)

	// Функция для обработки изменений
	const handleChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setUsername(event.target.value)
			setIsValid(false)
			debouncedValidation(event.target.value)
		},
		[debouncedValidation]
	)

	return {
		username,
		error,
		isValid,
		handleChange,
	}
}

export const useRegistrationPasswordValidation = () => {
	const [password, setPassword] = useState<string>('')
	const [error, setError] = useState<string>('')
	const [isValid, setIsValid] = useState<boolean>(false)

	const debouncedValidation = useDebounce((password: string) => {
		setIsValid(true)
	}, 1000)

	// Функция для обработки изменений
	const handleChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setPassword(event.target.value)
			setIsValid(false)
			debouncedValidation(event.target.value)
		},
		[debouncedValidation]
	)

	return {
		password,
		error,
		isValid,
		handleChange,
	}
}

export const useRegistrationBusinessEmailValidation = () => {
	const [businessEmail, setBusinessEmail] = useState<string>('')
	const [error, setError] = useState<string>('')
	const [isValid, setIsValid] = useState<boolean>(false)

	const debouncedValidation = useDebounce((businessEmail: string) => {
		setIsValid(true)
	}, 1000)

	// Функция для обработки изменений
	const handleChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setBusinessEmail(event.target.value)
			setIsValid(false)
			debouncedValidation(event.target.value)
		},
		[debouncedValidation]
	)

	return {
		businessEmail,
		error,
		isValid,
		handleChange,
	}
}

export const useRegistrationBusinessNameValidation = () => {
	const [businessName, setBusinessName] = useState<string>('')
	const [error, setError] = useState<string>('')
	const [isValid, setIsValid] = useState<boolean>(false)

	const debouncedValidation = useDebounce((businessName: string) => {
		setIsValid(true)
	}, 1000)

	// Функция для обработки изменений
	const handleChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setBusinessName(event.target.value)
			setIsValid(false)
			debouncedValidation(event.target.value)
		},
		[debouncedValidation]
	)

	return {
		businessName,
		error,
		isValid,
		handleChange,
	}
}

export const useRegistrationBusinessWebsiteValidation = () => {
	const [businessWebsite, setBusinessWebsite] = useState<string>('')
	const [error, setError] = useState<string>('')
	const [isValid, setIsValid] = useState<boolean>(false)

	const debouncedValidation = useDebounce((businessWebsite: string) => {
		setIsValid(true)
	}, 1000)

	// Функция для обработки изменений
	const handleChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setBusinessWebsite(event.target.value)
			setIsValid(false)
			debouncedValidation(event.target.value)
		},
		[debouncedValidation]
	)

	return {
		businessWebsite,
		error,
		isValid,
		handleChange,
	}
}

export const useRegistrationFormSubmission = () => {
	const [isDisabled, setIsDisabled] = useState<boolean>(false)
	// Генерируем и сохраняем имена один раз при инициализации для небольшой защиты от ботов
	const fieldNames = useRef<FieldNamesType>({
		userEmail: 'ld_12',
		username: 'gd_43',
		password: 'bs_14',
		businessEmail: 'gb_49',
		businessName: 'ht_87',
		businessWebsite: 'qp_98',
	})

	const submitForm = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setIsDisabled(true)

		try {
			const formData = new FormData(event.currentTarget)

			const userData = {
				email: formData.get(fieldNames.current.userEmail) as string,
				name: formData.get(fieldNames.current.username) as string,
				password: formData.get(fieldNames.current.password) as string,
				language: 'ru',
				timezone: 'Russia/Moscow',
			}
			// const businessData = useRef<businessDataType>({
			// 	inn: 'INN',
			// 	name: formData.get(fieldNames.current.businessName) as string,
			// 	socials: {},
			// 	user_id: '',
			// 	website: formData.get(fieldNames.current.businessWebsite) as string,
			// })
			const response = await api.registerUser(userData)
			if (response.status >= 200 && response.status < 300) {
				console.log(response.data) // Данные ответа
			} else {
				console.log(response.status)
			}
		} catch (err) {
			if (axios.isAxiosError(err)) {
				// Более информативное сообщение об ошибке
				alert(err.message)
				// Можно также получить статус ошибки: err.response?.status
			}
		} finally {
			setIsDisabled(false)
		}
	}

	return {
		isDisabled,
		submitForm,
		fieldNames: fieldNames.current,
	}
}
