import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { NavButton } from '../button/NavButton'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { OrderItem } from './OrderItem'
import { Wrapper } from '../wrapper/Wrapper'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'

interface FormData {
	name: string
	surname: string
	email: string
	phone: string
}

export const OrderProducts: React.FC = () => {

	const [formState, setFormState] = useState<boolean>(false)
	const { clearCart } = useActions()
	const navigate = useNavigate()
	const cart = useTypedSelector(state => state.cart)
	console.log(cart)

	const totalCosts = cart.reduce((acc, elem) => {
		acc += elem.product.price * elem.total
		return acc
	}, 0)

	const totalCount = cart.reduce((acc, elem) => {
		acc += elem.total
		return acc
	}, 0)

	const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

	const onSubmit: SubmitHandler<FormData> = (data) => {
		setFormState(true)
		setTimeout(() => {
			clearCart()
		}, 3000)
	}

	if (cart.length === 0) {
		navigate(-1)
	}

	return (
		<Wrapper>
			<div className='flex flex-col md:flex-row md:justify-between items-start md:items-center px-[3%] md:px-0  md:pb-2 pt-5 mb-5 md:mb-0'>
				<NavButton />
				<div className='bg-white px-2 py-1 border-2 border-main rounded-lg mt-5 md:mt-0'>
					<p className='text-3xl font-story font-bold text-main'>Here you can place an order:</p>
				</div>
			</div >
			{formState ?
				<div className='flex justify-center items-center mt-10 bg-green-500 text-black px-2 py-2 text-lg md:text-2xl rounded-lg drop-shadow-xl font-semibold mx-3'>Thank you! Your order has been accepted! A manager will contact you shortly.</div>
				:
				<div className='flex flex-col justify-start items-center mt-5'>
					<div className='w-full'>
						<div className='bg-white rounded-lg drop-shadow-xl'>
							<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-10 items-center py-5 '>

								<div className='flex flex-col md:flex-row gap-14'>
									<div className='flex flex-col'>
										<label className='text-black text-3xl font-semibold font-story' htmlFor="name">Name</label>
										<input {...register('name', { required: 'This field cannot be empty' })} className='border-2 border-black text-2xl rounded-lg px-2 text-black' placeholder='Enter name...' />
										{errors.name && <p className='text-main text-lg'>{errors.name.message}</p>}
									</div>

									<div className='flex flex-col'>
										<label className='text-black text-3xl font-semibold font-story' htmlFor="surname">Surname</label>
										<input {...register('surname', { required: 'This field cannot be empty' })} className='border-2 border-black text-2xl rounded-lg px-2 text-black' placeholder='Enter surname...' />
										{errors.surname && <p className='text-main text-lg'>{errors.surname.message}</p>}
									</div>
								</div>
								<div className='flex flex-col md:flex-row gap-14'>
									<div className='flex flex-col'>
										<label className='text-black text-3xl font-semibold font-story' htmlFor="email">Email</label>
										<input type="email" {...register('email', { required: 'This field cannot be empty', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email format' } })} className='border-2 border-black text-2xl rounded-lg px-2 text-black' placeholder='Enter email...' />
										{errors.email && <p className='text-main text-lg'>{errors.email.message}</p>}
									</div>

									<div className='flex flex-col'>
										<label className='text-black text-3xl font-semibold font-story' htmlFor="phone">Phone</label>
										<input type='number' {...register('phone', { required: 'This field cannot be empty' })} className='border-2 border-black text-2xl rounded-lg px-2 text-black' placeholder='Enter phone...' />
										{errors.phone && <p className='text-main text-lg'>{errors.phone.message}</p>}
									</div>
								</div>

								<button className='bg-green-500 hover:bg-green-400 text-2xl px-12 py-1 rounded-lg text-black hover:scale-105 active:bg-green-500 active:text-white transition-fast' type="submit">Order now!</button>
							</form>
							<div className='flex flex-col items-center justify-center p-5'>
								<p className='text-black/30 text-2xl'>{totalCount} {(totalCount > 1) ? 'items' : 'item'}</p>
								<p className='text-black text-3xl font-bold font-story'>Total: ${totalCosts.toFixed(2)}</p>
							</div>
						</div>
					</div>

					<div className='w-full md:w-1/2'>
						<div className='flex flex-col justify-center p-10'>
							{cart.map(item =>
								<OrderItem key={item.product.id} id={item.product.id} total={item.total} name={item.product.name} price={item.product.price} image={item.product.image_url} />

							)}
						</div>
					</div>
				</div>}
		</Wrapper>
	)
}
