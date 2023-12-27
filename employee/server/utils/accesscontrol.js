// const jwt=require('jsonwebtoken');
// const authControle=require('../controlers/authControle');
// const errorFunction=require("./response-handler");
// const control_data=require("./control-data.json");
// const users=require('../db/models/users');
// const usertypes=require("../db/models/usertypes");
// // async function accesscontrole(access_types,req,res,next){
// exports.accessControl =  async function (access_types,req,res,next){

//     try {
//         //middleware to check jwt
//         if(access_types=="*"){
//             next();
//         }else{
//             const authHeader=req.headers["authorization"];
//             const token=authHeader ? authHeader.split(" ")[1] : null;
//             if(
//                 token == null ||
//                 token =="null" ||
//                 token == "" ||
//                 token == "undefined"
//             ){
//                 let response=errorFunction({
//                     statusCode:401,
//                     message:"Invalid Access token",
//                 });
//                 res.status(401).send(response);
//             }else{
//                 //verifying token
//                 jwt.verify(
//                     token,
//                     process.env.PRIVATE_KEY,
//                     async function (err,decoded){
//                         if(err){
//                             let response=errorFunction({
//                                 statusCode:401,
//                                 message:err.message,
//                             });
//                             res.status(401).send(response);
//                         }else{
//                             let allowed=access_types
//                                .split(",")
//                                .map((obj)=>control_data[obj]);
//                                //fetching  details of usertype
//                                let usertype_id=(await users.findOne({_id:decoded.usertype_id})).usertype;
//                                let usertype = (await usertypes.findOne({_id:usertype_id})).usertype;

//                                if(allowed && allowed.includde(usertype)){
//                                 let revoked=await authControle.checkRevoked(req,res);
//                                 if(revoked === false){
//                                     //checkin the tokn in revoked list
//                                     next();
//                                 }
//                                     else if(revoked === true){
//                                         //tokn in revoked list
//                                         let response=errorFunction({
//                                             statusCode:401,
//                                             message:"Revoked Access Token",
//                                         });
//                                         res.status(401).send(response);

//                                     }else{
//                                         let response=errorFunction({
//                                             statusCode:400,
//                                             message:"Somenthing went wrong",
//                                         });
//                                         res.status(400).send(response);
//                                     }
                                    
//                                 }else{
//                                     let response=errorFunction({
//                                         status:403,
//                                         message:"Not allowed to access the route",
//                                     });
//                                     res.status(403).sennd(response);
//                                 }
//                                }
//                             }
                    
//                 );
//             }
//         }
//     } catch (error) {
//        let response=errorFunction(error);
//        res.status(400).send(response);
//     }
// }





const jwt = require("jsonwebtoken");
const authControle = require("../controlers/authControle");
const errorFunction = require("./response-handler").errorFunction;
const control_data = require("./control-data.json");
const users = require("../db/models/users");
const user_types = require("../db/models/usertypes");
exports.accessControl = async function (access_types, req, res, next) {
  try {
    //middleware to check JWT
    if (access_types == "*") {
      next();
    } else {
      const authHeader = req.headers["authorization"];
      const token = authHeader ? authHeader.split(" ")[1] : null;
      if (
        token == null ||
        token == "null" ||
        token == "" ||
        token == "undefined"
      ) {
        let response = errorFunction({
          status: 401,
          message: "Invalid Access Token",
        });
        res.status(401).send(response);
      } else {
        //verifying token
        jwt.verify(
          token,
          process.env.PRIVATE_KEY,
          async function (err, decoded) {
            if (err) {
              let response = errorFunction({
                status: 401,
                message: err.message,
              });
              res.status(401).send(response);
            } else {
              //checking access control
              let allowed = access_types
                .split(",")
                .map((obj) => control_data[obj]);

              //Fetching user_type details
              //console.log("Token from access control : ", decoded.user_id);
              let user_type_id = (await users.findOne({ _id: decoded.user_id })).usertype;
              let user_type = (await user_types.findOne({ _id: user_type_id })).usertype;

              //console.log("User type : ", user_type);

              if (allowed && allowed.includes(user_type)) {
                //checking if the token is in revoked list
                let revoked = await authControle.checkRevoked(req, res);
                if (revoked === false) {
                  //token not in revoked list
                  next();
                } else if (revoked === true) {
                  //token is in revoked list
                  let response = errorFunction({
                    status: 401,
                    message: "Revoked Access Token",
                  });
                  res.status(401).send(response);
                } else {
                  let response = errorFunction({
                    status: 400,
                    message: "Something Went Wrong",
                  });
                  res.status(400).send(response);
                }
              } else {
                let response = errorFunction({
                  status: 403,
                  message: "Not allowed to access the route",
                });
                res.status(403).send(response);
              }
            }
          }
        );
      }
    }
  } catch (error) {
    let response = errorFunction(error);
    res.status(400).send(response);
  }
};

