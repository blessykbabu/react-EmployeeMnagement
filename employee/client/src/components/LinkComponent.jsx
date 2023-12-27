import React from "react";
import { Link } from 'react-router-dom';
import RegFormComponent from "./RegFormComponent";
import EmployeeProfileComponent from "./EmployeeProfileComponent";
import MainPageComponent from "./MainPageComponent";
export default function LinkComponent(){
    return(
     
    
    <>
   
    
      
      
{/* <nav className="navbar navbar-expand-lg  bg-dark" >
  <div className="container-fluid" >
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="d-flex">
      <li><Link to="/"></Link></li>
      <li className='m-5'><Link to="/registration" style={{"textDecoration": 'none',"color":"white"}}>Registration</Link></li>
    
    <li className='m-5'><Link to="/view"  style={{"textDecoration": 'none',"color":"white"}}>Employee List</Link></li>
      </ul>
    </div>
  </div>
</nav>    */}


  
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
   <Link to="/" style={{textDecoration:"none",color:"white"}}>Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item m-4">
       <Link to="/login" style={{textDecoration:"none",color:"white"}}>Login</Link>
        </li>
        {/* <li className="nav-item m-4">
        <Link to="/registration" style={{textDecoration:"none",color:"white"}}>Registration</Link>
        </li>
        <li className="nav-item m-4">
       <Link to="/view" style={{textDecoration:"none",color:"white"}}>Employee List</Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>

 
    </>
    )
}