import { combineReducers } from '@reduxjs/toolkit'
import { registrationSlice } from './registrationSlice'
import { loginSlice } from './loginSlice'

const rootReducer = combineReducers({
	registration: registrationSlice,
    login: loginSlice
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
