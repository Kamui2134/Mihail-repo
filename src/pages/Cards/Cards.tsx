import { Image } from '@shared'
import './Cards.css'
import List from '@images/icons/list-black.svg'
import { CardsList } from '@widgets'

export default function Cards() {
	return (
		<main className='cards'>
			<div className='cards__container'>
				<h1 className='cards__title'>
					Список карточек
					<Image
						className='cards__title-img'
						src={List}
						alt='squares'
						width={21}
						height={21}
					/>
				</h1>
				<div className='cards__line'></div>
				<div className='cards__cards-list-container'>
					<CardsList />
				</div>
			</div>
		</main>
	)
}
