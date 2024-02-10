import { FC } from 'react'
import { Header } from '../header/Header'
import { Banner } from '../banner/Banner'
import { Main } from '../main/Main'
import { Footer } from '../footer/Footer'



export const Home: FC = () => {
	return (
		<>
			<Header />
			<Banner />
			<Main />
			<Footer />
		</>
	)
}
