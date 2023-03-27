import React, { useState } from 'react';
import Header from './Component/Layout/Header'
import Footer from './Component/Layout/Footer'
import AvailableProduct from './Component/Product/AvailableProduct';
import Cart from './Component/Cart/Cart';
import CartProvider from './Component/Store/CartProvider';
import { Routes, Route } from 'react-router-dom';
import About from './Component/Pages/About';



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
    <Routes><Route path= "/About" element= {<About/>}>
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
