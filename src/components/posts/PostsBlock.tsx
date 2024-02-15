import { FC } from 'react'
import { GrView } from "react-icons/gr"
import { useNavigate } from 'react-router-dom'

interface PostsBlockProps {
	id: number
	title: string
	tags: string[]
	reactions: number
	userId: number
}



export const PostsBlock: FC<PostsBlockProps> = ({ id, title, tags, reactions, userId }) => {

	const navigate = useNavigate()


	return (
		<div className='bg-white w-full flex flex-col gap-1 mb-5 rounded-lg drop-shadow-xl border-[1px] border-banner cursor-pointer hover:scale-[102%] transition-slow' onClick={() => navigate(`/posts/${id}`)}>
			<div className='flex items-center gap-5 p-2'>
				<img className='w-10 h-10 rounded-full bg-main' src='https://cdn2.iconfinder.com/data/icons/avatars-60/5985/25-Researcher-512.png' alt={title} />
				<h2 className='text-2xl hover:underline'>{title}</h2>
			</div>
			<div className='flex items-center gap-5 p-2'>
				<ul className='flex gap-2'>
					{tags.map(item => (
						<li key={item} className='border-[1px] border-black/40 px-1 rounded-lg text-black/40 text-sm'>{item}</li>
					))}
				</ul>
				<div className='flex items-center gap-1'>
					<GrView />
					<p>{reactions}</p>
				</div>
			</div>
		</div>
	)
}