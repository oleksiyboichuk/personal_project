import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../types/product.type'

// Load favorites from localStorage
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
			if (isExists) {
				const newState = state.filter(p => p.id !== product.id)
				localStorage.setItem('likes', JSON.stringify(newState))
				return newState
			} else {
				const newState = [...state, product]
				localStorage.setItem('likes', JSON.stringify(newState))
				return newState
			}
		},
	},
})

export const favoritesReducer = favoritesSlice.reducer
export const favoritesActions = favoritesSlice.actions
