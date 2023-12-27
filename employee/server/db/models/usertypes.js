const mongoose = require('mongoose');




  // Define the model if it doesn't exist
  const usertypes= new mongoose.Schema({
    usertype: {
              type: String
            
          },
          
      
      // deleted:{
      //   type:Boolean,
      //   default:false, 
      // },
      // deletedAt:{
      //   type:Date
      // }
      }, {
    timestamps: true,
  });



  module.exports = mongoose.model("usertypes", usertypes);
 