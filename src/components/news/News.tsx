import React, { useRef, useState } from 'react'
import { useGetCompanyDetailsBySymbolQuery } from '../../store/api/news.api'
import { NavButton } from '../button/NavButton'

export const News = () => {
	const { data, isLoading } = useGetCompanyDetailsBySymbolQuery()
	const myRef = useRef<HTMLInputElement>(null)
	console.log(data)



	return (
		<div>
			<div className='flex p-5'>
				<NavButton />
			</div>

			{isLoading && <p>Loading...</p>}
			{data &&
				<div className=''>
					{data.articles.map((item, index) => (
						<section key={item.title} className='border-2 border-main flex items-center m-10 bg-white drop-shadow-xl p-2 rounded-lg'>
							{item.urlToImage && <img src={item.urlToImage} alt={item.author} className='w-[200px] h-[150px] object-cover rounded-lg' />}
							<p>{item.title}</p>
							<p>author: {item.author}</p>
							<p>ID: {index}</p>

						</section>
					))}
				</div>
			}
		</div>
	)
}
