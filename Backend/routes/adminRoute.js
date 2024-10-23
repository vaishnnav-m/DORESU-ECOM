const express = require("express");
const admin_route = express.Router();
const adminController = require("../controllers/adminController");
const categoryController = require('../controllers/categorieController')
const productController = require('../controllers/productController');
const verifyToken = require('../middlewares/tokenCheck')
const upload = require('../middlewares/imageUpload')

admin_route.post("/login", adminController.adminLogin);

admin_route.get('/refresh',adminController.refreshToken);

admin_route.get('/getUsers',verifyToken,adminController.getUsers);

admin_route.put('/updateStatus',verifyToken,adminController.updateUserStatus);

admin_route.post('/addCategory',verifyToken,categoryController.addCategory);

admin_route.get('/getCategories',verifyToken,categoryController.getCategories);

admin_route.put('/updateCategoryStatus',verifyToken,categoryController.updateCategoryStatus);

admin_route.put('/updateCategory',verifyToken,categoryController.updateCategory);

admin_route.post('/addProduct',verifyToken,upload.array('file',5),productController.addProduct);

module.exports = admin_route;
