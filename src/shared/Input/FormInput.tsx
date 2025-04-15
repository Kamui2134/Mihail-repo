import { ChangeEvent, FocusEvent, KeyboardEvent } from 'react'
import Input from './Input'
import { Image } from '../index'
import Success from '@/images/icons/checkmark-green.svg'

interface FormInputProps {
	value: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	type: string
	name: string
	placeholder: string
	inputName: string
	errorValue: string
	isValid: boolean
	onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
}

export default function FormInput({
	value,
	onChange,
	type,
	name,
	placeholder,
	inputName,
	errorValue,
	isValid,
	onKeyDown,
}: FormInputProps) {
	return (
		<div className='input-container'>
			<div className='input-container__header'>
				<div className='input-container__left'>
					<p className='input-container__input-name'>{inputName}</p>
					<Image
						className={`input-container__success ${isValid ? 'active' : ''}`}
						src={Success}
						alt='success'
						width={16}
						height={16}
					/>
				</div>
				<div className='input-container__right'>
					<p className={`input-container__error ${errorValue ? 'active' : ''}`}>
						{errorValue}
					</p>
				</div>
			</div>
			<Input
				className={`input input--form ${errorValue ? 'error' : ''} ${
					isValid ? 'success' : ''
				}`}
				value={value}
				onChange={onChange}
				type={type}
				name={name}
				placeholder={placeholder}
				onKeyDown={onKeyDown}
			/>
		</div>
	)
}
