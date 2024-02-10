import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../types/product.type'

export interface CartItem {
	product: IProduct
	total: number
}

const initialState: CartItem[] = []

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
		},
		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			return state.filter(item => item.product.id !== action.payload.id)
		},
		plusCart: (state, action: PayloadAction<{ id: number }>) => {
			const { id } = action.payload
			const existingIndex = state.findIndex(item => item.product.id === id)
			if (existingIndex !== -1) {
				state[existingIndex].total += 1
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
			}
		}

	}
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions