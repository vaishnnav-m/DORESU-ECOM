const express = require('express');
const user_route = express.Router();
const userController = require('../controllers/userController');
const productController = require('../controllers/productController')
const verifyToken = require('../middlewares/tokenCheck');
const googleAuthController = require('../controllers/googleAuthController');

user_route.post('/signup',userController.postSignup);

user_route.post('/login',userController.postLogin);

user_route.post('/googleAuth',googleAuthController.google_authentication);

user_route.post('/verifyOtp',userController.verifyOtp);

user_route.post('/resendOtp',userController.resendOtp);

user_route.get('/refresh',userController.refreshToken);

user_route.get('/getUser',verifyToken,userController.getUser);

user_route.put('/updateUser',verifyToken,userController.updateUser);

user_route.patch('/resetPassword',verifyToken,userController.resetPassword);

user_route.post('/logout',verifyToken,userController.logoutUser);

user_route.get('/getProducts',productController.getProducts);

user_route.get('/getProduct/:productId',productController.getProduct);



module.exports = user_route;