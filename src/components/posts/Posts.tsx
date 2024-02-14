import React, { useRef, useState } from 'react'
import { NavButton } from '../button/NavButton'
import { useGetPostsQuery } from '../../store/api/posts.api'

export const Posts = () => {
	const { data } = useGetPostsQuery()


	return (
		<div>
			<div className='flex p-5'>
				<NavButton />
			</div>
			<div>

			</div>

		</div>
	)
}
