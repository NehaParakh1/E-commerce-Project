import React, { useState,useContext } from 'react';
import Header from './Component/Layout/Header'
import Footer from './Component/Layout/Footer'
import AvailableProduct from './Component/Product/AvailableProduct';
import Cart from './Component/Cart/Cart';
import CartProvider from './Component/Store/CartProvider';
import {  Route, Switch, Redirect } from 'react-router-dom';
import About from './Component/Pages/About';
import Home from './Component/Pages/Home'
import ContactUs from './Component/Pages/ContactUs';
import ProductDetails from "./Component/Pages/ProductDetails";
import { ProductContextProvider } from "./Component/Store/ProductContext";
import Login from './Component/Pages/Login'
import AuthContext, { AuthContextProvider } from './Component/Store/AuthContext'

function App(props) {

  const loginCtx=useContext(AuthContext)
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
    <AuthContextProvider>
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
        <Route path="/Login"><Login/>
        </Route>
        <Route path="/ContactUS"><ContactUs onAddUser={submitHandler}/>
        </Route>
        <Route path="/store" exact>
           <AvailableProduct/>
         
        </Route>
       {loginCtx.isLoggedIn && <AvailableProduct/> }
        {!loginCtx.isLoggedIn && <Redirect to='/login' />}
        <Route path="/store/:productId">
          <ProductDetails/>
        </Route>  
        </ProductContextProvider>
        </Switch>
        </main>
    <Footer/>
    {showCart && <Cart onClose={closeHandler}/>}
   
   </CartProvider>
   </AuthContextProvider>
  );
}

export default App;
