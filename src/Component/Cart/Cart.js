import React from 'react';
import CartItem from './CartItem'
import {Container,Row,Col,Table,Button} from 'react-bootstrap'
import './Cart.css'

    const cartElements = [
        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
        }
        ]   
        const Cart=(props)=>{

const cartElem=cartElements.map((item)=>(
<CartItem 
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
      quantity={item.quantity}
    />  

))
    return(
        <Container className="cart">
        <Row>
          <Col className="text-center cart-text">Cart</Col>
        </Row>
        <Row>
          <Col className="text-center">
            {/* There is no item in this cart click <Link to={"store"}>here</Link> to
            shope */}
            <Table responsive="sm">
              <thead>
                <tr className="th">
                  <th className="item">ITEM</th>
                  <th className="price">PRICE</th>
                  <th className="quantity">QUANTITY</th>
                </tr>
              </thead>
              <tbody>{cartElem}</tbody>
            </Table>
            <div>
              {" "}
              <span>Total</span> <span>$Total Amount</span>{" "}
            </div>
            <div>
              <Button>PURCHASE</Button>
              <button onClick={props.onClose}>Close</button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  


export default Cart;