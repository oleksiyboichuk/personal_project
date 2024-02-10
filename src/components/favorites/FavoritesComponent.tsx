import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { GiBrokenHeart } from "react-icons/gi"
import { Wrapper } from '../wrapper/Wrapper'
import { NavButton } from '../button/NavButton'

export const FavoritesComponent = () => {
	const favorites = useTypedSelector(state => state.favorites)
	const { toggleFavorites } = useActions()
	console.log(favorites)
	return (
		<>
			<Wrapper>
				<div className='flex justify-between items-center px-[3%] md:px-0  md:pb-2 pt-5'>
					<NavButton navlink='/products' />
					<div className='bg-white px-2 py-1 border-2 border-main rounded-lg'>
						<p className='text-3xl font-story font-bold text-main'>Products that you liked:</p>
					</div>
				</div >
				<div className='flex flex-wrap'>
					{favorites.map(item => (
						<section className='max-w-[200px] m-2 flex flex-col justify-center bg-white drop-shadow-xl rounded-lg cursor-pointer hover:scale-110 transition-slow p-2 pb-5' key={item.id + item._id}>
							<img src={item.image_url} alt={item.name} />
							<h2 className='font-story text-xl font-bold text-center'>{item.name}</h2>
							<div className='flex items-center justify-center gap-2'>
								<p className='text-md'>Remove:</p>
								<button className='bg-banner px-2 py-1 rounded-lg text-white m-1 hover:bg-main hover:scale-110 transition-fast' onClick={() => toggleFavorites(item)}><GiBrokenHeart />
								</button>
							</div>
						</section>
					))}
				</div>
			</Wrapper>
		</>
	)
}
