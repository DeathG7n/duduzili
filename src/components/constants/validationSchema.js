import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is a required field"),
  last_name: Yup.string().required("Last Name is a required field"),
  first_name: Yup.string().required("First Name is required"),
  password: Yup.string()
    .required("Password is a required field")
    .min(4, "Password should be above 4 characters "),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is a required field"),
  password: Yup.string()
    .required("Password is a required field")
    .min(4, "Password should be above 4 characters "),
});
