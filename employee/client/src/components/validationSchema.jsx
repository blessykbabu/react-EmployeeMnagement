// validationSchema.js
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Name is required'),
  
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup.string()
  .matches(/^[6-9]\d{9}$/, "Please enter valid phone number.").required('phone is required'),
  district:yup.string().required("District is required"),
  role:yup.string().required("District is required"),
  jdate:yup.string().required("Join date is required"),
});

export default validationSchema;
