import {
	ChangeEvent,
	KeyboardEvent,
	FocusEvent,
	useState,
	useCallback,
	Dispatch,
	SetStateAction,
	useRef,
} from 'react'
import { api, useDebounce } from '@features'
import { CustomerType } from '@entities'
import { CustomersDataType } from '@/entities/CustomersEntities'

const customersMok = [
	{
		id: 'asdga8d87989h1dw',
		last_reward_at: '22-10-2025',
		last_stamp_at: '08-09-2024',
		name: 'Gosha',
		phone: '+79219352203',
		stamps: 100,
	},
	{
		id: 'asdga8d87989h1dw',
		last_reward_at: '22-10-2025',
		last_stamp_at: '08-09-2024',
		name: 'Gosha',
		phone: '+79219352203',
		stamps: 100,
	},
	{
		id: 'asdga8d87989h1dw',
		last_reward_at: '22-10-2025',
		last_stamp_at: '08-09-2024',
		name: 'Gosha',
		phone: '+79219352203',
		stamps: 100,
	},
	{
		id: 'asdga8d87989h1dw',
		last_reward_at: '22-10-2025',
		last_stamp_at: '08-09-2024',
		name: 'Gosha',
		phone: '+79219352203',
		stamps: 100,
	},
	{
		id: 'asdga8d87989h1dw',
		last_reward_at: '22-10-2025',
		last_stamp_at: '08-09-2024',
		name: 'Gosha',
		phone: '+79219352203',
		stamps: 100,
	},
	{
		id: 'asdga8d87989h1dw',
		last_reward_at: '22-10-2025',
		last_stamp_at: '08-09-2024',
		name: 'Gosha',
		phone: '+79219352203',
		stamps: 100,
	},
	{
		id: 'asdga8d87989h1dw',
		last_reward_at: '22-10-2025',
		last_stamp_at: '08-09-2024',
		name: 'Gosha',
		phone: '+79219352203',
		stamps: 100,
	},
	{
		id: 'asdga8d87989h1dw',
		last_reward_at: '22-10-2025',
		last_stamp_at: '08-09-2024',
		name: 'Gosha',
		phone: '+79219352203',
		stamps: 100,
	},
	{
		id: 'asdga8d87989h1dw',
		last_reward_at: '22-10-2025',
		last_stamp_at: '08-09-2024',
		name: 'Gosha',
		phone: '+79219352203',
		stamps: 100,
	},
	{
		id: 'asdga8d87989h1dw',
		last_reward_at: '22-10-2025',
		last_stamp_at: '08-09-2024',
		name: 'Gosha',
		phone: '+79219352203',
		stamps: 100,
	},
]

interface useCustomersSortingProps {
	customers: Array<CustomerType>
	setCustomers: Dispatch<SetStateAction<Array<CustomerType>>>
}

export const useCustomersSorting = ({
	customers,
	setCustomers,
}: useCustomersSortingProps) => {
	const offset = useRef<string>('0')
	const limit = useRef<string>('10')

	const getSortedCustomers = async (sort: string) => {
		const customersData: CustomersDataType = {
			business_id: localStorage.getItem('business_id')!,
			sort: sort,
			limit: limit.current,
			offset: offset.current,
		}

		setCustomers(customersMok)

		return

		try {
			const getCustomersResponse = await api.getCustomers(customersData)
			switch (getCustomersResponse.status) {
				case 200:
					setCustomers(getCustomersResponse.data.data)
					break
				case 400:
					throw new Error('400, Bad Response')
					break
				case 404:
					throw new Error('404, Not found')
					break
				default:
					throw new Error(getCustomersResponse.status.toString())
					break
			}
		} catch (err: any) {
			alert(err)
		} finally {
		}
	}

	return {
		getSortedCustomers,
	}
}

interface useCustomersSearchingProps {
	customers: Array<CustomerType>
	setCustomers: Dispatch<SetStateAction<Array<CustomerType>>>
}

export const useCustomersSearching = ({
	customers,
	setCustomers,
}: useCustomersSearchingProps) => {
	const [searchText, setSearchText] = useState<string>('')

	const debouncedValidation = useDebounce((searchText: string) => {}, 1000)

	// Функция для обработки изменений
	const handleChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setSearchText(event.target.value)
			debouncedValidation(event.target.value)
		},
		[debouncedValidation]
	)

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {}

	const handleBlur = (event: FocusEvent<HTMLInputElement>) => {}

	return {
		searchText,
		handleChange,
		handleKeyDown,
		handleBlur,
	}
}
