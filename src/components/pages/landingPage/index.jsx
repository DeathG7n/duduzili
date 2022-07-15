import React from "react";
import {
  Container,
  BodyContainer,
  BodyBox,
  NewsFeedBox,
  TrendingBox,
} from "./homeStyles";

import TopBar from "../../constants/topbar/index";
import PostCard from "../../constants/postCard/index";
import Trending from "../../constants/trending/index";
import TagBox from "../../constants/tagBox/index";

const index = () => {
  return (
    <>
      <Container>
        <TopBar />
        <BodyContainer>
          <BodyBox>
            <NewsFeedBox>
              <PostCard />
            </NewsFeedBox>
            <TrendingBox>
              <Trending />
              <TagBox />
            </TrendingBox>
          </BodyBox>
        </BodyContainer>
      </Container>
    </>
  );
};

export default index;
