import './Header.css'
import { Link } from 'react-router-dom'
import { Image } from '@shared'
import Logo from '@images/logo.svg'

export default function Header() {
	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__left'>
					<Link className='header__logo-container' to='/users'>
						<Image
							className='header__logo'
							src={Logo}
							alt='logo'
							width={133}
							height={28}
						/>
					</Link>
					<nav className='header__nav'></nav>
					
				</div>
			</div>
		</header>
	)
}
