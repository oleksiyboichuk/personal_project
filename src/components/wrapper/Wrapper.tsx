import React, { FC } from 'react'

interface WrapperProps {
	children: React.ReactNode
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
	return (
		<div className='container mx-auto max-w-[1400px]'>
			{children}
		</div>
	)
}
