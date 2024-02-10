import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../types/product.type'

const loadFromLocalStorage = (): IProduct[] => {
	const serializedState = localStorage.getItem('likes')
	return serializedState ? JSON.parse(serializedState) : []
}

const initialState: IProduct[] = loadFromLocalStorage()

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites: (state, { payload: product }: PayloadAction<IProduct>) => {
			const isExists = state.some(p => p.id === product.id)
			if (isExists)
				state = state.filter(p => p.id !== product.id)
			else
				return [...state, product]
			localStorage.setItem('likes', JSON.stringify(state))
		},
	},
})

export const favoritesReducer = favoritesSlice.reducer
export const favoritesActions = favoritesSlice.actions
