import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import { Image } from '@shared'
import Logo from '@images/logo.svg'
import Squares from '@images/icons/squares-blue.svg'
import List from '@images/icons/list-blue.svg'
import Lines from '@images/icons/lines-blue.svg'
import Question from '@images/icons/question.svg'
import Door from '@images/icons/door.svg'
import { useLogout } from '@features'

export default function Header() {
	const logout = useLogout()

	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__left'>
					<Link className='header__logo-container' to='/dashboard'>
						<Image
							className='header__logo'
							src={Logo}
							alt='logo'
							width={132}
							height={28}
						/>
					</Link>
					<nav className='header__nav'>
						<NavLink
							className={({ isActive }) =>
								`header__nav-link ${isActive ? 'active' : ''}`
							}
							to='/dashboard'
						>
							<Image
								className='header__nav-img'
								src={Squares}
								alt='squares'
								width={18}
								height={18}
							/>
							<span className='header__nav-text'>Дашборд</span>
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								`header__nav-link ${isActive ? 'active' : ''}`
							}
							to='/cards'
						>
							<Image
								className='header__nav-img'
								src={List}
								alt='list'
								width={18}
								height={18}
							/>
							<span className='header__nav-text'>Карточки</span>
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								`header__nav-link ${isActive ? 'active' : ''}`
							}
							to='/customers'
						>
							<Image
								className='header__nav-img'
								src={Lines}
								alt='lines'
								width={18}
								height={18}
							/>
							<span className='header__nav-text'>Пользователь</span>
						</NavLink>
					</nav>
				</div>
				<div className='header__right'>
					{/* Тут просто ссылку на тг Миши поставил, потому что не знал, что помощь должна делать */}
					<a href='tg://resolve?domain=lisovkiy'>
						<button className='header__right-button'>
							<Image
								className='header__button-img'
								src={Question}
								alt='question'
								width={18}
								height={18}
							/>
							<span className='header__button-text'>Помощь</span>
						</button>
					</a>
					<button className='header__right-button' onClick={logout}>
						<Image
							className='header__button-img'
							src={Door}
							alt='door'
							width={18}
							height={18}
						/>
						<span className='header__button-text'>Выход</span>
					</button>
				</div>
			</div>
		</header>
	)
}
