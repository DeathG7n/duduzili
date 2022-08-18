import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import useWebSocket, { ReadyState } from 'react-use-websocket';
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
  MessageContainer,
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
import { truncate } from "../../../constants/textTruncate";

import { DataContext } from "../../../api/context";
import { useGetRequest, useMarkRequest } from "../../../api/api";

const Index = () => {
  const { data, loading, getRequest } = useGetRequest();
  const [userIndex, setUserIndex] = useState(0);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userImg, setUserImg] = useState("")
  const [dropDown, setDropDown] = useState(false)

  const messageRef = useRef()
  const moreRef = useRef()

  const {
    state: { conversations, userData },
  } = DataContext();
  
  const user = conversations && conversations[userIndex];
  const firstUser = user?.sender?.id;
  


  // const socketUrl = `wss://duduzili-staging-server.com.ng/ws/chat/${userName}?token=${token}`
  

  // const client = new WebSocket(
  //   `wss://duduzili-staging-server.com.ng/ws/chat/${userName}?token=${token}`
  // );
  

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

  const msgBody = {
    user: "psalmskalu",
    firstname: "Psalms",
    message: "Did you receive any message",
  };

  
  const sendData = "Hello Testing";

  useEffect(() => {
    getRequest(`messages/${userId || firstUser}/`);
    

    // console.log(client)
    // client.addEventListener('open', function open() {
    //   console.log("Web socket connected")
    //   client.send('hello from the client!');
    // });
    // client.addEventListener('connection', function connection(ws) {
    //   ws.addEventListener('message', function incoming(message) {
    //     client.clients.forEach(function each(client) {
    //       if (client !== ws && client.readyState === WebSocket.OPEN) {
    //         client.send(message); 
    //       }
    //     });
    //   });
    // });
    
    // client.addEventListener('message', function incoming(data) {
    //   console.log(data);
    // });
    // client.onopen = () => {
    //   console.log("Web socket connected");
    //   client.send("sendData")
    // };

    // client.onmessage = (event) => {
    //   console.log(event.data);
    // };

    // client.onerror = function(error) {
    //   console.log(`[error] ${error.message}`);
    // };

    // return () => client.close();
  }, [userId]);



  // Get the array index of user and the user id
  const changeUserIndex = (index, id, username, img, firstname) => {
    setUserIndex(index);
    setUserId(id);
    setUserName(username);
    setUserImg(img)
    setUserFirstName(firstname)
  };

  const checkMessageLength = conversations?.conversations?.map((c) => {
    const message = JSON.stringify(c?.last_message)
    if(message.length >= 20 ){
      return "..."
    }
  })

  return (
    <>
      {/* Message component for mobile view  */}
      <MobileMessageComponent />
      <Container>
        <ContentBox>
          <MessagesBox>
            <TitleBox>
              <h3>Messages</h3>

              <ImgBox ref={moreRef}>
                <img src={Settings} alt="icons" style={{marginTop: "5px"}} onClick={()=> setDropDown(!dropDown)} />

                <DropDownBox className="dropdown"  style={{display: dropDown ? "block" : "none"}}>
                  <DropDownContent>
                    <div style={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <img src={Delete} alt="" style={{marginTop: "-7px", marginRight: "-15px"}}/>
                      <DropDownText>Delete conversations</DropDownText>
                    </div>
                  <Link to="/user/settings/chat" style={{textDecoration: "none", color: "black"}}>
                    <div style={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      
                        <img src={Messetting} alt="" style={{marginTop: "-7px", marginRight: "-15px"}}/>
                        <DropDownText>Message settings</DropDownText>
                      
                      </div>
                    </Link>
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
              {conversations?.conversations?.map((item, index) => {
                return (
                  <CardBody
                    key={item?.id}
                    onClick={() =>{
                      changeUserIndex(
                        index,
                        userData?.user?.id === item?.user_one?.id ?item?.user_two?.id : item?.user_one?.id,
                        userData?.user?.id === item?.user_one?.id ? item?.user_two?.username : item?.user_one?.username,
                        userData?.user?.id === item?.user_one?.id ? item?.user_two?.photo_url : item?.user_one?.photo_url,
                        userData?.user?.id === item?.user_one?.id ? item?.user_two?.first_name : item?.user_one?.first_name
                        )
                      }
                    }
                  >
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
                );
              })}
            </MessageList>
          </MessagesBox>

          <ChatBox>
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
                  />
                </div>
              ) : (
                <ChatBody >
                  <MessageTitleBox>
                    {userId && <MessageHeader>
                      <ProfileImg
                        alt="human"
                        src={userImg || Person} />
                      <h3>{userFirstName}</h3>
                      <em>{userName}</em>
                    </MessageHeader>}
                  </MessageTitleBox>
                  <MessageContainer  >
                   {data?.messages?.map((item, id)=>{
                      return(
                        <div>
                          <Messages item={item} userId={userId} key={id} userName={userName}/>
                        </div>
                        )
                    })}
                  </MessageContainer>
                  
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
              </GifBox>
              <WriteMessage placeholder="Your message" ref={messageRef}/>
              <ButtonBox>
                <Button
                  height="35px"
                  width="80px"
                  bc="#a0a6ab"
                  border="none"
                  br="32px"
                  color="white"
                  // onClick={sendMessage}
                >
                  Send
                </Button>
              </ButtonBox>
            </WriteBox>
          </ChatBox>
        </ContentBox>
      </Container>
    </>
  );
};

export default Index;

export const Messages =({item, userId, userName})=> {
  const {
    state: { conversations, userData },
  } = DataContext();
  const didUnmount = useRef(false)

  const token = JSON.parse(localStorage.getItem("token") || null)
  const [socketUrl, setSocketUrl] = useState(`wss://duduzili-staging-server.com.ng/ws/chat/${userName}?token=${token}`);
  const { sendMessage, readyState } = useWebSocket(socketUrl,
    {
      onOpen: (message)=>{
        console.log(message)
      },
      onMessage: (message)=>{
        console.log("message")
      },
      onError: (err)=>{
        console.log(err)
        sendMessage("Hello")
      },
      shouldReconnect: (closeEvent) => {
        console.log(closeEvent)
        return didUnmount.current === false;
      },
      reconnectAttempts: 10,
      reconnectInterval: 3000, 
    });
  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  
  useEffect(() => {
    return () => {
      didUnmount.current = true;
    };
  }, [])

  console.log(connectionStatus)



  return item?.receiver?.id !== userId ? (
    <ChatMessage
      bc="white"
      border="1px solid #d0e2dc"
      mt="15px"
      bs="0px 4px 4px rgba(0, 0, 0, 0.25)"
      key={item?.id}
    >
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
    ) : (
      <ChatMessage
        bc="#E6FAEB"
        width="70%"
        mt="15px"
        bs="0px 4px 4px rgba(0, 0, 0, 0.25)"
        style={{alignSelf: "flex-end"}}
        
      >
        <NameBox>
          <h4>You</h4>
          <h6>{item?.date}</h6>
        </NameBox>
        {item?.video && <video controls> <source src={item?.video}/></video>}
        {item?.photo && <img src={item?.photo}/>}
        {item?.audio && <audio controls> <source src={item?.audio}/></audio>}
        <p>{item?.text}</p>
      </ChatMessage>
    )
}
