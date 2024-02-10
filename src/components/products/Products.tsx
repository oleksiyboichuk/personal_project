import { FC, useState } from 'react'
import { FaBackward } from "react-icons/fa"
import { Wrapper } from '../wrapper/Wrapper'
import { useGetProductsQuery } from '../../store/api/products.api'
import { ProductBlock } from './ProductBlock'
import { CiHeart } from 'react-icons/ci'
import { PiShoppingCartSimpleThin } from 'react-icons/pi'
import { ModalCart } from '../modal/ModalCart'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { LoaderProducts } from '../loader/LoaderProducts'
import { useNavigate } from 'react-router-dom'

export const Products: FC = () => {
	const [modalCartActive, setModalCartActive] = useState<boolean>(false)
	const [sortOption, setSortOption] = useState<string>('cheap')
	const { data, error, isLoading } = useGetProductsQuery('')
	const cart = useTypedSelector(state => state.cart)
	const navigate = useNavigate()

	const handleChangeSortOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortOption(e.target.value)
	}

	const sortedData = data && [...data]

	if (sortedData && sortOption === 'exp') {
		sortedData.sort((a, b) => b.price - a.price)
	} else if (sortedData && sortOption === 'cheap') {
		sortedData.sort((a, b) => a.price - b.price)
	}

	return (
		<>
			<Wrapper>
				<div className='flex justify-between items-center px-[3%] md:px-0  md:pb-2 pt-5'>
					<a href='/'>
						<div className='group flex justify-between items-center bg-white border-[1px] border-banner/40 pr-1.5 pl-4 py-1 rounded-full http://localhost:3000/images/items/coffee_bag.pnggap-3 cursor-pointer button-primary hover:border-main gap-3 active:bg-red-400 active:text-white'>
							<h2 className='font-semibold'>Back</h2>
							<div className='bg-main p-3 rounded-full text-white group-active:bg-red-400 group-active:text-white transition-slow'><FaBackward className='w-5 h-5' /></div>
						</div>
					</a>
					<div className='flex justify-center items-center gap-10 z-30'>
						<div className='flex justify-center items-center bg-main rounded-full text-white p-1 cursor-pointer hover:scale-105 hover:bg-red-500 active:bg-red-400 active:text-red-200 transition-fast' onClick={() => navigate('/likes')}>
							<CiHeart className='w-10 h-10' />
						</div>
						<div className='relative flex justify-center items-center bg-banner text-white rounded-full p-1 cursor-pointer hover:scale-105 hover:bg-stone-700 active:bg-stone-500 active:text-stone-200 transition-fast z-30' onClick={() => setModalCartActive(true)} >
							<PiShoppingCartSimpleThin className='w-10 h-10' />
							<div className='absolute flex justify-center items-center right-0 bottom-0 w-6 h-6 bg-white border-2 border-main rounded-full text-main font-bold'>
								{cart.length}
							</div>
						</div>
					</div>
				</div >

				{sortedData &&
					<div className='flex justify-end p-5 mr-[5%] select-none'>
						<select name="sort" id="sort" value={sortOption} onChange={handleChangeSortOption} className='border-2 border-main px-2 py-1 rounded-lg text-main font-semibold'>
							<option value="cheap">Cheaper at first</option>
							<option value="exp">Expensive at first</option>
						</select>
					</div>
				}

				{error && <h1 className='text-4xl text-center'>404. Products not found</h1>}
				<div className='flex flex-wrap justify-center'>
					<div className='flex justify-center items-center flex-wrap mt-[70px]'>
						{(!data || isLoading) && Array.from({ length: 20 }, (_, index) => <LoaderProducts key={index} />)}
					</div>
					{sortedData &&
						sortedData.map(item => (
							<ProductBlock key={item.id} id={item.id} name={item.name} price={item.price} image={item.image_url} region={item.region} product={item} cart={cart} discount={item.roast_level} />
						))}
				</div>

			</Wrapper >
			{modalCartActive &&
				<ModalCart active={modalCartActive} setActive={setModalCartActive} cart={cart} />
			}

		</>
	)
}