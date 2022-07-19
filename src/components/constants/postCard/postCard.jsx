import React, { useState } from "react";

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
  Card,
  CardContent,
  // CardTitle,
  // CardText,
  DropDown1,
  DropDownContent,
  DropDownReaction,
  ShareDropDown,
  ProfileDropDown,
  Button,
  ProfileDropDownContent,
  Name1,
  ProfileText,
  AudioBox,
} from "./postCardStyles";
import Person from "../../assets/People.png";
import repost from "../../assets/repost.png";
import share from "../../assets/share.png";
import comment from "../../assets/comment.png";
import like from "../../assets/like.png";
import love from "../../assets/heart.png";
import SkeletonLoader from "../skeletonLoaders/postCardLoader";
import MobileMoreDropDown from "./dropdowns/moreDropDown/moreDropDown";
import MobileShareDropDown from "./dropdowns/shareDropDown/shareDropDown";
import RepostCard from "../repostCard/repostCard";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

import user from "../../assets/user.png";
import flag from "../../assets/flag.png";
import save from "../../assets/save.png";
import blocked from "../../assets/blocked.png";
import volume from "../../assets/volume.png";
import mail from "../../assets/mail.png";
import Play from "../../assets/audio_playing.gif";
import Pause from "../../assets/audio_static.jpg";
// import shareicon from "../../assets/share.svg";
import link from "../../assets/link.png";
import {
  useGetLikeRequest,
  useDeleteRequest,
  useUserActions,
} from "../../api/api";
import { Link } from "react-router-dom";
import { DataContext } from "../../api/context";
import { truncate } from "../../constants/textTruncate";
import { extractLinkText } from "../../constants/extractLinkText";

