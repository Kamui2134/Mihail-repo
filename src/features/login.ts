import { useState, useCallback, ChangeEvent, FormEvent, useRef } from 'react'
import { api, useDebounce } from '@features'
import { toggleRegistrationModal, useAppDispatch } from '@store'
import { useNavigate } from 'react-router-dom'
import { LoginFieldNamesType, LoginUserDataType } from '@entities'

export const useLoginUserEmailValidation = () => {
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

export const useLoginPasswordValidation = () => {
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

export const useLoginFormSubmission = () => {
	const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const navigate = useNavigate()

	// Генерируем и сохраняем имена один раз при инициализации для небольшой защиты от ботов
	const fieldNames = useRef<LoginFieldNamesType>({
		userEmail: 'gt_4r',
		password: 'b2_s2',
	})

	const submitForm = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setIsDisabled(true)

		try {
			const formData = new FormData(event.currentTarget)
			const getField = (name: keyof LoginFieldNamesType) =>
				formData.get(fieldNames.current[name]) as string

			const userData: LoginUserDataType = {
				email: getField('userEmail'),
				password: getField('password'),
				remember_me: true,
			}

			const loginResponse = await api.loginUser(userData)
			switch (loginResponse.status) {
				case 200:
					localStorage.setItem('user_id', loginResponse.data.data.id)
                    navigate('/dashboard')
					break
				case 400:
					throw new Error('400, Bad Response')
					break
				case 404:
					throw new Error('404, Not found')
					break
				default:
					throw new Error(loginResponse.status.toString())
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
