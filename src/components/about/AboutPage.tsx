import React from 'react'
import { NavButton } from '../button/NavButton'
import { Wrapper } from '../wrapper/Wrapper'

export const AboutPage = () => {
	return (
		<div>
			<Wrapper>
				<div className='flex items-center px-[3%] md:px-0  md:pb-2 pt-5'>
					<NavButton />
				</div>
			</Wrapper>
			<div className='relative flex justify-center items-center mt-5'>
				<img src="./images/banners/about-banner.png" alt="about_banner" />
				<div className='absolute flex flex-col justify-center items-center'>
					<h1 className='text-9xl text-white font-protest mb-2 border-b-2 border-main'>About Us</h1>
					<p className='text-4xl text-main font-story font-bold'>Perhaps you will find it useful to know</p>
					<p className='text-3xl text-main/70 font-story font-semibold'>how we started from scratch and</p>
					<p className='text-2xl text-main/50 font-story font-semibold'>got to where we are now.</p>
				</div>

			</div>

		</div>
	)
}
