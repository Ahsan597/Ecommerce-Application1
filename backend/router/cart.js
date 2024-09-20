const express = require('express');
const Cart = require('../Model/Cart.js');
const router = express.Router();

// Get cart by user ID
router.get('getcart/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate('items.productId');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (err) {
    res.status(500).json(" cart get not working ");
  }
});

// Add item to cart
router.post('postcart/:userId', async (req, res) => {
  const { _Id, productName, productPrice, productImageurl } = req.body;
  const userId = req.params.userId;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      // If cart exists, update quantity or add item
      const itemIndex = cart.items.findIndex(item => item._Id.toString() === _Id);

    //   if (itemIndex > -1) {
    //     // If product exists in the cart, update the quantity
    //     // cart.items[itemIndex].quantity += 1;
    //   } else {
    //     // If product doesn't exist in the cart, add a new item
    //     cart.items.push({ _Id, productName, productPrice, productImageurl });
    //   }
    } else {
      // If no cart exists, create a new cart
      cart = new Cart({
        userId,
        items: [{ _Id, productName, productPrice, productImageurl }],
      });
    }

    cart = await cart.save();
    res.status(201).json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Remove item from cart
router.delete('delcart/:userId/:_Id', async (req, res) => {
  const { userId, _Id } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    const itemIndex = cart.items.findIndex(item => item._Id.toString() === _Id);

    if (itemIndex > -1) {
      cart.items.splice(itemIndex, 1);
      await cart.save();
      res.json(cart);
    } else {
      res.status(404).json({ message: 'Item not found in cart' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router