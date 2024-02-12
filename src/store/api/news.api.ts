import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface NewsApiResponse {
	status: string
	totalResults: number
	articles: {
		author: string
		title: string
		description: string
		url: string
		urlToImage: string | null
		publishedAt: string
		content: string
		// Додати інші поля, якщо потрібно
	}[]
}

const API_URL = 'https://newsapi.org/v2/everything?q=coffee&from=2024-01-12&sortBy=publishedAt&pageSize=10'
const API_KEY = '18da8edd681a4751bc6ec3937b96cdbd' // Ваш ключ RapidAPI

// Створюємо RTK Query API
export const newsApi = createApi({
	reducerPath: 'myAlliesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers) => {
			headers.set('x-api-key', API_KEY)
			return headers
		},
	}),
	endpoints: (builder) => ({
		getCompanyDetailsBySymbol: builder.query<NewsApiResponse, void>({
			query: () => '',
			transformResponse: (response: unknown) => {
				// Перевіряємо, чи response є типом NewsApiResponse
				if (!isNewsApiResponse(response)) {
					// Якщо не, повертаємо пустий об'єкт
					return { status: '', totalResults: 0, articles: [] }
				}
				// Інакше проводимо трансформацію
				return response
			},
		}),
	}),
})

// Функція для перевірки, чи об'єкт є типом NewsApiResponse
function isNewsApiResponse(response: any): response is NewsApiResponse {
	return (
		typeof response === 'object' &&
		'status' in response &&
		'totalResults' in response &&
		'articles' in response &&
		Array.isArray(response.articles)
	)
}

// Експортуємо функції та хуки запиту
export const { useGetCompanyDetailsBySymbolQuery } = newsApi
