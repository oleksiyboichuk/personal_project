import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { FaRegTrashAlt } from "react-icons/fa"
import { Wrapper } from '../wrapper/Wrapper'
import { NavButton } from '../button/NavButton'
import { useNavigate } from 'react-router-dom'

export const FavoritesComponent = () => {

	const favorites = useTypedSelector(state => state.favorites)
	const { toggleFavorites } = useActions()
	const navigate = useNavigate()

	return (
		<>
			<Wrapper>
				<div className='flex flex-col md:flex-row md:justify-between items-start md:items-center px-[3%] md:px-0  md:pb-2 pt-5 mb-5 md:mb-0'>
					<NavButton />
					<div className='bg-white px-2 py-1 border-2 border-main rounded-lg mt-5 md:mt-0'>
						<p className='text-3xl font-story font-bold text-main'>Products that you liked:</p>
					</div>
				</div >
				<div className='flex flex-wrap justify-center items-center'>

					{(favorites.length === 0 &&
						<div className='text-2xl text-back-text p-5'><p className=''>No items here...</p></div>
					)}

					{favorites.map(item => (
						<section className='relative max-w-[150px] md:max-w-[200px] m-2 flex flex-col justify-center bg-white drop-shadow-xl rounded-lg cursor-pointer hover:scale-110 transition-slow p-2 pb-5' key={item.id + item._id} onClick={() => navigate(`/products/${item.id}`)}>
							<img src={item.image_url} alt={item.name} />
							<h2 className='font-story text-md md:text-xl font-bold text-center'>{item.name}</h2>
							<div className='flex items-center justify-between px-2'>
								<p className='text-md text-black/65'>Remove:</p>
								<button className='bg-banner px-2 py-1 rounded-lg text-white m-1 hover:bg-main hover:scale-110 transition-fast' onClick={(e) => { e.stopPropagation(); toggleFavorites(item) }}><FaRegTrashAlt />
								</button>
							</div>
						</section>
					))}
				</div>
			</Wrapper>
		</>
	)
}
