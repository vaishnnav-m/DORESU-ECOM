const Order = require('../models/orderSchema');
const Cart = require('../models/cartSchema');
const Product = require('../models/productsSchema');
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

      const stockUpdate = items.map((item) => ({
         updateOne:{
            filter:{_id:item.productId,"variants.size":item.size},
            update:{$inc:{"variants.$.stock":-item.quantity}}
         }
      }));

      await Product.bulkWrite(stockUpdate);

      await Cart.updateOne({userId},{ $set: { products: [], totalPrice: 0, totalQuantity: 0 } });
   
      res.status(HttpStatus.OK).json(createResponse(HttpStatus.OK, 'Order created successfully'));
   } catch (error) {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(createResponse(HttpStatus.INTERNAL_SERVER_ERROR,"Internal Server Error"));
   }
}

const getOrderhistories = async (req,res) => {
   try {
      const filter = req.user.isAdmin ? {} :{userId:req.user.id};
      const orderhistories = await Order.find(filter).populate("items.productId");
      if(!orderhistories)
         return res.status(HttpStatus.NOT_FOUND).json(createResponse(HttpStatus,"Order histories not found"));

      const updatedOrderHistories = orderhistories.map((order) => {
         order.items = order.items.map((item) => {
           const imageUrls = item.productId.gallery.map((image) => `${req.protocol}://${req.get("host")}/uploads/products/${image}`);
           return {
             ...item.toObject(),
             productId: {
               ...item.productId.toObject(),
               gallery: imageUrls
             }
           };
         });
         return order;
       });

      res.status(HttpStatus.OK).json(createResponse(HttpStatus.OK, 'Order histories fetched successfully',updatedOrderHistories));
      
   } catch (error) {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(createResponse(HttpStatus.INTERNAL_SERVER_ERROR,"Internal Server Error"));
   }
}

const updateOrderStatus = async (req,res) => {
   try {
      const {status,itemId,orderId} = req.body;
   
      const updatedOrder = await Order.findOneAndUpdate({_id:orderId,"items._id":itemId},{$set:{"items.$.status":status}},{new:true});
   
      if(!updatedOrder)
         return res.status(HttpStatus.NOT_FOUND).json(createResponse(HttpStatus,"Item in the order is not found"));

      if(status === "Cancelled"){
         const cancelledItem = updatedOrder.items.find(item => item._id.toString() === itemId);
         console.log(cancelledItem);
         if(cancelledItem){
            await Product.updateOne({_id:cancelledItem.productId,"variants.size":cancelledItem.size},
               { $inc: { "variants.$.stock": cancelledItem.quantity } }
            );
         }
      }

      res.status(HttpStatus.OK).json(createResponse(HttpStatus.OK, 'Order status updated successfully')); 
   
   } catch (error) {
      console.log(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(createResponse(HttpStatus.INTERNAL_SERVER_ERROR,"Internal Server Error"));
   }
}

module.exports = {
   placeOrder,
   getOrderhistories,
   updateOrderStatus
}