import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPosts } from '../../types/posts.type'


const API_URL = 'https://dummyjson.com/posts'

export const postsApi = createApi({
	reducerPath: 'postsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (builder) => ({
		getPosts: builder.query<IPosts, void>({
			query: () => '',

		}),
	}),
})

export const { useGetPostsQuery } = postsApi
