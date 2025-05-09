import { Table } from '@widgets'
import './Customers.css'
import { Image } from '@shared'
import Lines from '@images/icons/lines-black.svg'

export default function customers() {
	return (
		<main className='customers'>
			<div className='customers__container'>
				<h1 className='customers__title'>
					Список пользователей
					<Image
						className='customers__title-img'
						src={Lines}
						alt='lines'
						width={21}
						height={21}
					/>
				</h1>
				<div className='customers__line'></div>
				<div className='customers__table-container'>
					<Table />
				</div>
			</div>
		</main>
	)
}
