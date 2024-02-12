import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../types/product.type'

const API_URL = 'https://fake-coffee-api.vercel.app/api'

export const productsApi = createApi({
	reducerPath: 'productsApi',
	tagTypes: ['Products'],
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (builder) => ({
		getProducts: builder.query<IProduct[], string>({
			query: () => '',
		}),
		getProductById: builder.query<IProduct[], string>({
			query: (id) => ({ url: `/${id}` }),

		}),
	}),
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi

