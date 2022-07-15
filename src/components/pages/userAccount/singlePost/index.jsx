import React, { useState, useCallback } from "react";

import {
  Container,
  BodyContainer,
  BodyBox,
  NewsFeedBox,
  DiscoverBox,
} from "./singlePostStyles";

import Trending from "../../../constants/trending/index";
import TagBox from "../../../constants/tagBox/index";
import Post from "./post/index";
import DiscoverPeople from "../../../constants/discoverPeople/index";
import CommentModal from "./post/modal/commentModal/index";
import RepostModal from "./post/modal/repostModal/index";

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
