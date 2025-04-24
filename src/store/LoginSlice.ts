import { createSlice } from '@reduxjs/toolkit'

interface loginState {
	isModalActive: boolean
}

const initialState: loginState = {
	isModalActive: false,
}

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		toggleLoginModal: state => {
			state.isModalActive = !state.isModalActive
		},
	},
})

export const { toggleLoginModal } = loginSlice.actions

export default loginSlice.reducer
