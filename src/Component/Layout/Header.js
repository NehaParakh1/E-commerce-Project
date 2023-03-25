import React from 'react';
import { Navbar,Nav,Button } from 'react-bootstrap';
import classes from './Header.module.css';



const Header=()=>{
return (
    <>
        <Navbar bg="dark" variant="dark" className='justify-content-center'>
          
             <Nav>
               <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#store">Store</Nav.Link>
               <Nav.Link href="#about">About</Nav.Link>
             </Nav>
          <div className={classes['flex-end']}>
             <Button variant="outline-primary">Cart <span>{0}</span></Button>
             </div>
           </Navbar>
           <div style={{
             backgroundColor:'grey',
            textAlign:'center',
            height: '25vh'
           }}>
   <h1 style={{fontSize:'95px', color: 'white', fontFamily:'serif', fontWeight: 'bold'}}>The Generics</h1>
           </div>
           </>
)
        }

        export default Header;
         