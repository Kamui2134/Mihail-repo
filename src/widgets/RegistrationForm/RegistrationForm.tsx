import { Link } from 'react-router-dom'
import { Image } from '@shared'
import './RegistrationForm.css'
import { FormInput, SubmitInput } from '@shared'
import Logo from '@images/logo.svg'
import {
	useRegistrationUserEmailValidation,
	useRegistrationUsernameValidation,
	useRegistrationPasswordValidation,
	useRegistrationBusinessEmailValidation,
	useRegistrationBusinessNameValidation,
	useRegistrationBusinessWebsiteValidation,
	useRegistrationFormSubmission,
} from '@features'

export default function RegistrationForm() {
	const {
		userEmail,
		error: emailError,
		isValid: emailIsValid,
		handleChange: handleEmailChange,
	} = useRegistrationUserEmailValidation()
	const {
		username,
		error: nameError,
		isValid: nameIsValid,
		handleChange: handleNameChange,
	} = useRegistrationUsernameValidation()
	const {
		password,
		error: passwordError,
		isValid: passwordIsValid,
		handleChange: handlePasswordChange,
	} = useRegistrationPasswordValidation()
	const {
		businessEmail,
		error: businessEmailError,
		isValid: businessEmailIsValid,
		handleChange: handleBusinessEmailChange,
	} = useRegistrationBusinessEmailValidation()
	const {
		businessName,
		error: businessNameError,
		isValid: businessNameIsValid,
		handleChange: handleBusinessNameChange,
	} = useRegistrationBusinessNameValidation()
	const {
		businessWebsite,
		error: businessWebsiteError,
		isValid: businessWebsiteIsValid,
		handleChange: handleBusinessWebsiteChange,
	} = useRegistrationBusinessWebsiteValidation()
	const { isDisabled, submitForm, fieldNames } = useRegistrationFormSubmission()

	return (
		<form className='registration-form' onSubmit={submitForm}>
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
					value={username}
					onChange={handleNameChange}
					type='text'
					name={fieldNames.username}
					placeholder='text'
					inputName='Имя:'
					errorValue={nameError}
					isValid={nameIsValid}
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
				<FormInput
					value={businessEmail}
					onChange={handleBusinessEmailChange}
					type='text'
					name={fieldNames.businessEmail}
					placeholder='text'
					inputName='Email бизнеса:'
					errorValue={businessEmailError}
					isValid={businessEmailIsValid}
				/>
				<FormInput
					value={businessName}
					onChange={handleBusinessNameChange}
					type='text'
					name={fieldNames.businessName}
					placeholder='text'
					inputName='Название организации:'
					errorValue={businessNameError}
					isValid={businessNameIsValid}
				/>
				<FormInput
					value={businessWebsite}
					onChange={handleBusinessWebsiteChange}
					type='text'
					name={fieldNames.businessWebsite}
					placeholder='text'
					inputName='Сайт компании:'
					errorValue={businessWebsiteError}
					isValid={businessWebsiteIsValid}
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
