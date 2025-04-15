import React, { Dispatch, SetStateAction } from 'react'
import './Input.css'
import Input from './Input'

interface SubmitInputProps {
	value: string
	isDisabled: boolean
}

export default function SubmitInput({ value, isDisabled }: SubmitInputProps) {
	return (
		<Input
			className='input input--submit'
			value={value}
			type='submit'
			name='submit'
			isDisabled={isDisabled}
		/>
	)
}
