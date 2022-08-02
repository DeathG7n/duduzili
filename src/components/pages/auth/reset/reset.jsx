import React from "react";
import { Link } from "react-router-dom";
import {
  StyleButton,
  Container,
  LogoImg,
  LogoBox,
  LogoText,
  LogoIcon,
  Input,
  FormBox,
  TitleText,
  BottomText,
  LinkText,
  ResetText,
} from "../signup/signupStyles";
import Logo from "../../../assets/new-logo.png";

const Index = () => {
  return (
    <Container>
      <div>
        <FormBox>
          <LogoBox>
              <LogoImg src={Logo} alt="logo" />
              <LogoText>duduzili</LogoText>
          </LogoBox>
          <TitleText>Reset Password</TitleText>

          <ResetText>
            Tell us the email address associated with your duduzili account, and we’ll send you an email with a link to reset your password.
          </ResetText>
          <Input type="email" placeholder="Email Address" mt="17px" smmt="10px" />

          <StyleButton  style={{ marginTop: "40px" }}>Reset</StyleButton>
          <BottomText>
            Don't have an email or need assistance logging in?{" "}
            <span
              style={{cursor: "pointer", color: "#29bb89" }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "#29bb89",
                }}
                to="/user/help"
              > Get help?{" "}</Link>
             
            </span>
          </BottomText>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              color: " #29bb89",
            }}
          >
            <LinkText mr="5px">
              {" "}
              <Link
                style={{
                  textDecoration: "none",
                  color: "#29bb89",
                }}
                to="/"
              >
                Sign In
              </Link>
            </LinkText>
            <span style={{ marginLeft: "3px" }}>.</span>
            <LinkText ml="2px">
              <Link
                style={{
                  textDecoration: "none",
                  color: "#29bb89",
                }}
                to="/signup"
              >
                Sign Up
              </Link>
            </LinkText>
          </div>
        </FormBox>
      </div>
    </Container>
  );
};

export default Index;
