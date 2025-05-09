import './Button'
import Button from './Button'
import { MouseEvent } from 'react'

interface ContinueButtonProps {
	onClick: (event: MouseEvent<HTMLButtonElement>) => void
	text: string
}

export default function ContinueButton({ onClick, text }: ContinueButtonProps) {
	return (
		<Button className='button--continue' onClick={onClick}>
			{text}
		</Button>
	)
}
