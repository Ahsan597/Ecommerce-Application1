import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Addtocart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <>
    <div style={{marginTop: "8vmax"}}>
      <h1>Your Cart</h1>
      {cart.map(item => (
        <div key={item._Id}>
          <h2>{item.productName}</h2>
          <p>Price: ${item.productPrice}</p>
          <button onClick={() => removeFromCart(item._Id)}>Remove</button>
          
        </div>
      ))}
    </div>
    <div>
    <Link to="/checkout"><Button variant='contained' color="success" >Checkout</Button></Link>
    </div>
    </>
  );
};

export default Addtocart;