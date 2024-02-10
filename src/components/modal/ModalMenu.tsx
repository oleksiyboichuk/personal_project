import React, { FC } from 'react'
import { CgCloseR } from "react-icons/cg"

interface ModalMenuProps {
	active: boolean
	setActive: (value: boolean) => void
	children: React.ReactNode
}

export const ModalMenu: FC<ModalMenuProps> = ({ active, setActive, children }) => {
	return (
		<div
			className={`${active ? 'fade-in' : ''} fixed top-0 bottom-0 w-full h-full bg-black/50 flex items-start transition-all duration-500 ease-in-out z-40`}
			onClick={() => setActive(false)}>
			<div
				className={`${active ? 'scale-in' : ''} h-[100%] w-[30%] flex flex-col p-20 transform origin-center bg-white transition-all duration-500 ease-in-out z-50`}
				onClick={(e) => e.stopPropagation()}>
				<div
					className='absolute top-[2%] right-[3%] font-bold text-4xl cursor-pointer hover:scale-110 hover:text-main z-50 transition-fast' onClick={() => setActive(false)}>
					<CgCloseR />
				</div>
				<div>
					{children}
				</div>
			</div>
		</div>
	)
}
