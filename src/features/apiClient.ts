import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { AppDispatch } from './store' // Тип из вашего store.ts



class ApiClient {
	private readonly axiosInstance: AxiosInstance
	private dispatch?: AppDispatch

	constructor(baseURL: string) {
		this.axiosInstance = axios.create({
			baseURL,
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json',
			},
		})

		this.setupInterceptors()
	}

	// Инициализация dispatch для Redux
	setDispatch(dispatch: AppDispatch) {
		this.dispatch = dispatch
	}

	private setupInterceptors() {
		this.axiosInstance.interceptors.request.use(
			config => {
				// Можно добавить логику для токенов
				// const token = localStorage.getItem('token');
				// if (token) config.headers.Authorization = `Bearer ${token}`;
				return config
			},
			error => Promise.reject(error)
		)

		this.axiosInstance.interceptors.response.use(
			response => response,
			error => {
				if (this.dispatch) {
					// Пример: диспатч глобальной ошибки
					this.dispatch({ type: 'api/error', payload: error.message })
				}
				return Promise.reject(error)
			}
		)
	}

	// Базовые методы
	public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
		const response: AxiosResponse<T> = await this.axiosInstance.get(url, config)
		return response.data
	}

	public async post<T>(
		url: string,
		data?: unknown,
		config?: AxiosRequestConfig
	): Promise<T> {
		const response: AxiosResponse<T> = await this.axiosInstance.post(
			url,
			data,
			config
		)
		return response.data
	}

	// Добавьте другие методы (put, delete и т.д.) по аналогии
}

// Пример использования с вашим доменом
export const api = new ApiClient()
