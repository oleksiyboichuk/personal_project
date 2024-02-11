import { FC } from 'react'
import { IoIosArrowForward } from "react-icons/io"
import { TextBanner } from './TextBanner'
import { useNavigate } from 'react-router-dom'

export const Banner: FC = () => {

	const navigate = useNavigate()

	return (
		<div className='relative flex items-center justify-center mt-5'>
			<img className='rounded-b-[30px] object-cover' src="/images/banners/main_banner.png" alt="main_banner" />
			<TextBanner />
			<div className='absolute border-[1px] rounded-full px-2 py-1 bottom-[5%] right-[5%] hover:scale-110 hover:bg-main hover:border-main transition-slow cursor-pointer z-30' onClick={() => navigate('/products')}>
				<div className='flex items-center justify-center text-white'>
					<h1 className='text-xl font-light'>Buy Now</h1>
					<IoIosArrowForward />
				</div>
			</div>
			<div className='absolute right-[2%] top-[-10%] rotate-6 scale-x-[-1] z-20'>
				{/* TODO: зроби зображення та текст повністю адаптивним */}
				<img className='hidden lg:w-[70%] 2xl:w-[90%]  md:block' src="/images/items/coffee_bag.png" alt="coffee_bag" />
			</div>
		</div>
	)
}
