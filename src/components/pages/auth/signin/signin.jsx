import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  StyleButton,
  Container,
  LogoImg,
  LogoText,
  LogoBox,
  LogoIcon,
  GoogleButton,
  Input,
  FormBox,
  TitleText,
  BottomText,
  AltTextBox,
  ForgotText,
  VisibilityIconBox,
  InputBox,
  ErrorText,
} from "../signup/signupStyles";
import Logo from "../../../assets/new-logo.png";
import Logo2 from "../../../assets/logoIcon.png";
import Google from "../../../assets/google.png";
import { loginValidationSchema } from "../../../constants/validationSchema";
import { usePostRequest } from "../../../api/api";
import { DataContext } from "../../../api/context";
import { useFormik } from "formik";
import Loader from "../../../constants/spinnerLoader";
import SnackBar from "../../../constants/snackbar";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [type, setType] = useState(true);

  const {
    state: { isLoggedIn },
  } = DataContext();

  const history = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      return history("/user");
    } else {
      return;
    }
  }, []);

  const handleSetType = () => {
    setType((prop) => !prop);
  };

  const { postRequest, loading, openSnackbar, message, setOpenSnackbar } =
    usePostRequest();

  const { values, handleChange, errors, touched, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginValidationSchema,

    onSubmit(values) {
      postRequest("signin/", values);
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
        {/* <div > */}
          <FormBox>
            <LogoBox>
                <LogoImg src={Logo} alt="logo" />
                <LogoText>duduzili</LogoText>
            </LogoBox>
            
            {/* <LogoIcon src={Logo2} alt="logo" /> */}
            <TitleText>Sign In</TitleText>
            {/* <GoogleButton>
              <img src={Google} alt="logo" />
              <p>CONTINUE WITH GOOGLE</p>
            </GoogleButton> */}
            {/* <AltTextBox>
              <hr></hr>
              <p>OR</p>
              <hr></hr>
            </AltTextBox> */}
            <Input
              type="email"
              placeholder="Email Address or Username"
              name="email"
              value={values.email}
              onChange={handleChange}
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
                mt="19px"
                smmt="10px"
                onChange={handleChange}
                value={values.password}
                name="password"
              />
            </InputBox>

            {errors.password && touched.password && (
              <ErrorText>{errors.password}</ErrorText>
            )}
            <ForgotText>
              {" "}
              <Link
                style={{
                  textDecoration: "none",
                  color: "#29bb89",
                }}
                to="/reset-password"
              >
                Forgot Password?
              </Link>
            </ForgotText>
            <StyleButton type="button" onClick={handleSubmit}>
              Sign In
            </StyleButton>
            <BottomText smmt="5px">
              Don't have an account?{" "}
              <Link
                style={{
                  textDecoration: "none",
                  color: "#29bb89",
                }}
                to="/signup"
              >
                Sign Up
              </Link>
            </BottomText>
          </FormBox>
        {/* </div> */}
      </Container>
    </>
  );
};

export default Index;
