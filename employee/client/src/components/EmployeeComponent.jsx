// import axios from "axios"
// import React, { useEffect, useState } from "react";
// import { useParams,Link} from "react-router-dom";

// export default function EmployeeComponent() {

//   let { id } = useParams("");
//   const [serverMessage, setServerMessage] = useState('');
//   const [DataUpdate, SetUpdate] = useState(
//     {
//       name: '',
//       email: '',
//       phone: '',
//       place: '',
//       district: '',
//       state: '',
//       role: '',
//       date: '',
//       jdate: '',
//       exp: '',
//       cemail: ''
//     }
//   );

//   console.log("edit data", DataUpdate)
//   // const[DataUpdate,SetUpdate]=useState([])
//   // console.log("id from useParams : ", id);
//   // ..........api fetch for INDIVIDUAL...........
//   useEffect(() => {
//     axios.get(`http://localhost:3000/api/get-employee/${id}`)
//       .then((response) => {
//         SetUpdate(response.data.data);
//         console.log(response.status, response.data.data);
//         // console.log("Single employee data : ", response.data);
//       })
//       .catch((error) => {
//         console.log("get eror:", error.message ? error.message : error)

//       })
//   }, [])

//   // .............for update DataUpdate..........

//   const handleChange = (e) => {
//     console.log("Reached here")

//     SetUpdate((pre) => {
//       return { ...pre, [e.target.name]: e.target.value }
//     })
//   }
//   const handleSubmit = (e) => {
//     console.log("Reached handlesubmit");
//     e.preventDefault();
//     const { name, email, phone, place, district, state, role, date, jdate, exp, cemail } = DataUpdate;
//     console.log("Datas", DataUpdate)

//     axios.put(`http://localhost:3000/api/update/${id}`, DataUpdate)
//       .then((response) => {
//         // SetUpdate(response.data);
//         //  console.log(response.data)
//         console.log('updated successfully:', response.data.data);
//         // alert("updated")
//         setServerMessage(response.data.message);
//       })
//       .catch((error) => {
//         console.log(" axios get eror:", error.message ? error.message : error)

//       })
//   }

//   const handleClick = () => {
//     axios.delete(`http://localhost:3000/api/delete/${id}`)
//       .then((response) => {
//         console.log('delete successfully:', response.data.data);
//         alert("Deleted")
//       })

//   }
//   return (
//     <>
//     {serverMessage && <p>{serverMessage}</p>}
//       <h3 style={{ textAlign: 'center', padding: 20, color: "white" }}>Details Of {DataUpdate.name}</h3>
//       <div className="regfrm" >
//         <div className="container mx-auto col-sm-12 col-md-12 col-lg-5 s ">

//           <form onSubmit={handleSubmit}>

//             <div className="shadow-lg bg-body rounded" style={{ backgroundColor: "white", opacity: 0.75 }}>
//               <div>
//                 <p style={{ textAlign: "center", margin: 10 }}>PERSONAL INFORMATION</p>
//               </div>
//               <div className="mb-3 " style={{ padding: 20 }}>
//                 <label htmlFor="name" className="form-label">Name</label>
//                 <input type="text" className="form-control" id="name" name='name' value={DataUpdate.name} onChange={handleChange} />
//               </div>
//               <div className="mb-3 " style={{ padding: 20 }}>
//                 <label htmlFor="email" className="form-label"> Personal Email </label>
//                 <input type="email" className="form-control" id="email" name='email' value={DataUpdate.email} onChange={handleChange} />
//               </div>
//               <div className="mb-3" style={{ padding: 20 }}>
//                 <label htmlFor="phone" className="form-label">Phone</label>
//                 <input type="text" className="form-control" id="phone" name='phone' value={DataUpdate.phone} onChange={handleChange} />
//               </div>
//               <div className="mb-3" style={{ padding: 20 }}>
//                 <label htmlFor="place" className="form-label">Place</label>
//                 <input type="text" className="form-control" id="place" name='place' value={DataUpdate.place} onChange={handleChange} />
//               </div>
//               <div className="mb-3" style={{ padding: 20 }}>
//                 <label htmlFor="district" className="form-label">District</label>
//                 <input type="text" className="form-control" id="district" name='district' value={DataUpdate.district} />
//               </div>
//               <div className="mb-3" style={{ padding: 20 }}>
//                 <label htmlFor="state" className="form-label">State</label>
//                 <input type="text" className="form-control" id="state" name='state' value={DataUpdate.state} onChange={handleChange} />
//               </div>

//               <div className="mb-3" style={{ padding: 20 }}>
//                 <label htmlFor="Dateofbirth" className="form-label">Date of birth</label>
//                 <input type="text" className="form-control" id="date" name='date' value={DataUpdate.date} onChange={handleChange} />
//               </div>

