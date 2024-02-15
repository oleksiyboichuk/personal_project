import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost, IPostsData } from '../../types/posts.type'


const API_URL = 'https://dummyjson.com/posts'

export const postsApi = createApi({
	reducerPath: 'postsApi',
	tagTypes: ['Posts'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (builder) => ({
		getPosts: builder.query<IPostsData, void>({
			query: () => '',
			providesTags: () => [{
				type: 'Posts'
			}]
		}),
		getPostsById: builder.query<IPost, string>({
			query: (id) => ({ url: `/${id}` }),
		}),
	}),
})

export const { useGetPostsQuery, useGetPostsByIdQuery } = postsApi
