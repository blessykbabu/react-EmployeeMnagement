import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import axios from "axios";
import "./reg.css";
import SuccessComponent from "./SuccessComponent";
import ErrorComponent from "./ErrorComponent";
import Loading from "./Loading";

export default function RegAdmin() {
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
        `http://localhost:3000/api/register`,
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
              Registeration Form
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
