import React from "react";
import {
  Container,
  BodyContainer,
  BodyBox,
  NewsFeedBox,
  TrendingBox,
} from "./homeStyles";

import TopBar from "../../constants/topbar/topBar";
import PostCard from "../../constants/postCard/postCard";
import Trending from "../../constants/trending/trending";
import TagBox from "../../constants/tagBox/tagBox";

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
