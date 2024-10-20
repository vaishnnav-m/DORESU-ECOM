const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Category = require('../models/catagorySchema')

const adminLogin = async (req, res) => {
  const adminData = await User.findOne({ email: req.body.email });
  if (!adminData)
    return res.status(401).json({ message: "Invalid credentials" });

  const isPasswordMatch = await bcrypt.compare(req.body.password, adminData.password);

  if (!isPasswordMatch)
    return res.status(401).json({ message: "Invalid credentials" });
  if (!adminData.isAdmin)
    return res.status(403).json({ message: "Your are not admin" });

  if (!adminData.isActive)
    return res
      .status(403)
      .json({ message: "Sorry you are blocked from the site" });

  // genearating accessToken
  const accessToken = jwt.sign(
    { id: adminData._id, isAdmin: true },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "30m" }
  );

  // generating refresh token
  const refreshToken = jwt.sign(
    { id: adminData._id, isAdmin:true },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );

  // sending refresh token
  res.cookie("adminJwt", refreshToken, {
    httpOnly: true,
    secure: false,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  // sending acess token
  res.json({ message: "Login succesful", accessToken });
};

// controller for refresh accesstoken
const refreshToken = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.adminJwt) return res.status(401).json({ message: "Unautherized" });

  const refreshToken = cookies.adminJwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, user) => {
      try {
        if (err) return res.status(403).json({ message: "Forbidden" });
        if (!user.isAdmin) return res.status(403).json({message:"you are not an admin"})

        const userData = await User.findById(user.id);
        if (!userData) return res.status(404).json({ message: "user not found" });

        const accessToken = jwt.sign(
          { id: userData._id, isAdmin:true },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "30m" }
        );
        res.json({ accessToken });
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  );
};

const getUsers = async(req,res) => {
  if(!req.user.isAdmin)
    return res.status(403).json({message:"You have no permission"});

  const users = await User.find({isAdmin:false}).select('-password');

  if(!users)
   return res.status(404).json({message:"No Customers"});

  res.json(users);
};

const updateUserStatus = async(req,res) => {
  if(!req.user.isAdmin)
    return res.status(403).json({message:"You have no permission"});
  try {
    const userId = req.body.userId;
    const userData = await User.findById(userId);
  
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }  
    
    await User.findByIdAndUpdate(userId,{isActive:!userData.isActive});
    res.json({ message: "User details updated successfully" });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal server error"});
  }

}

const addCategory = async (req,res) => {
  if(!req.user.isAdmin)
    return res.status(403).json({message:"You have no permission"});
  try {

    const categoryName = await Category.findOne({categoryName:req.body.categoryName});

    if(categoryName)
      return res.status(409).json({message:"Category already exists"});

    const category = new Category({
      categoryName:req.body.categoryName,
      description:req.body.description
    });

    const categoryData = await category.save()
    if(!categoryData)
      res.status(400).json({message:"Category adding failed!"});

    res.json({message:"category added successfully"});
    
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal server error"});
  }
}

const getCategories = async (req,res) => {
  if(!req.user.isAdmin)
    return res.status(403).json({message:"You have no permission"});

  try {

    const categories = await Category.find()

    if(!categories)
      return res.status(404).json({message:"No Categories"});
   
     res.json(categories);

    
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal server error"});
  }
}

const updateCategoryStatus = async (req,res) => {
  if(!req.user.isAdmin)
    return res.status(403).json({message:"You have no permission"});

  try {
    const categoryId = req.body.categoryId;
    const categoryData = await Category.findById(categoryId);
  
    if (!categoryData) {
      return res.status(404).json({ message: "Category not found" });
    }  
    
    await Category.findByIdAndUpdate(categoryId,{isActive:!categoryData.isActive});
    res.json({ message: "Category updated successfully" });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal server error"});
  }
}

const updateCategory = async (req,res) => {
  if(!req.user.isAdmin)
    return res.status(403).json({message:"You have no permission"});
  try {

    const {_id:categoryId,categoryName,description} = req.body;
    const categoryData = await Category.findById(categoryId);
  
    if (!categoryData) {
      return res.status(404).json({ message: "Category not found" });
    } 

    if(categoryName !== categoryData.categoryName){
      const exists = await Category.findOne({categoryName})
      if(exists)
        return res.status(409).json({message:"Category already exists"});
    }

    await Category.findByIdAndUpdate(categoryId,{
      $set:{
        categoryName,
        description
      }
    });
    
    res.json({message:"Updated succesfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal server error"});
  }
}

module.exports = {
  adminLogin,
  refreshToken,
  getUsers,
  updateUserStatus,
  addCategory,
  getCategories,
  updateCategoryStatus,
  updateCategory
};
