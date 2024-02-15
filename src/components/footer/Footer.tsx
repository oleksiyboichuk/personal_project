import { FC } from 'react'
import { FaInstagramSquare, FaTelegram } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import { FaCity, FaStreetView, FaHouseUser } from "react-icons/fa"

export const Footer: FC = () => {
	return (
		<div className='bg-slate-700 w-full flex justify-center items-center'>
			<img className='object-cover' src="./images/banners/footer-banner.png" alt="footer-background" />
			<div className='absolute text-white text-xl'>

				<h2 className='font-story text-[40px] text-red-400 mb-5 text-center font-semibold'>Contact <span className='text-white font-normal'>and</span> <span className='text-orange-300'>Location:</span></h2>

				<div className='flex gap-20'>
					<ul className='flex flex-col items-start'>

						<li className='flex justify-center items-center gap-2 cursor-pointer hover:scale-105 hover:underline transition-fast' ><FaInstagramSquare className='text-red-400' /><a href="https://www.instagram.com/" target='_blank' rel="noreferrer">Instagram</a></li>

						<li className='flex justify-center items-center gap-2 cursor-pointer hover:scale-105 hover:underline transition-fast'><FaTelegram className='text-red-400' /><a href="https://web.telegram.org/k/" target='_blank' rel="noreferrer">Telegram</a></li>

						<li className='flex justify-center items-center gap-2 cursor-pointer hover:scale-105 hover:underline transition-fast'><BiLogoGmail className='text-red-400' /><a href="https://www.google.com/intl/ua/gmail/about/" target='_blank' rel="noreferrer">Gmail</a></li>
					</ul>

					<ul className='flex flex-col items-start'>
						<li className='flex justify-center items-center gap-2 text-back-text'><FaCity className='text-orange-300' /><p>Chernivtsi</p></li>

						<li className='flex justify-center items-center gap-2 text-back-text'><FaStreetView className='text-orange-300' /><p>5, Khotynska street</p></li>

						<li className='flex justify-center items-center gap-2 text-back-text'><FaHouseUser className='text-orange-300' /><p>Build №7</p></li>
					</ul>
				</div>
			</div>

		</div>
	)
}
