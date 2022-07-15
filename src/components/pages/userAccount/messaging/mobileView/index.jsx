import React from "react";

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
} from "./messageMobileStyles";
import { Link } from "react-router-dom";
import Settings from "../../../../assets/setting.png";
// import cross from "../../../../assets/cross.png";
import Person from "../../../../assets/person.png";

const Index = () => {
  return (
    <Container>
      <ContentBox>
        <MessagesBox>
          <TitleBox>
            <h3>Messages</h3>

            <ImgBox>
              <img src={Settings} alt="icons" />
              {/* <img src={cross} alt="icons" style={{ marginLeft: "20px" }} /> */}
            </ImgBox>
          </TitleBox>

          {[...Array(5)].map(() => {
            return (
              <Link
                to="/user/messages/chats"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
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
                      <span>You: Hi</span>
                    </TextBox>
                  </div>

                  <Text>12:04pm</Text>
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
