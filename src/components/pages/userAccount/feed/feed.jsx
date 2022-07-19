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

import Trending from "../../../constants/trending/trending";
import TagBox from "../../../constants/tagBox/tagBox";
import NewsFeed from "../../../constants/postCard/postCard";
import DiscoverPeople from "../../../constants/discoverPeople/discoverPeople";
import CreatePost from "./createPost/createPost";
import CreatePostModal from "./createPost/modal/createPostModal/createPostModal";
import ChatComponent from "../chat/chat";
import CommentModal from "../../../constants/postCard/modal/commentModal/commentModal";
import RepostModal from "../../../constants/postCard/modal/repostModal/repostModal";
import EditPostModal from "../../../constants/postCard/modal/editPostModal/editPostModal";
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
