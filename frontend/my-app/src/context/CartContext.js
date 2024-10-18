import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const userId = '123'; // Replace with actual user ID from auth

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get(`http://localhost:4200/cart/getcart/${userId}`);
        setCart(res.data.items);
      } catch (err) {
        console.error('Error fetching cart:', err.message);
      }
    };

    fetchCart();
  }, [userId]);

  const addToCart = async (product) => {
    try {
      const res = await axios.post(`http://localhost:4200/cart/postcart/${userId}`, product);
      setCart(res.data.items);
    } catch (err) {
      console.error('Error adding to cart:', err.message);
    }
  };

  const removeFromCart = async (_Id) => {
    try {
      const res = await axios.delete(`http://localhost:4200/cart/delcart/${userId}/${_Id}`);
      setCart(res.data.items);
    } catch (err) {
      console.error('Error removing from cart:', err.message);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};