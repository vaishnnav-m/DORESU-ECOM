const express = require('express');
const user_route = express.Router();
const userController = require('../controllers/userController')
const verifyToken = require('../middlewares/tokenCheck')

user_route.post('/signup',userController.postSignup);

user_route.post('/login',userController.postLogin);

user_route.post('/verifyOtp',userController.verifyOtp);

user_route.post('/resendOtp',userController.resendOtp);

user_route.get('/refresh',userController.refreshToken);

user_route.get('/getUser',verifyToken,userController.getUser);

user_route.post('/logout',verifyToken,userController.logoutUser);


module.exports = user_route;