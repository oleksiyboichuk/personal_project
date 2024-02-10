import { FC, useState } from 'react'
import { RiMenu2Line } from "react-icons/ri"
import { FiSearch } from "react-icons/fi"
import { CiHeart } from "react-icons/ci"
import { PiShoppingCartSimpleThin } from "react-icons/pi"
import { Wrapper } from '../wrapper/Wrapper'
import { ModalMenu } from '../modal/ModalMenu'
import { NavMenu } from '../navbar/NavMenu'
// import { ModalCart } from '../modal/ModalCart'

export const Header: FC = () => {
	const [modalActive, setModalActive] = useState<boolean>(false)
	const [modalCartActive, setModalCartActive] = useState<boolean>(false)

	return (
		<>
			<Wrapper>
				{/* TODO: ввесь хедер виїжджає зверху */}
				<div className='flex justify-between items-center pb-2 pt-5'>
					<div className='flex justify-center items-center gap-10 z-30'>
						<div className='group flex justify-between items-center bg-white border-[1px] border-banner/40 pr-1.5 pl-4 py-1 rounded-full http://localhost:3000/images/items/coffee_bag.pnggap-3 cursor-pointer button-primary hover:border-main gap-3 active:bg-red-400 active:text-white' onClick={() => setModalActive(true)}>
							<h2 className='font-semibold'>Menu</h2>
							<div className='bg-main p-3 rounded-full text-white group-active:bg-red-400 group-active:text-white transition-slow'>
								<RiMenu2Line className='w-5 h-5' />
							</div>
						</div>

						<div className='flex justify-between items-center bg-white border-[1px] border-banner/40 pr-1.5 pl-4 py-1 rounded-full gap-3 hover:scale-105 transition-slow z-30'>
							<input type="text" className='bg-white py-2 rounded-full focus:outline-none text-base' placeholder='Searching...' />
							<div className='bg-main p-2 rounded-full text-white cursor-pointer hover:bg-red-600 active:bg-red-400 active:text-red-200 transition-fast'>
								<FiSearch className='w-7 h-7' />
							</div>
						</div>
					</div>
					<div className='flex justify-center items-center gap-10 z-30'>
						<div className='flex justify-center items-center bg-main rounded-full text-white p-1 cursor-pointer hover:scale-105 hover:bg-red-500 active:bg-red-400 active:text-red-200 transition-fast'>
							<CiHeart className='w-10 h-10' />
						</div>
						<div className='relative flex justify-center items-center bg-banner text-white rounded-full p-1 cursor-pointer hover:scale-105 hover:bg-stone-700 active:bg-stone-500 active:text-stone-200 transition-fast z-30' onClick={() => setModalCartActive(true)}>
							<PiShoppingCartSimpleThin className='w-10 h-10' />
							<div className='absolute flex justify-center items-center right-0 bottom-0 w-6 h-6 bg-white border-2 border-main rounded-full text-main font-bold'>
								4
							</div>
						</div>
					</div>
				</div>
			</Wrapper >
			{modalActive &&
				<ModalMenu active={modalActive} setActive={setModalActive}>
					<NavMenu />
				</ModalMenu>
			}
			{/* {
				modalCartActive &&
				<ModalCart active={modalCartActive} setActive={setModalCartActive} />
			} */}
		</>
	)
}
