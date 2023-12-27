// // import users from "./seeders/model/employee.schema.js";
// // import users from "./seeders/model/employee.schema.js";

// // import users from "./db/models/employee.schema.js";
// const users=require('./db/models/users.js');
// const usertypes=require('./db/models/usertype.schema.js')

// // const successFunction=require('./utils/response-handler.js');
// // const errorFunction=require('./utils/response-handler.js');
// const { successFunction, errorFunction } = require('./utils/response-handler.js');

// const Regvalidator=require('./validation/RegValidator.js');
// const updateValidator=require('./validation/updateValidator.js')
// // import { successFunction } from "./utils/response-handler.js";
// // import { errorFunction } from "./utils/response-handler.js";
// // import { Regvalidator } from "./validation/RegValidator.js";

// // import bcrypt from "bcrypt";
// const bcrypt=require('bcrypt')
// const jwt=require('jsonwebtoken')
// // import jwt from "jsonwebtoken";
// const { sign } = jwt;
// // import { updateValidator } from "./validation/updateValidator.js";

// // **********For registration**********************

//  async function register(req, res) {
//    try {
//       let { name, email, phone, district, role, jdate } = req.body;
//       let validationResult = await Regvalidator(req.body);
//       console.log("valiadtionResult::", validationResult);
//    if (validationResult.isValid) {
//       // let hashedPass = await bcrypt.hash(password, 10);
//       let userExist = await users.findOne({ $and: [{ email: email }, { deleted: { $ne: true } }],
//       });
//       if (userExist) {
//          let response = errorFunction({
//          statusCode: 401,
//          message: "user already exist",
//         });
//         return res.status(401).send(response);
//       }
//       let result = await users.create({name,email,phone,district, role, jdate,});
//           if (result) {
//              let response = successFunction({
//              statusCode: 200,
//              data: result,
//              message: "Registration successful",
//              });
//             return res.status(200).send(response);
//           } else {
//             // return res.status(400).send("Registration failed");
//             let response = errorFunction({
//             statusCode: 400,
//             message: "Registration Failed",
//             });
//             return res.status(400).send(response);
//             }
//     } else {
//       let response = errorFunction({
//         statusCode: 500,
//         message: "validation failed",
//       });
//       response.error = validationResult.errors;
//       return res.status(200).send(response);
//     }
//   } catch (error) {
//     console.log(error);
//     // res.status(500).send("Error");
//     let response = errorFunction({
//       statusCode: 500,
//       message: "Error",
//     });
//     return res.status(500).send(response);
//   }
// }





// // ********************* for listing employees****************

//  async function EmpList(req, res) {
//   try {
//     let count=Number(await users.countDocuments({deleted: { $ne: true }}));
//     const pageNumber=parseInt(req.query.page) || 1;
//     const pageSize=parseInt(req.query.pageSize) || count;
//     let info = await users
//     .find({deleted: { $ne: true }})
//     .sort({_id:-1})
//     .skip(pageSize * (pageNumber - 1))
//     .limit(pageSize);
      
//     // return res.json(info);
//     if (info) {
//       let  total_pages=Math.ceil(count/pageSize);
//       let data={
//         count:count,
//         total_pages:total_pages,
//         currentPages:pageNumber,
//         datas:info,
//       }
//       let response = successFunction({
//         statusCode: 200,
//         data:data,
//         message: "Data Recieved",
//       });
//       return res.status(200).send(response);
//     } else {
//       let response = errorFunction({
//         statusCode: 404,
//         message: "Data not found",
//       });
//       return res.status(404).send(response);
//     }
//   } catch (error) {
//     console.log(error);
//     // return res.status(500).send("error occured");
//     let response = errorFunction({
//       statusCode: 500,
//       message: "Error occured",
//     });
//     return res.status(500).send(response);
//   }
// }

// // *****************for employee profile***************

//  async function getEmployee(req, res) {
//   try {
    

//     let id = req.params.id;
//     // console.log(id);
//     // let result=await users.findOne({_id : id}, deleted:{$ne:true});
//     let result = await users
//       .findOne({
//         $and: [{ _id: id }, { deleted: { $ne: true } }],
//       })
//       .select("-password");

//     // console.log("result in get employee", result);
//     if (result) {
//       //   return res.json(result);

//       let response = successFunction({
//         statusCode: 200,
//         data: result,
//         message: "Data Recieaved",
//       });
//       return res.status(200).send(response);
//     } else {
//       let response = errorFunction({
//         statusCode: 404,
//         message: "user not found",
//       });
//       return res.status(404).send(response);
//     }

//     // return res.status(200).send({ msg: "upload profile data" });
//   } catch (error) {
//     console.log(error);
//     // return res.status(500).send("Error occured");

//     let response = errorFunction({
//       statusCode: 404,
//       message: "User not found",
//     });
//     return res.status(404).send(response);
//   }
// }

