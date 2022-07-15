import React, { useRef, useReducer, useCallback } from "react";

import {
  ModalContainer,
  ModalBox,
  ModalTitle,
  Rule,
  ModalBody,
  ImageBox,
  ModalFooter,
  Description,
  FormBox,
  InputBox,
  Input,
  Button,
  ButtonBox,
  IconBox,
  Icon,
  ArrowBackIcon,
  TitleBox,
  ToolTipBox,
} from "./modalStyles";

import Cancel from "../../../../../../assets/x.png";
import youtube from "../../../../../../assets/gif.png";
import hash from "../../../../../../assets/write.png";
import text from "../../../../../../assets/mic.png";
import image from "../../../../../../assets/photo.png";
import human from "../../../../../../assets/People.png";
import back from "../../../../../../assets/back.svg";
import { usePostComment } from "../../../../../../api/api";
import { DataContext } from "../../../../../../api/context";
import { Link } from "react-router-dom";

const Index = ({ handleOpenModal }) => {
  const photoRef = useRef();
  const videoRef = useRef();
  const gifRef = useRef();

  const { postComment, loading } = usePostComment();

  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };

  const handleChange = (event) => {
    const fileType = event.target.type === "file";

    setFormData({
      name: event.target.name,
      value: fileType ? event.target.files[0] : event.target.value,
    });
  };

  const { dispatch } = DataContext();

  const handleCloseModal = useCallback(() => {
    dispatch({ type: "HIDE_TOPBAR" });
    handleOpenModal();
  }, []);

  const reloadWindow = () => {
    window.location.reload(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const postValues = new FormData();
    postValues.append("text", formData.text);
    postValues.append("photo", formData.photo);
    postValues.append("audio", formData.audio);
    postValues.append("video", formData.video);
    postValues.append("publish", "save");

    postComment("posts/", postValues, handleOpenModal, reloadWindow);
  };

  const [formData, setFormData] = useReducer(formReducer, {});

  // console.log(URL.createObjectURL(formData.audio));
  // console.log(URL.createObjectURL(formData.video));
  // console.log(URL.createObjectURL(formData.photo));
  console.log(formData);

  function handleMouseEnter(ref) {
    ref.current.style.opacity = 1;
  }
  function handleMouseLeave(ref) {
    ref.current.style.opacity = 0;
  }

  return (
    <ModalContainer>
      <ModalBox>
        <ModalTitle>
          <TitleBox>
            <ArrowBackIcon alt="icon" src={back} onClick={handleCloseModal} />
            <h3>Create post</h3>
          </TitleBox>

          <div style={{ cursor: "pointer" }} onClick={handleCloseModal}>
            <img
              src={Cancel}
              alt="cancel"
              style={{ width: "35px", height: "35px" }}
            />
          </div>

          <Button
            height="35px"
            width="90px"
            color="white"
            border="none"
            bc="#29bb89"
            display="none"
            smdisplay="block"
            onClick={handleSubmit}
          >
            Post
          </Button>
        </ModalTitle>
        <Rule />
        <ModalBody>
          <FormBox>
            <Description>
              <img src={human} alt="human" />
            </Description>

            <InputBox>
              <textarea
                placeholder="What is on your mind?"
                rows="4"
                name="text"
                onChange={handleChange}
              />
            </InputBox>

            <Input
              id="photo"
              type="file"
              name="photo"
              onChange={handleChange}
            />
            <Input
              id="video"
              type="file"
              name="video"
              onChange={handleChange}
            />
            <Input
              id="audio"
              type="file"
              name="audio"
              onChange={handleChange}
            />

            {/* Shows upload preview */}
          </FormBox>

          <ImageBox>
            {formData.photo && (
              <img
                src={URL.createObjectURL(formData.photo) || ""}
                style={{ width: "100%", height: "auto" }}
              />
            )}

            {formData.audio && (
              <audio controls>
                <source
                  src={URL.createObjectURL(formData.audio) || ""}
                  type="audio/mpeg"
                />
              </audio>
            )}

            {formData.video && (
              <video controls>
                <source
                  src={URL.createObjectURL(formData.video) || ""}
                  type="video/mp4"
                />
              </video>
            )}
          </ImageBox>
        </ModalBody>

        <br />
        <Rule smdisplay="none" />
        <ModalFooter>
          <IconBox>
            <div
              onMouseEnter={() => handleMouseEnter(photoRef)}
              onMouseLeave={() => handleMouseLeave(photoRef)}
            >
              <label for="photo">
                <Icon alt="link icon" src={image} width="25px" height="25px" />
              </label>

              <ToolTipBox ref={photoRef}>
                <p>Share Photo</p>
              </ToolTipBox>
            </div>

            <div
              onMouseEnter={() => handleMouseEnter(videoRef)}
              onMouseLeave={() => handleMouseLeave(videoRef)}
            >
              <label for="video">
                <Icon
                  alt="link icon"
                  src={youtube}
                  width="30px"
                  height="30px"
                  ml="20px"
                />
              </label>

              <ToolTipBox ref={videoRef}>
                <p>Share Video</p>
              </ToolTipBox>
            </div>

            <div
              onMouseEnter={() => handleMouseEnter(gifRef)}
              onMouseLeave={() => handleMouseLeave(gifRef)}
            >
              <label for="audio">
                <Icon
                  alt="link icon"
                  src={text}
                  width="25px"
                  height="25px"
                  ml="20px"
                  show
                />
              </label>
              <ToolTipBox ref={gifRef}>
                <p>Share Audio</p>
              </ToolTipBox>
            </div>

            <Link to="/user/article/new">
              <Icon
                alt="link icon"
                ml="20px"
                height="24px"
                width="25px"
                src={hash}
              />
            </Link>
          </IconBox>

          <ButtonBox>
            <Button
              height="35px"
              width="90px"
              color="black"
              border="none"
              bc="white"
              onClick={handleOpenModal}
            >
              Cancel
            </Button>
            <Button
              height="35px"
              width="90px"
              color="white"
              border="none"
              bc="#29bb89"
              onClick={handleSubmit}
              disabled={loading}
            >
              {!loading ? "Post" : "Posting..."}
            </Button>
          </ButtonBox>
        </ModalFooter>
      </ModalBox>
    </ModalContainer>
  );
};

export default Index;
