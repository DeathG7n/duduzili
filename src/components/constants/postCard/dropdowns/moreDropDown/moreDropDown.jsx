import React, { useEffect, useState, useRef } from "react";

import {
  DropDown1,
  DropDownContent,
  MoreBox,
  DropDownBox,
  Button,
} from "./moreDropDownStyles";
import user from "../../../../assets/user.png";
import flag from "../../../../assets/flag.png";
import save from "../../../../assets/save.png";
import blocked from "../../../../assets/blocked.png";
import volume from "../../../../assets/volume.png";
import mail from "../../../../assets/mail.png";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFollowGetRequest } from "../../../../api/api";

const Index = ({
  userAction,
  userData,
  save,
  updateStateEditPost,
  handleDeleteRequest,
  openModal
}) =>{
  const postItem = localStorage.getItem("item")
  const item = JSON.parse(postItem)
  const moreRef = useRef()
  const [windowSize, setWindowSize] = useState(false);
  const [isFollowing, setIsFollowing] = useState(item.is_following);
  const { getFollowRequest } = useFollowGetRequest();

  const sendFollowRequest = (id) => {
    toggleFollowText();
    getFollowRequest(`follow/${id}/`);
  };

  const toggleFollowText = () => {
    setIsFollowing((props) => !props);
  };

  useEffect(() => {
    if (window.innerWidth >= 800) {
      setWindowSize(false);
    } else {
      setWindowSize(true);
    }
  });
  
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          openModal();
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

  console.log(item)
  return(
    <MoreBox>
      <span></span>
      <span></span>
      <span></span>
    {windowSize && (
      <DropDownBox >
        {item?.user?.id !== userData?.user?.id ? (
        <DropDown1 className="dropdown" height="230px" ref={moreRef}>
          <DropDownContent onClick={() => sendFollowRequest(item?.user?.id)}>
            <img src={user} alt="icon" />
            <p>{isFollowing ? "Unfollow" : "Follow"} @{item?.user?.username}</p>
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
          <Button onClick={openModal}>Cancel</Button>
        </DropDown1>
      ) : (
        <DropDown1 className="dropdown" height="95px" ref={moreRef}>
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
          <Button onClick={openModal}>Cancel</Button>
        </DropDown1>
      )}
      </DropDownBox>
    )}
    </MoreBox>
    
    
  )
}

export default Index;
