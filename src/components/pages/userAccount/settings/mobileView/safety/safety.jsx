import React, { useEffect } from "react";

import { Container, Content, TextBox, TitleText } from "./safetyStyles";
import { useNavigate } from "react-router-dom";
import Switch from "../../../../../constants/swich";
import arrowBack from "../../../../../assets/arrow-right.png";
import { useGetRequest } from "../../../../../api/api";

const Index = () => {
  const { getRequest, data } = useGetRequest();

  useEffect(() => {
    getRequest("safety_settings_page/");
  }, []);

  const history = useNavigate();
  return (
    <Container>
      <TitleText>
        <img
          src={arrowBack}
          alt="arrow back icon"
          onClick={() => history(-1)}
        />
        <p>Safety & Privacy</p>
      </TitleText>

      <Content>
        <TextBox>
          <p>Allow search engines to index your name</p>
          <span>
            Allow search engines like Google to link to your profile in their
            search results.
          </span>
        </TextBox>

        <Switch
          checkedValue={
            data?.safety_settings?.allow_search_engine_index || true
          }
        />
      </Content>

      <Content>
        <TextBox>
          <p>Personalize recommendation based on your activity</p>
          <span>
            Allow search engines like Google to link to your profile in their
            search results.
          </span>
        </TextBox>

        <Switch
          checkedValue={
            data?.safety_settings?.personalize_recommendation || true
          }
        />
      </Content>

      <Content>
        <TextBox>
          <p>Allow your profile to be discovered by email</p>
          {/* <span>
            Allow search engines like Google to link to your profile in their
            search results.
          </span> */}
        </TextBox>

        <Switch
          checkedValue={data?.safety_settings?.allow_discover_by_email || true}
        />
      </Content>

      <Content>
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
