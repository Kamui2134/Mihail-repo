import './Button.css'
import Button from './Button'
import { MouseEvent } from 'react'

interface CancelButtonProps {
	onClick: (event: MouseEvent<HTMLButtonElement>) => void
	text: string
}

export default function CancelButton({ onClick, text }: CancelButtonProps) {
	return (
		<Button className='button--cancel' onClick={onClick}>
			{text}
		</Button>
	)
}
