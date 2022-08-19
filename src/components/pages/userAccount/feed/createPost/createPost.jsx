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

import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import ArticleIcon from '@mui/icons-material/Article';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
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
                <CropOriginalIcon sx={{ fontSize: "30px"}}/>
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
                <YouTubeIcon sx={{color: "red", fontSize: "30px"}}/>
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
                <KeyboardVoiceIcon sx={{color: "#ffc107", fontSize: "30px"}}/>
                <p>Audio</p>

                <ToolTipBox ref={gifRef}>
                  <p>Share Audio</p>
                </ToolTipBox>
              </Tag>

              <Link className="link" to="/user/article/new" style={{textDecoration: "none", color: "#000"}}>
                <Tag>
                    <ArticleIcon sx={{color: "black", fontSize: "30px"}}/>
                    <p>Write Article</p> 
                </Tag>
              </Link>
            </TagBox>
          </div>
        </Body>
      </Card>
    </>
  );
};

export default Index;
