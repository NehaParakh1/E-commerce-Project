import React, { useContext } from 'react';
import CartItem from './CartItem'
import {Container,Row,Col,Table,Button} from 'react-bootstrap'
import './Cart.css'
import Modal from '../UI/Modal';
import CartContext from '../Store/CartContext';
     
 const Cart=(props)=>{
    const cartCtx=useContext(CartContext)

    

    const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
    };
    const purchaseHandler=()=>{
      if(cartCtx.items.length>0){
        alert('Thanks for purchase!')
      }
      else{
        alert('You have Nothing in Cart , Add some products to purchase !')
      }
    }
 const items = (
        <ul className='cart-items'>
          {cartCtx.items.map((item) => (

<CartItem 
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
      quantity={item.quantity}
      onRemove={()=>{cartItemRemoveHandler(item.id)}}
    />  
    ))}
    </ul>
  )
    return(
        <Modal onClose={props.onClose}>
        <Container className="cart">
        <Row>
          <Col className="text-center cart-text">Cart</Col>
        </Row>
        <Row>
          <Col className="text-center">
          
            <Table responsive="sm">
              <thead>
                <tr className="th">
                  <th className="item">ITEM</th>
                  <th className="price">PRICE</th>
                  <th className="quantity">QUANTITY</th>
                </tr>
              </thead>
              <tbody>{items}</tbody>
            </Table>
            <div>
        
              <span>Total Price</span> <span>${cartCtx.totalAmount}</span>
            </div>
            <div>
              <Button onClick={purchaseHandler}>PURCHASE</Button>
              <Button onClick={props.onClose}>CLOSE</Button>
            </div>
          </Col>
        </Row>
      </Container>
      </Modal>
    );
  }
  


export default Cart;