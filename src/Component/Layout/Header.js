import React, { useContext } from 'react';
import { Navbar,Nav,Button } from 'react-bootstrap';
import classes from './Header.module.css';
import CartContext from '../Store/CartContext';



const Header=(props)=>{

  const cartCtx = useContext(CartContext);
  let quantity=0;
  cartCtx.items.forEach(item =>{
    quantity=quantity+Number(item.quantity)
 })

return (
    <>
        <Navbar bg="dark" variant="dark" className='justify-content-center'>
          
             <Nav>
               <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#store">Store</Nav.Link>
               <Nav.Link href="#about">About</Nav.Link>
             </Nav>
          <div className={classes['flex-end']}>
             <Button variant="outline-primary" onClick={props.onClick}>Cart <span>{quantity}</span></Button>
             </div>
           </Navbar>
           <div style={{
             backgroundColor:'grey',
            textAlign:'center',
            height: '25vh'
           }}>
   <h1 style={{fontSize:'95px', 
   color: 'white', 
   fontFamily:'serif', 
   fontWeight: 'bold'}}>The Generics</h1>
           </div>
           </>
)
        }

        export default Header;
         