import { CiHome, CiCoffeeBean } from "react-icons/ci"
import { PiNewspaperThin } from "react-icons/pi"
import { BiLogoReact } from "react-icons/bi"
import { NavLink } from 'react-router-dom'

export const NavMenu = () => {
	return (
		<nav>
			<ul className='text-2xl font-normal'>
				<li>
					<NavLink to='/'>
						<div className='flex items-center gap-1 hover:underline'>
							<CiHome className='text-main' />
							Home
						</div>
					</NavLink>
				</li>
				<li>
					<NavLink to='/products'>
						<div className='flex items-center gap-1 hover:underline'>
							<CiCoffeeBean className='text-main' />
							Products
						</div>
					</NavLink>
				</li>
				<li>
					<NavLink to='/news'>
						<div className='flex items-center gap-1 hover:underline'>
							<PiNewspaperThin className='text-main' />
							News
						</div>
					</NavLink>
				</li>
				<li>
					<NavLink to='/about'>
						<div className='flex items-center gap-1 hover:underline'>
							<BiLogoReact className='text-main' />
							About
						</div>
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
