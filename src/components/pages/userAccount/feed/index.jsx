import React, { useState, useCallback, useRef, useEffect } from "react";

import {
  Container,
  BodyContainer,
  BodyBox,
  NewsFeedBox,
  DiscoverBox,
  MessageBox,
  CreatePostIcon,
} from "./feedStyles";

import Trending from "../../../constants/trending/index";
import TagBox from "../../../constants/tagBox/index";
import NewsFeed from "../../../constants/postCard/index";
import DiscoverPeople from "../../../constants/discoverPeople/index";
import CreatePost from "./createPost/index";
import CreatePostModal from "./createPost/modal/createPostModal/index";
import ChatComponent from "../chat/index";
import CommentModal from "../../../constants/postCard/modal/commentModal/index";
import RepostModal from "../../../constants/postCard/modal/repostModal/index";
import EditPostModal from "../../../constants/postCard/modal/editPostModal/index";
import { DataContext } from "../../../api/context";

import postIcon from "../../../assets/post.svg";

const Index = () => {
  const {
    state: { postData, openPostModal },
    dispatch,
  } = DataContext();

  const [postModal, setPostModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [editPostModal, setEditPostModal] = useState(false);
  const [repostModal, setRepostModal] = useState(false);

  const handleOpenPostModal = useCallback(() => {
    dispatch({ type: "SHOW_TOPBAR" });
    setPostModal((props) => !props);
  }, [postModal]);

  const handleOpenCommentModal = useCallback(() => {
    setCommentModal((props) => !props);
  }, []);

  const handleOpenEditPostModal = useCallback(() => {
    setEditPostModal((props) => !props);
  }, [postModal]);

  const handleOpenRepostModal = useCallback(() => {
    setRepostModal((props) => !props);
  }, []);


  const elemRef = useRef();
  console.log(postModal);

  useEffect(() => {
    if (postModal === true) {
      elemRef.current.style.marginTop = 0;
    } else {
      elemRef.current.style.marginTop = "60px";
    }
  }, [postModal]);

  return (
    <>
      {/* Comment Modal */}
      {commentModal && (
        <CommentModal handleOpenModal={handleOpenCommentModal} />
      )}

      {/* Create post modal */}
      {postModal && <CreatePostModal handleOpenModal={handleOpenPostModal} />}

      {/* Edit post Modal */}
      {editPostModal && (
        <EditPostModal handleOpenModal={handleOpenEditPostModal} />
      )}

      {/* Repost modal */}
      {repostModal && <RepostModal handleOpenModal={handleOpenRepostModal} />}

      <Container ref={elemRef}>
        <BodyContainer>
          <BodyBox>
            <NewsFeedBox>
              <CreatePost handleOpenModal={handleOpenPostModal} />
              {/* Pass the modal callback functions to open the modals in the post feed component */}
              <NewsFeed
                handleOpenModal={handleOpenCommentModal}
                postFeed={postData}
                handleOpenPostModal={handleOpenEditPostModal}
                handleOpenRepostModal={handleOpenRepostModal}
              />
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

        <CreatePostIcon onClick={handleOpenPostModal}>
          <img src={postIcon} alt="icon" />
          <p>Post</p>
        </CreatePostIcon>
      </Container>
    </>
  );
};

export default Index;
