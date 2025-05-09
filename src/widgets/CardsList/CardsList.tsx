import { AddCardButton, Image } from '@shared'
import './CardsList.css'
import { useState } from 'react'
import Folder from '@images/folder.png'

export default function CardsList() {
	const [hasCards, setHasCards] = useState<boolean>(false)

	const onClick = (event: any) => {}

	return (
		<div className='cards-list'>
			{!hasCards && (
				<div className='cards-list__modal'>
					<div className='cards-list__modal-container'>
						{/* <svg
							className='cards-list__svg'
							viewBox='0 0 300 100'
							preserveAspectRatio='none'
						>
							<rect
								className='cards-list__path'
								x='0'
								y='0'
								d='M0,0 300,0 300,100 0,100z'
								rx='15'
								ry='15'
								vector-effect='non-scaling-stroke'
							></rect>
						</svg>
						 */}
						<Image
							className='cards-list__modal-img'
							src={Folder}
							alt='folder'
							width={106}
							height={77}
						/>
						<h3 className='cards-list__title'>Здесь пока пусто</h3>
						<AddCardButton onClick={onClick} text='Добавить карточку' />
					</div>
					<a
						className='cards-list__modal-link'
						href='tg://resolve?domain=lisovkiy'
					>
						Нужна помощь?
					</a>
				</div>
			)}
		</div>
	)
}
