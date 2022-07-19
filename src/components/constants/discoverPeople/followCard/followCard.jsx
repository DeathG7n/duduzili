import React, { useState } from "react";

import { Body, TextBox, CardImge, Button } from "../discoverStyles";
import { useFollowGetRequest } from "../../../api/api";
import Person from "../../../assets/avatar.png";

const FollowCard = ({ item }) => {
  const [isFollowing, setIsFollowing] = useState(item?.is_following);

  const { getFollowRequest } = useFollowGetRequest();

  const sendFollowRequest = (id) => {
    getFollowRequest(`follow/${id}/`, isFollowing);
    toggleFollowText();
  };

  const toggleFollowText = () => {
    setIsFollowing((props) => !props);
  };

  return (
    <Body key={item.id}>
      <div>
        <CardImge alt="human" src={item.photo_url || Person} />
        <TextBox>
          <p>{item.first_name}</p>
          <span>@{item.username}</span>
        </TextBox>
      </div>

      <Button
        bc="#f7fdfb"
        border="1px solid #29BB89"
        width="90px"
        height="30px"
        color="#29BB89"
        br="20px"
        fw="500"
        onClick={() => sendFollowRequest(item.id)}
      >
        {isFollowing === true ? "Unfollow" : "Follow"}
      </Button>
    </Body>
  );
};

export default FollowCard;
