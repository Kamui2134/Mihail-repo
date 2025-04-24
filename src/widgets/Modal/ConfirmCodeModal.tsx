import { MouseEvent } from 'react'
import Modal from './Modal'
import { Input, SubmitInput } from '@shared'
import './Modal.css'
import { toggleRegistrationModal, useAppDispatch, useAppSelector } from '@store'
import { useRegistrationCodeConfirmation } from '@features'

export default function ConfirmCodeModal() {
	const isModalActive = useAppSelector(
		state => state.registration.isModalActive
	)
	const dispatch = useAppDispatch()
	const { code, isDisabled, codeValidation, confirmCode } =
		useRegistrationCodeConfirmation()

	function toggleModal(event: MouseEvent<HTMLDivElement>) {
		// dispatch(toggleRegistrationModal())
	}

	return (
		<Modal onClick={toggleModal} isModalActive={isModalActive}>
			<h2 className='modal__title'>Подтверждение кода из почты</h2>
			<form className='modal__form' onSubmit={confirmCode}>
				<p className='modal__form-text'>Введите код подтверждения:</p>
				<Input
					value={code}
					onChange={codeValidation}
					name='code'
					type='text'
				/>
				<SubmitInput value='Подтвердить' isDisabled={isDisabled} />
			</form>
		</Modal>
	)
}