const Index = ({
  handleOpenModal,
  postFeed,
  handleOpenPostModal,
  handleOpenRepostModal,
}) => {
  // const [selectValue, setSelectValue] = useState(null);
  const [openMoreModal, setOpenMoreModal] = useState(false);
  const [openShareModal, setOpenShareModal] = useState(false);

  const handleOpenMobileModal = () => {
    setOpenMoreModal((props) => !props);
  };

  const handleOpenMobileShareModal = () => {
    setOpenShareModal((props) => !props);
  };

  const { deleteRequest } = useDeleteRequest();

  const handleDeleteRequest = async (id) => {
    await deleteRequest("posts", id);
  };

  const {
    state: { userData },
    dispatch,
  } = DataContext();

  const { userAction } = useUserActions();

  const updateStateEditPost = async (id) => {
    await dispatch({ type: "GETPOST_ID", payload: id });
    await dispatch({ type: "GET_EDITPOST" });
    handleOpenPostModal();
  };

  return (
    <>
      {/* {openMoreModal && (
        <MobileMoreDropDown openModal={handleOpenMobileModal} />
      )} */}

      {openShareModal && (
        <MobileShareDropDown openModal={handleOpenMobileShareModal} />
      )}

      {postFeed === null ? (
        <SkeletonLoader num="2" />
      ) : (
        <>
          {/* <Container>
            <TopBox>
              <ProfileBox>
                <img src={Person} alt="dp" />
                <div>
                  {" "}
                  <Name>
                    Duduzili <span>@duduzili</span>
                  </Name>{" "}
                  <DateText>1 day ago</DateText>
                </div>

                <ProfileDropDown className="dropdown">
                  <ProfileDropDownContent>
                    <div>
                      <img src={Person} alt="dp" />
                      <Name1>
                        <ProfileText fw="600" fs="15px">
                          Queen Alicia
                        </ProfileText>
                        <span>@licia22</span>

                        <ProfileText color="#49665C" fs="14px" mt="10px">
                          Political Analyst
                        </ProfileText>
                        <ProfileText color="#49665C" fs="14px">
                          i love going on vacation..
                        </ProfileText>
                      </Name1>
                    </div>
                    <Button>Follow</Button>
                  </ProfileDropDownContent>
                </ProfileDropDown>
              </ProfileBox>

              <MoreBox onClick={handleOpenMobileModal}>
                <span></span>
                <span></span>
                <span></span>
                <DropDown1 className="dropdown">
                  <DropDownContent>
                    <img src={user} alt="icon" />
                    <p>Follow @duduzili</p>
                  </DropDownContent>

                  <DropDownContent>
                    <img src={user} alt="icon" />
                    <p>Save post</p>
                  </DropDownContent>

                  <DropDownContent>
                    <img src={volume} alt="icon" />
                    <p>Mute @duduzili</p>
                  </DropDownContent>

                  <DropDownContent>
                    <img src={blocked} alt="icon" />
                    <p>Block @duduzili</p>
                  </DropDownContent>

                  <DropDownContent>
                    <img src={flag} alt="icon" />
                    <p>Report post</p>
                  </DropDownContent>
                </DropDown1>
              </MoreBox>
            </TopBox>

            <Content>
              <ContentText>
                My heart goes out to all backend and infrastructure engineers.
                While frontend engineers get praised for their beautiful UIs and
                product managers get credited for their awesome products,
                backend / infra engineers get little to no recognition, except
                when a service goes down for 5 minutes, at which point they get
                called garbage engineers who can't keep a service up.
              </ContentText>

              <HashTagBox>
                <p>#backend</p>
                <p>#infraengineers</p>
              </HashTagBox>

              <ReactionBox>
                <Reaction>
                  <img alt="icon" src={like} />
                  <p>8.8k</p>
                </Reaction>

                <Reaction ml="27px">
                  <img alt="icon" src={comment} />
                  <p>619</p>
                </Reaction>

                <Reaction ml="27px">
                  <img alt="icon" src={repost} />
                  <p>300</p>
                </Reaction>

                <DropDownReaction ml="27px">
                  <img
                    alt="icon"
                    src={share}
                    onClick={handleOpenMobileShareModal}
                  />
        
                  <ShareDropDown className="dropdown">
                    <div>
                      <img src={link} alt="icon" />
                      <p>Copy link</p>
                    </div>

                    <div>
                      <img src={mail} alt="icon" />
                      <p>Send via message</p>
                    </div>

                    <div>
                      <img src={shareicon} alt="icon" />
                      <p>Share with apps</p>
                    </div>
                  </ShareDropDown>
                </DropDownReaction>
              </ReactionBox>
            </Content>
          </Container> */}

          {/* second post with image */}
          {postFeed &&
            postFeed.map((item, idx, arr) => {
              return (
                <Container key={idx}>
                  <TopBox>
                    <ProfileBox>
                      <img src={item?.user?.photo_url || Person} alt="dp" />
                      <div>
                        {" "}
                        <Name>
                          <Link
                            to="/user/pro"
                            style={{ textDecoration: "#000", color: "#000", fontWeight: "600" }}
                          >
                            {item?.user?.first_name}
                          </Link>
                          <span style={{ marginLeft: "7px", color: "#29BB89" }}>
                            @{item?.user?.username}
                          </span>
                        </Name>{" "}
                        <DateText>{`${item?.date} ago`}</DateText>
                      </div>

                      <ProfileDropDown className="dropdown">
                        <ProfileDropDownContent>
                          <div>
                            <img
                              src={item?.user?.photo_url || Person}
                              alt="dp"
                            />
                            <Name1>
                              <ProfileText fw="600" fs="15px">
                                <Link
                                  to={`/user/${item?.user?.username}/${item?.user?.id}`}
                                  style={{
                                    textDecoration: "#000",
                                    color: "#000",
                                  }}
                                >
                                  {`${item?.user?.first_name} ${item?.user?.last_name}`}
                                </Link>
                              </ProfileText>
                              <span>{item?.user?.username}</span>

                              {item?.user?.bio && (
                                <ProfileText
                                  color="#49665C"
                                  fs="14px"
                                  mt="10px"
                                >
                                  {item?.user?.bio}
                                </ProfileText>
                              )}
                            </Name1>
                          </div>
                          <Button>Follow</Button>
                        </ProfileDropDownContent>
                      </ProfileDropDown>
                    </ProfileBox>

                    <MoreBox
                      onClick={() => {
                        return handleOpenMobileModal();
                      }}
                    >
                      <span></span>
                      <span></span>
                      <span></span>

                      {/* {arr[idx] && openMoreModal && (
                        <MobileMoreDropDown openModal={handleOpenMobileModal} />
                      )} */}

                      {/* Opens more options modal when clicked */}
                      {/* Optionally display modal for me and general users */}
                      {item?.user?.id !== userData?.user?.id ? (
                        <DropDown1 className="dropdown" height="230px">
                          <DropDownContent>
                            <img src={user} alt="icon" />
                            <p>Follow @{item?.user?.username}</p>
                          </DropDownContent>

                          <DropDownContent
                            onClick={() =>
                              userAction(
                                `save/${item?.user?.id}/`,
                                "Post saved successfully"
                              )
                            }
                          >
                            <img src={save} alt="icon" />
                            <p>Save post</p>
                          </DropDownContent>

                          <DropDownContent
                            onClick={() =>
                              userAction(
                                `mute/${item?.user?.id}/`,
                                "User muted successfully"
                              )
                            }
                          >
                            <img src={volume} alt="icon" />
                            <p>Mute @{item?.user?.username}</p>
                          </DropDownContent>

                          <DropDownContent
                            onClick={() =>
                              userAction(
                                `block/${item?.user?.id}/`,
                                "User blocked successfully"
                              )
                            }
                          >
                            <img src={blocked} alt="icon" />
                            <p>Block @{item?.user?.username}</p>
                          </DropDownContent>

                          <DropDownContent
                            onClick={() =>
                              userAction(
                                `report_post/${item?.user?.id}/`,
                                "Post reported successfully"
                              )
                            }
                          >
                            <img src={flag} alt="icon" />
                            <p>Report post</p>
                          </DropDownContent>
                        </DropDown1>
                      ) : (
                        <DropDown1 className="dropdown" height="95px">
                          <DropDownContent
                            onClick={() => updateStateEditPost(item?.id)}
                          >
                            <img src={user} alt="icon" />
                            <p>Edit Post</p>
                          </DropDownContent>

                          <DropDownContent
                            onClick={() => handleDeleteRequest(item?.id)}
                          >
                            <img src={user} alt="icon" />
                            <p>Delete Post</p>
                          </DropDownContent>
                        </DropDown1>
                      )}
                    </MoreBox>
                  </TopBox>

                  <Content>
                    <ContentText>
                      <Link to={`/user${item?.post_url}`} className="link">
                        {item?.text}
                        <span
                          style={{
                            color: "#d0e2dc",
                            fontWeight: 600,
                            marginLeft: "10px",
                          }}
                        >
                          {" "}
                          {item?.text.length > 200 ? "See More" : ""}
                        </span>
                      </Link>
                    </ContentText>

                    {extractLinkText(item?.text) ? (
                      <LinkPreview
                        url={extractLinkText(item?.text)}
                        width="100%"
                      />
                    ) : (
                      ""
                    )}

                    <Link to={`/user${item?.post_url}`}>
                      <Card>
                        {/* Render image */}
                        {item?.photo_url ? (
                          <img alt="post" src={item?.photo_url} />
                        ) : (
                          ""
                        )}

                        {/* Render audio */}
                        {item?.audio_url ? (
                          <Audio sourceUrl={item?.audio_url} />
                        ) : (
                          ""
                        )}

                        {/* Render video */}
                        {item?.video_url ? (
                          <video controls>
                            <source src={item?.video_url} type="video/mp4" />
                          </video>
                        ) : (
                          ""
                        )}
                        <CardContent>
                          {/* <CardTitle>New york</CardTitle> */}
                          {/* <CardText>en.wikipedia.org . 81 min read</CardText> */}
                        </CardContent>
                      </Card>
                    </Link>

                    {/* Repost card renders repost data */}
                    {item?.parent && (
                      <RepostCard repostDetails={item?.parent} />
                    )}

                    {/* Reactions component renders below */}
                    <ReactionsComponent
                      item={item}
                      handleOpenModal={handleOpenModal}
                      handleOpenRepostModal={handleOpenRepostModal}
                    />
                  </Content>
                </Container>
              );
            })}
        </>
      )}
    </>
  );
};

