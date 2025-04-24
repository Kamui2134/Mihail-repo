import { businessDataType, userDataType } from '@entities'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const API_URL = 'http://localhost:1337/api/v1'

class ApiClient {
	private readonly axiosInstance: AxiosInstance

	constructor(baseURL: string) {
		this.axiosInstance = axios.create({
			baseURL,
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json',
			},
		})

		this.axiosInstance.interceptors.response.use(
			res => {
				console.log(res.status, 'int res')
				return res
			},
			error => {
				if (axios.isAxiosError(error)) {
					if (error.response?.status === 401) {
						// Обработка ошибки 401, отсутствие токена авторизации для перекидывания на страницу авторизации
					}
				}
				return Promise.reject(error)
			}
		)
	}

	private async get<T>(
		url: string,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse<T>> {
		return this.axiosInstance.get<T>(url, config)
	}

	private async post<T>(
		url: string,
		data?: unknown,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse<T>> {
		return this.axiosInstance.post<T>(url, data, config)
	}

	public async registerUser(data: userDataType): Promise<AxiosResponse<any>> {
		return this.post('/auth/users/register', data)
	}

	public async createBusiness(
		data: businessDataType
	): Promise<AxiosResponse<any>> {
		return this.post('/businesses/', data)
	}

	public async sendCode(user_id: string): Promise<AxiosResponse<any>> {
		return this.post(`/auth/users/${user_id}/send-code`)
	}

	public async confirmUser(
		user_id: string,
		code: string
	): Promise<AxiosResponse<any>> {
		return this.get(`/auth/users/${user_id}/confirm`, {
			params: {
				code: code,
			},
		})
	}
}

export const api = new ApiClient(API_URL)
