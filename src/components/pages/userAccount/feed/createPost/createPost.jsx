import React, { useRef } from "react";

import {
  Card,
  Body,
  CardImge,
  Input,
  TagBox,
  Tag,
  ToolTipBox,
} from "./createStyls";
import photo from "../../../../assets/photo.png";
import gif from "../../../../assets/gif.png";
import mic from "../../../../assets/mic.png";
import write from "../../../../assets/write.png";
import personIcon from "../../../../assets/People.png";
import { DataContext } from "../../../../api/context";
import { Link } from "react-router-dom";

const Index = ({ handleOpenModal }) => {
  const photoRef = useRef();
  const videoRef = useRef();
  const gifRef = useRef();

  function handleMouseEnter(ref) {
    ref.current.style.opacity = 1;
  }
  function handleMouseLeave(ref) {
    ref.current.style.opacity = 0;
  }

  // gets user data from global state
  const {
    state: { userData },
  } = DataContext();

  return (
    <>
      <Card>
        <Body>
          <div
          style={{
            display: "flex",
            gap: "20px",
            width: "100%",
            marginTop: "10px",
            marginBottom: "10px",
          }}
          >
            <CardImge alt="human" src={userData?.user?.photo_url || personIcon} />
            <Input placeholder="Create a post" onClick={handleOpenModal} />
          </div>
          
          <div>
            

            <TagBox>
              <Tag
                onMouseEnter={() => handleMouseEnter(photoRef)}
                onMouseLeave={() => handleMouseLeave(photoRef)}
                onClick={handleOpenModal}
              >
                <img alt="icon" src={photo} style={{
                  width: "25px",
                }}/>
                <p>Photo</p>

                <ToolTipBox ref={photoRef}>
                  <p>Share Photo</p>
                </ToolTipBox>
              </Tag>

              <Tag
                onMouseEnter={() => handleMouseEnter(videoRef)}
                onMouseLeave={() => handleMouseLeave(videoRef)}
                onClick={handleOpenModal}
              >
                <img alt="icon" src={gif} style={{
                  width: "25px",
                  height: "16px",
                  alignSelf: "center"
                }}/>
                <p>Gif</p>

                <ToolTipBox ref={videoRef}>
                  <p>Share Video</p>
                </ToolTipBox>
              </Tag>

              <Tag
                onMouseEnter={() => handleMouseEnter(gifRef)}
                onMouseLeave={() => handleMouseLeave(gifRef)}
                onClick={handleOpenModal}
              >
                <img alt="icon" src={mic} />
                <p>Audio</p>

                <ToolTipBox ref={gifRef}>
                  <p>Share Audio</p>
                </ToolTipBox>
              </Tag>

              <Tag>
                <Link className="link" to="/user/article/new">
                  <img alt="icon" src={write} />
                  <p>Write Article</p>
                </Link>
              </Tag>
            </TagBox>
          </div>
        </Body>
      </Card>
    </>
  );
};

export default Index;
