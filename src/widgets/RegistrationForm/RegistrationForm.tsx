import { useState, ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Image } from '@shared'
import './RegistrationForm.css'
import { FormInput, SubmitInput } from '@shared'
import Logo from '@images/logo.svg'
import {
	useEmailValidation,
	useUsernameValidation,
	usePasswordValidation,
} from '@features'

export default function RegistrationForm() {
	const {
		email,
		setEmail,
		error: emailError,
		isValid: emailIsValid,
		handleChange: handleEmailChange,
	} = useEmailValidation()
	const {
		username,
		setUsername,
		error: usernameError,
		isValid: usernameIsValid,
		handleChange: handleUsernameChange,
	} = useUsernameValidation()
	const {
		password,
		setPassword,
		error: passwordError,
		isValid: passwordIsValid,
		handleChange: handlePasswordChange,
	} = usePasswordValidation()
	const [isDisabled, setIsDisabled] = useState<boolean>(false)

	function userNameChangeHandler(event: ChangeEvent<HTMLInputElement>) {
		setUsername(event.target.value)
		handleUsernameChange(event.target.value)
	}
	function emailChangeHandler(event: ChangeEvent<HTMLInputElement>) {
		setEmail(event.target.value)
		handleEmailChange(event.target.value)
	}
	function passwordChangeHandler(event: ChangeEvent<HTMLInputElement>) {
		setPassword(event.target.value)
		handlePasswordChange(event.target.value)
	}
	function submitForm (event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setIsDisabled(true)
		
	}

	return (
		<form
			className='registration-form'
			onSubmit={submitForm}
		>
			<Image
				className='registration-form__logo'
				src={Logo}
				alt='logo'
				width={244}
				height={53}
			/>
			<div className='registration-form__line'></div>
			<h1 className='registration-form__title'>Регистрация</h1>
			<div className='registration-form__inputs'>
				<FormInput
					value={email}
					onChange={emailChangeHandler}
					type='text'
					name='lg_1b'
					placeholder='text'
					inputName='Email:'
					errorValue={emailError}
					isValid={emailIsValid}
				/>
				<FormInput
					value={username}
					onChange={userNameChangeHandler}
					type='text'
					name='ld_12'
					placeholder='text'
					inputName='Имя:'
					errorValue={usernameError}
					isValid={usernameIsValid}
				/>
				<FormInput
					value={password}
					onChange={passwordChangeHandler}
					type='text'
					name='gs_14'
					placeholder='text'
					inputName='Пароль:'
					errorValue={passwordError}
					isValid={passwordIsValid}
				/>
			</div>
			<div className='registration-form__btns'>
				<SubmitInput value='Зарегистрироваться' isDisabled={isDisabled} />
				<p className='registration-form__caption'>
					Уже есть аккаунт?&nbsp;
					<Link className='registration-form__link' to='/login'>
						Войти
					</Link>
				</p>
			</div>
		</form>
	)
}
