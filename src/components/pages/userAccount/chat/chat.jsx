import React, { useState, useRef, useEffect } from "react";

import {
  OpenBox,
  IconBox,
  ChatBox,
  ChatTitle,
  HeaderBox,
  HeaderIconBox,
  Input,
  SearchIconBox,
  SearchBox,
  ChatListBox,
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
  BottomContent,
  WriteMessage,
  GifBox,
  ButtonBox,
  Button,
  MessageBox,
  WriteMessageBox,
} from "./chatStyles";
import { ArrowImg } from "../messaging/mobileView/mobileChatView/chatView";
import chatIcon from "../../../assets/cross.png";
import dropdown from "../../../assets/openup.png";
import Settings from "../../../assets/dropdown1.png";
import cross from "../../../assets/cross.png";
import searchIcon from "../../../assets/search.png";
import Person from "../../../assets/person.png";
import dots from "../../../assets/dot.png";
import backIcon from "../../../assets/arrow-right.png";
import gif from "../../../assets/gifs.png";
import upload from "../../../assets/upload.png";
import openUpIcon from "../../../assets/openup.png";
import cancelIcon from "../../../assets/x.png";
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { DataContext } from "../../../api/context";
import { truncate } from "../../../constants/textTruncate";
import { useGetRequest } from "../../../api/api"

