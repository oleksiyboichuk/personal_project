import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

export const FavoritesComponent = () => {
	const favorites = useTypedSelector(state => state.favorites)
	const { toggleFavorites } = useActions()
	console.log(favorites)
	return (
		<div className='flex'>
			<a href="/products">Back</a>
			{favorites.map(item => (
				<section className='max-w-[300px] border-2 m-5 flex flex-col justify-center items-center' key={item.id + item._id}>
					<img src={item.image_url} alt={item.name} />
					<h2>{item.name}</h2>
					<button className='bg-main px-2 py-1 rounded-lg text-white m-1' onClick={() => toggleFavorites(item)}>Remove from likes</button>
				</section>
			))}
		</div>
	)
}
