import { createSlice } from "@reduxjs/toolkit"


interface loginState {
    isModalActive: boolean
}

const initialState: loginState = {
    isModalActive: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.isModalActive = !state.isModalActive
        }
    }
})

export default loginSlice.reducer