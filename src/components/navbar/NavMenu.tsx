import { CiHome, CiCoffeeBean } from "react-icons/ci"
import { PiNewspaperThin } from "react-icons/pi"
import { BiLogoReact } from "react-icons/bi"

export const NavMenu = () => {
	return (
		<nav>
			<ul className='text-2xl font-normal'>
				<li>
					<a href='/'>
						<div className='flex items-center gap-1 hover:underline'>
							<CiHome className='text-main' />
							Home
						</div>
					</a>
				</li>
				<li>
					<a href='/products'>
						<div className='flex items-center gap-1 hover:underline'>
							<CiCoffeeBean className='text-main' />
							Products
						</div>
					</a>
				</li>
				<li>
					<a href='/news'>
						<div className='flex items-center gap-1 hover:underline'>
							<PiNewspaperThin className='text-main' />
							News
						</div>
					</a>
				</li>
				<li>
					<a href='/about'>
						<div className='flex items-center gap-1 hover:underline'>
							<BiLogoReact className='text-main' />
							About
						</div>
					</a>
				</li>
			</ul>
		</nav>
	)
}
