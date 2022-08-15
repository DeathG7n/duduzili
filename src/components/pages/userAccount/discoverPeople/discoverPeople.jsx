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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Index = () => {
  const history = useNavigate();

  const routeBack = () => {
    history(-1);
  };
  return (
    <Container>
      <BodyContainer>
        <BodyBox>
          <NewsFeedBox>
            <TitleBox>
              <ArrowBackIcon  sx={{ fontSize: 35, fontWeight: 600, color: "#29BB89" }} onClick={routeBack} />
              <h3>Discover People</h3>
            </TitleBox>

            <DiscoverCard />
          </NewsFeedBox>
        </BodyBox>
      </BodyContainer>
    </Container>
  );
};

export default Index;