export default Index;

// Reactions component is seperated so the loop identifies each item as unique
const ReactionsComponent = ({
  item,
  handleOpenModal,
  handleOpenRepostModal,
}) => {
  const [openShareModal, setOpenShareModal] = useState(false);
  const [isLiked, setIsLiked] = useState(item?.i_like_this_post);

  const { getLikeRequest, data } = useGetLikeRequest();

  const { dispatch } = DataContext();

  const getPostID = (id) => {
    console.log(id);
    dispatch({ type: "POST_ID", payload: id });
    handleOpenModal();
  };

  const handleOpenMobileShareModal = () => {
    setOpenShareModal((props) => !props);
  };

  const sendLikeRequest = (id) => {
    getLikeRequest(`like/${id}/`);
    toggleLikeReaction();
  };

  const toggleLikeReaction = () => {
    setIsLiked((props) => !props);
  };

  const handleRepost = async (id) => {
    await dispatch({ type: "GET_REPOST_ID", payload: id });
    await dispatch({ type: "GET_REPOSTDATA" });
    handleOpenRepostModal();
  };
  return (
    <ReactionBox>
      <Reaction onClick={() => sendLikeRequest(item?.id)}>
        <img alt="icon" src={isLiked /*|| item?.i_like_this_post */? love : like} />
        <p>
          {isLiked ? item?.total_likes + 1 : item?.total_likes}
        </p>
      </Reaction>

      {/* Opens post comment modal when clicked */}
      <Reaction ml="15%" onClick={() => getPostID(item?.id)}>
        <img alt="icon" src={comment} />
        <p>{item?.total_comments}</p>
      </Reaction>

      {/* Open Share options modal when clicked */}
      <Reaction ml="15%" onClick={() => handleRepost(item?.id)}>
        <img alt="icon" src={repost} />
        <p>{item?.total_reposts}</p>
      </Reaction>

      <DropDownReaction ml="15%">
        <img alt="icon" src={share} onClick={handleOpenMobileShareModal} />
        {/* <p>300</p> */}

        <ShareDropDown className="dropdown">
          <div>
            <img src={link} alt="icon" />
            <p>Copy link</p>
          </div>

          <div>
            <img src={mail} alt="icon" />
            <p>Send via message</p>
          </div>
        </ShareDropDown>
      </DropDownReaction>
    </ReactionBox>
  );
};

export const Audio = ({ sourceUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <AudioBox bg={isPlaying ? Play : Pause}>
        <audio
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={sourceUrl} type="audio/mpeg" />
        </audio>
      </AudioBox>
    </>
  );
};
