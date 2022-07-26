import React, { useState } from "react";

import {
  Container,
  ContentBox,
  SettingsBox,
  BodyBox,
  TitleBox,
  BodyHeader,
  BodyTitleBox,
  Menu,
  BodyContent,
} from "./settingStyles";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import Account from "./account/account";
import Chat from "./chat/chat";
import Feed from "./feeds/feeds";
import Safety from "./safety/safety";
import Notifications from "./nofications/notifications";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import EmailModal from "./account/modal/emailModal/emailModal";
import PasswordModal from "./account/modal/passwordModal/passwordModal";
import SettingsMobileView from "./mobileView/index"

const Index = () => {
  const location = useLocation().pathname;

  const [openEmailModal, setOpenEmailModal] = useState(false);
  const [openPasswordModal, setOpenPasswordModal] = useState(false);

  const handleOpenEmailModal = () => {
    setOpenEmailModal((props) => !props);
  };

  const handleOpenPasswordModal = () => {
    setOpenPasswordModal((props) => !props);
  };

  return (
    <>
      {/* Open modals when prompted */}
      {openEmailModal && <EmailModal handleOpenModal={handleOpenEmailModal} />}
      {openPasswordModal && (
        <PasswordModal handleOpenModal={handleOpenPasswordModal} />
      )}

      {/* Mobile view settings component */}
      <SettingsMobileView />

      <Container>
        <ContentBox>
          <SettingsBox>
            <TitleBox>
              <h3>Settings</h3>
            </TitleBox>
            <Link
              to="/user/settings"
              style={{ textDecoration: "none", color: "#10221c" }}
            >
              <Menu>
                <p>Account</p>
                <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
              </Menu>
            </Link>

            <Link
              to="/user/settings/safety"
              style={{ textDecoration: "none", color: "#10221c" }}
            >
              <Menu>
                <p>Safety & Privacy</p>
                <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
              </Menu>
            </Link>

            <Link
              to="/user/settings/feeds"
              style={{ textDecoration: "none", color: "#10221c" }}
            >
              <Menu>
                <p>Feeds</p>
                <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
              </Menu>
            </Link>

            <Link
              to="/user/settings/notification"
              style={{ textDecoration: "none", color: "#10221c" }}
            >
              <Menu>
                <p>Notifications</p>
                <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
              </Menu>
            </Link>
            <Link
              to="/user/settings/chat"
              style={{ textDecoration: "none", color: "#10221c" }}
            >
              <Menu>
                <p>Chat & Messages</p>
                <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
              </Menu>
            </Link>
          </SettingsBox>
          <BodyBox>
            <BodyTitleBox>
              <BodyHeader>
                <h3>
                  {location.includes("safety")
                    ? "Safety"
                    : location.includes("chat")
                    ? "Chat"
                    : location.includes("feeds")
                    ? "Feeds"
                    : location.includes("notification")
                    ? "Notifications"
                    : "Account"}
                </h3>
              </BodyHeader>
            </BodyTitleBox>

            <BodyContent>
              <Routes>
                <Route exact path="/" element={<Account
                    handleOpenEmailModal={handleOpenEmailModal}
                    handleOpenPasswordModal={handleOpenPasswordModal}
                  />} />

                <Route exact path="chat" element={<Chat />} />

                <Route exact path="feeds" element={<Feed />} />

                <Route exact path="notification" element={<Notifications />} />

                <Route exact path="safety" element={<Safety />} />
                <Route path="*" element={<Navigate to="/" /> } />
              </Routes>
            </BodyContent>
          </BodyBox>
        </ContentBox>
      </Container>
    </>
  );
};

export default Index;
