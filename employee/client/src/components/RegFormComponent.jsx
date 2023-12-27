// import React, { useState} from "react";
// import axios from "axios"
// export default function RegForm() {
//   const [state, setState] = useState({
//     name: "",
//     email: "",
//     phone:"",
//     place:"",
//     district:"",
//     state:"",
//     role:"",
//     date:"",
//     jdate:"",
//     exp:"",
//     password:""

//   });
//   const handleChange = (e) => {

//     const value = e.target.value;
//     setState({
//       ...state,
//       [e.target.name]: value
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userData = {
//         name: state.name,
//         email: state.email,
//         phone:state.place,
//     place:state.place,
//     district:state.district,
//     state:state.state,
//     role:state.role,
//     date:state.date,
//     jdate:state.jdate,
//     exp:state.exp,
//         password:state.password,

//     }
//     axios.post(`http://localhost:3000/api/register`, userData).then((response) => {

//     console.log(response.status, response.data);
//     });
//   };

//   return(
//     <>
//     <div className="container d-flex min-vh-100 justify-content-center align-items-center ">
//     <form onSubmit={handleSubmit}>

//         <div className="mb-3">
//         <label htmlFor="name" className="form-label">Name</label>
//             <input type="text" className="form-control" id="name"   value={state.name}
// />
//           </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email address</label>
//           <input type="email" className="form-control" id="email"  value={state.email}
//             onChange={handleChange}/>
//         </div>
//         <div className="mb-3">
//             <label htmlFor="phone" className="form-label">Phone</label>
//             <input type="text" className="form-control" id="phone"  value={state.phone}
//             onChange={handleChange}/>
//           </div>
//         <div className="mb-3">
//           <label htmlFor="place" className="form-label">Place</label>
//           <input type="text" className="form-control" id="place"  value={state.place}
//             onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//             <label htmlFor="district" className="form-label">District</label>
//             <input type="text" className="form-control" id="district"/>
//           </div>
//         <div className="mb-3">
//             <label htmlFor="state" className="form-label">State</label>
//             <input type="text" className="form-control" id="state"  value={state.state}
//             onChange={handleChange}/>
//           </div>
//           <div className="mb-3">
//             <label for="role" className="form-label">Post</label>
//             <input type="text" className="form-control" id="role" value={state.role}
//             onChange={handleChange} />
//           </div>
//           <div className="mb-3">
//             <label for="Dateofbirth" className="form-label">Date of birth</label>
//             <input type="text" className="form-control" id="date" value={state.date}
//             onChange={handleChange}/>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="jdate" className="form-label">Join Date</label>
//             <input type="text" className="form-control" id="jdate" value={state.jdate}
//             onChange={handleChange}/>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exp" className="form-label">Experience</label>
//             <input type="text" className="form-control" id="exp" value={state.exp}
//             onChange={handleChange}/>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input type="password" className="form-control" id="password" value={state.password}
//             onChange={handleChange} />
//           </div>
//         <input type="Submit" value="Submit"/>
//       </form>
//       </div>

//       </>
//   );
// };

// import React, { useRef} from "react";
// import axios from "axios";
// import './reg.css'

// export default function RegFormComponent() {
//   const nameInputRef = useRef(null);
//   const emailInputRef = useRef(null);

//   const phoneInputRef =useRef(null);
//   const placeInputRef =useRef(null);
//   const districtInputRef=useRef(null);
//   const stateInputRef=useRef(null);
//   const roleInputRef=useRef(null);
//   const  dateInputRef=useRef(null);
//   const  jdateInputRef=useRef(null);
//   const expInputRef=useRef(null);

//   const cemailInputRef=useRef(null);
//   const passwordInputRef = useRef(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const name = nameInputRef.current.value;
//     const email = emailInputRef.current.value;
//     const phone=phoneInputRef.current.value;
//     const place=placeInputRef.current.value;
//     const district=districtInputRef.current.value;
//     const  state=stateInputRef.current.value;
//     const role=roleInputRef.current.value;
//     const date=dateInputRef.current.value;
//     const jdate=jdateInputRef.current.value;
//     const exp=expInputRef.current.value;
//     const password = passwordInputRef.current.value;

//     const cemail=cemailInputRef.current.value;
//     // nameInputRef.current.value = '';
//     // emailInputRef.current.value = '';
//     // phoneInputRef.current.value='';
//     // passwordInputRef.current.value = '';
//     const userData={name,email,phone,place,district,state,role,date,jdate,exp,password,cemail}
//     console.log(userData)
// axios.post(`http://localhost:3000/api/register`,userData)
// .then ((response)=>{
//    console.log(response.data)
//    alert("Registered")
// })
// .catch((error)=>{
//   console.log("get eror:",error.message? error.message:error)

// })

//   };

//   return(
//     <>
//     <h3 style={{textAlign:'center',padding:20,color:"black"}}>Employee Registeration Form</h3>
//    <div className="regfrm" >
//     <div className="container mx-auto col-sm-12 col-md-12 col-lg-5 s ">

//     <form onSubmit={handleSubmit}>

//         <div className="shadow-lg bg-body rounded" style={{ backgroundColor:"white",opacity:0.75}}>
//         <div>
//         <p style={{textAlign:"center",margin:10}}>PERSONAL INFORMATION</p>
//       </div>
//         <div className="mb-3 "  style={{padding:20}}>
//         <label htmlFor="name" className="form-label">Name</label>
//             <input type="text" className="form-control" id="name" name='name'  ref={nameInputRef}/>
//           </div>
//         <div className="mb-3 " style={{padding:20}}>
//           <label htmlFor="email" className="form-label"> Personal Email </label>
//           <input type="email" className="form-control" id="email" name='email' ref={emailInputRef}/>
//         </div>
//         <div className="mb-3" style={{padding:20}}>
//             <label htmlFor="phone" className="form-label">Phone</label>
//             <input type="text" className="form-control" id="phone" name='phone' ref={phoneInputRef}/>
//           </div>
//         <div className="mb-3" style={{padding:20}}>
//           <label htmlFor="place" className="form-label">Place</label>
//           <input type="text" className="form-control" id="place" name='place'  ref={placeInputRef} />
//         </div>
//         <div className="mb-3" style={{padding:20}}>
//             <label htmlFor="district" className="form-label">District</label>
//             <input type="text" className="form-control" id="district" name='district' ref={districtInputRef}/>
//           </div>
//         <div className="mb-3" style={{padding:20}}>
//             <label htmlFor="state" className="form-label">State</label>
//             <input type="text" className="form-control" id="state" name='state' ref={stateInputRef}/>
//           </div>

//           <div className="mb-3" style={{padding:20}}>
//             <label htmlFor="Dateofbirth" className="form-label">Date of birth</label>
//             <input type="text" className="form-control" id="date"  name='date' ref={dateInputRef}/>
//           </div>

//           <div>
//         <p style={{textAlign:"center",margin:10}}>COMPANY DETAILS</p>
//       </div>

//           <div className="mb-3" style={{padding:20}}>
//             <label htmlFor="role" className="form-label">Post</label>
//             <input type="text" className="form-control" id="role"  name='role' ref={roleInputRef}/>
//           </div>
//           <div className="mb-3" style={{padding:20}}>
//             <label htmlFor="jdate" className="form-label">Join Date</label>
//             <input type="text" className="form-control" id="jdate" name='jdate' ref={jdateInputRef}/>
//           </div>
//         <div className="mb-3 " style={{padding:20}}>
//           <label htmlFor="cemail" className="form-label">Email address</label>
//           <input type="email" className="form-control" id="cemail"  ref={cemailInputRef}/>
//         </div>
//         <div className="mb-3" style={{padding:20}}>
//             <label htmlFor="exp" className="form-label">Experience</label>
//             <input type="text" className="form-control" id="exp" name='exp' ref={expInputRef}/>
//           </div>
//           <div className="mb-3" style={{padding:20}}>
//             <label htmlFor="" className="form-label">Password</label>
//             <input type="password" className="form-control" id="password" name='password' ref={passwordInputRef}  />
//           </div>

//         <input  style={{margin:20}}  type="Submit" value="Submit"/>
//         </div>
//       </form>
//       </div>
//       </div>

//       </>
//   );
// };

// ..............formik.................

// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import axios from "axios";
// import "./reg.css";

// export default function RegFormComponent() {
//   const initialValues = {
//     name: "",
//     email: "",
//     phone: "",
//     place: "",
//     district: "",
//     state: "",
//     role: "",
//     date: "",
//     jdate: "",
//     exp: "",
//     cemail: "",
//   };

//   const handleSubmit = async (values, { resetForm }) => {
//     try {
//       const response = await axios.post(
//         `http://localhost:3000/api/register`,
//         values
//       );
//       console.log("Form Submitted", response.data);
//       resetForm();
//       alert("Registered");
//     } catch (error) {
//       console.error("Not Submitted", error);
//     }
//   };

//   const validate = (values) => {
//     const errors = {};
//     if (!values.name) {
//       errors.name = "Required";
//     } else if (values.name.length < 2) {
//       errors.firstName = "Invalid name";
//     }

//     if (!values.email) {
//       errors.email = "Required";
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//     ) {
//       errors.email = "Invalid email address";
//     }

//     if (!values.phone) {
//       errors.phone = "Required";
//     }
//     // else if (
//     //   !/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/.test(
//     //     values.contact
//     //   )
//     // ) {
//     //   errors.phone = "Invalid phone number";
//     // }
//     if (!values.cemail) {
//       errors.cemail = "Required";
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//     ) {
//       errors.email = "Invalid email address";
//     }
//     if (!values.place && !values.district && !values.state && !values.date  && !values.role && !values.jdate && !values.exp && !values.jdate) {
//       errors.place = "Required";
//       errors.district = "Required";
//       errors.state= "Required";
//       errors.date="Required";
//       errors.role= "Required";
//       errors.jdate="Required";
//       errors.exp=  "Required";
//     }
//     if(!values.password){
//       errors.password='Required'
//     }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/.test(values.password)){
//       errors.password='Invalid password'
//     }

//     return errors;
//   };

//   return (
//     <>
//       <h3 style={{ textAlign: "center", padding: 20, color: "black" }}>
//         Employee Registeration Form
//       </h3>
//       <div className="regfrm">
//         <div className="container mx-auto col-sm-12 col-md-12 col-lg-5">
//           <Formik
//             initialValues={initialValues}
//             onSubmit={handleSubmit}
//             validate={validate}
//           >
//             {({ errors, touched, isValidating }) => (
//               <Form>
//                 <div
//                   className="shadow-lg bg-body rounded"
//                   style={{ backgroundColor: "white", opacity: 0.75 }}
//                 >
//                   <div>
//                     <p style={{ textAlign: "center", margin: 10 }}>
//                       PERSONAL INFORMATION
//                     </p>
//                   </div>
//                   <div className="mb-3 " style={{ padding: 20,color:"red"}}>*
//                     <label htmlFor="name" className="form-label" style={{ color:"black"}}>
//                       Name
//                     </label>
//                     <Field type="text" id="name" name = "name" className="form-control"/>
//               <ErrorMessage name="name" component="div" style={{color:"red"}}/>

//                   </div>
//                   <div className="mb-3 " style={{ padding: 20,color:"red"}}>*
//                     <label htmlFor="email" className="form-label" style={{ color:"black"}}>

//                       Personal Email
//                     </label>
//                     <Field type="email" id="email" name = "email" className="form-control" />
//               <ErrorMessage name="email" component="div" style={{color:"red"}}/>
//                   </div>
//                   <div className="mb-3" style={{ padding: 20,color:"red"}}>*
//                     <label htmlFor="phone" className="form-label" style={{ color:"black"}}>
//                       Phone
//                     </label>
//                     <Field type="text" id="phone" name = "phone" className="form-control" />
//               <ErrorMessage name="phone" component="div" style={{color:"red"}}/>
//                   </div>
//                   <div className="mb-3" style={{ padding: 20,color:"red"}}>*
//                     <label htmlFor="place" className="form-label" style={{ color:"black"}}>
//                       Place
//                     </label>
//                     <Field type="text" id="place" name = "place" className="form-control" />
//               <ErrorMessage name="place" component="div" style={{color:"red"}}/>
//                   </div>
//                   <div className="mb-3" style={{ padding: 20,color:"red"}}>*
//                     <label htmlFor="district" className="form-label" style={{ color:"black"}}>
//                       District
//                     </label>
//                     <Field type="text" id="district" name = "district" className="form-control" />
//               <ErrorMessage name="district" component="div" style={{color:"red"}}/>
//                   </div>
//                   <div className="mb-3" style={{ padding: 20,color:"red"}}>*
//                     <label htmlFor="state" className="form-label" style={{ color:"black"}}>
//                       State
//                     </label>
//                     <Field type="text" id="state" name = "state" className="form-control"/>
//               <ErrorMessage name="state" component="div" style={{color:"red"}}/>
//                   </div>

//                   <div className="mb-3"style={{ padding: 20,color:"red"}}>*
//                     <label htmlFor="Dateofbirth" className="form-label" style={{ color:"black"}}>
//                       Date of birth
//                     </label>
//                     <Field type="text" id="date" name = "date" className="form-control" />
//               <ErrorMessage name="date" component="div" style={{color:"red"}}/>
//                   </div>

//                   <div>
//                     <p style={{ textAlign: "center", margin: 10 }}>
//                       COMPANY DETAILS
//                     </p>
//                   </div>

//                   <div className="mb-3" style={{ padding: 20,color:"red"}}>*
//                     <label htmlFor="role" className="form-label" style={{ color:"black"}}>
//                       Post
//                     </label>
//                     <Field type="text" id="role" name = "role" className="form-control"/>
//               <ErrorMessage name="role" component="div" style={{color:"red"}}/>
//                   </div>
//                   <div className="mb-3" style={{ padding: 20,color:"red"}}>*
//                     <label htmlFor="jdate" className="form-label" style={{ color:"black"}}>
//                       Join Date
//                     </label>
//                     <Field type="text" id="jdate" name = "jdate" className="form-control" />
//               <ErrorMessage name="jdate" component="div" style={{color:"red"}}/>
//                   </div>
//                   <div className="mb-3 " style={{ padding: 20,color:"red"}}>*
//                     <label htmlFor="cemail" className="form-label" style={{ color:"black"}}>
//                       Email address
//                     </label>
//                     <Field type="email" id="cemail" name = "cemail" className="form-control" />
//               <ErrorMessage name="cemail" component="div" style={{color:"red"}}/>
//                   </div>
//                   <div className="mb-3" style={{ padding: 20,color:"red"}}>*
//                     <label htmlFor="exp" className="form-label" style={{ color:"black"}}>
//                       Experience
//                     </label>
//                     <Field type="text" id="exp" name = "exp" className="form-control"/>
//               <ErrorMessage name="exp" component="div"  style={{color:"red"}}/>
//                   </div>
//                   <div className="mb-3" style={{ padding: 20,color:"red"}}>*
//                     <label htmlFor="password" className="form-label" style={{ color:"black"}}>
//                       Password
//                     </label>
//                     <Field type="password" id="password" name = "password" className="form-control"/>
//               <ErrorMessage name="password" component="div" style={{color:"red"}}/>
//                   </div>

//                   <button className="btn btn-success m-3" type="submit">Submit</button>
//                 </div>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </>
//   );
// }

// .............................yup.......................
import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import axios from "axios";
import "./reg.css";
import SuccessComponent from "./SuccessComponent";
import ErrorComponent from "./ErrorComponent";
import Loading from "./Loading";

export default function RegFormComponent() {
  const [serverSuccess, setServerSuccess] = useState("");
  const [serverError, setServeError] = useState("");
  const [validationMsg, setvalidationMsg] = useState("");
  const [backendError, setbackendError] = useState({});
  const [loading, setLoading] = useState();
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    district: "",
    role: "",
    jdate: "",
  };

  const handleSubmit = async (values, { setErrors, resetForm }) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:3000/employee`,
        values
      );

      console.log("Form Submitted", response.data);

      // setServerSuccess(response.data.success)
      // if (response.data.success) {
      //   setServerSuccess(true);
      // } else {
      //   console.log("response.data.message::", response.data.error);
      //   setvalidationMsg(response.data.message);
      //   SetServeError(true);
      //   // setServerSuccess(false)
      // }
      if (response.data.error) {
        setbackendError(response.data.error);
        setErrors(response.data.error);
        setvalidationMsg(response.data.message);
        setServeError(true);
        setServerSuccess(false);
      } else if (response.data.success) {
        setServerSuccess(true);
        setvalidationMsg(response.data.message);
      }
      resetForm();
      // alert("Registered");
    } catch (error) {
      console.error("Not Submitted", error);
      setServeError(true);
      console.log("response.data.errors", response.data.errors);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };
  //  const  handleClose =()=>{
  //   serverSuccess=null;
  //  }

  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <h3 style={{ textAlign: "center", padding: 20, color: "gray" }}>
              Employee Registeration Form
            </h3>
            <div className="regfrm">
              <div className="container mx-auto col-sm-12 col-md-12 col-lg-5">
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={object().shape({
                    name: string()
                      .min(2, "Too Short!")
                      .max(50, "Too Long!")
                      .required("Required"),
                    email: string().email().required("Required"),

                    phone: string()
                      // .typeError("That doesn't look like a phone number")
                      // .positive("A phone number can't start with a minus")
                      // .integer("A phone number can't include a decimal point")
                      .matches(
                        /^[6-9]\d{9}$/,
                        "Please enter valid phone number."
                      )
                      .min(10, "Invalid phone number,it must contain 10 digit")
                      .required("Required"),
                    district: string().required("Required"),

                    role: string().required("Required"),
                    jdate: string().required("Required"),
                  })}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <Form>
                      <div
                        className="shadow-lg bg-body rounded"
                        style={{ backgroundColor: "white", opacity: 0.75 }}
                      >
                        <div
                          className="mb-3 "
                          style={{ padding: 20, color: "red" }}
                        >
                          *
                          <label
                            htmlFor="name"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Name
                          </label>
                          <Field
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.name && <div>{backendError.name}</div>}
                          {backendError.name_empty && (
                            <div>{backendError.name_empty}</div>
                          )}
                        </div>
                        <div
                          className="mb-3 "
                          style={{ padding: 20, color: "red" }}
                        >
                          *
                          <label
                            htmlFor="email"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Email
                          </label>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.email_exist && (
                            <div>{backendError.email_exist}</div>
                          )}
                          {backendError.email && (
                            <div>{backendError.email}</div>
                          )}
                          {backendError.email_empty && (
                            <div>{backendError.email_empty}</div>
                          )}
                          {backendError.email_invalid && (
                            <div>{backendError.email_invalid}</div>
                          )}
                        </div>
                        <div
                          className="mb-3"
                          style={{ padding: 20, color: "red" }}
                        >
                          *
                          <label
                            htmlFor="phone"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Phone
                          </label>
                          <Field
                            type="text"
                            id="phone"
                            name="phone"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.phone_empty && (
                            <div>{backendError.phone_empty}</div>
                          )}
                        </div>

                        <div
                          className="mb-3"
                          style={{ padding: 20, color: "red" }}
                        >
                          *
                          <label
                            htmlFor="district"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            District
                          </label>
                          <Field
                            type="text"
                            id="district"
                            name="district"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="district"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.district_empty && (
                            <div>{backendError.district_empty}</div>
                          )}
                        </div>

                        <div
                          className="mb-3"
                          style={{ padding: 20, color: "red" }}
                        >
                          *
                          <label
                            htmlFor="role"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Post
                          </label>
                          <Field
                            type="text"
                            id="role"
                            name="role"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="role"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.role_empty && (
                            <div>{backendError.role_empty}</div>
                          )}
                        </div>
                        <div
                          className="mb-3"
                          style={{ padding: 20, color: "red" }}
                        >
                          *
                          <label
                            htmlFor="jdate"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Join Date
                          </label>
                          <Field
                            type="text"
                            id="jdate"
                            name="jdate"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="jdate"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.jdate_empty && (
                            <div>{backendError.jadte_empty}</div>
                          )}
                        </div>

                        <button className="btn btn-success m-3" type="submit">
                          Submit
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            {serverSuccess && (
        <SuccessComponent
          message={validationMsg}
          onClose={() => setServerSuccess(false)}
        />
      )}
      {serverError && (
        <ErrorComponent
          message={validationMsg}
          onClose={() => setServeError("")}
        />
      )}
          </div>
          
        )}
      </div>

      
    </>
  );
}
