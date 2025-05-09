import { Bar } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	type ChartOptions,
	type Plugin,
} from 'chart.js'
import { useEffect, useRef, useState } from 'react'
import { useBarAnalyticsStats } from '@features'
import { BarAnalyticsStatsType } from '@entities'
import './AllCharts.css'

ChartJS.register(CategoryScale, LinearScale, BarElement)

const hoverValuePlugin: Plugin<'bar'> = {
	id: 'hoverValue',
	afterDraw: chart => {
		const ctx = chart.ctx
		const activeElements = chart.getActiveElements()

		if (activeElements.length > 0) {
			const { datasetIndex, index } = activeElements[0]
			const dataset = chart.data.datasets[datasetIndex]
			const value = dataset.data[index]
			const meta = chart.getDatasetMeta(datasetIndex)
			const element = meta.data[index]

			// Позиционирование по центру столбца
			const x = element.x
			const y = element.y + element.height / 2 // Центр по вертикали

			// Стили текста
			ctx.save()
			ctx.font = 'normal medium "Inter", Arial' // Шрифт и размер
			ctx.fillStyle = '#FFFFFF' // Белый цвет
			ctx.textAlign = 'center'
			ctx.textBaseline = 'middle' // Центрирование по вертикали
			ctx.fillText(value!.toString(), x, y)
			ctx.restore()
		}
	},
}

const AllCharts = () => {
	const chartRef = useRef<ChartJS<'bar'>>(null)
	const [barAnalyticsStats, setBarAnalyticsStats] =
		useState<BarAnalyticsStatsType>(Object())
	const { updateBarAnalyticsStats } = useBarAnalyticsStats({
		barAnalyticsStats,
		setBarAnalyticsStats,
	})
	const [data, setData] = useState({
		labels: [] as string[],
		datasets: [
			{
				label: 'Штампы',
				data: [] as number[],
				backgroundColor: '#FFF4F1',
				hoverBackgroundColor: '#FF5B23',
				borderWidth: 0,
				borderRadius: 8,
			},
		],
	})

	useEffect(() => {
		const waitUpdate = async () => {
			const newBarAnalyticsStats: BarAnalyticsStatsType =
				await updateBarAnalyticsStats()
			setData({
				labels: newBarAnalyticsStats.stamps.map(stamp => stamp.date),
				datasets: [
					{
						...data.datasets[0],
						data: newBarAnalyticsStats.stamps.map(stamp => stamp.count),
					},
				],
			})
		}

		waitUpdate()
	}, [])

	const options: ChartOptions<'bar'> = {
		responsive: true,
		maintainAspectRatio: false, // Отключить сохранение пропорций
		plugins: {
			tooltip: { enabled: false },
			legend: { display: false },
		},
		hover: {
			mode: 'nearest',
			intersect: true,
		},
		scales: {
			y: {
				border: {
					dash: [7, 7],
				},
			},
			x: {
				border: {
					dash: [7, 7],
				},
				ticks: {
					font: {
						size: 19,
						family: '"Inter", Arial', // Единый шрифт для осей
						weight: 400,
					},
				},
			},
		},
		animation: {
			duration: 300,
			onComplete: () => {
				chartRef.current?.update()
			},
		},
	}

	return (
		barAnalyticsStats.stamps && (
			<Bar
				ref={chartRef}
				data={data}
				options={options}
				plugins={[hoverValuePlugin]}
			/>
		)
	)
}

export default AllCharts
