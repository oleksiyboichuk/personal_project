export const TextBanner = () => {
	return (
		<>
			<div className='absolute z-10'>
				<div className='flex flex-col justify-center items-center leading-[125px] -rotate-6'>
					<h1 className='md:text-main text-[50px] md:text-banner font-protest'>Coffee</h1>
					<h1 className='md:text-main text-[50px] md:text-banner font-protest'>Bean</h1>
				</div>
			</div>
			<div className='absolute z-10'>
				<div className='flex flex-col justify-center items-center leading-[125px] -rotate-6'>
					<h1 className='md:text-white text-[50px] md:text-banner font-protest animate-pulse'>Coffee</h1>
					<h1 className='md:text-white text-[50px] md:text-banner font-protest animate-pulse'>Bean</h1>
				</div>
			</div>
		</>
	)
}
