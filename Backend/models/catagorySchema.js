const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
   categoryName:{
      type:String,
      require:true
   },
   description:{
      type:String,
      require:true
   },
   isActive:{
      type:Boolean,
      default:true
   }
});

module.exports = mongoose.model('category',categorySchema);