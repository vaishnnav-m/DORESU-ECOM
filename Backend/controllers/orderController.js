const Order = require('../models/orderSchema');
const Cart = require('../models/cartSchema');
const {HttpStatus,createResponse} = require("../utils/generateResponse");

const placeOrder = async (req,res) => {
   try {
      const userId = req.user.id;
      const { address, items, totalPrice, totalQuantity } = req.body;
   
      const newOrder = new Order({
         userId,
         items:items.map(item => ({
            productId:item.productId,
            quantity:item.quantity,
            price: item.price,
            size: item.size,
            status: 'Pending'
         })),
         shippingAddress:{
            name:address.name,
            mobile:address.mobile,
            pincode:address.pincode,
            houseName:address.houseName,
            landmark:address.landmark,
            city:address.city,
            district:address.district,
            street:address.street,
            state:address.state,
         },
         totalPrice,
         totalQuantity,
         paymentMethod:'COD'
      });
   
      await newOrder.save();

      await Cart.updateOne({userId},{ $set: { products: [], totalPrice: 0, totalQuantity: 0 } });
   
      res.status(HttpStatus.OK).json(createResponse(HttpStatus.OK, 'Order created successfully'));
   } catch (error) {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(createResponse(HttpStatus.INTERNAL_SERVER_ERROR,"Internal Server Error"));
   }
}

module.exports = {
   placeOrder
}