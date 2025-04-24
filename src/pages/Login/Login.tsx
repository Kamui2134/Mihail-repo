import './Login.css'
import { Image } from '@shared'
import { ForgetPasswordModal, LoginForm } from '@widgets'
import SitePreview from '@images/site-preview.png'

export default function Login() {
	return (
		<main className='login'>
			<div className='login__container'>
				<div className='login__form-container'>
					<LoginForm />
				</div>
				<Image
					className='login__img'
					src={SitePreview}
					alt='website preview'
					width={672}
					height={765}
				/>
			</div>
			<ForgetPasswordModal />
		</main>
	)
}
