import React, { useState } from 'react';
import Header from './Component/Layout/Header'
import Footer from './Component/Layout/Footer'
import AvailableProduct from './Component/Product/AvailableProduct';
import Cart from './Component/Cart/Cart';
import CartProvider from './Component/Store/CartProvider';
import { Routes, Route } from 'react-router-dom';
import About from './Component/Pages/About';
import Home from './Component/Pages/Home'
import ContactUs from './Component/Pages/ContactUs';



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
    <Routes>
    <Route path= "/Home" element= {<Home/>}>
        </Route>
      <Route path= "/About" element= {<About/>}>
        </Route>
        <Route path= "/Store" element= {<AvailableProduct />}>
        </Route>
        <Route path="/ContactUS" element={<ContactUs onAddUser={submitHandler}/>}></Route>
        </Routes>
        
    
    <Footer/>
    {showCart && <Cart onClose={closeHandler}/>}
    
   </CartProvider>
  );
}

export default App;
