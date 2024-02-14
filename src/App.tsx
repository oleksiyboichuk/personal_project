import { Route, Routes } from 'react-router-dom'
import { Products } from './components/products/Products'
import { Home } from './components/home/Home'
import { ProductItem } from './components/products/ProductItem'
import { FavoritesComponent } from './components/favorites/FavoritesComponent'
import { Posts } from './components/posts/Posts'
import { OrderProducts } from './components/order/OrderProducts'
import { AboutPage } from './components/about/AboutPage'
import { useEffect, useState } from 'react'
import { ModalNotification } from './components/modal/ModalNotification'



function App() {
  const [modalActive, setModalActive] = useState<boolean>(false)

  useEffect(() => {
    const alreadyShown = localStorage.getItem('notificationShown')
    if (!alreadyShown) {
      setTimeout(() => {
        setModalActive(true)
        localStorage.setItem('notificationShown', 'true')
      }, 5000)
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<ProductItem />} />
        <Route path='/products/favorites' element={<FavoritesComponent />} />
        <Route path='/favorites' element={<FavoritesComponent />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/order' element={<OrderProducts />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>

      <div>
        {modalActive &&
          <ModalNotification active={modalActive} setActive={setModalActive} />
        }
      </div>
    </>
  )
}

export default App
