import React, { useCallback, useState } from "react";

import {
  Container,
  BodyContainer,
  BodyBox,
  NewsFeedBox,
  ResultsBox,
  DiscoverBox,
  MessageBox,
  IconBox,
  TitleBox,
  NavigationBox,
} from "./searchResultStyle";

import Trending from "../../../constants/trending/index";
import TagBox from "../../../constants/tagBox/index";
import DiscoverPeople from "../../../constants/discoverPeople/index";
import ChatComponent from "../chat/index";
import arrow from "../../../assets/arrow-right.png";
import FollowCard from "../discoverPeople/discoverCard/followCard";
import NewsFeed from "../../../constants/postCard/index";

import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../api/context";

const Index = () => {
  const {
    state: { searchResults },
  } = DataContext();
  const [typeId, setTypeId] = useState(0);
  const history = useNavigate();

  const routeBack = () => {
    history.goBack();
  };

  const handleChangePostType = useCallback(
    (num) => {
      setTypeId(num);
    },
    [typeId]
  );

  const activeStyles = {
    color: " #29BB89",
    borderBottom: "3px solid #29BB89",
  };

  const inActiveStyles = {
    color: "#000",
    borderBottom: "none",
  };

  console.log(searchResults?.search_result?.users);

  return (
    <>
      <Container>
        <BodyContainer>
          <BodyBox>
            <NewsFeedBox>
              <TitleBox>
                <div>
                  <img alt="arrow icon" src={arrow} onClick={routeBack} />
                  <h3>Search Results</h3>
                </div>
                <IconBox>
                  {/* <img src={icon} alt="icon" style={{ cursor: "pointer" }} /> */}
                </IconBox>
              </TitleBox>

              <NavigationBox>
                <button
                  style={typeId === 0 ? activeStyles : inActiveStyles}
                  onClick={() => handleChangePostType(0)}
                >
                  Post
                </button>
                <button
                  style={typeId === 1 ? activeStyles : inActiveStyles}
                  onClick={() => handleChangePostType(1)}
                >
                  Media
                </button>
              </NavigationBox>

              <ResultsBox>
                {typeId === 0 ? (
                  searchResults?.search_result?.posts.length === 0 ? (
                    <h3>No post found</h3>
                  ) : (
                    searchResults?.search_result?.posts.map((item) => {
                      return <NewsFeed postFeed={item} key={item?.id} />;
                    })
                  )
                ) : searchResults?.search_result?.users.length === 0 ? (
                  <h3>No user found</h3>
                ) : (
                  searchResults?.search_result?.users.map((item) => {
                    return <FollowCard item={item} key={item?.id} />;
                  })
                )}
              </ResultsBox>
            </NewsFeedBox>

            <DiscoverBox>
              {/* Chat and messaging component */}
              <MessageBox>
                <ChatComponent />
              </MessageBox>

              <DiscoverPeople />
              <Trending />
              <TagBox />
            </DiscoverBox>
          </BodyBox>
        </BodyContainer>
      </Container>
    </>
  );
};

export default Index;
