import React from "react";

import { StatsBox, Image, DetailsBox } from "./statsStyles";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";

const Index = ({ firstName, userName, photo, id }) => {
  return (
    <StatsBox>
      <div>
        <Image src={photo || avatar} alt="avatar" />
        <Link
          to={`/user/${userName}/${id}`}
          style={{ textDecoration: "none", color: "#000" }}
        >
          <DetailsBox>
            <h5>{firstName}</h5>
            <p>@{userName}</p>
          </DetailsBox>
        </Link>
      </div>
    </StatsBox>
  );
};

export default Index;
