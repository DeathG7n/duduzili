import React, { useEffect } from "react";

import { Container, Content, TextBox, TitleText } from "./notificationStyles";
import Switch from "../../../../constants/swich";
import { useGetRequest } from "../../../../api/api";

const Index = () => {
  const { getRequest, data } = useGetRequest();

  useEffect(() => {
    getRequest("notification_settings_page/");
  }, []);

  return (
    <Container>
      <TitleText>
        <p>MESSAGES</p>
      </TitleText>

      <Content mt="25px">
        <TextBox>
          <p>Inbox messages</p>
        </TextBox>

        <Switch
          checkedValue={data?.notification_settings?.inbox_messages || true}
        />
      </Content>

      <Content mt="23px">
        <TextBox>
          <p>Chat messages</p>
        </TextBox>

        <Switch
          checkedValue={data?.notification_settings?.chat_messages || true}
        />
      </Content>

      <Content mt="23px">
        <TextBox>
          <p>Chat requests</p>
        </TextBox>

        <Switch
          checkedValue={data?.notification_settings?.chat_requests || true}
        />
      </Content>

      <br />
      <TitleText>
        <p>ACTIVITY</p>
      </TitleText>

      <Content mt="23px">
        <TextBox>
          <p>Mention of username</p>
        </TextBox>

        <Switch
          checkedValue={data?.notification_settings?.username_mention || true}
        />
      </Content>

      <Content mt="23px">
        <TextBox>
          <p>Comment on your post</p>
        </TextBox>

        <Switch
          checkedValue={data?.notification_settings?.post_comment || true}
        />
      </Content>

      <Content mt="23px">
        <TextBox>
          <p>Likes on your post</p>
        </TextBox>

        <Switch checkedValue={data?.notification_settings?.post_like || true} />
      </Content>

      <Content mt="23px">
        <TextBox>
          <p>New followers</p>
        </TextBox>

        <Switch
          checkedValue={data?.notification_settings?.new_follower || true}
        />
      </Content>

      <Content mt="23px">
        <TextBox>
          <p>Activity on your comment</p>
        </TextBox>

        <Switch
          checkedValue={data?.notification_settings?.comment_activity || true}
        />
      </Content>

      <Content mt="23px">
        <TextBox>
          <p>Activity on post you’re in</p>
        </TextBox>

        <Switch
          checkedValue={data?.notification_settings?.post_activity || true}
        />
      </Content>

      <Content mt="23px">
        <TextBox>
          <p>Replies to your comments</p>
        </TextBox>

        <Switch
          checkedValue={data?.notification_settings?.comment_replies || true}
        />
      </Content>

      <br />
      <TitleText>
        <p>RECOMMENDATIONS</p>
      </TitleText>

      <Content mt="23px">
        <TextBox>
          <p>Trending post</p>
        </TextBox>

        <Switch
          checkedValue={data?.notification_settings?.trending_posts || true}
        />
      </Content>

      <Content mt="23px">
        <TextBox>
          <p>Broadcast recommendation</p>
        </TextBox>

        <Switch
          checkedValue={data?.notification_settings?.broadcasts || true}
        />
      </Content>
    </Container>
  );
};

export default Index;
