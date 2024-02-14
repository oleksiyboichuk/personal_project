import React, { FC, useState } from 'react'
import { RiMenu2Line } from "react-icons/ri"
import { FiSearch } from "react-icons/fi"
import { CiHeart } from "react-icons/ci"
import { PiShoppingCartSimpleThin } from "react-icons/pi"
import { Wrapper } from '../wrapper/Wrapper'
import { ModalMenu } from '../modal/ModalMenu'
import { NavMenu } from '../navbar/NavMenu'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useNavigate } from 'react-router-dom'
import { ModalCart } from '../modal/ModalCart'
import { useGetProductsQuery } from '../../store/api/products.api'

export const Header: FC = () => {
	const [modalActive, setModalActive] = useState<boolean>(false)
	const [modalCartActive, setModalCartActive] = useState<boolean>(false)
	const [searchText, setSearchText] = useState<string>('')
	const [isSearchActive, setIsSearchActive] = useState<boolean>(false)

	const cart = useTypedSelector(state => state.cart)
	const navigate = useNavigate()

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		setSearchText(value)
		setIsSearchActive(!!value)
	}

	const { data: products, isLoading } = useGetProductsQuery(isSearchActive ? searchText : '', {
		skip: !isSearchActive // Пропустити запит, якщо isSearchActive дорівнює false
	})

	const filteredProducts = products?.filter((product) =>
		product.name.toLowerCase().includes(searchText.toLowerCase()) ||
		product.description.toLowerCase().includes(searchText.toLowerCase())
	) ?? []

	return (
		<>
			<Wrapper>
				<div className='flex justify-between items-center pb-2 pt-5'>
					<div className='flex justify-center items-center gap-10 z-30'>
						<div className='group flex justify-between items-center bg-white border-[1px] border-banner/40 pr-1.5 pl-4 py-1 rounded-full cursor-pointer button-primary hover:border-main gap-3 active:bg-red-400 active:text-white' onClick={() => setModalActive(true)}>
							<h2 className='font-semibold'>Menu</h2>
							<div className='bg-main p-3 rounded-full text-white group-active:bg-red-400 group-active:text-white transition-slow'>
								<RiMenu2Line className='w-5 h-5' />
							</div>
						</div>

						<div className='relative '>
							<div className='flex justify-between items-center bg-white border-[1px] border-banner/40 pr-1.5 pl-4 py-1 rounded-full gap-3 hover:scale-105 transition-slow z-30'>
								<input
									type="text"
									className='bg-white py-2 rounded-full focus:outline-none text-base' placeholder='Searching...'
									value={searchText}
									onChange={handleSearchChange}
								/>
								<div className='bg-main p-2 rounded-full text-white cursor-pointer hover:bg-red-600 active:bg-red-400 active:text-red-200 transition-fast'>
									<FiSearch className='w-7 h-7' />
								</div>
							</div>

							{isLoading && (
								<div className='absolute w-full top-full left-0 bg-white z-50 px-5 py-3 rounded-lg flex flex-col items-start justify-center font-semibold'>
									Loading...
								</div>
							)}

							{!isLoading && isSearchActive && filteredProducts.length > 0 && (
								<div className='absolute top-full left-0 bg-white z-50 px-5 py-3 rounded-lg flex flex-col items-start justify-center'>
									{filteredProducts.slice(0, 3).map((product) => (
										<div key={product.id} className="flex items-center gap-4 hover:scale-105 hover:bg-main/20 rounded-lg cursor-pointer transition-slow pr-5" onClick={() => navigate(`/products/${product.id}`)}>
											<img src={product.image_url} alt={product.name} className="w-16 h-16" />
											<div>
												<p className="font-semibold">{product.name}</p>
												<p>{product.price}</p>
											</div>
											...
										</div>
									))}
								</div>
							)}
						</div>

					</div>
					<div className='flex justify-center items-center gap-10 z-30'>
						<div className='flex justify-center items-center bg-main rounded-full text-white p-1 cursor-pointer hover:scale-105 hover:bg-red-500 active:bg-red-400 active:text-red-200 transition-fast' onClick={() => navigate('/products/favorites')}>
							<CiHeart className='w-10 h-10' />
						</div>
						<div className='relative flex justify-center items-center bg-banner text-white rounded-full p-1 cursor-pointer hover:scale-105 hover:bg-stone-700 active:bg-stone-500 active:text-stone-200 transition-fast z-30' onClick={() => setModalCartActive(true)}>
							<PiShoppingCartSimpleThin className='w-10 h-10' />
							<div className='absolute flex justify-center items-center right-0 bottom-0 w-6 h-6 bg-white border-2 border-main rounded-full text-main font-bold' onClick={() => setModalCartActive(true)}>
								{cart.length}
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
			{modalActive &&
				<ModalMenu active={modalActive} setActive={setModalActive}>
					<NavMenu />
				</ModalMenu>
			}
			{modalCartActive &&
				<ModalCart active={modalCartActive} setActive={setModalCartActive} cart={cart} />
			}
		</>
	)
}
