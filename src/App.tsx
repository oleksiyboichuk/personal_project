import { Route, Routes } from 'react-router-dom'
import { Products } from './components/products/Products'
import { Home } from './components/home/Home'
import { ProductOne } from './components/products/ProductOne'
import { FavoritesComponent } from './components/favorites/FavoritesComponent'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<ProductOne />} />
        <Route path='/likes' element={<FavoritesComponent />} />
      </Routes>
    </>
  )
}

export default App
