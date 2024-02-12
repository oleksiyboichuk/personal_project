import { FC } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'

interface OrderItemProps {
	id: number
	name: string
	price: number
	image: string
	total: number
}

export const OrderItem: FC<OrderItemProps> = ({ id, name, price, image, total }) => {

	const { removeFromCart, plusCart, minusCart } = useActions()
	const navigate = useNavigate()

	return (
		<div className='bg-white flex justify-between mb-5 items-center px-4 py-2 rounded-xl border-2 border-banner cursor-pointer hover:scale-105 transition-slow' key={id} onClick={() => navigate(`/products/${id}`)}>
			<div className='flex flex-col justify-center items-center'>
				<img className='md:w-20' src={image} alt="" />
				<h2 className='font-story text-lg md:text-xl'>{name}</h2>
			</div>
			<div className='flex flex-col md:flex-row justify-center items-center md:gap-10'>
				<p className='font-semibold text-md md:text-lg'>{price}$</p>
				<p className='font-semibold'>{total}</p>
				<p className='font-semibold text-main/90 text-md md:text-lg'>{total * price}$</p>
			</div>

			<div className='flex flex-col justify-between items-center gap-1'>
				<div className='px-2 py-1' onClick={(e) => { e.stopPropagation(); plusCart({ id: id }) }}>
					<IoMdAddCircleOutline className='w-6 h-6 hover:text-green-600 hover:scale-110 transition-fast cursor-pointer select-none' />
				</div>
				<div className='px-2 py-1' onClick={(e) => { e.stopPropagation(); minusCart({ id: id }) }} >
					<IoMdRemoveCircleOutline className='w-6 h-6 hover:text-orange-400 hover:scale-110 transition-fast cursor-pointer select-none' />
				</div>
				<div className='px-1 py-1 bg-banner text-white rounded-lg hover:scale-110 cursor-pointer select-none transition-fast' onClick={(e) => { e.stopPropagation(); removeFromCart({ id: id }) }}>
					<FaRegTrashAlt className='w-5 h-5' />
				</div>
			</div>
		</div>
	)
}