// // ***************for update employee profile************

//  async function update(req,res){
//   try {
//       console.log("reached update api");
//       const {id} =req.params;
//       // let userExist = await users.findOne({ $and: [{ _id: id }, { deleted: { $ne: true } }]});
//       // if(!userExist){
//       //     return res.status(400).send("User Not Found")
//       // }
//       const {name,
//         email,
//         phone,
//         district,
//         role,
//         jdate,} = req.body;
//       let updatevalidationresult=await updateValidator(req.body);
//       console.log("Update validation Result",updatevalidationresult);
//       if(updatevalidationresult.isValid){
//           let result = await users.updateOne({_id:id,deleted: {$ne: true}},
//             {$set:{name,
//               email,
//               phone,
//               district,
//               role,
//               jdate,}});
//           if(result){
//               let response = successFunction({statusCode:200,data:result,message:"User Updated Successfully"});
//               return res.status(200).send(response)
//           }else{
//               let response=errorFunction({statusCode:500,message:"Not able to update"});
//               return res.status(404).send(response)
//           }
//       }else{
//           let response=errorFunction({statusCode:500,message:"Validation failed"})
//           response.errors=updatevalidationresult.errors;
//           return res.status(200).send(response);
//       }
      
//       // console.log(req.body);
//       return res.json(result)
//       // res.end()
//   } catch (error) {
//       console.log(error)
//   }
// }

// // export async function update(req, res) {
// //   try {
// //     const { id } = req.params;
// //     let user = await users.findOne({ _id: id, deleted: { $ne: true } });
// //     if (!user) {
// //       //   return res.status(401).send("User not exist");
// //       let response = errorFunction({
// //         statusCode: 401,
// //         message: "User not exist",
// //       });
// //       return res.status(401).send(response);
// //     }

// //     console.log("datas", req.body);
// //     const { name, email, phone, district, role, jdate } = req.body;
// //     let updateValiadationResult = await updateValidator(req.body);
// //     console.log("updateValiadationResult::", updateValiadationResult);
// //     if (updateValiadationResult.isValid) {
// //       const result = await users.updateOne({ _id: id,deleted:{$ne:true}},{
// //           $set: {
// //             name,
// //             email,
// //             phone,
// //             district,
// //             role,
// //             jdate,
// //           },
// //         }
// //       );
// //       // return res.json(result);
// //     if(result){
// //         let response = successFunction({statusCode: 200,data: result,message: "Profile update successfully",});
// //         return res.status(200).send(response);
// //     }else{
// //         let response=errorFunction({statusCode:500,message:"Not able to update"});
// //         return res.status(404).send(response)
// //     }
// //     }else{
// //         let response=errorFunction({statusCode:500,message:"Validation failed"});
// //         response.errors=updateValiadationResult.errors;
// //         return res.status(200).send(response)
// //     }
// //     }catch(error){
// //       console.log(error);
// //     }
// // }
// // **********for delete employee profile******************

//  async function Delete(req, res) {
//   try {
//     console.log("rechead here");
//     const { id } = req.params;
//     let user = await users.findOne({ _id: id, deleted: { $ne: true } });
//     if (!user) {
//       //   return res.status(401).send("User not exist");
//       let response = errorFunction({
//         statusCode: 401,
//         message: "User not exist",
//       });
//       return res.status(401).send(response);
//     }else{
//     const result = await users.updateOne(
//       { _id: id },
//       { $set: { deleted: true, deletedAt: new Date() } }
//     );
//     // const result=await users.deleteOne({_id:id});
//     // return res.json(result);
//     let response = successFunction({
//       statusCode: 200,
//       data: result,
//       message: "Deleted",
//     });
//     return res.status(200).send(response);
//   }
//  } catch (error) {
//     console.log(error);
//     // return res.status(500).send("error occured");
//     let response = errorFunction({
//       statusCode: 500,
//       message: "Error  occured",
//     });
//     return res.status(500).send(response);
//   }

// }




// // *******************Admin Login*******************************

// async function Login(req,res){
//   try {
//     console.log("Request Body:", req.body);

//     let email=req.body.email;
//     let password=req.body.password;
//     // let {email,password}=req.body;
//     console.log("email and password:",email,password)

//     if(email && password){
//       let user=await users.findOne({
//         $and:[{email:email}],
//       })
//       .populate("usertype")
//       console.log("email:",email)
//       // console.log("usertype:",usertype)
    
//       // let user = await users.findOne({ email:email }).populate("usertype");
      
//       // console.log("user",user)
      
// // let user = await users.findOne({ email }).populate('usertype');
//      console.log("user", user);

