import { FC } from 'react'
import { CgCloseR } from "react-icons/cg"
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io"
import { FaRegTrashAlt } from "react-icons/fa"
import { useActions } from '../../hooks/useActions'
import { CartItem } from '../../store/cart/cart.slice'
import { useNavigate } from 'react-router-dom'

interface ModalCartProps {
	active: boolean
	setActive: (value: boolean) => void
	cart: CartItem[]
}

export const ModalCart: FC<ModalCartProps> = ({ active, setActive, cart }) => {
	const { removeFromCart, plusCart, minusCart } = useActions()
	const navigate = useNavigate()

	const totalCount = cart.reduce((acc, elem) => {
		acc += elem.total * elem.product.price
		return acc
	}, 0)

	return (
		<div
			className={`${active ? 'fade-in' : ''} fixed top-0 bottom-0 w-full h-full bg-black/50 flex items-start transition-all duration-500 ease-in-out z-40`}
			onClick={() => setActive(false)}>
			<div
				className={`${active ? 'scale-in' : ''} w-full h-[100%] md:w-[40%] flex absolute right-0 top-0 flex-col p-5 md:p-12 transform origin-center bg-white transition-all duration-500 ease-in-out z-50 overflow-x-auto`}
				onClick={(e) => e.stopPropagation()}>
				<div
					className='absolute top-[2%] right-[3%] font-bold text-4xl cursor-pointer hover:scale-110 hover:text-main z-50 transition-fast' onClick={() => setActive(false)}>
					<CgCloseR />
				</div>

				{cart.length !== 0 && (
					<div className='flex justify-end items-center mt-16 md:mt-10'>
						<button className='bg-banner text-2xl font-semibold border-2 border-banner px-3 py-1 text-white rounded-lg drop-shadow-lg hover:bg-main hover:border-main hover:scale-105 active:bg-white active:text-main active:border-main transition-slow' onClick={() => navigate('/order')}>Order now!</button>
					</div>
				)}

				{cart.length !== 0 ? (
					<div className='mt-10 md:mt-8'>
						{cart.map(item => (
							<div className='bg-white flex justify-between mb-5 items-center px-4 py-2 rounded-xl drop-shadow-md cursor-pointer' key={item.product.id} onClick={() => navigate(`/products/${item.product.id}`)}>
								<div className='flex flex-col justify-center items-center'>
									<img className='w-20 md:w-40' src={item.product.image_url} alt="" />
									<h2 className='font-story text-lg md:text-xl'>{item.product.name}</h2>
								</div>
								<p className='font-semibold text-md md:text-lg'>{item.product.price}$</p>
								<p className='font-semibold'>{item.total}</p>
								<p className='font-semibold text-main/90 text-md md:text-lg'>{item.total * item.product.price}$</p>

								<div className='flex flex-col justify-between items-center gap-1'>
									<div className='px-2 py-1' onClick={(e) => { e.stopPropagation(); plusCart({ id: item.product.id }) }}>
										<IoMdAddCircleOutline className='w-6 h-6 hover:text-green-600 hover:scale-110 transition-fast cursor-pointer select-none' />
									</div>
									<div className='px-2 py-1' onClick={(e) => { e.stopPropagation(); minusCart({ id: item.product.id }) }} >
										<IoMdRemoveCircleOutline className='w-6 h-6 hover:text-orange-400 hover:scale-110 transition-fast cursor-pointer select-none' />
									</div>
									<div className='px-1 py-1 bg-banner text-white rounded-lg hover:scale-110 cursor-pointer select-none transition-fast' onClick={(e) => { e.stopPropagation(); removeFromCart({ id: item.product.id }) }}>
										<FaRegTrashAlt className='w-5 h-5' />
									</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className='flex justify-center mt-10 md:mt-0'>
						<p className='text-2xl text-back-text'>Cart is empty...</p>
					</div>
				)}

				{cart.length !== 0 &&
					<div className='fixed top-[4%] left-[5%]'>
						<p className='text-2xl font-bold text-green-600'>
							{cart.length !== 0 && <span className=''>Total: {totalCount.toFixed(2)}$</span>}
						</p>
					</div>
				}
			</div>
		</div>
	)
}
