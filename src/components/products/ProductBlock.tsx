import { FC } from 'react'

import { CiHeart } from "react-icons/ci"
import { BsCart2 } from "react-icons/bs"
import { GoTrash } from "react-icons/go"

import { IProduct } from '../../types/product.type'
import { useActions } from '../../hooks/useActions'
import { CartItem } from '../../store/cart/cart.slice'

import { useLocation, useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'


interface ProductBlockProps {
	id: number
	name: string
	price: number
	image: string
	region: string
	discount: number
	product: IProduct
	cart: CartItem[]
}


export const ProductBlock: FC<ProductBlockProps> = ({ id, name, price, image, region, product, cart, discount }) => {
	const favorites = useTypedSelector(state => state.favorites)
	const { addToCart, removeFromCart, toggleFavorites } = useActions()
	const isExistsInCart = cart.some(p => p.product.id === product.id)
	const isExistsInFavorites = favorites.some(p => p.id === product.id)

	// const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<>
			{/* // <a href={`${pathname}/${id}`}> onClick={() => navigate(`/products/${id}`)}*/}
			<section className='bg-white max-w-[300px] rounded-3xl px-5 py-4 m-3  drop-shadow-xl hover:scale-105 transition-slow cursor-pointer z-10' key={id}>

				<div className='flex justify-between items-center'>
					<span className='bg-back px-2 rounded-lg'>{discount}%</span>
					<CiHeart className={`rounded-md text-3xl hover:scale-110 ${isExistsInFavorites ? 'text-white bg-main hover:text-red-100' : 'text-black bg-back hover:bg-red-200'} transition-fast z-30`} onClick={() => toggleFavorites(product)} />

				</div>
				<div className='relative flex justify-center items-center'>
					<img src={image} alt={name} className='z-30' />
				</div>
				<h2 className='font-bold font-story text-xl'>{name}</h2>
				<div className='flex flex-start'>
					<p className='line-through text-back-text'>{(price / (1 - discount / 100)).toFixed(2)}$</p>
				</div>
				<div className='flex justify-between items-center'>
					<p className='font-bold text-xl text-main/75'>{price}$</p>
					<p>{region}</p>
				</div>

				<div className='flex justify-between items-center'>
					<p>{isExistsInCart ? 'Remove:' : 'Add to cart:'}</p>
					<button className={`text-white text-xl px-2  py-1 rounded-lg my-2 font-semibold hover:scale-105 active:bg-white ${!isExistsInCart ? 'bg-green-500 hover:bg-green-400 ' : 'bg-main hover:bg-main/80'} transition-slow`} onClick={() => !isExistsInCart && addToCart(product)} >
						{isExistsInCart ? <div onClick={() => removeFromCart({ id: id })}><GoTrash /></div>
							: <BsCart2 />}
					</button>
				</div>
			</section>
			{/* // </a > */}
		</>
	)
}
