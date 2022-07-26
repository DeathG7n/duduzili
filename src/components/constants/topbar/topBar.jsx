import React, { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {
  NavContainer,
  LogoBox,
  LogoText,
  LogoImg,
  SearchBox,
  IconBox,
  Form,
  Input,
  RegisterBox,
  Button,
  NavBox,
  ProfileIcon,
  NavigationBox,
  ProfileDropDown,
  DropDownBox,
  ProfileImg,
  MobileProfileImg,
  Icon,
  Notify,
  UserIcon,
  SearchComp,
  NotificationBox,
} from "./topbarStyles";
import { useLocation, Link,  useNavigate, Navigate } from "react-router-dom";
import { DataContext } from "../../api/context";
import { truncate } from "../textTruncate";
import { useSearchRequest } from "../../api/api";

import Logo from "../../assets/new-logo.png";
import searchIcon from "../../assets/search.png";
import profileIcon from "../../assets/People.png";
import home from "../../assets/home.svg";
import trending from "../../assets/trending.svg";
import mail from "../../assets/mail.svg";
import bell from "../../assets/bell.svg";
import dropdown from "../../assets/dropdown.png";
import person from "../../assets/People.png";
import user from "../../assets/user.png";
import MobileSideNav from "./mobileSideNav/mobileSideNav";
import SearchComponent from "./search/search";
import DropDownMenu from "./dropdownmenu/dropDownMenu";

const Index = () => {
  const location = useLocation().pathname;
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const [dropDown, setDropDown] = useState(false)

  const { searchRequest, data } = useSearchRequest();

  const history = useNavigate();
  const {
    state: { userData },
    dispatch,
  } = DataContext();

  const handleOpenMenu = () => {
    setOpenMenu((props) => !props);
  };
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleOpenSearch = () => {
    setOpenSearch((props) => !props);
  };

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    history("/")
  };

  const handleChange = (e) => {
    setSearchResult(e.target.value);
    
  };
  // Redirect user to search results pages
  const changeRoute = () => {
    handleOpenSearch();
    return history("/user/search");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchResult === "") {
      return;
    } else {
      searchRequest(`make_search/`, changeRoute, searchResult);
    }

    // handleOpenSearch();
  };

  const checkNameLength = `${userData?.user?.first_name} ${userData?.user?.last_name}`;
  return (
    <>
      {openMenu && (
        <MobileSideNav
          openMenu={handleOpenMenu}
          handleLogOut={handleLogOut}
          username={userData?.user?.username}
          id={userData?.user?.id}
        />
      )}

      {openSearch && (
        <SearchComp>
          <SearchComponent
            searchResult={data}
            handleSubmit={handleSubmit}
            handleOpenSearch={handleOpenSearch}
          />
        </SearchComp>
      )}

      <NavContainer>
        <NavBox>
          <MobileProfileImg
            alt="human"
            src={userData?.user?.photo_url || person}
            onClick={handleOpenMenu}
          />
           <LogoBox>
                <Link to="/user/feed"><LogoImg src={Logo} alt="logo" /></Link>
                <LogoText>duduzili</LogoText>
            </LogoBox>
           {/* <SearchBox onClick={handleOpenSearch}> */}
            
            <Form >
              <IconBox onClick={handleSubmit}>
              <img style={{
                width : "80px",
                height: "70px",
              }} src={searchIcon} alt="search icon" />
              </IconBox>
              <Input
                placeholder="Search"
                value={searchResult}
                onChange={handleChange}
                onClick={handleOpenSearch}
              />
            </Form>
          {/* </SearchBox> */}

          {/* Toggle navbar view when user is logged in */}
          {location.includes("user") ? (
            <>
              <NavigationBox>
                <Link to="/user/feed">
                  <NotificationBox>
                    <Icon alt="icon" src={home} />
                  </NotificationBox>
                </Link>

                <Link to="/user/trending">
                  <NotificationBox ml="25px">
                    <Icon alt="icon" src={trending} />
                  </NotificationBox>
                </Link>

                <Link to="/user/messaging">
                  <NotificationBox ml="25px">
                    <Icon alt="icon" src={mail} />
                    {userData?.number_of_messages > 0 ? (
                      <Notify className="notify">{userData?.number_of_messages}</Notify>
                    ) : (
                      ""
                    )}
                  </NotificationBox>
                </Link>

                <Link to="/user/notifications">
                  <NotificationBox ml="25px">
                    <Icon alt="icon" src={bell} />
                    {userData?.number_of_notifications > 0 ? (
                      <Notify className="notify">
                        {userData?.number_of_notifications}
                      </Notify>
                    ) : (
                      ""
                    )}
                  </NotificationBox>
                </Link>

                <ProfileDropDown>
                  <ProfileImg
                    alt="human"
                    src={userData?.user?.photo_url || person}
                  />
                  <Link
                    to={`/user/${userData?.user?.username}/${userData?.user?.id}`}
                    style={{
                      marginLeft: "10px",
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "800",
                    }}>
                      <p>
                    {/* {`${userData?.user?.first_name || ""} ${userData?.user?.last_name || ""}`} */}
                    {truncate(
                      `${userData?.user?.first_name || ""} ${userData?.user?.last_name || ""}`,
                      10
                    )}
                    {checkNameLength.length >= 10 ? "..." : ""}
                  </p>
                  
                  </Link>
                  {!dropDown ? <ExpandMoreIcon onClick={handleDropDown} sx={{ fontSize: 30 }} /> : <ExpandLessIcon onClick={handleDropDown} color="success" sx={{ fontSize: 30 }}/>}
                  

                  <DropDownBox className="dropdown" style={{
                    display: dropDown ? "block" : "none"
                  }}>
                    <DropDownMenu
                      firstName={userData?.user?.first_name || ""}
                      lastName={userData?.user?.last_name || ""}
                      username={userData?.user?.username || ""}
                      id={userData?.user?.id}
                      handleLogOut={handleLogOut}
                    />
                  </DropDownBox>
                </ProfileDropDown>
              </NavigationBox>
              <Link to="/user/discover">
                <UserIcon alt="human" src={user} />
              </Link>
            </>
            
          ) : (
            <RegisterBox>
              <Button
                border="none"
                bc="transparent"
                width="108px"
                height="45px"
                color="black"
              >
                Sign In
              </Button>
              <Button
                border="none"
                br="30px"
                bc="#29BB89"
                width="108px"
                height="45px"
                color="white"
              >
                Sign Up
              </Button>
              <ProfileIcon src={profileIcon} alt="profile icon" />
              <Link to="/user/discover">
                <UserIcon alt="human" src={user} />
              </Link>
            </RegisterBox>
          )}
          {/* Show icon on mobile viewport */}
          
        </NavBox>
      </NavContainer>
    </>
  );
};

export default Index;
