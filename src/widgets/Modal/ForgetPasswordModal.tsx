import { MouseEvent } from 'react'
import Modal from './Modal'
import { Input, SubmitInput } from '@shared'
import './Modal.css'
import { useState } from 'react'
import { toggleLoginModal, useAppDispatch, useAppSelector } from '@store'

export default function ForgetPasswordModal() {
	const [email, setEmail] = useState<string>('')
	const [isDisabled, setIsDisabled] = useState<boolean>(false)
	const isModalActive = useAppSelector(state => state.login.isModalActive)
	const dispatch = useAppDispatch()

	function toggleModal(event: MouseEvent<HTMLDivElement>) {
		event.stopPropagation()
		dispatch(toggleLoginModal())
	}

	return (
		<Modal onClick={toggleModal} isModalActive={isModalActive}>
			<h2 className='modal__title'>Восстановить пароль</h2>
			<form className='modal__form'>
				<p className='modal__form-text'>Ваша почта:</p>
				<Input
					value={email}
					onChange={event => setEmail(event.target.value)}
					name='email'
					type='text'
				/>
				<SubmitInput value='Восстановить' isDisabled={isDisabled} />
			</form>
		</Modal>
	)
}
