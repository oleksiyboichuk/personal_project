import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './api/products.api'
import { cartReducer } from './cart/cart.slice'
import { favoritesReducer } from './favourites/favourites.slice'
import { postsApi } from './api/posts.api'
export const store = configureStore({
	reducer: {
		[productsApi.reducerPath]: productsApi.reducer,
		[postsApi.reducerPath]: postsApi.reducer,
		cart: cartReducer,
		favorites: favoritesReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware, postsApi.middleware)	//для кешування і тд.
})

export type TypeRootState = ReturnType<typeof store.getState>