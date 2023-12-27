// EditForm.js
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import validationSchema from "./validationSchema";

const EditForm = ({ initialValues, onSubmit, onClick,backendError }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
    enableReinitialize: true,
  });
  const handleDelete = () => {
    onClick();
  };
  console.log();
  return (
    <>
      <h3 style={{ textAlign: "center", padding: 20, color: "white" }}>
        Details of {initialValues.name}
      </h3>
      <div className="regfrm">
        <div className="container mx-auto col-sm-12 col-md-12 col-lg-5 s ">
          <form onSubmit={formik.handleSubmit}>
            <div
              className="shadow-lg bg-body rounded"
              style={{ backgroundColor: "white", opacity: 0.75 }}
            >
              <div className="mb-3 " style={{ padding: 20 }}>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <div style={{ color: "red" }}>{formik.errors.name}</div>
                )}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                )}
                  {backendError.email_exist && <div>{backendError.email_exist}</div>}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.district}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.role}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.jdate}
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
                onClick={handleDelete}
                type="button"
                className="btn btn-success"
                style={{ color: "white" }}
              >
                Delete
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditForm;
