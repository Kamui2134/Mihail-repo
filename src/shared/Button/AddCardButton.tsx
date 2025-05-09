import './Button'
import Button from './Button'
import { MouseEvent } from 'react'
import { Image } from '@shared'
import Plus from '@images/icons/plus-dotted-border.svg'

interface ContinueButtonProps {
	onClick: (event: MouseEvent<HTMLButtonElement>) => void
	text: string
}

export default function ContinueButton({ onClick, text }: ContinueButtonProps) {
	return (
		<Button className='button--add-card' onClick={onClick}>
			<Image
				className='button__add-card-img'
				src={Plus}
				alt='plus'
				width={31}
				height={31}
			/>
			{text}
		</Button>
	)
}
