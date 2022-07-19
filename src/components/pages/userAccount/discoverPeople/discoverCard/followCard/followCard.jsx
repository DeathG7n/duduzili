import React, { useState } from "react";

import { Body, TextBox, CardImge, Button, Text } from "../discoverCardStyles";
import Person from "../../../../../assets/avatar.png";
import { Link } from "react-router-dom";
import { useFollowGetRequest } from "../../../../../api/api";

const FollowCard = ({ item }) => {
  const [isFollowing, setIsFollowing] = useState(item.is_following);

  const { getFollowRequest } = useFollowGetRequest();

  const sendFollowRequest = (id) => {
    toggleFollowText();
    getFollowRequest(`follow/${id}/`);
  };

  const toggleFollowText = () => {
    setIsFollowing((props) => !props);
  };

  console.log(item)

  return (
    <Body>
      <div>
        <CardImge alt="human" src={item.photo_url || Person} />

        <Link
          to={`/user/${item?.username}/${item?.id}`}
          style={{
            textDecoration: "#000",
            color: "#000",
          }}
        >
          <TextBox>
            <p>{item.first_name}</p>
            <span>@{item.username}</span>
            <Text>{item.bio || ""}</Text>
          </TextBox>
        </Link>
      </div>

      <Button
        bc="#f7fcfa"
        border="1px solid #29BB89"
        width="130px"
        height="32px"
        color="#fff"
        br="20px"
        fw="600"
        onClick={() => sendFollowRequest(item.id)}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
    </Body>
  );
};

export default FollowCard;
