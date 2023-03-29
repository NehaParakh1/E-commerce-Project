import React, { useState } from 'react';
import Header from './Component/Layout/Header'
import Footer from './Component/Layout/Footer'
import AvailableProduct from './Component/Product/AvailableProduct';
import Cart from './Component/Cart/Cart';
import CartProvider from './Component/Store/CartProvider';
import {  Route, Switch } from 'react-router-dom';
import About from './Component/Pages/About';
import Home from './Component/Pages/Home'
import ContactUs from './Component/Pages/ContactUs';
import ProductDetails from "./Component/Pages/ProductDetails";
import { ProductContextProvider } from "./Component/Store/ProductContext";


function App(props) {
  
  const [showCart, setShowCart] = useState(false);

  const cartOpenHandler = (event) => {
    event.preventDefault();
    setShowCart(true);
  }

  const closeHandler = (event) => {
    event.preventDefault();
    setShowCart(false);
  }

  async function submitHandler (userDetails) {
    const response = await fetch('https://e-commerce-contact-us-ad042-default-rtdb.asia-southeast1.firebasedatabase.app/userDetails.json', {
        method: 'POST',
        body: JSON.stringify(userDetails),
        headers: {
            "Content-Type": "application.json",
          },
    })
    const data = await response.json();
    console.log(data);
}

  return(
    <CartProvider>
    <Header onClick={cartOpenHandler}/>
    <main>
      <Switch>
      <ProductContextProvider>
      <Route path="/" exact> 
           <Home/>
          </Route>
    <Route path= "/Home"> <Home/>
        </Route>
      <Route path= "/About"> <About/>
        </Route>
        <Route path="/ContactUS"><ContactUs onAddUser={submitHandler}/>
        </Route>
        <Route path="/store" exact>
          <AvailableProduct/>
        </Route>
        <Route path="/store/:productId">
          <ProductDetails/>
        </Route>  
        </ProductContextProvider>
        </Switch>
        </main>
    <Footer/>
    {showCart && <Cart onClose={closeHandler}/>}
   
   </CartProvider>
  );
}

export default App;
