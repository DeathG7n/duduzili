import React, { useState, useCallback } from "react";

import {
  Container,
  BodyContainer,
  BodyBox,
  NewsFeedBox,
  DiscoverBox,
} from "./singlePostStyles";

import Trending from "../../../constants/trending/trending";
import TagBox from "../../../constants/tagBox/tagBox";
import Post from "./post/post";
import DiscoverPeople from "../../../constants/discoverPeople/discoverPeople";
import CommentModal from "./post/modal/commentModal/commentModal";
import RepostModal from "./post/modal/repostModal/repostModal";

const Index = () => {
  const [commentModal, setCommentModal] = useState(false);
  const [repostModal, setRepostModal] = useState(false);

  const handleOpenCommentModal = useCallback(() => {
    setCommentModal((props) => !props);
  }, []);

  const handleOpenRepostModal = useCallback(() => {
    setRepostModal((props) => !props);
  }, []);

  return (
    <>
      {/* Comment Modal */}
      {commentModal && (
        <CommentModal handleOpenModal={handleOpenCommentModal} />
      )}

      {/* Repost modal */}
      {repostModal && <RepostModal handleOpenModal={handleOpenRepostModal} />}

      <Container>
        <BodyContainer> 
          <BodyBox>
            <NewsFeedBox>
              <Post
                handleOpenModal={handleOpenCommentModal}
                handleOpenRepostModal={handleOpenRepostModal}
              />
            </NewsFeedBox>

            <DiscoverBox>
              {/* Chat and messaging component */}
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
