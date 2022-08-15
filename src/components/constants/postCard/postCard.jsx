import React, { useRef, useState, useEffect } from "react";

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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
  const [left, setLeft] = useState("")
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
  console.log(postFeed)

  function changeDropDown(event, x , y) {
    x = event.nativeEvent.offsetX
    setLeft(x)
  }

  const checkMessageLength = postFeed?.map((c) => {
    const message = JSON.stringify(c?.text)
    if(message.length >= 200 ){
      return "... See More"
    }
  })

  return (
    <>
      {postFeed === null ? (
        <SkeletonLoader num="2" />
      ) : (
        <>
          
          {postFeed &&
            postFeed.map((item, idx, arr) => {
              return (
                <Container key={idx} >
                  {openMoreModal && (
                    <MobileMoreDropDown 
                    openModal={handleOpenMobileModal} 
                    item={item}
                    userAction={userAction}
                    userData={userData}
                    save={save}
                    updateStateEditPost={ updateStateEditPost}
                    handleDeleteRequest={handleDeleteRequest}
                    />
                  )}

                  {openShareModal && (
                    <MobileShareDropDown openModal={handleOpenMobileShareModal} />
                  )}
                  <TopBox>
                    <ProfileBox >
                      <img src={item?.user?.photo_url || Person} alt="dp" />
                      <div>
                        {" "}
                        <Name onMouseOver={(e)=> changeDropDown(e)}>
                          <Link 
                            to={`/user/${item?.user?.username}`}
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

                      <ProfileDropDown className="dropdown" lf={`${left-90}px`}>
                        <ProfileDropDownContent>
                          <div>
                            <img
                              src={item?.user?.photo_url || Person}
                              alt="dp"
                            />
                            <Name1>
                              <ProfileText fw="600" fs="15px">
                                <Link
                                  to={`/user/${item?.user?.username}`}
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
                          {userData?.user?.username !== item?.user?.username ? 
                          <Button onClick={()=>{}}>{item?.user?.is_following ? "Unfollow" : "Follow"}</Button> : ""}
                        </ProfileDropDownContent>
                      </ProfileDropDown>
                    </ProfileBox>
                    
                    <div>
                       <MoreComponent
                        item={item}
                        userAction={userAction}
                        userData={userData}
                        save={save}
                        updateStateEditPost={updateStateEditPost}
                        handleDeleteRequest={handleDeleteRequest} 
                        openModal={handleOpenMobileModal}
                    />
                    </div>
                  </TopBox>

                  <Content>
                    <ContentText>
                      <Link to={`/user${item?.post_url}`} className="link">
                      {truncate(item?.text, 200)}
                        <span
                          style={{
                            color: "#d0e2dc",
                            fontWeight: 600,
                            marginLeft: "2px",
                          }}
                        >
                          {checkMessageLength[idx]}
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
                          <Audio sourceUrl={item?.audio_url} h="350px" m="20px" mh="260px"/>
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
                      openModal={handleOpenMobileShareModal}
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



// Reactions component is separated so the loop identifies each item as unique

const ReactionsComponent = ({
  item,
  handleOpenModal,
  handleOpenRepostModal,
  openModal
}) => {
  const [openShareModal, setOpenShareModal] = useState(false);
  const [windowSize, setWindowSize] = useState(false);
  const [isLiked, setIsLiked] = useState(item?.i_like_this_post);
  const [likes, setLikes] = useState(item?.total_likes);
  const [shareDropDown, setShareDropDown] = useState(false)
  const moreRef = useRef()
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShareDropDown(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(moreRef)
  useEffect(() => {
    if (window.innerWidth <= 800) {
      setWindowSize(false);
    } else {
      setWindowSize(true);
    }
  });
  

  const { getLikeRequest, data } = useGetLikeRequest();

  const { dispatch } = DataContext();

  const getPostID = (id) => {
    console.log(id);
    dispatch({ type: "POST_ID", payload: id });
    handleOpenModal();
  };

  const handleOpenMobileShareModal = () => {
    setOpenShareModal((props) => !props);
    setShareDropDown(!shareDropDown)
    openModal()
    console.log("helps")
  };

  const sendLikeRequest = (id) => {
    getLikeRequest(`like/${id}/`);
    toggleLikeReaction();
    console.log(isLiked ? "unliked" : "liked")
  };

  const toggleLikeReaction = () => {
    setLikes(isLiked ? likes - 1 : likes + 1)
    setIsLiked(prevState => !prevState);
  };

  const handleRepost = async (id) => {
    await dispatch({ type: "GET_REPOST_ID", payload: id });
    await dispatch({ type: "GET_REPOSTDATA" });
    handleOpenRepostModal();
  };
  return (
    <ReactionBox>
      <Reaction onClick={() => sendLikeRequest(item?.id)}>
        <img alt="icon" src={isLiked ? love : like} />
        <p>
          {likes}
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
        <img alt="icon" src={share} onClick={handleOpenMobileShareModal} ref={moreRef}/>
        {/* <p>300</p> */}

        <ShareDropDown className="dropdown" style={{
          display: windowSize && shareDropDown ? "block" : "none"
        }}>
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

export const Audio = ({ sourceUrl, h, m, mh }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <AudioBox bg={isPlaying ? Play : Pause} h={h} m={m} mh={mh}>
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

const MoreComponent = ({
  item,
  userAction,
  userData,
  save,
  updateStateEditPost,
  handleDeleteRequest,
  openModal
}) =>{
  const [dropDown, setDropDown] = useState(false)
  const [windowSize, setWindowSize] = useState(false);
  const moreRef = useRef()
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropDown(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(moreRef)
  

  useEffect(() => {
    if (window.innerWidth <= 800) {
      setWindowSize(false);
    } else {
      setWindowSize(true);
    }
  });
  const toggle = () =>{
    setDropDown(!dropDown)
    openModal()
    localStorage.setItem("item", JSON.stringify(item))
    console.log(item)
  }
  return(
    <MoreBox
      onClick={toggle} ref={moreRef}
    >
      <span></span>
      <span></span>
      <span></span>
      {/* Opens more options modal when clicked */}
      {/* Optionally display modal for me and general users */}
      {item?.user?.id !== userData?.user?.id ? (
        <DropDown1 className="dropdown" height="230px" style={{
          display: windowSize && dropDown ? "block" : "none"
        }} >
          <DropDownContent>
            <img src={user} alt="icon" />
            <p>{item?.user?.is_following ? "Unfollow" : "Follow"} @{item?.user?.username}</p>
          </DropDownContent>
          <DropDownContent
            onClick={() =>
              userAction(
                `save/${item?.id}/`,
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
            onClick={() =>{
              userAction(
                `block/${item?.user?.id}/`,
                "User blocked successfully"
              )}
            }
          >
            <img src={blocked} alt="icon" />
            <p>Block @{item?.user?.username}</p>
          </DropDownContent>
          <DropDownContent
            onClick={() =>
              userAction(
                `report_post/${item?.id}/`,
                "Post reported successfully"
              )
            }
          >
            <img src={flag} alt="icon" />
            <p>Report post</p>
          </DropDownContent>
        </DropDown1>
      ) : (
        <DropDown1 className="dropdown" height="95px" style={{
          display: windowSize && dropDown ? "block" : "none"
        }}>
          <DropDownContent
            onClick={() => updateStateEditPost(item?.id)}
          >
            {/* <img src={user} alt="icon" /> */}
            <EditIcon sx={{fontSize: "15px"}}/>
            <p>Edit Post</p>
          </DropDownContent>
          <DropDownContent
            onClick={() => handleDeleteRequest(item?.id)}
          >
            {/* <img src={user} alt="icon" /> */}
            <DeleteIcon sx={{fontSize: "15px"}}/>
            <p>Delete Post</p>
          </DropDownContent>
        </DropDown1>
      )}
    </MoreBox>
  )
}
