import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './api/products.api'
import { cartReducer } from './cart/cart.slice'
import { favoritesReducer } from './favourites/favourites.slice'
import { newsApi } from './api/news.api'

export const store = configureStore({
	reducer: {
		[productsApi.reducerPath]: productsApi.reducer,
		[newsApi.reducerPath]: newsApi.reducer,
		cart: cartReducer,
		favorites: favoritesReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware, newsApi.middleware)	//для кешування і тд.
})

export type TypeRootState = ReturnType<typeof store.getState>