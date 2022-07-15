import React from "react";

import {
  Container,
  TextBox,
  Content,
  Accounts,
  SocialBox,
  Socials,
  SocialText,
} from "./accountStyles";
import { useNavigate } from "react-router-dom";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import arrowBack from "../../../../../assets/arrow-right.png";

const Index = ({ handleOpenEmailModal, handleOpenPasswordModal }) => {
  const history = useNavigate();
  return (
    <>
      <Container>
        <Accounts>
          <img
            src={arrowBack}
            alt="arrow back icon"
            onClick={() => history.goBack()}
          />
          <h4>Accounts</h4>
        </Accounts>
        <Content padding="20px 15px">
          <TextBox>
            <p>Email Address</p>
            <span>duduzili@gmail.com</span>
          </TextBox>

          <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
        </Content>

        <Content padding="20px 15px">
          <TextBox>
            <p>Change Password</p>
            <span>Password must be at least 6 characters long</span>
          </TextBox>

          <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
        </Content>

        <Content padding="20px 15px">
          <TextBox>
            <p>Sign Out</p>
            <span>Sign out of all the browsers</span>
          </TextBox>

          <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
        </Content>

        <Content padding="30px 15px">
          <TextBox>
            <p>Deactivate Account</p>
          </TextBox>

          <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
        </Content>

        <SocialBox>
          <Socials>
            <p>Connect Facebook Account</p>
          </Socials>

          <SocialText>
            {" "}
            <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
          </SocialText>
        </SocialBox>

        <SocialBox>
          <Socials>
            <p>Connect Twitter Account</p>
          </Socials>

          <SocialText>
            <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
          </SocialText>
        </SocialBox>

        <SocialBox>
          <Socials>
            <p>Connect Apple Account</p>
          </Socials>

          <SocialText>
            <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
          </SocialText>
        </SocialBox>
      </Container>
    </>
  );
};

export default Index;
