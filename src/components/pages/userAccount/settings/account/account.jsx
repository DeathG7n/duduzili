import React, { useEffect } from "react";

import {
  Container,
  TextBox,
  Button,
  Content,
  Accounts,
  Rule,
  SocialBox,
  Socials,
  SocialText,
} from "./accountStyles";

import facebook from "../../../../assets/facebook.png";
import twitter from "../../../../assets/twitter.png";
import apple from "../../../../assets/apple.png";

import { useGetRequest } from "../../../../api/api"
import { DataContext } from "../../../../api/context";
import { useNavigate } from "react-router-dom";

const Index = ({ handleOpenEmailModal, handleOpenPasswordModal}) => {
  const{dispatch} = DataContext()
  const { getRequest, data }=useGetRequest()
  const history = useNavigate()
  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    history("/")
  };
  useEffect(()=>{
    // pending not completed by the backend
    getRequest("accounts_settings_page/")
  },[])

  return (
    <>
      <Container>
        <Content mt="20px">
          <TextBox>
            <p>Email Address</p>
            <span>duduzili@gmail.com</span>
          </TextBox>

          <Button
            width="110px"
            height="35px"
            border="1px solid #29BB89"
            color="#29BB89"
            br="20px"
            bc="white"
            fw="600"
            onClick={handleOpenEmailModal}
          >
            Change
          </Button>
        </Content>

        <Content mt="40px">
          <TextBox>
            <p>Change Password</p>
            <span>Password must be at least 6 characters long</span>
          </TextBox>

          <Button
            width="110px"
            height="35px"
            border="1px solid #29BB89"
            color="#29BB89"
            br="20px"
            bc="white"
            fw="600"
            onClick={handleOpenPasswordModal}
          >
            Change
          </Button>
        </Content>

        <Content mt="40px">
          <TextBox>
            <p>Sign Out</p>
            <span>Sign out of all the browsers</span>
          </TextBox>

          <Button
            width="110px"
            height="35px"
            border="1px solid #29BB89"
            color="#29BB89"
            br="20px"
            bc="white"
            fw="600"
            onClick={handleLogOut}
          >
            Sign Out
          </Button>
        </Content>

        <Content mt="40px">
          <TextBox>
            <p>Deactivate Account</p>
          </TextBox>

          <Button
            width="170px"
            height="35px"
            border="1px solid #BD2000"
            color="#BD2000"
            br="20px"
            bc="white"
            fw="600"
          >
            Deactivate Account
          </Button>
        </Content>

        <Accounts>
          <h4>CONNECTED ACCOUNT</h4>
          <Rule></Rule>
        </Accounts>
        {/* <br/> */}
        <SocialBox>
          <Socials>
            <img src={facebook} alt="facebook icon" />
            <p>Facebook</p>
          </Socials>

          <SocialText ml="40px">Connect Facebook Account</SocialText>
        </SocialBox>

        <SocialBox>
          <Socials>
            <img src={twitter} alt="facebook icon" />
            <p>Twiter</p>
          </Socials>

          <SocialText ml="65px">Connect Twitter Account</SocialText>
        </SocialBox>

        <SocialBox pb="50px">
          <Socials>
            <img src={apple} alt="facebook icon" />
            <p>Apple</p>
          </Socials>

          <SocialText ml="70px">Connect Apple Account</SocialText>
        </SocialBox>
      </Container>
    </>
  );
};

export default Index;
