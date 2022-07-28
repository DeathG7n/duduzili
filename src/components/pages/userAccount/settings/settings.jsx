import React, { useState, useRef } from "react";

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
import Blocked from "./blocked/blocked";
import Muted from "./muted/muted";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import EmailModal from "./account/modal/emailModal/emailModal";
import PasswordModal from "./account/modal/passwordModal/passwordModal";
import DeleteConfirm  from "./account/modal/deleteModal/deleteModal";
import DeactivateConfirm  from "./account/modal/deactivateModal/deactivateModal";
import SettingsMobileView from "./mobileView/index"

const Index = () => {
  const location = useLocation().pathname;

  const [openEmailModal, setOpenEmailModal] = useState(false);
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openDeactivateModal, setOpenDeactivateModal] = useState(false);

  const handleOpenEmailModal = () => {
    setOpenEmailModal((props) => !props);
  };

  const handleOpenPasswordModal = () => {
    setOpenPasswordModal((props) => !props);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal((props) => !props);
  };

  const handleOpenDeactivateModal = () => {
    setOpenDeactivateModal((props) => !props);
  };
  const deactiveRef = useRef()
  const deleteRef = useRef()
  const inputRef = useRef()

  function isConfirm() {
    if(inputRef.current.value){
      alert(inputRef.current.value)
    } else{
      return
    }
  }

  return (
    <>
      {/* Open modals when prompted */}
      {openEmailModal && <EmailModal handleOpenModal={handleOpenEmailModal} />}
      {openPasswordModal && (
        <PasswordModal handleOpenModal={handleOpenPasswordModal} />
      )}
      {openDeleteModal && <DeleteConfirm 
          deleteRef={deleteRef}
          inputRef={inputRef}
          isConfirm={isConfirm}
          handleOpenModal={handleOpenDeleteModal}
      />}
       {openDeactivateModal && <DeactivateConfirm 
          deactiveRef={deactiveRef}
          inputRef={inputRef}
          isConfirm={isConfirm}
          handleOpenModal={handleOpenDeactivateModal}
        />
}
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
                <p>Messages</p>
                <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
              </Menu>
            </Link>
            <Link
              to="/user/settings/blocked"
              style={{ textDecoration: "none", color: "#10221c" }}
            >
              <Menu>
                <p>Blocked Users</p>
                <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
              </Menu>
            </Link>
            <Link
              to="/user/settings/muted"
              style={{ textDecoration: "none", color: "#10221c" }}
            >
              <Menu>
                <p>Muted Users</p>
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
                    ? "Messages"
                    : location.includes("feeds")
                    ? "Feeds"
                    : location.includes("notification")
                    ? "Notifications"
                    : location.includes("blocked")
                    ? "Blocked Users"
                    : location.includes("muted")
                    ? "Muted Users"
                    : "Account"}
                </h3>
              </BodyHeader>
            </BodyTitleBox>

            <BodyContent>
              <Routes>
                <Route exact path="/" element={<Account
                    handleOpenEmailModal={handleOpenEmailModal}
                    handleOpenPasswordModal={handleOpenPasswordModal}
                    handleOpenDeactivateModal={handleOpenDeactivateModal}
                    handleOpenDeleteModal={handleOpenDeleteModal}
                  />} />

                <Route exact path="chat" element={<Chat />} />

                <Route exact path="feeds" element={<Feed />} />

                <Route exact path="notification" element={<Notifications />} />

                <Route exact path="blocked" element={<Blocked />} />

                <Route exact path="muted" element={<Muted />} />

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
