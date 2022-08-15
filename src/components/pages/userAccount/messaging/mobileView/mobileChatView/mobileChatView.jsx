import React, {useEffect, useRef} from "react";

import { useNavigate } from "react-router-dom"
import {
  Container,
  ContentBox,
  ChatBox,
  MessageHeader,
  MessageTitleBox,
  ProfileImg,
  ArrowImg,
  ChatBody,
  ChatMessage,
  NameBox,
  WriteBox,
  WriteMessage,
  GifBox,
  ButtonBox,
  Button,
} from "./chatView";
import Person from "../../../../../assets/person.png";
import dots from "../../../../../assets/dot.png";
import gif from "../../../../../assets/gifs.png";
import upload from "../../../../../assets/upload.png";
import arrowBack from "../../../../../assets/arrow-right.png";
import { useGetRequest } from "../../../../../api/api";

const Index = () => {
  const history = useNavigate()
  const scrollRef = useRef()

  const{getRequest, data} = useGetRequest()

  const userId = localStorage.getItem("userId")

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

  return (
    <Container>
      <ContentBox>
        <ChatBox>
          <MessageTitleBox>
            <MessageHeader>
              <ArrowImg src={arrowBack} alt="arrow back icon" onClick={()=>history(-1)} />
              <ProfileImg alt="human" src={profileImage} />
              <h3>{profileName}</h3>
              <em>@{profileUsername}</em>
            </MessageHeader>

            <img
              src={dots}
              alt="three dots"
              style={{ cursor: "pointer", float: "left" }}
            />
          </MessageTitleBox>

          <ChatBody >
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
                  {item?.photo && <img src={item?.photo}/>}
                  {item?.audio && <audio controls> <source src={item?.audio}/></audio>}
                  <p>{item?.text}</p>
            </ChatMessage>)
            })}
            

           
          </ChatBody>

          <WriteBox>
            <GifBox>
              <img
                src={upload}
                alt="icon"
                style={{ height: "35px", width: "35px", cursor: "pointer" }}
              />
              <img
                src={gif}
                alt="icon"
                style={{
                  height: "27px",
                  width: "27px",
                  cursor: "pointer",
                  marginLeft: "7px",
                }}
              />
            </GifBox>
            <WriteMessage placeholder="Write message...." />
            <ButtonBox>
              <Button
                height="40px"
                smwidth="70px"
                width="90px"
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
                smdisplay="none"
              >
                <img src={dots} style={{ marginTop: "2px" }} alt="dots" />
              </Button>
            </ButtonBox>
          </WriteBox>
        </ChatBox>
      </ContentBox>
    </Container>
  );
};

export default Index;
