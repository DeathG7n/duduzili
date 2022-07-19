import React from "react";

import {
  Container,
  BodyContainer,
  BodyBox,
  NewsFeedBox,
  DiscoverBox,
  TitleBox,
} from "./discoverpStyles";

import { useNavigate } from "react-router-dom";
import arrow from "../../../assets/arrow-right.png";
import Trending from "../../../constants/trending/trending";
import Tags from "../../../constants/tagBox/tagBox";
import DiscoverCard from "./discoverCard/discoverCard";


const Index = () => {
  const history = useNavigate();

  const routeBack = () => {
    history.goBack();
  };
  return (
    <Container>
      <BodyContainer>
        <BodyBox>
          <NewsFeedBox>
            <TitleBox>
              {/* <img alt="arrow icon" src={arrow} onClick={routeBack} /> */}
              <h3>Discover People</h3>
            </TitleBox>

            <DiscoverCard />
          </NewsFeedBox>

          {/* <DiscoverBox>
            <Trending />
            <Tags />
          </DiscoverBox> */}
        </BodyBox>
      </BodyContainer>
    </Container>
  );
};

export default Index;
