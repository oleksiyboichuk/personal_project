import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../types/product.type'

export interface CartItem {
	product: IProduct
	total: number
}

const loadCartFromLocalStorage = (): CartItem[] => {
	const serializedState = localStorage.getItem('cart')
	return serializedState ? JSON.parse(serializedState) : []
}

const initialState: CartItem[] = loadCartFromLocalStorage()

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IProduct>) => {
			const { id } = action.payload
			const existingIndex = state.findIndex(item => item.product.id === id)
			if (existingIndex !== -1) {
				state[existingIndex].total += 1
			} else {
				state.push({ product: action.payload, total: 1 })
			}
			localStorage.setItem('cart', JSON.stringify(state))
		},
		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			const newState = state.filter(item => item.product.id !== action.payload.id)
			localStorage.setItem('cart', JSON.stringify(newState))
			return newState
		},
		plusCart: (state, action: PayloadAction<{ id: number }>) => {
			const { id } = action.payload
			const existingIndex = state.findIndex(item => item.product.id === id)
			if (existingIndex !== -1) {
				state[existingIndex].total += 1
				localStorage.setItem('cart', JSON.stringify(state))
			}
		},
		minusCart: (state, action: PayloadAction<{ id: number }>) => {
			const { id } = action.payload
			const existingIndex = state.findIndex(item => item.product.id === id)
			if (existingIndex !== -1) {
				if (state[existingIndex].total > 1) {
					state[existingIndex].total -= 1
				} else {
					state.splice(existingIndex, 1)
				}
				localStorage.setItem('cart', JSON.stringify(state))
			}
		},
	},
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
