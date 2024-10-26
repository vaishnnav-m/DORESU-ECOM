const mongoose = require("mongoose");

const variantSchema = mongoose.Schema({
  size: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  gllery: {
    type: Array,
    required: true,
  },
});

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
    ref: "category",
    required: true,
  },
  variants: [variantSchema],
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("products", productSchema);
