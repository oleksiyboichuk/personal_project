//apikey = 18da8edd681a4751bc6ec3937b96cdbd

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../types/product.type'

const API_URL = 'https://newsapi.org/v2/everything?q=Apple&from=2024-02-11&sortBy=popularity'
const API_KEY = '18da8edd681a4751bc6ec3937b96cdbd'

export const newsApi = createApi({
	reducerPath: 'newsApi',
	tagTypes: ['News'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		headers: {
			Authorization: `Bearer ${API_KEY}`,
		},
	}),
	endpoints: (builder) => ({
		getNews: builder.query<IProduct[], string>({
			query: () => '',
		}),
		getNewsById: builder.query<IProduct[], string>({
			query: (id) => ({ url: `/${id}` }),
		}),
	}),
})

export const { useGetNewsQuery, useGetNewsByIdQuery } = newsApi
