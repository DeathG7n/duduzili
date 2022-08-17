import React,{useState, useEffect, useRef} from "react";

import {
  Container,
  ContentBox,
  MessagesBox,
  TitleBox,
  ImgBox,
  CardBody,
  CardImge,
  TextBox,
  Text,
  DropDownBox,
  MDropDownBox,
  MDropDownContent,
  DropDownContent,
  DropDownText,
  DropDown,
  Button
} from "./messageMobileStyles";
import { Link } from "react-router-dom";
import Settings from "../../../../assets/setting.png";
// import cross from "../../../../assets/cross.png";
import Person from "../../../../assets/person.png";
import Delete from "../../../../assets/delete.png";
import Messetting from "../../../../assets/messetting.png";
import { DataContext } from "../../../../api/context"
import { truncate } from "../../../../constants/textTruncate";

const Index = () => {
  const {
    state: { conversations, userData },
  } = DataContext();

  const changeUserIndex = (id) => {
    localStorage.setItem("userId", id)
  };
  const [dropDown, setDropDown] = useState(false)

  const checkMessageLength = conversations?.conversations?.map((c) => {
    const message = JSON.stringify(c?.last_message)
    if(message.length >= 20 ){
      return "..."
    }
  })

  return (
    <Container>
      {dropDown && <MobileDropDown setDropDown={setDropDown}/>}
      <ContentBox>
        <MessagesBox>
          <TitleBox>
            <h3>Messages</h3>

            <ImgBox>
              <img src={Settings} alt="icons" onClick={()=> setDropDown(!dropDown)}/>
            </ImgBox>
          </TitleBox>
          

          {conversations?.conversations?.map((item, index) => {
            return (
              <Link
                to="/user/messages/chats"
                style={{ textDecoration: "none", cursor: "pointer" }}
                key={index}
                onClick={()=>{
                  changeUserIndex(
                    userData?.user?.id === item?.user_one?.id ? item?.user_two?.id : item?.user_one?.id)
                }}
              >
                <CardBody>
                  <div>
                    <CardImge
                      alt="human"
                      src={(userData?.user?.id === item?.user_one?.id ? item?.user_two?.photo_url : item?.user_one?.photo_url) || Person}
                    />
                    <TextBox>
                        <p>
                          {userData?.user?.id === item?.user_one?.id ? `${item?.user_two?.first_name || ""} ${
                            item?.user_two?.last_name || ""}`: `${item?.user_one?.first_name || ""} ${item?.user_one?.last_name || ""}`}
                          <em
                            style={{
                              color: "#49665c",
                              fontSize: "11px",
                              fontWeight: "400",
                              marginLeft: "7px",
                            }}
                          >
                            {userData?.user?.id === item?.user_one?.id ? item?.user_two?.username || "" :item?.user_one?.username || ""}
                          </em>
                        </p>
                        <span> {truncate(`${
                          userData?.user?.id === item?.user_one?.id ? "You" : ""
                        } ${item?.last_message || ""}`, 20)} 
                        {checkMessageLength[index]}
                        </span>
                    </TextBox>
                  </div>

                  <Text>{`${item?.last_modified || ""} ago`}</Text>
                </CardBody>
              </Link>
            );
          })}
        </MessagesBox>
      </ContentBox>
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
      <MDropDownBox ref={moreRef} >
        <DropDownContent>
          <MDropDownContent style={{
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <img src={Delete} alt="" />
            <DropDownText>Delete conversations</DropDownText>
          </MDropDownContent>
        <Link to="/user/settings/chat" style={{textDecoration: "none", color: "black"}}>
          <MDropDownContent style={{
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
              <img src={Messetting} alt="" />
              <DropDownText>Message settings</DropDownText>
            </MDropDownContent>
          </Link>
        </DropDownContent>
        <Button onClick={()=> setDropDown(false)}>Cancel</Button>
      </MDropDownBox>
    </DropDown>

  )
}