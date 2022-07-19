import React, { useEffect } from "react";

import { Container, Content, TextBox, TitleText } from "./chatStyles";
import { useNavigate } from "react-router-dom";
import Switch from "../../../../../constants/swich";
import arrowBack from "../../../../../assets/arrow-right.png";
import { useGetRequest } from "../../../../../api/api";

const Index = () => {
  const { getRequest, data } = useGetRequest();

  useEffect(() => {
    getRequest("message_settings_page/");
  }, []);

  const history = useNavigate();
  return (
    <Container>
      <TitleText>
        <img
          src={arrowBack}
          alt="arrow back icon"
          onClick={() => history.goBack()}
        />
        <p>Message</p>
      </TitleText>

      <Content mt="25px">
        <TextBox>
          <p>Allow message requests from everyone</p>
          <span>
            Let people who you don’t follow send you message requests and add
            you to group conversations. To reply to their messages, you need to
            accept the request.
          </span>
        </TextBox>

        <Switch
          checkedValue={data?.chat_settings?.allow_chat_request || true}
        />
      </Content>
    </Container>
  );
};

export default Index;
