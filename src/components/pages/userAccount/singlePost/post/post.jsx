import React, { useState, useEffect } from "react";

import {
  Container,
  TopBox,
  ProfileBox,
  Name,
  MoreBox,
  DateText,
  Content,
  ContentText,
  HashTagBox,
  ReactionBox,
  Reaction,
  CommentBox,
  SingleCommentBox,
  CommentText,
  CommenterImg,
  CommenterPBox,
  CommenterName,
  CommentTopBox,
  DotBox,
  CommentDateText,
  CommentReaction,
  CommentReactionBox,
  Card,
  CardContent,
} from "./postStyles";
import Person from "../../../../assets/People.png";
import repost from "../../../../assets/repost.png";
import share from "../../../../assets/share.png";
import comment from "../../../../assets/comment.png";
import like from "../../../../assets/like.png";
import love from "../../../../assets/heart.png";
import SkeletonLoader from "../../../../constants/skeletonLoaders/postCardLoader";
import { DataContext } from "../../../../api/context";
import { useLocation } from "react-router-dom";
import { useGetRequest, useGetLikeRequest } from "../../../../api/api";
import RepostCard from "../../../../constants/repostCard/repostCard";
import {Rings} from "react-loader-spinner";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { extractLinkText } from "../../../../constants/extractLinkText";
import { Link } from "react-router-dom";
import {Audio} from "../../../../constants/postCard/postCard"

const Index = ({ handleOpenModal, handleOpenRepostModal }) => {
  const {
    state: { postData },
    dispatch,
  } = DataContext();
  const [singleUserData, setSingleUserData] = useState(null);
  // const { id } = useParams();
  const location = useLocation().pathname;
  const { data, getRequest, loading } = useGetRequest();

  const extractLocation = location.substring(5);

  // Get the single post and fetch the comments
  useEffect(() => {
    const userData =
      postData && postData.find((item) => item.post_url === extractLocation);

    // Save repost data
    if (userData) {
      setSingleUserData(userData);
      dispatch({ type: "GET_SINGLE_REPOST", payload: userData });
      console.log(singleUserData)
      // Get the post comments after 1sec
      setTimeout(() => {
        getRequest(`posts/${userData?.id}/`);
      }, 1000);
    } else {
      return;
    }
  }, [postData]);

  console.log(singleUserData);
  console.log(singleUserData?.user)

  return (
    <>
      {postData === null ? (
        <SkeletonLoader num="2" />
      ) : (
        <>
          <Container padding="15px">
            <TopBox>
              <ProfileBox>
                <img src={singleUserData?.user?.photo_url || Person} alt="dp" />
                <div>
                  {" "}
                  <Name>
                    {singleUserData?.user?.first_name}{" "}
                    <span>{singleUserData?.user?.username}</span>
                  </Name>{" "}
                  <DateText>{singleUserData?.date}</DateText>
                </div>
              </ProfileBox>

              {/* <MoreBox>
                <div></div>
                <div></div>
                <div></div>
              </MoreBox> */}
            </TopBox>

            <Content>
              <ContentText>{singleUserData?.text}</ContentText>

              {extractLinkText(singleUserData?.text) ? (
                <LinkPreview
                  url={extractLinkText(singleUserData?.text)}
                  width="100%"
                />
              ) : (
                ""
              )}

              <Card>
                {/* Render image */}
                {singleUserData?.photo_url ? (
                  <img alt="post" src={singleUserData?.photo_url} />
                ) : (
                  ""
                )}

                {/* Render video */}
                {singleUserData?.audio_url ? (
                  <Audio sourceUrl={singleUserData?.audio_url} h="350px" m="20px"/>
                ) : (
                  ""
                )}

                {/* Render audio */}
                {singleUserData?.video_url ? (
                  <video controls>
                    <source src={singleUserData?.video_url} type="video/mp4" />
                  </video>
                ) : (
                  ""
                )}
                <CardContent>
                  {/* <CardTitle>New york</CardTitle> */}
                  {/* <CardText>en.wikipedia.org . 81 min read</CardText> */}
                </CardContent>
              </Card>

              {/* Repost card renders repost data */}
              {singleUserData?.parent && (
                <RepostCard repostDetails={singleUserData?.parent} />
              )}
            </Content>
          </Container>

          <Container bb="1px solid #D0E2DC">
            <ReactionBox bb="1px solid #D0E2DC" mt="15px">
              <Reaction>
                <p style={{ fontWeight: "500" }}>
                  <Link
                    to={`/user/${singleUserData?.user?.username}/post/${singleUserData?.id}/likes`}
                    style={{ textDecoration: "none", color: "#49665c" }}
                  >
                    Likes
                  </Link>
                  <span style={{ fontWeight: "600", marginLeft: "5px" }}>
                    {singleUserData?.total_likes}
                  </span>
                </p>
              </Reaction>

              <Reaction ml="10%">
                <p style={{ fontWeight: "500" }}>
                  <Link
                    to={`/user/${singleUserData?.user?.username}/post/${singleUserData?.id}/reposts`}
                    style={{ textDecoration: "none", color: "#49665c" }}
                  >
                    Repost
                  </Link>
                  <span style={{ fontWeight: "600", marginLeft: "5px" }}>
                    {singleUserData?.total_reposts}
                  </span>
                </p>
              </Reaction>

              <Reaction ml="10%">
                <p style={{ fontWeight: "500" }}>
                  Comments
                  <span style={{ fontWeight: "600", marginLeft: "5px" }}>
                    {singleUserData?.total_comments}
                  </span>
                </p>
              </Reaction>
            </ReactionBox>

            {/* Reactions section */}
            <PostReactions
              singleUserData={singleUserData}
              handleOpenModal={handleOpenModal}
              dispatch={dispatch}
              handleOpenRepostModal={handleOpenRepostModal}
            />
          </Container>

          {/* Loading spinner for comment section */}
          {loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Rings
                type="Puff"
                color="#29bb89"
                height={60}
                width={60}
                //   timeout={3000}
              />
            </div>
          )}
          <CommentBox>
            {data?.comments.map((item) => {
              return (
                <SingleCommentBox key={Math.random()}>
                  <CommentTopBox>
                    <CommenterPBox>
                      <CommenterImg
                        src={item?.user?.photo_url || Person}
                        alt="dp"
                      />
                      <div>
                        <CommenterName>
                          {item?.user?.first_name}{" "}
                          <span>@{item?.user?.username}</span>
                        </CommenterName>
                        <CommentDateText>{item?.date}</CommentDateText>

                        <CommentText>{item?.content}</CommentText>

                        <CommentReactionBox mt="15px">
                          <CommentReaction>
                            <img alt="icon" src={like} />
                            <p style={{ fontWeight: "500" }}>
                              {item?.total_number_of_likes}
                            </p>
                          </CommentReaction>

                          <CommentReaction ml="40px">
                            <img alt="icon" src={comment} />
                            <p style={{ fontWeight: "500" }}>
                              {item?.total_number_of_replies}
                            </p>
                          </CommentReaction>

                          <CommentReaction ml="40px">
                            <img alt="icon" src={repost} />
                            <p style={{ fontWeight: "500" }}>0</p>
                          </CommentReaction>

                          {/* <CommentReaction ml="20%">
                            <img alt="icon" src={share} />
                          </CommentReaction> */}
                        </CommentReactionBox>
                      </div>
                    </CommenterPBox>

                    <DotBox>
                      <div></div>
                      <div></div>
                      <div></div>
                    </DotBox>
                  </CommentTopBox>
                </SingleCommentBox>
              );
            })}
          </CommentBox>
        </>
      )}
    </>
  );
};

