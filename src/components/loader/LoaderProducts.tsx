import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const LoaderProducts: FC = () => {
	return (
		<section className='bg-white min-w-[300px] rounded-3xl px-5 py-4 m-3  drop-shadow-xl transition-slow cursor-pointer z-10'>
			<div className='flex justify-center items-center'>
				<span className='rounded-lg text-xl'><Skeleton width={250} /></span>
				<Skeleton />
			</div>
			<div className='flex justify-center items-center mt-7 mb-6'>
				<Skeleton width={250} height={135} />
			</div>
			<div className='flex justify-center'>
				<h2 className='font-bold font-story text-xl'><Skeleton width={250} /></h2>
			</div>
			<div className='flex flex-center justify-center'>
				<p className='line-through text-xl'><Skeleton width={250} /></p>
			</div>
			<div className='flex justify-center items-center'>
				<p className='font-bold text-xl'><Skeleton width={250} /></p>
				<p><Skeleton /></p>
			</div>
			<div className='flex justify-center items-center text-xl'>
				<p><Skeleton width={250} /></p>
				<Skeleton />
			</div>
		</section>
	)
}
