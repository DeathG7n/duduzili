import React from "react";

import {
  Container,
  ContentBox,
  SettingsBox,
  TitleBox,
  Menu,
} from "./mSettingsStyles";
import { Link, useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Index = () => {
  const history = useNavigate();
  return (
    <>
      <Container>
        <ContentBox> 
          <SettingsBox>
            <TitleBox>
              {/* <img
                src={arrowBack}
                alt="arrow back icon"
                onClick={() => history.goBack()}
              /> */}
              <h3>Settings</h3>
            </TitleBox>

            <Link
                to="/user/msettings/account"
                style={{ textDecoration: "none", color: "#10221c" }}
            >
              <Menu>
                <p>Account</p>
                <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
              </Menu>
            </Link>

            <Link
                to="/user/msettings/safety"
                style={{ textDecoration: "none", color: "#10221c" }}
            >
              <Menu>
                <p>Safety & Privacy</p>
                <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
              </Menu>
            </Link>

            <Link
                to="/user/msettings/feeds"
                style={{ textDecoration: "none", color: "#10221c" }}
            >
              <Menu>
                <p>Feeds</p>
                <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
              </Menu>
            </Link>

            <Link
                to="/user/msettings/notification"
                style={{ textDecoration: "none", color: "#10221c" }}
            >
              <Menu>
                <p>Notifications</p>
                <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
              </Menu>
            </Link>

            <Link
                to="/user/msettings/chat"
                style={{ textDecoration: "none", color: "#10221c" }}
            >
              <Menu>
                <p>Messages</p>
                <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
              </Menu>
            </Link>

            <Link
                to="/user/msettings/blocked"
                style={{ textDecoration: "none", color: "#10221c" }}
            >
              <Menu>
                <p>Blocked Users</p>
                <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
              </Menu>
            </Link>

            <Link
                to="/user/msettings/muted"
                style={{ textDecoration: "none", color: "#10221c" }}
            >
              <Menu>
                <p>Muted Users</p>
                <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
              </Menu>
            </Link>
          </SettingsBox>
        </ContentBox>
      </Container>
    </>
  );
};

export default Index;
