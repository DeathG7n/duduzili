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
  // Button,
  IconBox,
  Text,
  DropDownBox,
  DropDownContent,
  DropDownText,
  // ButtonBox,
} from "./notificationStyles";
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
  console.log(userData);

  const history = useNavigate();

  const routeBack = () => {
    history.goBack();
  };

  const markAllNotifications = () => {
    markAllRequest(`notifications/mark_as_read/${userData?.user?.id}/`)
  }
  
  const markSingleNotification = (id) => {
    console.log(id)
    markRequest(`notification/mark_as_read/${id}/`)
  }

  return (
    <Container>
      <BodyContainer>
        <BodyBox>
          <NewsFeedBox>
            <TitleBox>
              <div>
                {/* <img alt="arrow icon" src={arrow} onClick={routeBack} /> */}
                <h3>Notifications</h3>
              </div>
              
              <IconBox ref={moreRef}>
                <img src={icon} alt="icon" style={{ cursor: "pointer" }} onClick={()=> setDropDown(!dropDown)} />
 
                <DropDownBox className="dropdown" style={{display: dropDown ? "block" : "none"}}>
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
                  <CardBody bc="#f7fcfa" key={ind} onClick={() => markSingleNotification(item?.id)}>
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

            {/* <CardBody>
              <div>
                <CardImge alt="human" src={Person} />
                <TextBox>
                  <p>Anitasteve</p>
                  <span>Wants to chat with you</span>
                  <br />
                  <ButtonBox>
                    <Button
                      bc="white"
                      border="1px solid #29BB89"
                      width="70px"
                      height="28px"
                      color="#29BB89"
                      br="20px"
                      fw="500"
                    >
                      Accept
                    </Button>

                    <Button
                      bc="white"
                      border="1px solid #769C8F"
                      width="70px"
                      height="28px"
                      color="#769C8F"
                      br="20px"
                      fw="500"
                      margin="0px 0px 0px 13px"
                    >
                      Decline
                    </Button>
                  </ButtonBox>
                </TextBox>
              </div>

              <Text>2 minutes ago</Text>
            </CardBody> */}
          </NewsFeedBox>
          <TrendingBox>
            <Discover />
            {/* <Trending /> */}
            <TagBox />
          </TrendingBox>
        </BodyBox>
      </BodyContainer>
    </Container>
  );
};

export default Index;
