// // import mongoose from "mongoose";
const mongoose = require("mongoose");
const users = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    district: {
      type: String,
    },

    role: {
      type: String,
    },

    jdate: {
      type: String,
    },
    password: {
      type: String
    },
    usertype: { 
      type: mongoose.Schema.Types.ObjectId,
       ref: "usertypes"
       },
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", users);
// const mongoose = require('mongoose');

// let users;

// try {
//   // Try to retrieve the existing model to prevent redefining it
//   users = mongoose.model('users');
// } catch {
//   // Define the model if it doesn't exist
//   const schema = new mongoose.Schema({
//     name: {
//               type: String,
//               required: true,

//           },
//           email: {
//               type: String,
//               required: true,

//           },

//           phone: {
//               type: String,
//               required: true
//           },

//           district:{
//             type:String
//         },

//       role:{
//         type:String
//       },

//       jdate:{
//         type:String
//       },
//       usertype:
//         {type:mongoose.Schema.Types.objectId,ref:'usertype'},

//       passsword:{
//         type:String
//       },
//       deleted:{
//         type:Boolean,
//         default:false,
//       },
//       deletedAt:{
//         type:Date
//       }
//       },{
//         timestamps:true
//   }, {
//     timestamps: true,
//   });

//   users = mongoose.model('users', schema);
// }

// module.exports = users;
