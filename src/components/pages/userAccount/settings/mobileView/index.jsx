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

            <Menu>
              <Link
                to="/user/msettings/account"
                style={{ textDecoration: "none", color: "#10221c" }}
              >
                <p>Account</p>
              </Link>

              <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
            </Menu>

            <Menu>
              <Link
                to="/user/msettings/safety"
                style={{ textDecoration: "none", color: "#10221c" }}
              >
                <p>Safety & Privacy</p>
              </Link>

              <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
            </Menu>

            <Menu>
              <Link
                to="/user/msettings/feeds"
                style={{ textDecoration: "none", color: "#10221c" }}
              >
                <p>Feeds</p>
              </Link>

              <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
            </Menu>

            <Menu>
              <Link
                to="/user/msettings/notification"
                style={{ textDecoration: "none", color: "#10221c" }}
              >
                <p>Notifications</p>
              </Link>

              <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
            </Menu>

            <Menu>
              <Link
                to="/user/msettings/chat"
                style={{ textDecoration: "none", color: "#10221c" }}
              >
                <p>Chat & Messages</p>
              </Link>

              <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
            </Menu>
          </SettingsBox>
        </ContentBox>
      </Container>
    </>
  );
};

export default Index;
