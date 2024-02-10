import { FC } from 'react'
import { FaBackward } from 'react-icons/fa'

interface NavButtonProps {
	navlink: string
}

export const NavButton: FC<NavButtonProps> = ({ navlink }) => {
	return (
		<a href={navlink}>
			<div className='group flex justify-between items-center bg-white border-[1px] border-banner/40 pr-1.5 pl-4 py-1 rounded-full http://localhost:3000/images/items/coffee_bag.pnggap-3 cursor-pointer button-primary hover:border-main gap-3 active:bg-red-400 active:text-white'>
				<h2 className='font-semibold'>Back</h2>
				<div className='bg-main p-3 rounded-full text-white group-active:bg-red-400 group-active:text-white transition-slow'><FaBackward className='w-5 h-5' /></div>
			</div>
		</a>
	)
}