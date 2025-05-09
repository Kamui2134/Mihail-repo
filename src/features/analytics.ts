import { Dispatch, SetStateAction } from 'react'
import { BarAnalyticsStatsType } from '@entities'
import { api } from './apiClient'

interface useBarAnalyticsStatsProps {
	barAnalyticsStats: BarAnalyticsStatsType
	setBarAnalyticsStats: Dispatch<SetStateAction<BarAnalyticsStatsType>>
}

const barAnalyticsMok: BarAnalyticsStatsType = {
	redemptions: [{ count: 0, date: '' }],
	stamps: [
		{ count: 840, date: '12-14-2025' },
		{ count: 69, date: '11-14-2025' },
		{ count: 80, date: '15-14-2025' },
		{ count: 100, date: '18-14-2025' },
	],
}

export const useBarAnalyticsStats = ({
	barAnalyticsStats,
	setBarAnalyticsStats,
}: useBarAnalyticsStatsProps) => {
	const updateBarAnalyticsStats = async () => {
		setBarAnalyticsStats(barAnalyticsMok)
		return barAnalyticsMok

		try {
			const barAnalyticsResponse = await api.getBarAnalyticsStats(
				localStorage.getItem('business_id')!
			)
			switch (barAnalyticsResponse.status) {
				case 200:
					setBarAnalyticsStats(barAnalyticsResponse.data.data)
					break
				case 400:
					throw new Error('400, Bad Response')
					break
				case 404:
					throw new Error('404, Not found')
					break
				default:
					throw new Error(barAnalyticsResponse.status.toString())
					break
			}
		} catch (err) {
			alert(err)
		} finally {
		}
	}

	return { updateBarAnalyticsStats }
}
