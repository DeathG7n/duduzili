import React, { useEffect, useState } from "react";

import {
  Container,
  BodyContainer,
  BodyBox,
  MessageBox,
  NewsFeedBox,
  DiscoverBox,
  TitleBox,
  Button,
  TrendContainer,
  TrendPost,
  Tag,
  TagContent,
} from "./trendingStyles";

import Trending from "../../../../constants/trending/index";
import TagBox from "../../../../constants/tagBox/index";
import ChatComponent from "../../chat/index";
import TrendSingleFeed from "../singlePost/index";
import DiscoverPeople from "../../../../constants/discoverPeople/index";
import { DataContext } from "../../../../api/context";
// import { truncate } from "../../../../constants/textTruncate";
import { useParams } from "react-router-dom";
import SkeletonLoader from "../../../../constants/skeletonLoaders/postCardLoader";

import Img1 from "../../../../assets/tp.png";

const Index = () => {
  const [trendData, setTrendData] = useState();
  const {
    state: { trendingPosts },
  } = DataContext();

  const { id } = useParams();

  useEffect(() => {
    const getPost = trendingPosts?.trending?.article.find(
      (item) => item.id === +id
    );
    if (getPost) {
      setTrendData(getPost);
    } else {
      return;
    }
  }, []);

  const convertData = trendData;

  console.log(convertData);
  return (
   
    <Container>
      <MessageBox>
        <ChatComponent />
      </MessageBox>
      <BodyContainer>
        <BodyBox>
          <NewsFeedBox>
            <TrendContainer>
              <TrendPost bimg={Img1}>
                <div className="holder">
                  <Tag bc="#29BB89">
                    <p>{convertData?.topic?.title}</p>
                  </Tag>

                  <TagContent>
                    <h4>{convertData?.title}</h4>
                    {/* <p>
                      {truncate(
                        convertData.text,
                        100
                      ) + "..."}
                    </p> */}
                  </TagContent>
                </div>
              </TrendPost>
            </TrendContainer>

            <TitleBox>
              <h3>{convertData?.topic?.title}</h3>

              <Button
                bc="white"
                border="1px solid #29BB89"
                width="70px"
                height="28px"
                color="#29BB89"
                br="20px"
                fw="500"
              >
                Follow
              </Button>
            </TitleBox>
            <TrendSingleFeed singleArticle={convertData} />
          </NewsFeedBox>
          <DiscoverBox>
            <DiscoverPeople />
            {/* <Trending /> */}
            <TagBox />
          </DiscoverBox>
        </BodyBox>
      </BodyContainer>
    </Container>
  );
};

export default Index;
