import React, { FC } from 'react'
import { CgCloseR } from "react-icons/cg"

interface ModalMenuProps {
	active: boolean
	setActive: (value: boolean) => void
	image: string
	name: string
}

export const ModalImage: FC<ModalMenuProps> = ({ active, setActive, image, name }) => {
	return (
		<div
			className={`${active ? 'fade-in' : ''} fixed top-0 bottom-0 w-full h-full bg-black/70 flex items-center justify-center transition-all duration-500 ease-in-out z-40`}
			onClick={() => setActive(false)}>
			<div
				className={`${active ? 'scale-in' : ''} h-[70%] w-[70%] flex flex-col p-20 justify-center items-center transform origin-center bg-white rounded-xl z-50 transition-slow`}
				onClick={(e) => e.stopPropagation()}>
				<div
					className='absolute top-[2%] right-[3%] font-bold text-4xl cursor-pointer hover:scale-110 hover:text-main z-50 transition-fast' onClick={() => setActive(false)}>
					<CgCloseR />
				</div>
				<div>
					<img src={image} alt={name} />
				</div>
			</div>
		</div>
	)
}
