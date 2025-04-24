import { combineReducers } from '@reduxjs/toolkit'
import registrationReducer from './registrationSlice'
import loginReducer from './loginSlice'

const rootReducer = combineReducers({
	registration: registrationReducer,
    login: loginReducer
})

export default rootReducer
