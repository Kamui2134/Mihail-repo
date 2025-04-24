import { useState, useCallback, ChangeEvent, FormEvent, useRef } from 'react'
import { api, useDebounce } from '@features'
import { userDataType, businessDataType, FieldNamesType } from '@entities'
import { toggleRegistrationModal, useAppDispatch } from '@/store'
import { useNavigate } from 'react-router-dom'

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
	const dispatch = useAppDispatch()
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
			const getField = (name: keyof FieldNamesType) =>
				formData.get(fieldNames.current[name]) as string

			const userData: userDataType = {
				email: getField('userEmail'),
				name: getField('username'),
				password: getField('password'),
				language: 'ru',
				timezone: 'Europe/Moscow',
			}

			if (localStorage.hasOwnProperty('user_id')) {
				const registerResponse = await api.registerUser(userData)
				switch (registerResponse.status) {
					case 200:
						localStorage.setItem('user_id', registerResponse.data.data.id)
						break
					case 400:
						throw new Error('400, Bad Response')
						break
					case 404:
						throw new Error('404, Not found')
						break
					default:
						throw new Error(registerResponse.status.toString())
						break
				}
			}

			const businessData: businessDataType = {
				inn: '245010099101',
				name: getField('businessName'),
				socials: {},
				user_id: localStorage.getItem('user_id')!,
				website: getField('businessWebsite'),
			}

			const businessResponse = await api.createBusiness(businessData)
			switch (businessResponse.status) {
				case 200:
					console.log('200 is Good!')
					break
				case 400:
					throw new Error('400, Bad Response')
					break
				case 404:
					throw new Error('404, Not found')
					break
				default:
					throw new Error(businessResponse.status.toString())
					break
			}

			const sendCodeResponse = await api.sendCode(
				localStorage.getItem('user_id')!
			)
			switch (sendCodeResponse.status) {
				case 200:
					console.log('200 is Good!')
					dispatch(toggleRegistrationModal())
					break
				case 204:
					console.log('204 is Good!')
					dispatch(toggleRegistrationModal())
					break
				case 400:
					throw new Error('400, Bad Response')
					break
				case 404:
					throw new Error('404, Not found')
					break
				default:
					throw new Error(sendCodeResponse.status.toString())
					break
			}
		} catch (err: any) {
			alert(err)
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

// хук для модального окна подтверждения кода
export const useRegistrationCodeConfirmation = () => {
	const [code, setCode] = useState<string>('')
	const [isDisabled, setIsDisabled] = useState<boolean>(false)
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const codeValidation = (event: ChangeEvent<HTMLInputElement>) => {
		let value = event.target.value
		value = value.replace(/\D/g, '')
		setCode(value)
	}

	const confirmCode = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setIsDisabled(true)

		try {
			const confirmUserResponse = await api.confirmUser(
				localStorage.getItem('user_id')!,
				code
			)
			switch (confirmUserResponse.status) {
				case 200:
					console.log('200 is Good!')
					dispatch(toggleRegistrationModal())
					navigate('/users')
					break
				case 204:
					console.log('204 is Good!')
					break
				case 400:
					throw new Error('400, Bad Response')
					break
				case 404:
					throw new Error('404, Not found')
					break
				default:
					throw new Error(confirmUserResponse.status.toString())
					break
			}
		} catch (err: any) {
			alert(err)
		} finally {
			setIsDisabled(false)
			setCode('')
		}
	}

	return {
		code,
		isDisabled,
		codeValidation,
		confirmCode,
	}
}
