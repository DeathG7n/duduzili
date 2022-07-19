import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  StyleButton,
  Container,
  LogoImg,
  LogoBox,
  LogoText,
  LogoIcon,
  GoogleButton,
  Input,
  FormBox,
  ErrorText,
  TitleText,
  BottomText,
  AltTextBox,
  VisibilityIconBox,
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
            <LogoBox
            style={{
              marginTop : "-8px"
            }}
            >
              <LogoImg src={Logo} alt="logo" />
              <LogoText>duduzili</LogoText>
            </LogoBox>
            <LogoIcon src={Logo2} alt="logo" />
            <TitleText
            style={{
              marginBottom : "60px",
            }}
            >Sign up</TitleText>
            {/* <GoogleButton>
              <img src={Google} alt="logo" />
              <p>CONTINUE WITH GOOGLE</p>
            </GoogleButton>
            <AltTextBox>
              <hr></hr>
              <p>OR</p>
              <hr></hr>
            </AltTextBox> */}
            <Input
              type="text"
              placeholder="Firstname"
              name="first_name"
              value={values.first_name}
              onChange={handleChange}
              style={{
                paddingLeft : "40px",
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
                paddingLeft : "40px",
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
                paddingLeft : "40px",
                marginBottom : "5px"
              }}
            />
            {errors.email && touched.email && (
              <ErrorText>{errors.email}</ErrorText>
            )}
            <InputBox>
              {/* {type === true ? (
                <VisibilityIconBox onClick={handleSetType}>
                  <VisibilityOffIcon style={{ color: "#769C8F" }} />
                </VisibilityIconBox>
              ) : (
                <VisibilityIconBox onClick={handleSetType}>
                  <VisibilityIcon style={{ color: "#769C8F" }} />
                </VisibilityIconBox>
              )} */}
              <Input
                type={type === true ? "password" : "text"}
                placeholder="Password"
                mt="17px"
                smmt="10px"
                name="password"
                value={values.password}
                onChange={handleChange}
                style={{
                  paddingLeft : "20px"
                }}
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
