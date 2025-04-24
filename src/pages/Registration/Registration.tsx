import './Registration.css'
import { Image } from '@shared'
import { ConfirmCodeModal, RegistrationForm } from '@widgets'
import SitePreview from '@images/site-preview.png'

export default function Registration() {
	return (
		<main className='registration'>
			<div className='registration__container'>
				<div className='registration__form-container'>
					<RegistrationForm />
				</div>
				<Image
					className='registration__img'
					src={SitePreview}
					alt='website preview'
					width={672}
					height={765}
				/>
			</div>
			<ConfirmCodeModal />
		</main>
	)
}
