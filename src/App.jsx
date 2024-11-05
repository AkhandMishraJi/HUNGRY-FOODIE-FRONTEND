
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import SignUp from './Pages/Auth/Signup'
import Login from './Pages/Auth/Login'
import NotFound from './Pages/NotFound'
import Denied from './Pages/Auth/Denied'
import AddProduct from './Pages/Admin/AddProduct'
import AllProducts from './Pages/AllProducts'
import ProductDetails from './Pages/Products/ProductDetails'
import CartDetails from './Pages/Cart/CartDetails'

function App() {


  return (

    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/denied' element={<Denied/>} />
      <Route path='/auth/signup' element={<SignUp/>} />
      <Route path='/auth/login' element={<Login/>} />
      <Route path='/admin/addProduct' element={<AddProduct/>} />
      <Route path='/products' element={<AllProducts/>} />
      <Route path='/cart' element={<CartDetails/>} />
      <Route path='/products/:productId' element={<ProductDetails/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </>

  )
}

export default App
