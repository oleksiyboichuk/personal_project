import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../store/api/products.api'
import { NavButton } from '../button/NavButton'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Wrapper } from '../wrapper/Wrapper'
import { useState } from 'react'
import { ModalImage } from '../modal/ModalImage'

export const ProductItem = () => {
	const [modalImage, setModalImage] = useState<boolean>(false)
	const { productId } = useParams<{ productId: string }>()
	const { data, error, isLoading } = useGetProductByIdQuery(productId || '')
	const { addToCart } = useActions()
	const cart = useTypedSelector(state => state.cart)
	const isExists = cart.some(item => item.product.id === data?.[0]?.id)

	return (
		<div>
			<Wrapper>
				<div className='flex justify-between items-center px-[3%] md:px-0 md:pb-2 pt-5 mb-3'>
					<NavButton />
				</div>
			</Wrapper>

			{isLoading && <h1 className="pt-10 flex justify-center items-center text-4xl">Loading...</h1>}
			{error && <h1 className="pt-10 flex justify-center items-center text-4xl">Error:</h1>}

			<div>
				<div className='flex flex-wrap justify-center'>
					<div className='flex justify-center items-center flex-wrap mt-[70px] md:mt-0'>

					</div>
				</div>
				{data &&
					<div key={data[0].id} className='flex flex-col bg-white drop-shadow-xl h-[100vh]'>
						<div className='flex items-center flex-col md:flex-row'>
							<img src={data[0].image_url} alt={data[0].name} className='max-w-[600px] mb-4 md:mb-0 md:mr-4 cursor-pointer hover:scale-105 transition-slow' onClick={() => setModalImage(true)} />
							<div className='flex flex-col items-start'>
								<h1 className='text-5xl font-story font-bold text-main underline mb-2'>{data[0].name}</h1>
								<p className='text-2xl font-light mb-4 md:max-w-[600px] md:mb-0'>Description: {data[0].description}</p>
								<div className='flex flex-col flex-start'>

									<p className='line-through text-back-text text-2xl'>{(data[0].price / (1 - data[0].roast_level / 100)).toFixed(2)}$</p>

									<p className='font-bold text-4xl text-main/75'>{data[0].price}$</p>

									<button className={`${isExists ? 'bg-black/10 text-black hover:cursor-default' : 'bg-green-500 text-white hover:scale-105'}  text-2xl px-4 py-1 my-4 rounded-lg drop-shadow-xl transition-slow`} onClick={() => {
										if (!isExists) {
											addToCart(data[0])
										}
									}}>
										{isExists ? 'Already in cart' : 'Add to cart'}
									</button>
								</div>
							</div>
						</div>
						<Wrapper>
							<div className='flex flex-col md:flex-row justify-center items-baseline gap-5 rounded-lg'>
								<div className='bg-white px-4 py-2 min-w-full md:min-w-[250px] min-h-[250px] rounded-lg drop-shadow-xl'>
									<div className='p-2'>
										<h2 className='text-3xl font-semibold font-story text-orange-400'>Grind Option :</h2>
										<ul>
											{data[0].grind_option.map((flavor, index) => (
												<li className='text-2xl pl-3' key={index}>- {flavor}</li>
											))}
										</ul>
									</div>
								</div>

								<div className='bg-white px-4 py-2 min-w-full md:min-w-[250px] min-h-[250px] rounded-lg drop-shadow-xl'>
									<div className='p-2'>
										<h2 className='text-3xl font-semibold font-story text-orange-400'>Flavor :</h2>
										<ul>
											{data[0].flavor_profile.map((flavor, index) => (
												<li className='text-2xl pl-3' key={index}>- {flavor}</li>
											))}
										</ul>
									</div>
								</div>

								<div className='bg-white px-4 py-2 min-w-full md:min-w-[250px] min-h-[250px] rounded-lg drop-shadow-xl'>
									<div className='p-2'>
										<h2 className='text-3xl font-semibold font-story text-orange-400'>Weight :</h2>
										<p className='text-2xl pl-3'>- {data[0].weight}</p>
									</div>
								</div>

								<div className='bg-white px-4 py-2 min-w-full md:min-w-[250px] min-h-[250px] rounded-lg drop-shadow-xl'>
									<div className='p-2'>
										<h2 className='text-3xl font-semibold font-story text-orange-400'>Region :</h2>
										<p className='text-2xl pl-3'>- {data[0].region}</p>
									</div>
								</div>
							</div>
						</Wrapper>
					</div>
				}
			</div>
			{(modalImage && data) &&
				<ModalImage active={modalImage} setActive={setModalImage} image={data[0].image_url} name={data[0].name} />
			}
		</div>
	)
}
