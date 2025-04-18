import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface registrationState {
	isModalActive: boolean
}

const initialState: registrationState = {
	isModalActive: false
}

export const registrationSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {
		toggleModal: (state) => {
			state.isModalActive = !state.isModalActive
		}
	},
})

export default registrationSlice.reducer
