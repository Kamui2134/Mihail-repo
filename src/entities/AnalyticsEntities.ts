type BarRedemptionType = {
	count: number
	date: string
}
type BarStampType = {
	count: number
	date: string
}

export type BarAnalyticsStatsType = {
	redemptions: Array<BarRedemptionType>
	stamps: Array<BarStampType>
}
