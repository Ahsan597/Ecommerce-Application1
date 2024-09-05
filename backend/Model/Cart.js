const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  _Id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  productName: String,
  productPrice: Number,
  productImageurl: String,
});

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [CartItemSchema],
});

module.exports = mongoose.model('Cart', CartSchema);