const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref:'categories',
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  gallery: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('products',productSchema);
