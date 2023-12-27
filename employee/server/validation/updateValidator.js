const isEmpty=require('../validation/isEmpty.js');
const validator=require('validator');
const users=require('../db/models/users.js')

// import users from "../db/models/employee.schema.js";
async function updateValidator(data){
const errors={}
data.name=!isEmpty(data.name)?data.name:"";
data.email=!isEmpty(data.email)?data.email:"";
data.phone=!isEmpty(data.phone)?data.phone:"";

data.district=!isEmpty(data.district)?data.district:"";

data.role=!isEmpty(data.role)?data.role:"";
data.jdate=!isEmpty(data.jdate)?data.jdate:"";




if(validator.isEmpty(data.name)){
    errors.name_empty="Name is equired"
}


if(!validator.isLength(data.name,{min:2,max:30})){
    errors.name="Name must be between 2 and 30"
}


// if(validator.isEmpty(data.email)){
//     errors.email_empty="Email is required"
// }


// if(!validator.isLength(data.email,{min:2,max:30})){
//     errors.email="Email must be between 2 and 30"
// }

// if(!validator.isEmail(data.email)){
//     errors.email_invalid="Email is invalid"
// }
// let email_count=await users.countDocuments({
//     "email":data.email,
// });

// if(email_count>0){
//     errors.email_exist="email already exist"
// }




if(validator.isEmpty(data.phone)){
    errors.phone_empty="phone required"
}





if(validator.isEmpty(data.district)){
    errors.district_empty="District required"
}






if(validator.isEmpty(data.role)){
    errors.role_empty="post required"
}


if(validator.isEmpty(data.jdate)){
    errors.jdate_empty="join date required"
}
if (!validator.isEmpty(data.email) && data.email !== data.currentEmail) {
    if (!validator.isEmail(data.email)) {
      errors.email_invalid = "Email is invalid";
    }
  
    // Check if the email exists for any other user except the current user
    const emailExistsForOtherUser = await users.findOne({
      email: data.email,
      _id: { $ne: data._id }, // Exclude the current user ID
    });
  
    if (emailExistsForOtherUser) {
      errors.email_exist = "Email already exists for another user";
    }
  }
  



return{
    errors,
    isValid:isEmpty(errors),
};
}
module.exports=updateValidator;