//               <div>
//                 <p style={{ textAlign: "center", margin: 10 }}>COMPANY DETAILS</p>
//               </div>

//               <div className="mb-3" style={{ padding: 20 }}>
//                 <label htmlFor="role" className="form-label">Post</label>
//                 <input type="text" className="form-control" id="role" name='role' value={DataUpdate.role} />
//               </div>
//               <div className="mb-3" style={{ padding: 20 }}>
//                 <label htmlFor="jdate" className="form-label">Join Date</label>
//                 <input type="text" className="form-control" id="jdate" name='jdate' value={DataUpdate.jdate} />
//               </div>
//               <div className="mb-3 " style={{ padding: 20 }}>
//                 <label htmlFor="cemail" className="form-label">Email address</label>
//                 <input type="email" className="form-control" id="cemail" name='cemail' value={DataUpdate.cemail} />
//               </div>
//               <div className="mb-3" style={{ padding: 20 }}>
//                 <label htmlFor="exp" className="form-label">Experience</label>
//                 <input type="text" className="form-control" id="exp" value={DataUpdate.exp} name='exp' />
//               </div>

//               {/* <button className="btn btn-success"><Link to={`/edit/${DataUpdate._id}`}  style={{textDecoration:"none",color:"white"}}>Update</Link></button> */}
//               {/* <input  style={{margin:20}}  type="Submit" value="Update"/> */}
//               <button type="submit" className="btn btn-success m-2" style={{ color: "white" }}>
//                 Update
//               </button>
//               <Link to="/view"><button onClick={handleClick} type="button" className="btn btn-success" style={{ color: "white" }}>
//                 Delete

//               </button>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );

// }



















// ************************validation ****************


// ***************useformik*****




import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditForm from './EditForm';
import axios from "axios"

import SuccessUpdate from './SuccessUpdate';

import SuccessComponent from './SuccessComponent';
import SuccessDelete from './SuccessDelete';
import ErrorComponent from './ErrorComponent';



const EmployeeComponent = () => {
  let { id } = useParams("");
  const [serverSuccess, setServerSuccess] = useState("");
  const [DeleteSucces,SetDeleteSuccess]=useState("");
  const [deleteError,setdeleteError]=useState("");
  const [backendError,setbackendError]=useState({});
  const [updateError,setupdateError]=useState("");
  const [validationMsg, setvalidationMsg] = useState("");
 
  const [initialData, setInitialData] = useState({
    name: "",
    email: "",
    phone: "",
    district: "",
    role: "",
    jdate: "",
    
    
  });

  useEffect(() => {
    
 
    axios.get(`http://localhost:3000/api/get-employee/${id}`)
          .then((response) => {
            setInitialData(response.data.data);
            console.log(response.status, response.data.data);
            // console.log("Single employee data : ", response.data);
       
          })
            
          .catch((error) => {
            console.log("get eror:", error.message ? error.message : error)
    
          })
 
  }, []);


  const handleSubmit = (values)=> {
   
    axios.put(`http://localhost:3000/api/update/${id}`, values)
          .then((response) => {
            // SetUpdate(response.data);
            //  console.log(response.data)
            console.log('updated successfully:', response.data.data);
            setServerSuccess(response.data.success)
            // alert("updated")
            // setServerMessage(response.data.message);
            if (response.data.error) {
              setbackendError(response.data.error);
              setErrors(response.data.error);
              setvalidationMsg(response.data.message);
              setupdateError(true);
              setServerSuccess(false);
            } else if (response.data.success) {
              setServerSuccess(true);
            }
          })
          .catch((error) => {
            console.log(" axios get eror:", error.message ? error.message : error)
            setupdateError(true)
    
          })
    console.log('Updated values:', values);
  };
  
  const handleDelete = () => {
    try {
      axios.delete(`http://localhost:3000/api/delete/${id}`)
    .then((response) => {
      // setInitialData(response.data)
      SetDeleteSuccess(response.data.success)
      console.log('delete successfully:', response.data);
      // alert("Deleted")
    })
    } catch (error) {
      setdeleteError(true)
      console.log("delete error:",error)
    }
  

}

  return (
    <div>
      
      <EditForm initialValues={initialData} onSubmit={handleSubmit} onClick={handleDelete} backendError={backendError} />
      {serverSuccess && <SuccessUpdate onClose={() => setServerSuccess(false)}/>}
      {DeleteSucces && <SuccessDelete onClose={() => SetDeleteSuccess(false)} />}
      {deleteError && <ErrorComponent onClose={() => setdeleteError(false)} />}
      {updateError && <ErrorComponent  message={validationMsg} onClose={() => setupdateError(false)}/>}
    </div>
  );
};

export default EmployeeComponent;
