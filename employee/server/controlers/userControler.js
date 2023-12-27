
const users=require('../db/models/users.js');
const usertypes=require('../db/models/usertypes.js')


const { successFunction, errorFunction } = require('../utils/response-handler.js');

const Regvalidator=require('../validation/RegValidator.js');
const updateValidator=require('../validation/updateValidator.js')
;
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const { sign } = jwt;


// **********For registration**********************

 async function addNewEmployee(req, res) {
   try {
      let { name, email, phone, district, role, jdate } = req.body;
      let validationResult = await Regvalidator(req.body);
      console.log("valiadtionResult::", validationResult);
   if (validationResult.isValid) {
      // let hashedPass = await bcrypt.hash(password, 10);
      let userExist = await users.findOne({ $and: [{ email: email }, { deleted: { $ne: true } }],
      });
      if (userExist) {
         let response = errorFunction({
         statusCode: 401,
         message: "user already exist",
        });
        return res.status(401).send(response);
      }
      let result = await users.create({name,email,phone,district, role, jdate,});
          if (result) {
             let response = successFunction({
             statusCode: 200,
             data: result,
             message: "Registration successful",
             });
            return res.status(200).send(response);
          } else {
            // return res.status(400).send("Registration failed");
            let response = errorFunction({
            statusCode: 400,
            message: "Registration Failed",
            });
            return res.status(400).send(response);
            }
    } else {
      let response = errorFunction({
        statusCode: 500,
        message: "validation failed",
      });
      response.error = validationResult.errors;
      return res.status(200).send(response);
    }
  } catch (error) {
    console.log(error);
    // res.status(500).send("Error");
    let response = errorFunction({
      statusCode: 500,
      message: "Error",
    });
    return res.status(500).send(response);
  }
}





// ********************* for listing employees****************

 async function fetchAll(req, res) {
  try {
    let count=Number(await users.countDocuments({deleted: { $ne: true }}));
    const pageNumber=parseInt(req.query.page) || 1;
    const pageSize=parseInt(req.query.pageSize) || count;
    let info = await users
    .find({deleted: { $ne: true }})
    .sort({_id:-1})
    .skip(pageSize * (pageNumber - 1))
    .limit(pageSize);
      
    // return res.json(info);
    if (info) {
      let  total_pages=Math.ceil(count/pageSize);
      let data={
        count:count,
        total_pages:total_pages,
        currentPages:pageNumber,
        datas:info,
      }
      let response = successFunction({
        statusCode: 200,
        data:data,
        message: "Data Recieved",
      });
      return res.status(200).send(response);
    } else {
      let response = errorFunction({
        statusCode: 404,
        message: "Data not found",
      });
      return res.status(404).send(response);
    }
  } catch (error) {
    console.log(error);
    // return res.status(500).send("error occured");
    let response = errorFunction({
      statusCode: 500,
      message: "Error occured",
    });
    return res.status(500).send(response);
  }
}

// *****************for employee profile***************

 async function fetchProfile(req, res) {
  try {
    

    let id = req.params.id;
    // console.log(id);
    // let result=await users.findOne({_id : id}, deleted:{$ne:true});
    let result = await users
      .findOne({
        $and: [{ _id: id }, { deleted: { $ne: true } }],
      })
      .select("-password");

    // console.log("result in get employee", result);
    if (result) {
      //   return res.json(result);

      let response = successFunction({
        statusCode: 200,
        data: result,
        message: "Data Recieaved",
      });
      return res.status(200).send(response);
    } else {
      let response = errorFunction({
        statusCode: 404,
        message: "user not found",
      });
      return res.status(404).send(response);
    }

    // return res.status(200).send({ msg: "upload profile data" });
  } catch (error) {
    console.log(error);
    // return res.status(500).send("Error occured");

    let response = errorFunction({
      statusCode: 404,
      message: "User not found",
    });
    return res.status(404).send(response);
  }
}

// ***************for update employee profile************

 async function editProfile(req,res){
  try {
      console.log("reached update api");
      const {id} =req.params;
      // let userExist = await users.findOne({ $and: [{ _id: id }, { deleted: { $ne: true } }]});
      // if(!userExist){
      //     return res.status(400).send("User Not Found")
      // }
      const {name,
        email,
        phone,
        district,
        role,
        jdate,} = req.body;
      let updatevalidationresult=await updateValidator(req.body);
      console.log("Update validation Result",updatevalidationresult);
      if(updatevalidationresult.isValid){
          let result = await users.updateOne({_id:id,deleted: {$ne: true}},
            {$set:{name,
              email,
              phone,
              district,
              role,
              jdate,}});
          if(result){
              let response = successFunction({statusCode:200,data:result,message:"User Updated Successfully"});
              return res.status(200).send(response)
          }else{
              let response=errorFunction({statusCode:500,message:"Not able to update"});
              return res.status(404).send(response)
          }
      }else{
          let response=errorFunction({statusCode:500,message:"Validation failed"})
          response.errors=updatevalidationresult.errors;
          return res.status(200).send(response);
      }
      
      // console.log(req.body);
      return res.json(result)
      // res.end()
  } catch (error) {
      console.log(error)
  }
}


// **********for delete employee profile******************

 async function deleteProfile(req, res) {
  try {
    console.log("rechead here");
    const { id } = req.params;
    let user = await users.findOne({ _id: id, deleted: { $ne: true } });
    if (!user) {
      //   return res.status(401).send("User not exist");
      let response = errorFunction({
        statusCode: 401,
        message: "User not exist",
      });
      return res.status(401).send(response);
    }else{
    const result = await users.updateOne(
      { _id: id },
      { $set: { deleted: true, deletedAt: new Date() } }
    );
    // const result=await users.deleteOne({_id:id});
    // return res.json(result);
    let response = successFunction({
      statusCode: 200,
      data: result,
      message: "Deleted",
    });
    return res.status(200).send(response);
  }
 } catch (error) {
    console.log(error);
    // return res.status(500).send("error occured");
    let response = errorFunction({
      statusCode: 500,
      message: "Error  occured",
    });
    return res.status(500).send(response);
  }

}

module.exports = {
  addNewEmployee,
  fetchAll,
  fetchProfile,
  editProfile,
  deleteProfile
};

