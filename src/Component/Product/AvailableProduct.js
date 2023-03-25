import React from 'react';

import classes from './AvailableProduct.module.css';
import ProductItem from './ProductItem'

    const productsArr = [

        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        }, 
        {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
        ]

       const AvailableProduct=(props)=>{
     
  const products = productsArr.map((item) => (
    <ProductItem 
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.imageUrl}
    />
  ));
  return (
    
    <div>
      <div>
      <h1 className={classes.header} >Music</h1>
      <div className={classes.container}>{products}</div>
      </div>
<div className={classes.button}>
      <button>See the cart</button>
      </div>
    </div>
  );
}

   export default AvailableProduct;    