import React, { useContext } from 'react';
import { Navbar,Nav,Button } from 'react-bootstrap';
import classes from './Header.module.css';
import CartContext from '../Store/CartContext';
import {NavLink, useHistory} from 'react-router-dom';
import AuthContext from '../Store/AuthContext';

const Header=(props)=>{
const history=useHistory()
const loginCtx=useContext(AuthContext)
  const cartCtx = useContext(CartContext);
  let quantity=0;
  cartCtx.items.forEach(item =>{
    quantity=quantity+Number(item.quantity)
 })

 const logoutHandler = () =>{
  loginCtx.logout()
  history.replace('/login')
}

return (
    <>
        <Navbar bg="dark" variant="dark" className='justify-content-center'>
          
             <Nav className={classes.nav} >
               <NavLink to="/home">Home</NavLink>
               <NavLink to="/About">About</NavLink>
               {!loginCtx.isLoggedIn && <NavLink to ="/Login">Login</NavLink>}
              {loginCtx.isLoggedIn && <NavLink to="/store">Store</NavLink>}
               <NavLink to='/ContactUs'>Contact Us</NavLink>
               
               </Nav>
             <div>
             {loginCtx.isLoggedIn &&<Button variant="outline-primary" onClick={logoutHandler}>Logout</Button>}
             </div>
            
          <div className={classes['flex-end']}>
             <Button variant="outline-primary" style={{float:"right"}} onClick={props.onClick}>Cart <span>{quantity}</span></Button>
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
         