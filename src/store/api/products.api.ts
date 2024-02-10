import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../types/product.type'
import { ITransformedProduct } from '../../types/product.type'

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-coffee-api.vercel.app/api' }),
	endpoints: (builder) => ({
		getProducts: builder.query<IProduct[], string>({
			query: () => '',
		}),
		getProductById: builder.query<IProduct, string>({
			query: (id) => ({ url: `/${id}` }),
		}),
	}),
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi

