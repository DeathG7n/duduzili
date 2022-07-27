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

import { useGetRequest } from "../../../../api/api"
import { DataContext } from "../../../../api/context";
import { useNavigate } from "react-router-dom";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';

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
            <span>{data?.email}</span>
          </TextBox>

          <Button
            width="110px"
            height="35px"
            border="1px solid #29BB89"
            color="#29BB89"
            br="20px"
            bc="white"
            fw="600"
            fs= "14px"
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
            fs= "14px"
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
            fs= "14px"
            onClick={handleLogOut}
          >
            Sign Out
          </Button>
        </Content>

        <Content mt="40px">
          <TextBox>
            <p>Deactivate Account</p>
            <span>Temporarily disable your account</span>
          </TextBox>

          <Button
            width="180px"
            height="35px"
            border="1px solid #BD2000"
            color="#BD2000"
            br="20px"
            bc="white"
            fw="600"
            hc="white"
            hbc= "#BD2000"
            fs= "16px"
          >
            Deactivate Account
          </Button>
        </Content>

        <Content mt="40px">
          <TextBox>
            <p style={{color: "red"}}>Delete your Account</p>
            <span>Delete your account and all your data completely. These action is not reversible.</span>
          </TextBox>

          <Button
            width="180px"
            height="35px"
            border="1px solid #BD2000"
            color="#BD2000"
            br="20px"
            bc="white"
            fw="600"
            hc="white"
            hbc= "#BD2000"
            fs= "16px"
          >
            Delete Account
          </Button>
        </Content>

        <Accounts>
          <h4>CONNECTED ACCOUNT</h4>
          <Rule></Rule>
        </Accounts>
        {/* <br/> */}
        <SocialBox>
          <Socials>
            <FacebookRoundedIcon sx={{color: "#319975"}}/>
            <p>Facebook</p>
          </Socials>

          <SocialText ml="40px">Connect Facebook Account</SocialText>
        </SocialBox>

        <SocialBox>
          <Socials>
            <TwitterIcon sx={{color: "#319975"}} />
            <p>Twiter</p>
          </Socials>

          <SocialText ml="65px">Connect Twitter Account</SocialText>
        </SocialBox>

        <SocialBox pb="50px">
          <Socials>
            <AppleIcon sx={{color: "#319975"}} />
            <p>Apple</p>
          </Socials>

          <SocialText ml="70px">Connect Apple Account</SocialText>
        </SocialBox>
      </Container>
    </>
  );
};

export default Index;
