import { FC } from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { CgCloseR } from 'react-icons/cg'
import { FaInstagramSquare, FaTelegram } from 'react-icons/fa'

interface ModalNotificationProps {
	active: boolean
	setActive: (value: boolean) => void
}

export const ModalNotification: FC<ModalNotificationProps> = ({ active, setActive }) => {
	return (
		<div className='fixed top-0 bottom-0 w-full h-full z-50' onClick={() => setActive(false)}>
			<div className='fixed bg-white drop-shadow-2xl w-[50%] md:w-[300px] bottom-0 right-[1%] p-5 border-4 border-banner rounded-t-lg border-b-white hover:scale-[102%] transition-slow' onClick={(e) => e.stopPropagation()}>
				<div>
					<p className='text-3xl my-5 font-story text-center'>To get more information, subscribe to our social networks</p>
					<div className='flex justify-center items-center gap-3'>
						<a href='https://www.instagram.com/'>
							<FaInstagramSquare className='text-pink-400 text-3xl hover:scale-110 transition-fast' />
						</a>
						<a href='https://web.telegram.org/k/'>
							<FaTelegram className='text-blue-400 text-3xl hover:scale-110 transition-fast' />
						</a>
						<a href='https://www.instagram.com/'>
							<BiLogoGmail className='text-red-400 text-3xl hover:scale-110 transition-fast' />
						</a>
					</div>
				</div>
				<div
					className='absolute top-[3%] right-[3%] font-bold text-3xl cursor-pointer hover:scale-110 hover:text-main z-50 transition-fast' onClick={() => setActive(false)}>
					<CgCloseR />
				</div>
			</div>
		</div>
	)
}
