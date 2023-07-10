import React, { useContext } from 'react';
import {Card,Button} from 'react-bootstrap';
import classes from './ProductItem.module.css'
import CartContext from '../Store/CartContext'


const ProductItem=(props)=>{
  const cartCtx=useContext(CartContext)

  const addItemToCartHandler=(event)=>{
    event.preventDefault();
    cartCtx.addItem({ id: props.id, imageUrl: props.imageUrl, title: props.title, price: props.price, quantity: 1});
  }

    return (
      
        <Card className={classes.card}>
          <Card.Img variant="top" src={props.image} alt={props.title} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle>
              <span>${props.price}</span>
            </Card.Subtitle>
            <Button onClick={addItemToCartHandler}>Add to cart</Button>
          </Card.Body>
        </Card>
       
 
      );
    };
    
    export default ProductItem;
