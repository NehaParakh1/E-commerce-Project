import React, { useState } from 'react';
import Header from './Component/Layout/Header'
import Footer from './Component/Layout/Footer'
import AvailableProduct from './Component/Product/AvailableProduct';
import Cart from './Component/Cart/Cart';
import CartProvider from './Component/Store/CartProvider';
import { Routes, Route } from 'react-router-dom';
import About from './Component/Pages/About';
import Home from './Component/Pages/Home'



function App() {
  
  const [showCart, setShowCart] = useState(false);

  const cartOpenHandler = (event) => {
    event.preventDefault();
    setShowCart(true);
  }

  const closeHandler = (event) => {
    event.preventDefault();
    setShowCart(false);
  }

  return(
    <CartProvider>
      

    <Header onClick={cartOpenHandler}/>
    <Routes>
    <Route path= "/Home" element= {<Home/>}>
        </Route>
      <Route path= "/About" element= {<About/>}>
        </Route>
        <Route path= "/Store" element= {<AvailableProduct />}>
        </Route>
        </Routes>
        
    
    <Footer/>
    {showCart && <Cart onClose={closeHandler}/>}
    
   </CartProvider>
  );
}

export default App;
