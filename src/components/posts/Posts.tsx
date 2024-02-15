import React, { useRef, useState } from 'react'
import { NavButton } from '../button/NavButton'
import { useGetPostsQuery } from '../../store/api/posts.api'
import { PostsBlock } from './PostsBlock'
import { Wrapper } from '../wrapper/Wrapper'

export const Posts = () => {
	const { data, isLoading, error } = useGetPostsQuery()
	const [formActive, setFormActive] = useState<boolean>(false)

	console.log(data)
	return (
		<div>
			<Wrapper>
				<div className='flex p-5'>
					<NavButton />
				</div>

				<div className='flex flex-col items-center justify-center'>
					{data?.posts.map(item => <PostsBlock key={item.id} id={item.id} title={item.title} tags={item.tags} reactions={item.reactions} userId={item.userId} />)}
				</div>
			</Wrapper>

		</div>
	)
}
