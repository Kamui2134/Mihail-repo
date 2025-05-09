import { Image } from '@shared'
import './Dashboard.css'
import { BarChart } from '@widgets'
import Squares from '@images/icons/squares-black.svg'

export default function Dashboard() {
	return (
		<main className='dashboard'>
			<div className='dashboard__container '>
				<h1 className='dashboard__title'>
					Дашборд
					<Image
						className='dashboard__title-img'
						src={Squares}
						alt='squares'
						width={21}
						height={21}
					/>
				</h1>
				<div className='dashboard__line'></div>
				<div className='dashboard__charts-container'>
					<BarChart />
				</div>
			</div>
		</main>
	)
}
