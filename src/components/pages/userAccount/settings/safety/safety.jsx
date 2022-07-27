import React,{ useEffect } from "react";

import { Container, Content, TextBox, TitleText } from "./safetyStyles";
import Switch from "../../../../constants/swich";

import { useGetRequest } from "../../../../api/api"

const Index = () => {
  const { getRequest, data }=useGetRequest()

  useEffect(()=>{
    getRequest('safety_settings_page/')
  },[])
 
  return (
    <Container>
      <TitleText>
        <p>PRIVACY</p>
      </TitleText>

      <Content mt="25px">
        <TextBox>
          <p>Allow search engines to index your name</p>
          <span>
            Allow search engines like Google to link to your profile in their
            search results.
          </span>
        </TextBox>

        <Switch checkedValue={data?.safety_settings?.allow_search_engine_index || true} />
      </Content>

      <Content mt="30px">
        <TextBox>
          <p>Personalize recommendation based on your activities</p>
          <span>
            Personalize your recommendation based on your activities
          </span>
        </TextBox>

        <Switch checkedValue={data?.safety_settings?.personalize_recommendation || true} />
      </Content>

      <Content mt="30px">
        <TextBox>
          <p>Allow your profile to be discovered by email</p>
          {/* <span>
            Allow search engines like Google to link to your profile in their
            search results.
          </span> */}
        </TextBox>

        <Switch checkedValue={data?.safety_settings?.allow_discover_by_email || true} />
      </Content>

      <Content mt="35px">
        <TextBox>
          <p>Private Account</p>
          <span>Non followers will not see your profile content</span>
        </TextBox>

        <Switch checkedValue={false} />
      </Content>
    </Container>
  );
};

export default Index;
