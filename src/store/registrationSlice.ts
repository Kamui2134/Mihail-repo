import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface registrationState {
	isModalActive: boolean
}

const initialState: registrationState = {
	isModalActive: false,
}

export const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {
		toggleRegistrationModal: state => {
			state.isModalActive = !state.isModalActive
		},
	},
})

export const { toggleRegistrationModal } = registrationSlice.actions

export default registrationSlice.reducer