//       if(!user){
//         let response=errorFunction({statusCode:400,message:"User not found"})
//         res.status(response.statusCode).send(response)
//         return;
//       }
//       let usertype=user.usertype.usertype;
//       if(user){
//         bcrypt.compare(password,user.password,async(error,auth)=>{
          
//           console.log("password",password);
//           console.log("user.password",user.password);
//           console.log("auth",auth);
//           if(auth===true){
//             let access_token=jwt.sign(
//               {user_id:user._id},
//               process.env.PRIVATE_KEY,
//               {expiresIn:"10d"}
//             );
//           let response=successFunction({
//             statusCode:200,
//             data:access_token,
//             message:"Login successfull",
//           });
//           response.usertype=usertype;
//           res.status(response.statusCode).send(response);
//           return;
          
//         }else{
//           let response=errorFunction({
//             statusCode:401,
//             message:"Invalid credentials"
//           });
//           res.status(response.statusCode).send(response);
//           return;
//         }
//       })
//       }else{
//         let response=errorFunction({
//           statusCode:401,
//           message:"Invalid credentials"
//         });
//         res.status(response.statusCode).send(response);
//         return;
//       }
//         }else{
//           if(!email){
//             let response=errorFunction({
//               statusCode:422,
//               message:"Email is required",
//             });
//             res.status(response.statusCode).send(response);
//             return;
//           }
//           if(!password){
//             let response=errorFunction({
//               statusCode:422,
//               message:"Password is required",
//             });
//             res.status(response.statusCode).send(response)
//             return;
//           }
//         }
     
//   } catch (error) {
//     if(process.env.NODE_ENV=="production"){
//       let response=errorFunction({
//         statusCode:400,
//         message:error
//         ?error.message 
//            ?error.message
//            :error
//         :"Something went wrong"
//       });
//       res.status(response.statusCode).send(response)
//       return;
//     }else{
//       let response=errorFunction({statusCode:400,message:error});
//       res.status(response.statusCode).send(response)
//       return;
//     }
//   }
// }

// // async function admin_Login(req, res) {
// //   try {
// //     const { email, password } = req.body;

// //     if (!email || !password) {
// //       const response = errorFunction({
// //         statusCode: 422,
// //         message: "Email and Password are required"
// //       });
// //       return res.status(response.statusCode).send(response);
// //     }

// //     const user = await users.findOne({ email }).populate("user_type");
// // console.log("user",user)
// //     if (!user) {
// //       const response = errorFunction({ statusCode: 400, message: "No User Found" });
// //       return res.status(response.statusCode).send(response);
// //     }

// //     const user_type = user.usertype.usertype;
// //     const match = await bcrypt.compare(password, user.password);
// //     console.log("password::",password);
// //     console.log("user.password::",user.password);
// //     console.log("bcrypt match",match);
// //     if (match) {
// //       const access_token = jwt.sign(
// //         { user_id: user._id },
// //         process.env.SECRET_KEY,
// //         { expiresIn: "10d" }
// //       );

// //       const response = successFunction({
// //         statusCode: 200,
// //         data: access_token,
// //         message: "Login Successful"
// //       });
// //       response.user_type = user_type;

// //       return res.status(response.statusCode).send(response);
// //     } else {
// //       const response = errorFunction({
// //         statusCode: 401,
// //         message: "Invalid Credentials"
// //       });
// //       return res.status(response.statusCode).send(response);
// //     }
// //   } catch (error) {
// //     const response = errorFunction({
// //       statusCode: 400,
// //       message: error ? (error.message ? error.message : error) : "Something went wrong"
// //     });

// //     return res.status(response.statusCode).send(response);
// //   }
// // }





// module.exports = {
//   register,
//   EmpList,
//   getEmployee,
//   update,
//   Delete,
//   Login
// };
// // export async function login(req, res) {
// //     try {
// //         let { name, password } = req.body;
// //         // if( username.length < 4 && password.length < 4) {
// //         //     return res.json("Invalid username or password");
// //         // }
// //         let user = await users.findOne({ name });
// //         if(!user) {
// //             return res.status(403).send("Invalid username or password");
// //         }
// //         let passCheck = await bcrypt.compare(password, user.password);
// //         if(passCheck) {
// //             let token = await sign({
// //                 name: user.name,
// //                 id: user._id
// //             },
// //             process.env.SECRET_KEY,
// //             {
// //                 expiresIn: "24h"
// //             })
// //             return res.status(200).json({
// //                 msg: "Login successful...",
// //                 token: token
// //             })
// //         }response.data.message
// //         return res.status(403).send("invalid username or password")
// //     } catch (error) {
// //         console.log(error);
// //         res.status(500).send("Error");
// //     }
// // }

// // export async function  getAll(req,res){
// //     try {
// //         let info=await users.find();
// //         return res.json(info)
// //     } catch (error) {
// //         console.log(error)
// //         return res.status(500).send("error occured")
// //     }
// // }
