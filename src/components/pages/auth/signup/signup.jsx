import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  StyleButton,
  Container,
  LogoImg,
  LogoBox,
  LogoText,
  Input,
  FormBox,
  ErrorText,
  TitleText,
  BottomText,
  InputBox,
} from "./signupStyles";
import { useFormik } from "formik";
import Logo from "../../../assets/new-logo.png";
import Logo2 from "../../../assets/logoIcon.png";
import Google from "../../../assets/google.png";
import { signUpValidationSchema } from "../../../constants/validationSchema";
import { usePostRequest } from "../../../api/api";
import Loader from "../../../constants/spinnerLoader";
import SnackBar from "../../../constants/snackbar";

const Index = () => {
  const [type, setType] = useState(true);

  const handleSetType = () => {
    setType((prop) => !prop);
  };

  const { postRequest, loading, openSnackbar, message, setOpenSnackbar } =
    usePostRequest();

  const { values, handleChange, errors, touched, handleSubmit } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },

    validationSchema: signUpValidationSchema,

    onSubmit(values) {
      postRequest("signup/", values);
      console.log(values);
    },
  });

  return (
    <>
      {/* open loader when request is processing */}
      {loading && <Loader />}

      {/* Open Snackbar when an error occurs */}
      <SnackBar
        setOpen={setOpenSnackbar}
        message={message}
        open={openSnackbar}
      />
      
      <Container>
        <div>
          <FormBox>
            <LogoBox>
              <LogoImg src={Logo} alt="logo" />
              <LogoText>duduzili</LogoText>
            </LogoBox>
            <TitleText>Sign up</TitleText>
            <Input
              type="text"
              placeholder="Firstname"
              name="first_name"
              value={values.first_name}
              onChange={handleChange}
              style={{
                marginBottom : "5px"
              }}
            />
            {errors.first_name && touched.first_name && (
              <ErrorText>{errors.first_name}</ErrorText>
            )}
            <Input
              type="text"
              placeholder="Surname"
              mt="15px"
              name="last_name"
              value={values.last_name}
              onChange={handleChange}
              style={{
                marginBottom : "5px"
              }}
            />
            {errors.last_name && touched.last_name && (
              <ErrorText>{errors.last_name}</ErrorText>
            )}
            <Input
              type="email"
              placeholder="Email"
              mt="17px"
              smmt="10px"
              name="email"
              value={values.email}
              onChange={handleChange}
              style={{
                marginBottom : "5px"
              }}
            />
            {errors.email && touched.email && (
              <ErrorText>{errors.email}</ErrorText>
            )}
            <InputBox>
              <Input
                type={type === true ? "password" : "text"}
                placeholder="Password"
                mt="17px"
                smmt="10px"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </InputBox>
            {errors.password && touched.password && (
              <ErrorText>{errors.password}</ErrorText>
            )}
            <StyleButton type="button" onClick={handleSubmit}
              style={{
                marginBottom : "50px"
              }}
              >
              Create 
            </StyleButton>
            {/* <BottomText>
              By clicking the button means you have agreed to the Terms and
              Conditions
            </BottomText> */}
            <BottomText smmt="20px">
              Already have an account?{" "}
              <Link
                style={{
                  textDecoration: "none",
                  color: "#29bb89",
                }}
                to="/"
              >
                Sign In
              </Link>{" "}
            </BottomText>
          </FormBox>
        </div>
      </Container>
    </>
  );
};

export default Index;
