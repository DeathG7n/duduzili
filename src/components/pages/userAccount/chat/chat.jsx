import React, { useState } from "react";

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

const Index = () => {
  const [openChats, setOpenChats] = useState(false);
  const [openSingleChat, setOpenSingleChat] = useState(false);
  const [openWriteMessage, setOpenWriteMessage] = useState(false);

  const handleOpenChat = () => {
    setOpenChats((props) => !props);
  };

  return (
    <>
      {openChats === false && (
        <OpenBox>
          <ChatTitle>
              Chat
            </ChatTitle>
          <IconBox>
            
            <img src={chatIcon} alt="icon" style={{
              width: "35px"
            }} />
            <img
              src={dropdown}
              alt="icon"
              style={{ 
                marginLeft: "20px",
                width: "30px"
               }}
              onClick={handleOpenChat}
            />
          </IconBox>
        </OpenBox>
      )}

      {openChats && (
        <ChatBox>
          <HeaderBox>
            <h3 style={{fontSize: "24px"}}>Chat</h3>

            <HeaderIconBox>
              <img src={cross} alt="icons" style={{
              width: "30px"
              }}/>
              <img
                src={Settings}
                alt="icons"
                style={{ marginLeft: "20px", height: "8px", width: "20px" }}
                onClick={handleOpenChat}
              />
            </HeaderIconBox>
          </HeaderBox>

          <SearchBox>
            <SearchIconBox>
              <img src={searchIcon} alt="search icon" />
            </SearchIconBox>
            <Input placeholder="Search messages" />
          </SearchBox>

          <ChatListBox>
            {[...Array(8)].map(() => {
              return (
                <CardBody>
                  <div>
                    <CardImge alt="human" src={Person} />
                    <TextBox>
                      <p>
                        Mirabel Lyn
                        <em
                          style={{
                            color: "#49665c",
                            fontSize: "11px",
                            fontWeight: "400",
                            marginLeft: "7px",
                          }}
                        >
                          @mirabel01
                        </em>
                      </p>
                      <span>You: hi, i am duduzilli</span>
                    </TextBox>
                  </div>

                  <Text>12:04pm</Text>
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
              <img src={backIcon} alt="icon" style={{ height: "25px" }} />
              <ProfileImg alt="human" src={Person} />
              <h3>Mirabel Lyn</h3>
              <p>@mirabel101</p>
            </MessageHeader>

            <img src={dots} alt="three dots" style={{ cursor: "pointer" }} />
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
