import { ChangeEvent, FocusEvent, KeyboardEvent } from 'react'

interface InputProps {
	className: string
	value: string
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
	type: string
	name: string
	placeholder?: string
	isDisabled?: boolean
	onBlur?: (event: FocusEvent<HTMLInputElement>) => void
	onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
}

export default function Input({
	className = 'input',
	value,
	onChange,
	type,
	name,
	placeholder,
	isDisabled,
	onBlur,
	onKeyDown,
}: InputProps) {
	return (
		<input
			className={className}
			value={value}
			onChange={onChange}
			type={type}
			name={name}
			placeholder={placeholder}
			disabled={isDisabled}
			onBlur={onBlur}
			onKeyDown={onKeyDown}
		/>
	)
}
