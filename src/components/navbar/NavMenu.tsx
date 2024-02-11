import { CiHome, CiCoffeeBean } from "react-icons/ci"
import { PiNewspaperThin } from "react-icons/pi"
import { BiLogoReact } from "react-icons/bi"
import { Link } from 'react-router-dom'

export const NavMenu = () => {
	return (
		<nav>
			<ul className='text-2xl font-normal'>
				<li>
					<Link to='/products'>
						<div className='flex items-center gap-1 hover:underline'>
							<CiCoffeeBean className='text-main' />
							Products
						</div>
					</Link>
				</li>
				<li>
					<Link to='/news'>
						<div className='flex items-center gap-1 hover:underline'>
							<PiNewspaperThin className='text-main' />
							News
						</div>
					</Link>
				</li>
				<li>
					<Link to='/about'>
						<div className='flex items-center gap-1 hover:underline'>
							<BiLogoReact className='text-main' />
							About
						</div>
					</Link>
				</li>
			</ul>
		</nav>
	)
}
