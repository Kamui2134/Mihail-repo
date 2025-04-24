import { ForgetPasswordModal } from '@widgets'
import SitePreview from '@images/'
import './Login.css'

export default function Login() {
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
  )
}