export default Index;

export const PostReactions = ({
  handleOpenModal,
  singleUserData,
  dispatch,
  handleOpenRepostModal,
}) => {
  const [isLiked, setIsLiked] = useState(singleUserData?.i_like_this_post);
  const { getLikeRequest, data } = useGetLikeRequest();

  const handleCommentModal = () => {
    dispatch({ type: "POST_ID", payload: singleUserData?.id });
    handleOpenModal();
  };

  const sendLikeRequest = (id) => {
    getLikeRequest(`like/${id}/`);
    toggleLikeReaction();
  };

  const toggleLikeReaction = () => {
    setIsLiked((props) => !props);
  };

  const handleRepost = async (id) => {
    // await dispatch({ type: "GET_REPOST_ID", payload: id });
    // await dispatch({ type: "GET_REPOSTDATA" });
    handleOpenRepostModal();
  };

  return (
    <ReactionBox>
      <Reaction onClick={() => sendLikeRequest(singleUserData?.id)}>
        <img
          alt="icon"
          src={isLiked || singleUserData?.i_like_this_post ? love : like}
        />
        <p style={{ marginLeft: "10px" }}>
          {/* {item?.total_likes} */}
          {data === null ? singleUserData?.total_likes : data.likes}
        </p>
      </Reaction>

      <Reaction ml="13%" onClick={handleCommentModal}>
        <img alt="icon" src={comment} />
        <p style={{ marginLeft: "10px" }}>{singleUserData?.total_comments}</p>
      </Reaction>

      <Reaction ml="13%" onClick={() => handleRepost()}>
        <img alt="icon" src={repost} />
        <p style={{ marginLeft: "10px" }}>{singleUserData?.total_reposts}</p>
      </Reaction>

      <Reaction ml="13%">
        <img alt="icon" src={share} />
      </Reaction>
    </ReactionBox>
  );
};
