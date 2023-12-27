
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";



export default function HomeComponent() {
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
       <Link to="/login" style={{textDecoration:"none",color:"white"}}>Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


   
    </>
  );
}
