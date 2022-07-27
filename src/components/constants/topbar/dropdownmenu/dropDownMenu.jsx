import React, { useState } from "react";

import {
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
  Footer,
  Tagbox,
} from "./sideNavStyles";
import img from "../../../assets/People.png";
import settings from "../../../assets/settings.png";
import logout from "../../../assets/logout.png";
import saved from "../../../assets/saved.png";
import help from "../../../assets/help.png";

import { Link } from "react-router-dom";
import Switch from "../../swich";
import { DataContext } from "../../../api/context";
import { useUserActions } from "../../../api/api";
import { useEffect } from "react";

// TODO fill in the footer links into the array and loop them

// const links = [];

const Index = ({ firstName, lastName, handleLogOut, username, id}) => {
  const {userAction} = useUserActions()
  const {state:{isOnline}} = DataContext()
  const [online, setOnline] = useState(isOnline)
  const flag = online ? "no" : "yes"
  console.log(online)
  console.log(flag)

  useEffect(()=>{
    userAction(
      `change_status/${flag}/`,
      "Status changed successfully"
    )
  }, [online])
  return (
    <NavBox>
      <CardBody>
        <Body>
          <div>
            <CardImge alt="human" src={img} />
            <TextBox>
              <p>{`${firstName} ${lastName}`}</p>
            </TextBox>
          </div>
        </Body>
        <Button>
          <Link
            to={`/user/${username}/${id}`}
            style={{ textDecoration: "none", color: "#29bb89" }}
          >
            View Profile
          </Link>
        </Button>
      </CardBody>

      <ListContainer>
        <Link to="/user/settings" style={{ textDecoration: "none" }}>
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
          <Link
            to={"/user/saved-posts"}
            style={{ textDecoration: "none", color: "#29bb89", marginLeft: "13px" }}
          >
            Saved
          </Link>
        </ListBox>

        <ListBox onClick={handleLogOut}>
          <ListImg width="25px" height="20px" alt="" src={logout} />
          <p>Sign Out</p>
        </ListBox>
      </ListContainer>

      <TextStatus onClick={()=> setOnline(!online)}>
        <p>Online Status </p>

        <Switch checkedValue={online} />
      </TextStatus>

      <Footer>
        <Tagbox>
          <div></div>
          <p>Help</p>
        </Tagbox>

        <Tagbox>
          <div></div>
          <p>About</p>
        </Tagbox>

        <Tagbox>
          <div></div>
          <p>Careers</p>
        </Tagbox>

        <Tagbox>
          <div></div>
          <p>Terms</p>
        </Tagbox>

        <Tagbox>
          <div></div>
          <p>Privacy</p>
        </Tagbox>

        <Tagbox>
          <div></div>
          <p>Blog</p>
        </Tagbox>

        <Tagbox>
          <div></div>
          <p>Policy</p>
        </Tagbox>

        <Tagbox>
          <div></div>
          <p>Press</p>
        </Tagbox>

        <Tagbox>
          <div></div>
          <p>Advertise</p>
        </Tagbox>
      </Footer>
    </NavBox>
    //  </NavContainer>
  );
};

export default Index;
