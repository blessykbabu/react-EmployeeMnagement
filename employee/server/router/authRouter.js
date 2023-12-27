
const express=require("express");
const router=express.Router();
const authControle=require('../controlers/authControle');
const accesscontrol=require("../utils/accesscontrol").accessControl;
const setAccessControl=(access_type)=>{
    return (req,res,next)=>{
        accesscontrol(access_type,req,res,next)
    }
}
router.post('/login',setAccessControl('*'),authControle.Login);
router.post('/logout', setAccessControl('*'), authControle.Logout);

module.exports=router