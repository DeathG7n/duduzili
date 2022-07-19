import React, { useEffect } from "react";

import { Container, Content, TextBox, TitleText } from "./chatStyles";
import Switch from "../../../../constants/swich";

import { useGetRequest } from "../../../../api/api";

const Index = () => {
  const { getRequest, data }=useGetRequest()

  useEffect(() => {
    getRequest('message_settings_page/')
    console.log("success")
  }, []);

  return (
    <Container>
      <TitleText>
        <p>Manage who can message you</p>
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

        <Switch checkedValue={data?.chat_settings?.allow_chat_request || true} />
      </Content>
    </Container>
  );
};

export default Index;
