import React from "react";

import {
  NavContainer,
  NavBox,
  CardBody,
  Body,
  TextBox,
  CardImge,
  Button,
  ListBox,
  ListContainer,
  ListImg,
  TextStatus,
} from "./sideNavStyles";
import img from "../../../assets/People.png";
import close from "../../../assets/x.png";
import settings from "../../../assets/settings.png";
import logout from "../../../assets/logout.png";
import saved from "../../../assets/saved.png";
import help from "../../../assets/help.png";

import { DataContext } from "../../../api/context"
import { Link } from "react-router-dom";
import Switch from "../../swich";

const Index = ({ openMenu, handleLogOut, username, id }) => {
  const { state: {userData} }=DataContext()
  console.log(userData?.user)

  return (
    <NavContainer>
      <NavBox>
        <CardBody>
          <Body>
            <div>
              <CardImge alt="human" src={img} />
              <TextBox>
                <p>{`${userData?.user?.first_name} ${userData?.user?.last_name}`}</p>
                <span>{userData?.user?.username}</span>
              </TextBox>
            </div>

            <img
              alt="close icon"
              src={close}
              style={{ cursor: "pointer" }}
              onClick={openMenu}
            />
          </Body>
          <Button onClick={openMenu}>
            <Link
              to={`/user/${username}/${id}`}
              style={{ textDecoration: "none", color: "#29bb89" }}
            >
              View Profile
            </Link>
          </Button>
        </CardBody>

        <ListContainer>
          <Link
            to="/user/settings"
            style={{ textDecoration: "none" }}
            onClick={openMenu}
          >
            <ListBox>
              <ListImg width="25px" height="25px" alt="" src={settings} />
              <p>Settings</p>
            </ListBox>
          </Link>

          <ListBox>
            <ListImg width="26px" height="26px" alt="" src={help} />
            <p>Help</p>
          </ListBox>

          <ListBox>
            <ListImg ml="5px" width="20px" height="25px" alt="" src={saved} />
            <p>Saved</p>
          </ListBox>

          <ListBox onClick={handleLogOut}>
            <ListImg width="25px" height="20px" alt="" src={logout} />
            <p>Sign Out</p>
          </ListBox>
        </ListContainer>

        <TextStatus>
          <p>Online Status</p>

          <Switch checkedValue={true} />
        </TextStatus>
      </NavBox>
    </NavContainer>
  );
};

export default Index;
