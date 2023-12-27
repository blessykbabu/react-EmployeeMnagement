
const express=require("express");
const router=express.Router();
const userControler=require('../controlers/userControler');
const accessControl = require('../utils/accesscontrol').accessControl;

const setAccessControl=(access_type)=>{
    return (req,res,next)=>{
        // const token = localStorage.getItem('token');

        // // Include the token in the request header
        // req.headers['Authorization'] = `Bearer ${token}`;
        accessControl(access_type,req,res,next)
    }
}
router.post('/employee',setAccessControl('1'),userControler.addNewEmployee);
router.get('/employee/list',setAccessControl('1'),userControler.fetchAll);
router.get('/employee/profile/:id',setAccessControl('1'),userControler.fetchProfile);
router.put('/employee/update/:id',setAccessControl('1'),userControler.editProfile);
router.delete('/employee/delete/:id',setAccessControl('1'),userControler.deleteProfile);
module.exports=router