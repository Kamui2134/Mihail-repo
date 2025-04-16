import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

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
	}

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

	// Добавьте другие методы (put, delete и т.д.)
}

export const api = new ApiClient('https://your-api.com/api/v1')
