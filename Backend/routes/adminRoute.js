const express = require("express");
const admin_route = express.Router();
const adminContrller = require("../controllers/adminController");
const verifyToken = require('../middlewares/tokenCheck')

admin_route.post("/login", adminContrller.adminLogin);

admin_route.get('/refresh',adminContrller.refreshToken);

admin_route.get('/getUsers',verifyToken,adminContrller.getUsers);

admin_route.put('/updateStatus',verifyToken,adminContrller.updateUserStatus);

admin_route.post('/addCategory',verifyToken,adminContrller.addCategory);

admin_route.get('/getCategories',verifyToken,adminContrller.getCategories);

admin_route.put('/updateCategoryStatus',verifyToken,adminContrller.updateCategoryStatus);

admin_route.put('/updateCategory',verifyToken,adminContrller.updateCategory);

module.exports = admin_route;
