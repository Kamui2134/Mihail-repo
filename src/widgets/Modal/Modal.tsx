import { ReactNode, MouseEvent } from 'react'
import './Modal.css'

interface ModalProps {
	children: ReactNode
	isModalActive: boolean
	onClick: (event: MouseEvent<HTMLDivElement>) => void
}

export default function Modal({
	children,
	isModalActive,
	onClick,
}: ModalProps) {
	return (
		<div
			className={`modal ${isModalActive ? 'active' : ''}`}
			onClick={onClick}
		>
			<div className='modal__container' onClick={(event) => event.stopPropagation()}>{children}</div>
		</div>
	)
}