const Index = () => {
  const {
    state: { conversations, userData },
  } = DataContext();
  const [openChats, setOpenChats] = useState(false);
  const [openSingleChat, setOpenSingleChat] = useState(false);
  const [openWriteMessage, setOpenWriteMessage] = useState(false);

  const handleOpenChat = () => {
    setOpenChats((props) => !props);
  };
  const handleOpenSingleChat = () => {
    setOpenSingleChat((props) => !props);
  };

  const scrollRef = useRef()

  const{getRequest, data} = useGetRequest()

  const userId = localStorage.getItem("userId")

  const changeUserIndex = (id) => {
    localStorage.setItem("userId", id)
  };

  useEffect(() => {
    getRequest(`messages/${userId }/`);
  }, [userId]);
  
  console.log(scrollRef.current)

  useEffect(()=>{
    scrollRef.current?.scrollIntoView({behavior: "smooth"})
  })

  const profileImage = data?.messages[0]?.receiver?.id === userId ? data?.messages[0]?.receiver?.photo_url : data?.messages[0]?.sender?.photo_url

  const profileName = data?.messages[0]?.receiver?.id === userId ? data?.messages[0]?.receiver?.first_name : data?.messages[0]?.sender?.first_name

  const profileUsername = data?.messages[0]?.receiver?.id === userId ? data?.messages[0]?.receiver?.username : data?.messages[0]?.sender?.username

  const checkMessageLength = conversations?.conversations?.map((c) => {
    const message = JSON.stringify(c?.last_message)
    if(message.length >= 20 ){
      return "..."
    }
  })

  return (
    <>
      {openChats === false && (
        <OpenBox>
          <ChatTitle>
              Chat
            </ChatTitle>
          <IconBox>
            <ChatBubbleOutlineTwoToneIcon sx={{fontSize: "35px", color: "#29bb89"}}/>
            <ExpandLessIcon onClick={handleOpenChat} style={{marginLeft: "20px"}} sx={{fontSize: "40px"}} />
          </IconBox>
        </OpenBox>
      )}

      {openChats && (
        <ChatBox>
          <HeaderBox>
            <h3 style={{fontSize: "24px"}}>Chat</h3>

            <HeaderIconBox>
              <ChatBubbleOutlineTwoToneIcon sx={{fontSize: "35px", color: "#29bb89"}}/>
              <ExpandMoreIcon onClick={handleOpenChat} style={{marginLeft: "20px"}} sx={{fontSize: "40px", color: "#29bb89"}} />
            </HeaderIconBox>
          </HeaderBox>

          <SearchBox>
            <SearchIconBox>
              <img src={searchIcon} alt="search icon" />
            </SearchIconBox>
            <Input placeholder="Search messages" />
          </SearchBox>

          <ChatListBox>
            {conversations?.conversations?.map((item, index) => {
              return (
                <CardBody key={index} onClick={()=>{
                  handleOpenSingleChat()
                  changeUserIndex(
                    userData?.user?.id === item?.user_one?.id ? item?.user_two?.id : item?.user_one?.id)
                  }}>
                  <div>
                    <CardImge alt="human" src={(userData?.user?.id === item?.user_one?.id ? item?.user_two?.photo_url : item?.user_one?.photo_url) || Person} />
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
              );
            })}
          </ChatListBox>
        </ChatBox>
      )}

      {/* Display UI when a message history is opened */}
      {openSingleChat && (
        <MessageBox>
          <MessageTitleBox>
            <MessageHeader>
              <ArrowImg src={backIcon} alt="arrow back icon" onClick={handleOpenSingleChat} />
              <ProfileImg alt="human" src={profileImage} />
              <h3>{profileName}</h3>
              <em>@{profileUsername}</em>
            </MessageHeader>


            <img src={dots} alt="three dots" style={{ cursor: "pointer" }} />
          </MessageTitleBox>

          <ChatBody>
          {data?.messages?.map((item, index)=>{
              return item?.receiver?.id !== userId ? (
                <ChatMessage bc="white" border="1px solid #d0e2dc" mt="15px" ref={scrollRef} key={index}>
                  <NameBox>
                    <h4>{item?.sender?.first_name} </h4>
                    <span>{item?.sender?.username}</span>
                    <h6>{item?.date}</h6>
                  </NameBox>
                  {item?.video && <video controls> <source src={item?.video}/></video>}
                  {item?.photo && <img src={item?.photo}/>}
                  {item?.audio && <audio controls> <source src={item?.audio}/></audio>}
                  <p>{item?.text}</p>
                  
                </ChatMessage>
              ):( <ChatMessage
                    bc="#E6FAEB"
                    width="70%"
                    mt="15px"
                    bs="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    key={index}
                    ref={scrollRef}
                  >
                  <NameBox>
                    <h4>You</h4>
                    <h6>{item?.date}</h6>
                  </NameBox>
                  {item?.video && <video controls> <source src={item?.video}/></video>}
                  {item?.photo && <img src={item?.photo} alt="image"/>}
                  {item?.audio && <audio controls> <source src={item?.audio}/></audio>}
                  <p>{item?.text}</p>
            </ChatMessage>)
            })}
          </ChatBody>

          <WriteBox>
            <WriteMessage placeholder="Write message....">
              <input placeholder="Write message...." />
              <img alt="icon" src={openUpIcon} />
            </WriteMessage>
            <BottomContent>
              <GifBox>
                <img
                  src={upload}
                  alt="icon"
                  style={{ height: "27px", width: "27px", cursor: "pointer" }}
                />
                <img
                  src={gif}
                  alt="icon"
                  style={{
                    height: "20px",
                    width: "20px",
                    cursor: "pointer",
                    marginLeft: "7px",
                  }}
                />
              </GifBox>
              <ButtonBox>
                <Button
                  height="40px"
                  width="130px"
                  bc="#29BB89"
                  border="none"
                  br="32px"
                  color="white"
                >
                  Send
                </Button>
                <Button
                  bc="#F1F5F4"
                  height="30px"
                  width="50px"
                  border="none"
                  br="20px"
                  margin="0px 0px 0px 10px"
                >
                  <img src={dots} style={{ marginTop: "2px" }} alt="dots" />
                </Button>
              </ButtonBox>
            </BottomContent>
          </WriteBox>
        </MessageBox>
      )}

      {/* Open UI when user wants to type large message body */}
      {openWriteMessage && (
        <WriteMessageBox>
          <HeaderBox>
            <h3>Messages</h3>

            <HeaderIconBox>
              <img src={cancelIcon} alt="icons" style={{ height: "25px" }} />
            </HeaderIconBox>
          </HeaderBox>

          <SearchBox>
            <SearchIconBox>
              <img src={searchIcon} alt="search icon" />
            </SearchIconBox>
            <Input placeholder="Search messages" />
          </SearchBox>

          <WriteBox>
            <WriteMessage placeholder="Write message....">
              <input placeholder="Write message...." />
              <img alt="icon" src={openUpIcon} />
            </WriteMessage>
            <BottomContent>
              <GifBox>
                <img
                  src={upload}
                  alt="icon"
                  style={{ height: "27px", width: "27px", cursor: "pointer" }}
                />
                <img
                  src={gif}
                  alt="icon"
                  style={{
                    height: "20px",
                    width: "20px",
                    cursor: "pointer",
                    marginLeft: "7px",
                  }}
                />
              </GifBox>
              <ButtonBox>
                <Button
                  height="40px"
                  width="130px"
                  bc="#29BB89"
                  border="none"
                  br="32px"
                  color="white"
                >
                  Send
                </Button>
                <Button
                  bc="#F1F5F4"
                  height="30px"
                  width="50px"
                  border="none"
                  br="20px"
                  margin="0px 0px 0px 10px"
                >
                  <img src={dots} style={{ marginTop: "2px" }} alt="dots" />
                </Button>
              </ButtonBox>
            </BottomContent>
          </WriteBox>
        </WriteMessageBox>
      )}
    </>
  );
};

export default Index;
