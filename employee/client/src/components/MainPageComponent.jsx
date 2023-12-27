import  React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import LinkComponent from './LinkComponent';
// import RegFormComponent from './RegFormComponent';
// import EmployeeComponent from './EmployeeComponent';
// import EmployeeProfileComponent from './EmployeeProfileComponent';
// import UpdateComponent from './updateComponent';

import AdminLogin from './AdminLogin';
import AdminDasboard from './AdminDasboard';


export default function  MainPageComponent(){
return(
   <>

 <Routes>
             <Route path='/' element={<LinkComponent/>}/>
             <Route exact path='/login' element={<AdminLogin/>}/>
             <Route exact path='/admin/dashboard' element={<AdminDasboard/>}/>
            {/* <Route exact path='/registration' element={<RegFormComponent/>}/>
            <Route path='/view' element={<EmployeeProfileComponent/>}/>
            <Route path='/profile/:id' element={<UpdateComponent/>}/>  */}
            
        </Routes>
        
      <div className='home'>

      </div>
   </>
)
}
