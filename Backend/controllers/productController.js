const Product = require("../models/productsSchema");
const Category = require("../models/catagorySchema");
const {HttpStatus,createResponse} = require("../utils/generateResponse");

// controller to handle products adding
const addProduct = async (req, res) => {
  const {productName,description,category,variants,} = req.body;
  
   if (!req.user.isAdmin)
     return res.status(HttpStatus.UNAUTHORIZED).json(HttpStatus.FORBIDDEN,"You don't have permission");
   try {
     const imageUrls = req.files.map((file) => file.filename);
     const productData = new Product({
       productName,
       description,
       category,
       variants,
       gallery: imageUrls,
     });
 
     await productData.save();
     console.log("saved",productData);
     res.status(HttpStatus.OK).json(createResponse(HttpStatus.OK,"Product added Successfully"));
 
   } catch (error) {
     console.log(error);
     res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(createResponse(HttpStatus.INTERNAL_SERVER_ERROR,"Internal Server Error"));
   }
 };

 // controller to get products
 const getProducts = async (req,res) => {
  try {
    const filter = req?.user?.isAdmin ? {} : { isActive: true };

    const products = await Product.find(filter).populate('category','categoryName -_id');
    if(!products || products.length === 0)
      return res.status(HttpStatus.NOT_FOUND).json(createResponse(HttpStatus.NOT_FOUND,"No products were found"));

    const updatedProducts = products.map((product) => {
      const imageUrls = product.gallery.map((image) => `${req.protocol}://${req.get("host")}/uploads/products/${image}`);
      return { ...product.toObject(), gallery: imageUrls };
    });

    res.status(HttpStatus.OK).json(createResponse(HttpStatus.OK,"Successfully fetched products",updatedProducts));

  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(createResponse(HttpStatus.INTERNAL_SERVER_ERROR,"Internal Server Error"));
  }
 }

 // controller to updateProduct status
 const updateStatus = async (req,res) => {
  if(!req.user.isAdmin)
    return res.status(HttpStatus.UNAUTHORIZED).json(createResponse(HttpStatus.UNAUTHORIZED,"You don't have permission"));
  try {
    const {productId} = req.body;
    const productData = await Product.findById(productId);

    if (!productData) 
      return res.status(HttpStatus.NOT_FOUND).json(createResponse(HttpStatus,"Product not found"));


    await Product.findByIdAndUpdate(productId, { isActive: !productData.isActive });
    res.status(HttpStatus.OK).json(createResponse(HttpStatus.OK,"Product added Successfully"));
  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(createResponse(HttpStatus.INTERNAL_SERVER_ERROR,"Internal Server Error"));
  }
 }

 const getProduct = async (req,res) => {
  try {
    const {productId} = req.params;
    const productData = await Product.findById(productId);
    if(!productData)
      return res.status(HttpStatus.NOT_FOUND).json(createResponse(HttpStatus,"Product not found"));

    const imageUrls = productData.gallery.map((image) => ({url:`${req.protocol}://${req.get("host")}/uploads/products/${image}`,file:image}));
    const updatedProduct = { ...productData.toObject(), gallery: imageUrls }

    res.status(HttpStatus.OK).json(createResponse(HttpStatus.OK,"Product fetched successfully",updatedProduct));
    
  } catch (error) {
    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(createResponse(HttpStatus.INTERNAL_SERVER_ERROR,"Internal Server Error"));
  }
 }

 const editProduct = async (req,res) => {
  if(!req.user.isAdmin)
    return res.status(HttpStatus.UNAUTHORIZED).json(createResponse(HttpStatus.UNAUTHORIZED,"You don't have permission"));
  try {

    const {productId,productName,description,category,variants} = req.body;

    const productData = await Product.findById(productId);

    if(!productData)
      return res.status(HttpStatus.NOT_FOUND).json(createResponse(HttpStatus,"Product not found"));

    const imageUrls = req.files && req.files.length > 0 ?  req.files.map((file) => file.filename) : productData.gallery;

    await Product.findByIdAndUpdate(productId,{
      productName,
      description,
      category,
      variants,
      gallery:imageUrls
    });

    res.status(HttpStatus.OK).json(createResponse(HttpStatus.OK,"Product updated successfully"));

    
  } catch (error) {

    console.log(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(createResponse(HttpStatus.INTERNAL_SERVER_ERROR,"Internal Server Error"));
    
  }
 }

 module.exports = {
   addProduct,
   getProducts,
   updateStatus,
   getProduct,
   editProduct
 }