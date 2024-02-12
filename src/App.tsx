import { Route, Routes } from 'react-router-dom'
import { Products } from './components/products/Products'
import { Home } from './components/home/Home'
import { ProductItem } from './components/products/ProductItem'
import { FavoritesComponent } from './components/favorites/FavoritesComponent'
import { News } from './components/news/News'
import { OrderProducts } from './components/order/OrderProducts'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<ProductItem />} />
        <Route path='/products/favorites' element={<FavoritesComponent />} />
        <Route path='/favorites' element={<FavoritesComponent />} />
        <Route path='/news' element={<News />} />
        <Route path='/order' element={<OrderProducts />} />
      </Routes>
    </>
  )
}

export default App
