import './Input.css'
import Input from './Input'
import { Image } from '../index'
import Search from '@images/icons/search.svg'
import { ChangeEvent, FocusEvent, KeyboardEvent } from 'react'

interface SearchInputProps {
	value: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	type: string
	name: string
	onBlur: (event: FocusEvent<HTMLInputElement>) => void
	onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void
}

export default function SearchInput({
	value,
	onChange,
	type,
	name,
	onBlur,
	onKeyDown,
}: SearchInputProps) {
	return (
		<div className='input-search-container'>
			<Input
				className='input input--search'
				value={value}
				onChange={onChange}
				type={type}
				name={name}
				onBlur={onBlur}
				onKeyDown={onKeyDown}
			/>
			<Image
				className='input-search-container__img'
				src={Search}
				alt='search'
				width={16}
				height={16}
			/>
		</div>
	)
}
