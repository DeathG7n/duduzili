import React, { useState } from "react";

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

import Trending from "../../../constants/trending/trending";
import ChatComponent from "../chat/chat";
import TagBox from "../../../constants/tagBox/tagBox";
import NewsFeed from "../../../constants/postCard/postCard";
import DiscoverPeople from "../../../constants/discoverPeople/discoverPeople";
import CommentModal from "../../../constants/postCard/modal/commentModal/commentModal";
import { DataContext } from "../../../api/context";
import { truncate } from "../../../constants/textTruncate";
import { Link } from "react-router-dom";

import Img1 from "../../../assets/tp.png";
// import Img2 from "../../../assets/tp1.png";


const Index = () => {
  const [commentModal, setCommentModal] = useState(false);

  const {
    state: { trendingPosts },
  } = DataContext();

  console.log(trendingPosts?.trending);

  const handleOpenCommentModal = () => {
    setCommentModal((props) => !props);
  };

  return (
    <>
      {commentModal && (
        <CommentModal handleOpenModal={handleOpenCommentModal} />
      )}
      <MessageBox>
        <ChatComponent />
      </MessageBox>
      <Container>
        <BodyContainer>
          <BodyBox>
            <NewsFeedBox>
              <TrendContainer>
                {trendingPosts?.trending?.article.map((item, idx) => {
                  return (
                    <TrendPost
                      bimg={item?.photo_url || Img1}  
                      key={idx}
                    >
                      <div className="holder">
                        <Tag bc="#29BB89">
                          <Link
                            to={`/user/trending/post/${item.id}`}
                            className="link"
                          >
                            <p>{item?.topic?.title}</p>
                          </Link>
                        </Tag>

                        <TagContent>
                          <h4>{item.title}</h4>
                          <p>{truncate(item.text, 100) + "..."}</p>
                        </TagContent>
                      </div>
                    </TrendPost>
                  );
                })}
              </TrendContainer>

              {/* <TitleBox>
                <h3>Web development</h3>

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
              </TitleBox> */}
              <NewsFeed
                postFeed={trendingPosts?.trending?.post}
                handleOpenModal={handleOpenCommentModal}
              />
            </NewsFeedBox>
            <DiscoverBox>
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
