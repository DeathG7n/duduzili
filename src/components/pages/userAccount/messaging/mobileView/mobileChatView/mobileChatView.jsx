import React from "react";

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

const Index = () => {
  const history = useNavigate()
  return (
    <Container>
      <ContentBox>
        <ChatBox>
          <MessageTitleBox>
            <MessageHeader>
              <ArrowImg src={arrowBack} alt="arrow back icon" onClick={()=>history.goBack()} />
              <ProfileImg alt="human" src={Person} />
              <h3>Mirabel Lyn</h3>
              <p>@mirabel101</p>
            </MessageHeader>

            <img
              src={dots}
              alt="three dots"
              style={{ cursor: "pointer", float: "left" }}
            />
          </MessageTitleBox>

          <ChatBody>
            <ChatMessage bc="white" border="1px solid #d0e2dc">
              <NameBox>
                <h4>Mirabel Lyn </h4>
                <span>@mirabel101</span>
                <h6>2hours ago</h6>
              </NameBox>
              <p>
                Thanks for downloading my product design system. hope to talk
                soon.
              </p>
            </ChatMessage>

            <ChatMessage
              bc="#E6FAEB"
              width="70%"
              mt="15px"
              bs="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              <NameBox>
                <h4>You</h4>
                <h6>2hours ago</h6>
              </NameBox>
              <p>The dark mode features is super nice.</p>
            </ChatMessage>
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
