import React from 'react';
import {Card,Button} from 'react-bootstrap';
import classes from './ProductItem.module.css'

const ProductItem=(props)=>{

    return (
      
        <Card className={classes.card}>
          <Card.Img variant="top" src={props.image} alt={props.title} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle>
              <span>${props.price}</span>
            </Card.Subtitle>
            <Button className={classes.button}>Add to cart</Button>
          </Card.Body>
        </Card>
       
 
      );
    };
    
    export default ProductItem;
