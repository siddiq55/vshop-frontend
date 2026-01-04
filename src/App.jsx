
import React from 'react'
import { Navbar } from './components/navbar/navbar.jsx'
import { Footer } from './components/Footer/footer.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Shop } from './pages/Shop.jsx';
import { ShopCategory } from './pages/ShopCategory.jsx';
import { Product } from './pages/Product.jsx';
import { Cart } from './pages/Cart.jsx';
import { LoginSignup } from './pages/LoginSignup.jsx';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'

function App() {
  return (
    <>
    
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<Shop/>}/>
         <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
           <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>}/>
           
            <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
            </Route>
        <Route path='/cart' element={<Cart/>}/>  
        <Route path='/login' element={<LoginSignup/>}/>        

      </Routes>
      <Footer/>
      
    
    </>
  )
}

export default App;
