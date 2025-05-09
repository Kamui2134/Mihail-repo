import { MouseEvent, ReactNode } from 'react'
import './Button.css'

interface ButtonProps {
	children: ReactNode
	className: string
	onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ children, className, onClick }: ButtonProps) {
	return (
		<button className={`button ${className}`} onClick={onClick}>
			{children}
		</button>
	)
}
