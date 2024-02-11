import { FC } from 'react'
import { Wrapper } from '../wrapper/Wrapper'

export const Main: FC = () => {
	return (
		<Wrapper>
			<div className='flex flex-col md:flex-row justify-between items-center my-20'>
				<div className='w-full md:w-1/2 flex flex-col flex-wrap items-start text-banner'>
					<p className='font-story text-[50px] uppercase leading-none mb-5'><span className='font-bold font-work-sans'>Coffee so good</span>, even your alarm clock <span className='font-bold font-work-sans'>will smile</span>.</p>
					<button className='bg-white text-2xl px-4 py-1 border-[1px] border-banner rounded-full hover:scale-105 hover:bg-banner hover:text-white transition-slow'>Explore More</button>
				</div>

				<div className='w-full md:w-1/2 flex flex-col md:flex-row gap-5 items-center'>
					<div className='group relative flex justify-center items-center md:w-[50%] cursor-pointer hover:scale-105 hover:rotate-2 transition-slow'>
						<div className='absolute bg-banner w-full h-full rounded-3xl z-10'></div>
						<img className='rounded-3xl object-cover z-20 opacity-30 group-hover:opacity-15 transition-slow' src="/images/banners/background_item_1.jpg" alt="" />
						<div className='absolute pl-[3%] flex flex-col justify-center items-start text-white z-30 group-hover:-rotate-2 transition-slow'>
							<h3 className='text-lg font-story'>Latest updates</h3>
							<p className='uppercase font-semibold text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, modi.</p>
						</div>
					</div>

					<div className='group relative flex justify-center items-center md:w-[50%] cursor-pointer hover:scale-105 hover:rotate-2 transition-slow'>
						<div className='absolute bg-banner w-full h-full rounded-3xl z-10'></div>
						<img className='rounded-3xl object-cover z-20 opacity-30 group-hover:opacity-15 transition-slow' src="/images/banners/background_item_2.jpg" alt="" />
						<div className='absolute pl-[3%] flex flex-col justify-center items-start text-white z-30 group-hover:-rotate-2 transition-slow'>
							<h3 className='text-lg font-story'>Latest updates</h3>
							<p className='uppercase font-semibold text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, modi.</p>
						</div>
					</div>
				</div>

			</div>
		</Wrapper>
	)
}
