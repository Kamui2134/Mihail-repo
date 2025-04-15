import { ChangeEvent, FocusEvent, KeyboardEvent } from 'react'

interface InputProps {
	className?: string
	value: string
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
	type: string
	name: string
	placeholder?: string
	onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
	isDisabled?: boolean
}

export default function Input({
	className = 'input',
	value,
	onChange,
	type,
	name,
	placeholder,
	onKeyDown,
	isDisabled,
}: InputProps) {
	return (
		<input
			className={className}
			value={value}
			onChange={onChange}
			type={type}
			name={name}
			placeholder={placeholder}
			onKeyDown={onKeyDown}
			disabled={isDisabled}
		/>
	)
}
