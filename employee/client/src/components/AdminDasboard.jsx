// import  React from 'react'
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

// import LinkComponent from './LinkComponent';
// import RegFormComponent from './RegFormComponent';
// import EmployeeComponent from './EmployeeComponent';
// import EmployeeProfileComponent from './EmployeeProfileComponent';
// import UpdateComponent from './updateComponent';




// export default function  AdminDasboard(){
// return(
//    <>

//  <Routes>
//              <Route path='/' element={<AdminDasboard/>}/>
//              {/* <Route exact path='/login' element={<AdminLogin/>}/> */}
//             <Route exact path='/registration' element={<RegFormComponent/>}/>
//             <Route path='/view' element={<EmployeeProfileComponent/>}/>
//             <Route path='/profile/:id' element={<UpdateComponent/>}/>
//         </Routes>
        
//       <div className='home'>

//       </div>
//    </>
// )
// }



// AdminDashboard.jsx
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import RegFormComponent from './RegFormComponent';



export default function AdminDasboard() {
  return (

<>
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
   <Link to="/" style={{textDecoration:"none",color:"white"}}>Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
        <li className="nav-item m-4">
        <Link to="/registration" style={{textDecoration:"none",color:"white"}}>Registration</Link>
        </li>
        <li className="nav-item m-4">
       <Link to="/view" style={{textDecoration:"none",color:"white"}}>Employee List</Link>
        </li>
        <li className="nav-item m-4">
       <Link to="/logout" style={{textDecoration:"none",color:"white"}}>Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

   
   
    </>
  );
}
