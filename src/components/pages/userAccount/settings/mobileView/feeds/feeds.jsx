import React, { useEffect } from "react";

import { Container, Content, TextBox, TitleText } from "./feedStyles";
import { useNavigate } from "react-router-dom";
import Switch from "../../../../../constants/swich";
import arrowBack from "../../../../../assets/arrow-right.png";
import { useGetRequest } from "../../../../../api/api";

const Index = () => {
  const { getRequest, data } = useGetRequest();

  useEffect(() => {
    getRequest("feeds_settings_page/");
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
        <p>Feeds</p>
      </TitleText>

      <Content>
        <TextBox>
          <p>Allow adult content</p>
          <span>
            Enable to view adult and NSFW (not safe for work) content in your
            feed and search results
          </span>
        </TextBox>

        <Switch
          checkedValue={data?.content_settings?.allow_adult_content || false}
        />
      </Content>

      <Content>
        <TextBox>
          <p>Autoplay media</p>
          <span>Play videos and gifs automatically when in the viewport</span>
        </TextBox>

        <Switch checkedValue={data?.content_settings?.autoplay_media || true} />
      </Content>

      <Content>
        <TextBox>
          <p>Reduce Animation</p>
          <span>Reduce award-related animations on posts and comments</span>
        </TextBox>

        <Switch
          checkedValue={data?.content_settings?.reduce_animations || false}
        />
      </Content>

      <Content>
        <TextBox>
          <p>Allow Comments</p>
          <span>Allow people to comment on your answers and posts</span>
        </TextBox>

        <Switch checkedValue={data?.content_settings?.allow_comments || true} />
      </Content>

      <Content>
        <TextBox>
          <p>Open Post in new tab</p>
          <span>Enable to always open posts in a new tab</span>
        </TextBox>

        <Switch
          checkedValue={data?.content_settings?.open_in_new_tabs || true}
        />
      </Content>
    </Container>
  );
};

export default Index;
