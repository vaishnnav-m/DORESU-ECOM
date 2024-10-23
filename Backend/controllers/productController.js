const Product = require("../models/productsSchema");

// controller to handle products adding
const addProduct = async (req, res) => {
   if (!req.user.isAdmin)
     return res.status(403).json({ message: "You have no permission" });
   try {
     const imageUrls = req.files.map((file) => file.filename);
 
     const productData = new Product({
       productName: req.body.productName,
       description: req.body.description,
       category: req.body.category,
       size: req.body.size,
       stock: req.body.stock,
       price: req.body.price,
       gallery: imageUrls,
     });
 
     await productData.save();
 
     res.json({ message: "Products added successfully" });
 
   } catch (error) {
     console.log(error);
     res.status(500).json({ message: "Internal server error" });
   }
 };

 // controller to get products
 const getProducts = async (req,res) => {

   const products = await Product.find({});

 }

 module.exports = {
   addProduct,

 }