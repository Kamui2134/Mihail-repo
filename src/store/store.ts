import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import rootReducer from './rootReducer'

// Создаем store первым
export const store = configureStore({
	reducer: rootReducer,
})

// Получаем тип состояния напрямую из store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Создаем типизированные хуки
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Опционально: если нужен AppSelector тип
export type AppSelector<Return> = (state: RootState) => Return
