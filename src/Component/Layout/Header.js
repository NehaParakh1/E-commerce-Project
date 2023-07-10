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
               <NavLink className={classes.nav1}to="/home">Home</NavLink>
               <NavLink className={classes.nav2}to="/About">About</NavLink>
               {!loginCtx.isLoggedIn && <NavLink className={classes.nav3} to ="/Login">Login</NavLink>}
              {loginCtx.isLoggedIn && <NavLink className={classes.nav4}to="/store">Store</NavLink>}
               <NavLink className={classes.nav5}to='/ContactUs'>Contact Us</NavLink>
               
               </Nav>
             <div className={classes.logout}>
             {loginCtx.isLoggedIn &&<Button variant="outline-primary" onClick={logoutHandler}>Logout</Button>}
             </div>
            
          <div className={classes['flex-end']}>
          {loginCtx.isLoggedIn &&<Button variant="outline-primary" onClick={props.onClick}>Cart <span>{quantity}</span></Button>}
             </div>
           </Navbar>
           <div style={{
             backgroundColor:'grey',
            textAlign:'center',
            height: '25vh'
           }}>
    <div className="header-banner">
        <h1 className="header-title">The Generics</h1>
           </div>
           </div>
           </>
)
        }

        export default Header;
         