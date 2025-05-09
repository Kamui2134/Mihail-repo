import { Image, SearchInput } from '@shared'
import './Table.css'
import { useCustomersSearching, useCustomersSorting } from '@features'
import ArrowDown from '@images/icons/arrow-down.svg'
import { useEffect, useRef, useState } from 'react'
import { CustomerType } from '@entities'

export default function Table() {
	const [customers, setCustomers] = useState<Array<CustomerType>>([])

	const { getSortedCustomers } = useCustomersSorting({
		customers,
		setCustomers,
	})
	const {
		searchText,
		handleChange: handleSearchChange,
		handleKeyDown: handleSearchKeyDown,
		handleBlur: handleSearchBlur,
	} = useCustomersSearching({ customers, setCustomers })

	useEffect(() => {
		getSortedCustomers('')
	}, [])

	const [dimensions, setDimensions] = useState({
		cellWidth: 0,
		rowWidth: 0,
		columnsCount: 0,
	})
	const bodyContainerRef = useRef<HTMLDivElement>(null)

	// Рассчитываем количество колонок на основе первого элемента
	const getColumnsCount = () => {
		if (customers.length === 0) return 0
		return Object.keys(customers[0]).filter(key => key !== 'id').length
	}

	useEffect(() => {
		const updateDimensions = () => {
			if (!bodyContainerRef.current || customers.length === 0) {
				return
			}

			const columnsCount = getColumnsCount()
			const containerWidth =
				bodyContainerRef.current.offsetWidth - 38 - 38 - 24 - 24
			console.log(containerWidth)
			const rowGap = parseInt(
				window.getComputedStyle(
					bodyContainerRef.current.querySelector('.table__body-row-container')!
				).gap
			)
			console.log(rowGap)
			const totalGaps = 10 * (columnsCount - 1)
			const cellWidth = (containerWidth - rowGap * 4) / 5
			// тут прибавляются дополнительно паддинги блока, т.к. они в расчёты не входили и вычитается ширина скролла, иначе появляется горизонтальный скролл на 5 столбцах
			const rowWidth = cellWidth * columnsCount + totalGaps + 24 + 24 - 10

			setDimensions({
				cellWidth,
				rowWidth,
				columnsCount,
			})
		}

		updateDimensions()
		window.addEventListener('resize', updateDimensions)
		return () => window.removeEventListener('resize', updateDimensions)
	}, [customers, bodyContainerRef]) // Пересчитываем при изменении данных

	return (
		<div className='table'>
			<div className='table__settings'>
				<div className='table__sorting'>
					<h2 className='table__sorting-title'>Отсортировать по: </h2>
					<ul className='table__sorting-list'>
						<li>
							<button className='table__sorting-element'>Локации</button>
						</li>
						<li>
							<button className='table__sorting-element'>Карточкам</button>
						</li>
						<li>
							<button className='table__sorting-element'>Кол-ву штампов</button>
						</li>
						<li>
							<button className='table__sorting-element'>
								Полученным наградам
							</button>
						</li>
					</ul>
				</div>
				<SearchInput
					value={searchText}
					type='text'
					name='search'
					onChange={handleSearchChange}
					onKeyDown={handleSearchKeyDown}
					onBlur={handleSearchBlur}
				/>
			</div>
			<div className='table__head'>
				<ul className='table__head-container'>
					<li className='table__head-cell'>
						<span className='table__head-text'>Имя</span>
						<Image
							className='table__head-img'
							src={ArrowDown}
							alt='arrow down'
							width={12}
							height={12}
						/>
					</li>
					<li className='table__head-cell'>
						<span className='table__head-text'>Телефон</span>
						<Image
							className='table__head-img'
							src={ArrowDown}
							alt='arrow down'
							width={12}
							height={12}
						/>
					</li>
					<li className='table__head-cell'>
						<span className='table__head-text'>Кол-во штампов</span>
						<Image
							className='table__head-img'
							src={ArrowDown}
							alt='arrow down'
							width={12}
							height={12}
						/>
					</li>
					<li className='table__head-cell'>
						<span className='table__head-text'>Последний штамп</span>
						<Image
							className='table__head-img'
							src={ArrowDown}
							alt='arrow down'
							width={12}
							height={12}
						/>
					</li>
					<li className='table__head-cell'>
						<span className='table__head-text'>Последний </span>
						<Image
							className='table__head-img'
							src={ArrowDown}
							alt='arrow down'
							width={12}
							height={12}
						/>
					</li>
				</ul>
			</div>
			<div className='table__body' ref={bodyContainerRef}>
				<ul className='table__body-container'>
					{customers.map(element => {
						return (
							<li
								className='table__body-row'
								style={{
									width: `${dimensions.rowWidth}px`,
								}}
								key={element.id}
							>
								<ul className='table__body-row-container'>
									{Object.entries(element).map(([key, value]) => {
										if (key == 'id') {
											return null
										}
										return (
											<li
												className='table__body-cell'
												style={{
													minWidth: dimensions.cellWidth,
													flexBasis: dimensions.cellWidth,
												}}
												key={key}
											>
												{value}
											</li>
										)
									})}
								</ul>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
