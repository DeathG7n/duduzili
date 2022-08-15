import React, { useEffect, useRef, useState } from "react";

import {
  Container,
  BodyContainer,
  BodyBox,
  NewsFeedBox,
  TrendingBox,
  TitleBox,
  CardBody,
  CardImge,
  NonLinkBox,
  TextBox,
  IconBox,
  Text,
  DropDownBox,
  DropDownContent,
  DropDownText,
  MoDropDownContent
} from "./notificationStyles";
import { 
  DropDown,
  MDropDownBox,
  MDropDownContent,
  Button
} from "../messaging/mobileView/messageMobileStyles";
import Trending from "../../../constants/trending/trending";
import Messetting from "../../../assets/messetting.png";
import TextEdit from "../../../assets/textedit.png";
import Delet from "../../../assets/delete.png";
import Discover from "../../../constants/discoverPeople/discoverPeople";
import TagBox from "../../../constants/tagBox/tagBox";
import { DataContext } from "../../../api/context";
import { Link, useNavigate } from "react-router-dom";
import { useMarkRequest } from "../../../api/api";

import Person from "../../../assets/person.png";
import icon from "../../../assets/setting.png";
import arrow from "../../../assets/arrow-right.png";
import { Delete } from "@mui/icons-material";
// import crossicon from "../../../assets/cross.png";

const Index = () => {
  const {
    state: { notification, userData, message },
  } = DataContext();

  const moreRef = useRef()
  const [dropDown, setDropDown] = useState(false)
  const [windowSize, setWindowSize] = useState(false)
  useEffect(() => {
    if (window.innerWidth <= 800) {
      setWindowSize(false);
    } else {
      setWindowSize(true);
    }
  });

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropDown(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(moreRef)

  
  const { markAllRequest, markRequest} = useMarkRequest()
  console.log(notification);

  const history = useNavigate();

  const routeBack = () => {
    history.goBack();
  };

  const markAllNotifications = () => {
    markAllRequest(`notifications/mark_as_read/${userData?.user?.id}/`)
  }
  
  const markSingleNotification = (id) => {
    markRequest(`notification/mark_as_read/${id}/`)
  }

  return (
    <Container>
      {dropDown && !windowSize && <MobileDropDown setDropDown={setDropDown} dropDown={dropDown}/>}
      <BodyContainer>
        <BodyBox>
          <NewsFeedBox>
            <TitleBox>
              <div>
                <h3>Notifications</h3>
              </div>
              
              <IconBox ref={moreRef}>
                <img src={icon} alt="icon" style={{ cursor: "pointer" }} onClick={()=> setDropDown(!dropDown)} />
 
                <DropDownBox className="dropdown" style={{display: windowSize && dropDown ? "block" : "none"}}>
                  <DropDownContent>
                    <div onClick={() => markAllNotifications()}>
                      <img src={TextEdit} alt="" style={{ width: "24px", height: "24px", marginTop: "1px", marginRight: "-15px"}}/>
                      <DropDownText>Mark all as seen</DropDownText>
                    </div>

                    <div>
                      <img src={Delet} alt="" style={{marginTop: "1px", marginRight: "-15px"}}/>
                      <DropDownText>Delete notifications</DropDownText>
                    </div>
                    
                    <div>
                      <img src={Messetting} alt="" style={{marginTop: "1px", marginRight: "-15px"}}/>
                      <Link to="/user/settings/notification" style={{textDecoration: "none", color: "black"}}>
                        <DropDownText>Notifications settings</DropDownText>
                      </Link>
                    </div>
                  </DropDownContent>
                </DropDownBox>
              </IconBox>
            </TitleBox>

            {notification == null ? (
              <h2>No Notifications</h2>
            ) : (
              notification?.notifications.map((item, ind) => {
                console.log(item);
                return (
                  <CardBody bc="white" key={ind} onClick={() => markSingleNotification(item?.id)} style={{
                    backgroundColor: item?.read ? "#ffffff" : "#d0d1eb"
                  }}>
                    {/* Return empty on Notifications without post url */}
                    {!item?.post?.post_url ? (
                      <NonLinkBox>
                        {" "}
                        <div className="target">
                          <CardImge
                            alt="human"
                            src={item?.sender?.photo_url || Person}
                          />
                          <TextBox>
                            <p>{`${item?.sender?.first_name} ${item?.sender?.last_name}` || ""}</p>
                            <span>{item.notice || ""}</span>
                          </TextBox>
                        </div>
                        <Text>{`${item.date || ""} ago`}</Text>
                      </NonLinkBox>
                    ) : (
                      <Link
                        to={`/user${item?.post?.post_url}`}
                        className="link"
                      >
                        <div>
                          <CardImge
                            alt="human"
                            src={item?.sender?.photo_url || Person}
                          />
                          <TextBox>
                            <p>{`${item?.sender?.first_name} ${item?.sender?.last_name}` || ""}</p>
                            <span>{item.notice || ""}</span>
                          </TextBox>
                        </div>

                        <Text>{`${item.date || ""} ago`}</Text>
                      </Link>
                    )}
                  </CardBody>
                );
              })
            )}
          </NewsFeedBox>
          <TrendingBox>
            <Discover />
            <TagBox />
          </TrendingBox>
        </BodyBox>
      </BodyContainer>
    </Container>
  );
};

export default Index;

export const MobileDropDown = ({setDropDown}) => {
  const moreRef = useRef()
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropDown(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(moreRef)
  return(
    <DropDown >
      <MDropDownBox >
        <DropDownContent>
          <MoDropDownContent>
            <img src={TextEdit} alt="" style={{ width: "24px", height: "24px", marginTop: "1px", marginRight: "-15px"}}/>
            <DropDownText>Mark all as seen</DropDownText>
          </MoDropDownContent>
          <MoDropDownContent>
            <img src={Delet} alt="" style={{marginTop: "1px", marginRight: "-15px"}}/>
            <DropDownText>Delete notifications</DropDownText>
          </MoDropDownContent>
          <MoDropDownContent>
            <img src={Messetting} alt="" style={{marginTop: "1px", marginRight: "-15px"}}/>
            <Link to="/user/settings/notification" style={{textDecoration: "none", color: "black"}}>
              <DropDownText>Notifications settings</DropDownText>
            </Link>
          </MoDropDownContent>
        </DropDownContent>
        <Button onClick={()=> setDropDown(false)}>Cancel</Button>
      </MDropDownBox>
    </DropDown>

  )
}
