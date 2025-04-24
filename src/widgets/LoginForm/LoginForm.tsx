import './LoginForm.css'
import { Image, SubmitInput, FormInput } from '@shared'
import Logo from '@images/logo.svg'
import CatLooking from '@images/cat-looking.png'
import CatNotLooking from '@images/cat-not-looking.png'
import { Link } from 'react-router-dom'
import {
	useLoginUserEmailValidation,
	useLoginFormSubmission,
	useLoginPasswordValidation,
} from '@features'

export default function LoginForm() {
	const {
		userEmail,
		error: emailError,
		isValid: emailIsValid,
		handleChange: handleEmailChange,
	} = useLoginUserEmailValidation()
	const {
		password,
		error: passwordError,
		isValid: passwordIsValid,
		handleChange: handlePasswordChange,
	} = useLoginPasswordValidation()
	const { isDisabled, submitForm, fieldNames } = useLoginFormSubmission()

	return (
		<form className='login-form' onSubmit={submitForm}>
			<Image
				className='login-form__logo'
				src={Logo}
				alt='logo'
				width={244}
				height={53}
			/>
			<div className='login-form__line'></div>
			<h1 className='login-form__title'>Вход и Регистрация</h1>
			<div className='login-form__cats-container'>
				<Image
					className='login-form__cat login-form__cat--1'
					src={CatLooking}
					alt='logo'
					width={100}
					height={100}
				/>
				<Image
					className='login-form__cat login-form__cat--2'
					src={CatNotLooking}
					alt='logo'
					width={100}
					height={100}
				/>
			</div>

			<div className='login-form__inputs'>
				<FormInput
					value={userEmail}
					onChange={handleEmailChange}
					type='text'
					name={fieldNames.userEmail}
					placeholder='text'
					inputName='Email пользователя:'
					errorValue={emailError}
					isValid={emailIsValid}
				/>
				<FormInput
					value={password}
					onChange={handlePasswordChange}
					type='text'
					name={fieldNames.password}
					placeholder='text'
					inputName='Пароль:'
					errorValue={passwordError}
					isValid={passwordIsValid}
				/>
			</div>
			<div className='login-form__btns'>
				<SubmitInput value='Войти' isDisabled={isDisabled} />
				<p className='login-form__caption'>
					Нет аккаунта?&nbsp;
					<Link className='login-form__link' to='/registration'>
						Зарегистрироваться
					</Link>
				</p>
			</div>
		</form>
	)
}
