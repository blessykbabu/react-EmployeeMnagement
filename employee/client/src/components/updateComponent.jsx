import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import SuccessDelete from "./SuccessDelete";
import ErrorComponent from "./ErrorComponent";
import Loading from "./Loading";
import SuccessComponent from "./SuccessComponent";

function UpdateComponent() {
  const { id } = useParams("");

  const [editData, setEditData] = useState({});
  const [update, setUpdate] = useState(null);
  const [deletedata, setDeletedata] = useState(false);
  const [error, setError] = useState(false);

  const [validationMessage, setValidationMessage] = useState();
  const [backendErrors, setBackendErrors] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetails();
  }, [loading]);

  const handleupdate = () => {
    setUpdate(false);
    setLoading(true);
  };
  const handledelete = () => {
    
    setDeletedata(false);
  };
  const handleError = () => {
    setError(false);
  };
  const getDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/employee/profile/${id}`);
      formik.setValues(response.data.data);
      setEditData(response.data.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // User not found error
        console.log("User not found");
        setDeletedata(true); // Set deletedata to true to indicate user deletion
      } else {
        // Other types of errors
        console.error("Error fetching user details:", error);
        setError(true);
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  };
  
  const onDelete = async () => {
    setLoading(true)
    try {
      const response = await axios.delete(`http://localhost:3000/employee/delete/${id}`);
      if (response.data.success) {
        setDeletedata(true); // Set deletedata to true upon successful deletion
        setValidationMessage(response.data.message);
      } else {
        setError(true); // Set error in case of deletion failure
      }
      setUpdate(false);
    } catch (error) {
      setError(true); // Set error in case of request failure
      console.log("Error in delete", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    district: Yup.string().min(2, "Invalid Address").required("Required"),
    jdate: Yup.string().required("Required"),
    role: Yup.string().required("Required"),
    phone: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Please enter a valid phone number.")
      .required("Required"),
  });
 
  const formik = useFormik({
    initialValues: {
      name: editData.name || "",
      email: editData.email || "",
      phone: editData.phone || "",
      district: editData.district || "",
      role: editData.role || "",
      jdate: editData.jdate || "",
    },
    validationSchema,
    onSubmit: async (values, { setErrors, resetForm }) => {
      try {
        setLoading(true)
        const response = await axios.put(
          `http://localhost:3000/employee/update/${id}`,
          values
        );
        console.log("Form Submitted", response.data.data);
        if (response.data.errors) {
          setBackendErrors(response.data.errors);
          setErrors(response.data.errors);
          setValidationMessage(response.data.message);
          setError(true);
          setUpdate(false);
        } else if (response.data.success) {
          setUpdate(true);
          setValidationMessage(response.data.message);
        }
        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
        console.log("reached catch")
        setError(true);
      }finally{
        setTimeout(()=>{
          setLoading(false)
        },2000)
      }
    },
  });

  return (
    <>
    <div>
      {loading?(<Loading/>):(
        <div>
      <h3 style={{ textAlign: "center", padding: 20, color: "white" }}>
        {/* Details of {initialValues.name} */}
      </h3>
      <div className="regfrm">
        <div className="container mx-auto col-sm-12 col-md-12 col-lg-5 s ">
          <form onSubmit={formik.handleSubmit}>
            <div
              className="shadow-lg bg-body rounded"
              style={{ backgroundColor: "white", opacity: 0.75 }}>
              <div className="mb-3 " style={{ padding: 20 }}>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && (
                  <div style={{ color: "red" }}>{formik.errors.name}</div>
                )}
                {backendErrors.name_empty && (
                  <div>{backendErrors.name_empty}</div>
                )}
                {backendErrors.name && <div>{backendErrors.name}</div>}
              </div>
              <div className="mb-3 " style={{ padding: 20 }}>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                )}
                {backendErrors.email_empty && <div>{backendErrors.email_empty}</div>}
                {backendErrors.email && <div>{backendErrors.email}</div>}
                {backendErrors.email_invalid && <div>{backendErrors.email_invalid}</div>}
                {backendErrors.email_exist && (
                  <div>{backendErrors.email_exist}</div>
                )}
              </div>
              <div className="mb-3" style={{ padding: 20 }}>
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  className="form-control"
                  {...formik.getFieldProps("phone")}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div style={{ color: "red" }}>{formik.errors.phone}</div>
                )}
              </div>

              <div className="mb-3" style={{ padding: 20 }}>
                <label htmlFor="district" className="form-label">
                  District
                </label>
                <input
                  id="district"
                  name="district"
                  type="district"
                  className="form-control"
                  {...formik.getFieldProps("district")}
                />
                {formik.touched.district && formik.errors.district && (
                  <div style={{ color: "red" }}>{formik.errors.district}</div>
                )}
              </div>

              <div className="mb-3" style={{ padding: 20 }}>
                <label htmlFor="role" className="form-label">
                  Post
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  className="form-control"
                  {...formik.getFieldProps("role")}
                />
                {formik.touched.role && formik.errors.role && (
                  <div style={{ color: "red" }}>{formik.errors.role}</div>
                )}
              </div>
              <div className="mb-3" style={{ padding: 20 }}>
                <label htmlFor="jdate" className="form-label">
                  Join Date
                </label>
                <input
                  id="jdate"
                  name="jdate"
                  type="text"
                  className="form-control"
                  {...formik.getFieldProps("jdate")}
                />
                {formik.touched.jdate && formik.errors.jdate && (
                  <div style={{ color: "red" }}>{formik.errors.jdate}</div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-success m-2"
                style={{ color: "white" }}
              >
                Update
              </button>

              <button
                onClick={onDelete}
                type="button"
                className="btn btn-success"
                style={{ color: "white" }}
              >
                Delete
              </button>
              {/* </Link> */}
            </div>
            {/* {update && <SuccessUpdate onClose={handleupdate}/>}
            {deletedata &&  <SuccessDelete onClose={handledelete}/>}
            {error && <ErrorComponent message={validationMessage} onClose={handleError}/>} */}
          </form>
        </div>
      </div>
      </div>
      )
      }
      </div>
      {update && (
        <SuccessComponent message={validationMessage} onClose={handleupdate} />
      )}
      {deletedata && (
        <SuccessDelete message={validationMessage} onClose={handledelete} />
      )}
      {error && (
        <ErrorComponent message={validationMessage} onClose={handleError} />
      )}
      
    </>
  );
}

export default UpdateComponent;
