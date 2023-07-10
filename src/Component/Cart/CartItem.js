import React from 'react'
import './CartItem.css'

const CartItem=(props)=>{
    return(
        <tr className="items">
        <td className="image-title">
          <span id="img">
            <img src={props.image} alt={props.title} />
          </span>
          <span className="title">{props.title}</span>
        </td>
        <td className="tdprice">
          <div className="priceValue">${props.price}</div>
        </td>
        <td>
          <div className="quan-rem">
            <span className="quantity">
              <input type="number" min={1} value={props.quantity} />
            </span>
            <span className="rem">
              <button >X</button>
            </span>
          </div>
        </td>
      </tr>
    );
  }
  
  export default CartItem;
   