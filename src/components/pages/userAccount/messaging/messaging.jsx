import React, { useState, useEffect } from "react";

import {
  Container,
  ContentBox,
  MessagesBox,
  MessageList,
  ChatBox,
  TitleBox,
  SearchBox,
  SearchIconBox,
  SearchInput,
  ImgBox,
  DropDownBox,
  DropDownContent,
  DropDownText,
  CardBody,
  CardImge,
  TextBox,
  Text,
  MessageHeader,
  MessageTitleBox,
  ProfileImg,
  ChatBody,
  ChatMessage,
  NameBox,
  WriteBox,
  WriteMessage,
  GifBox,
  ButtonBox,
  Button,
} from "./messageStyles";
import Settings from "../../../assets/setting.png";
import Person from "../../../assets/avatar.png";
import Delete from "../../../assets/delete.png";
import Messetting from "../../../assets/messetting.png";
import dots from "../../../assets/dot.png";
import gif from "../../../assets/gifs.png";
import upload from "../../../assets/upload.png";
import searchIcon from "../../../assets/search.png";
import MobileMessageComponent from "./mobileView/mobileView";
import {Rings} from "react-loader-spinner";

import { DataContext } from "../../../api/context";
import { useGetRequest } from "../../../api/api";

const Index = () => {
  const { data, loading, getRequest } = useGetRequest();
  const [userIndex, setUserIndex] = useState(0);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("");

  const {
    state: { conversations, userData },
  } = DataContext();

  console.log(conversations, data);

  const user = conversations && conversations[userIndex];
  const firstUser = user?.sender?.id;

  const token = JSON.parse(localStorage.getItem("token") || null);

  const client = new WebSocket(
    `wss://duduzili.com/ws/chat/psalmskalu?token=${token}`
  );

  const msgBody = {
    user: "psalmskalu",
    firstname: "Psalms",
    message: "Did you receive any message",
  };

  useEffect(() => {
    getRequest(`messages/${userId || firstUser}/`);
    client.onopen = () => {
      console.log("Web socket connected");
      // client.send(JSON.stringify(msgBody));
    };

    // client.onmessage = (event) => {
    //   console.log(event.data);
    // };

    return () => client.close();
  }, [userId]);

  // Get the array index of user and the user id
  const changeUserIndex = (index, id, name) => {
    setUserIndex(index);
    setUserId(id);
    setUserName(name);
  };

  const sendData = "Hello Testing";

  // const sendMessage = () => {
  //   console.log("Data sent")
  //   client.send(sendData);
  // };

  console.log(userName);

  return (
    <>
      {/* Message component for mobile view  */}
      <MobileMessageComponent />
      <Container>
        <ContentBox>
          <MessagesBox>
            <TitleBox>
              <h3>Messages</h3>

              <ImgBox>
                <img src={Settings} alt="icons" style={{marginTop: "5px"}}/>

                <DropDownBox className="dropdown">
                  <DropDownContent>
                    <div style={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <img src={Delete} alt="" style={{marginTop: "-7px", marginRight: "-15px"}}/>
                      <DropDownText>Delete conversations</DropDownText>
                    </div>

                    <div style={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <img src={Messetting} alt="" style={{marginTop: "-7px", marginRight: "-15px"}}/>
                      <DropDownText>Message settings</DropDownText>
                    </div>
                  </DropDownContent>
                </DropDownBox>
              </ImgBox>
            </TitleBox>

            {/* <SearchBox> */}
            <div>
              <SearchIconBox>
                <img src={searchIcon} alt="search icon" />
              </SearchIconBox>
              <SearchInput placeholder="Search messages" />
            </div>
              
            {/* </SearchBox> */}

            <MessageList>
              {conversations?.map((item, index) => {
                // console.log(index);
                return (
                  <CardBody
                    key={item?.id}
                    onClick={() =>
                      changeUserIndex(
                        index,
                        item?.sender?.id,
                        item?.sender?.username
                      )
                    }
                  >
                    <div>
                      <CardImge
                        alt="human"
                        src={item?.sender?.photo_url || Person}
                      />
                      <TextBox>
                        <p>
                          {`${item?.sender?.first_name || ""} ${
                            item?.sender?.last_name || ""
                          }`}
                          <em
                            style={{
                              color: "#49665c",
                              fontSize: "11px",
                              fontWeight: "400",
                              marginLeft: "7px",
                            }}
                          >
                            {item?.sender?.username || ""}
                          </em>
                        </p>
                        <span>{`${
                          userData?.user?.id === item?.sender?.id ? "You" : ""
                        } ${item?.content || ""}`}</span>
                      </TextBox>
                    </div>

                    <Text>{`${item?.date || ""} ago`}</Text>
                  </CardBody>
                );
              })}
            </MessageList>
          </MessagesBox>

          <ChatBox>
            <MessageTitleBox>
              {/* <MessageHeader>
                <ProfileImg
                  alt="human"
                  src={user?.sender?.photo_url || Person}
                />
                <h3>{user?.sender?.first_name}</h3>
                <p>{user?.sender?.username}</p>
              </MessageHeader>

              <img src={dots} alt="three dots" style={{ cursor: "pointer" }} /> */}
            </MessageTitleBox>

            <>
              {loading ? (
                <div
                  style={{
                    height: "80%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Rings
                    type="Puff"
                    color="#29bb89"
                    height={60}
                    width={60}
                    //   timeout={3000}
                  />
                </div>
              ) : (
                <ChatBody>
                  {data?.messages.map((item) => {
                    return item?.receiver?.id !== userId ? (
                      <ChatMessage
                        bc="white"
                        border="1px solid #d0e2dc"
                        mt="15px"
                        key={item?.id}
                      >
                        <NameBox>
                          <h4>{item?.sender?.first_name} </h4>
                          <span>{item?.sender?.username}</span>
                          <h6>{item?.date}</h6>
                        </NameBox>
                        <p>{item?.content}</p>
                      </ChatMessage>
                    ) : (
                      <ChatMessage
                        bc="#E6FAEB"
                        width="70%"
                        mt="15px"
                        bs="0px 4px 4px rgba(0, 0, 0, 0.25)"
                      >
                        <NameBox>
                          <h4>You</h4>
                          <h6>{item?.date}</h6>
                        </NameBox>
                        <p>{item?.content}</p>
                      </ChatMessage>
                    );
                  })}
                </ChatBody>
              )}
            </>

            <WriteBox>
              <GifBox>
                <img
                  src={upload}
                  alt="icon"
                  style={{ height: "26px", width: "28px", cursor: "pointer" }}
                />
                {/* <img
                  src={gif}
                  alt="icon"
                  style={{
                    height: "27px",
                    width: "27px",
                    cursor: "pointer",
                    marginLeft: "7px",
                  }} */}
                {/* /> */}
              </GifBox>
              <WriteMessage placeholder="Your message" />
              <ButtonBox>
                <Button
                  height="35px"
                  width="80px"
                  bc="#a0a6ab"
                  border="none"
                  br="32px"
                  color="white"
                >
                  Send
                </Button>
                {/* <Button
                  bc="#F1F5F4"
                  height="30px"
                  width="50px"
                  border="none"
                  br="20px"
                  margin="0px 0px 0px 10px"
                >
                  <img src={dots} style={{ marginTop: "2px" }} alt="dots" />
                </Button> */}
              </ButtonBox>
            </WriteBox>
          </ChatBox>
        </ContentBox>
      </Container>
    </>
  );
};

export default Index;
