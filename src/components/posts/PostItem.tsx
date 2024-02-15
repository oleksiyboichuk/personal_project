import { NavButton } from '../button/NavButton'
import { useGetPostsByIdQuery } from '../../store/api/posts.api'
import { useParams } from 'react-router-dom'
import { Wrapper } from '../wrapper/Wrapper'
import { GrView } from "react-icons/gr"


export const PostItem = () => {
	const { postId } = useParams<{ postId: string }>()
	const { data, error, isLoading } = useGetPostsByIdQuery(postId || '')
	console.log(data)
	return (
		<div>
			<Wrapper>
				<div className='flex p-5'>
					<NavButton />
				</div>
			</Wrapper>
			<div className='relative flex justify-center'>
				<img src="./images/banners/post-banner.png" alt="banner" />
				<div className='absolute flex flex-col items-center justify-center'>
					<img src="https://cdn2.iconfinder.com/data/icons/avatars-60/5985/25-Researcher-512.png" alt="" className='w-40 m-5' />
					<h1 className='text-main font-story text-4xl'>{data?.title}</h1>
				</div>
				<div className='absolute bottom-[5%] right-[1%]'>
					<ul className='flex gap-2'>
						{data?.tags.map(item => (
							<li key={item} className='border-[1px] border-white px-1 rounded-lg text-white text-md opacity-55'>{item}</li>
						))}
					</ul>
				</div>
				<div className='absolute bottom-[5%] left-[1%] text-white flex items-center gap-1 opacity-55'>
					<GrView />
					<p className='text-2xl'>{data?.reactions}</p>
				</div>
			</div>
			<Wrapper>
				<div className='mt-10 bg-white py-2 px-5 rounded-lg drop-shadow-xl'>
					<p className='text-4xl'>{data?.body}</p>
				</div>
			</Wrapper>
		</div>
	)
}
