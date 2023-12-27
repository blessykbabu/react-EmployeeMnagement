import { useState } from 'react'
import {BrowserRouter as Router,Link,Routes,Route,useNavigate} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import MainPageComponent from './components/MainPageComponent'
import AdminLogin from './components/AdminLogin'
import AdminDasboard from './components/AdminDasboard'
import RegFormComponent from './components/RegFormComponent'
import UpdateComponent from './components/updateComponent'
import EmployeeProfileComponent from './components/EmployeeProfileComponent'
import HomeComponent from './components/HomeComponent'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
  
      {/* <MainPageComponent/> */}
      <Router>
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/login" element={<AdminLogin/>}/>
        <Route path="/admin/dashboard" element={<AdminDasboard/>} />
        <Route path="/registration" element={<RegFormComponent/>} />
        <Route path="/view" element={<EmployeeProfileComponent/>} />
        <Route path="/profile/:id" element={<UpdateComponent/>} />
        
      </Routes>
    </Router>
   {/* <HomeComponent/>  */}
   {/* <SuccessComponent/> */}
   {/* <Loading/> */}

    </>
  )
}

export default App
