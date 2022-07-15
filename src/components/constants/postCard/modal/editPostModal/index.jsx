import React, { useRef, useReducer } from "react";

import {
  ModalContainer,
  ModalBox,
  ModalTitle,
  Rule,
  ModalBody,
  ModalFooter,
  Description,
  FormBox,
  InputBox,
  Button,
  ButtonBox,
  IconBox,
  Icon,
  Icon2,
  ToolTipBox,
  ArrowBackIcon,
} from "./editStyles";

import Cancel from "../../../../assets/x.png";
import hash from "../../../../assets/hash.png";
import image from "../../../../assets/image.png";
import human from "../../../../assets/People.png";
import back from "../../../../assets/back.svg";

import { useUpdateRequest } from "../../../../api/api";
import { DataContext } from "../../../../api/context";

const Index = ({ handleOpenModal }) => {
  const photoRef = useRef();

  const {
    state: { postID, getEditPost, getPostId },
  } = DataContext();

  const handleFormData = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };

  const [formData, setFormData] = useReducer(handleFormData, {
    text: getEditPost?.text,
    photo: getEditPost?.photo,
    audio: getEditPost?.audio,
  });

  const { updateRequest, loading } = useUpdateRequest();

  const handleChange = (event) => {
    const fileType = event.target.type === "file";

    setFormData({
      name: event.target.name,
      value: fileType
        ? URL.createObjectURL(event.target.files[0])
        : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const postValues = new FormData();
    postValues.append("text", formData.text);
    postValues.append("photo", formData.photo);

    updateRequest("posts", getPostId, postValues, handleOpenModal);
  };

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
          <ArrowBackIcon alt="icon" src={back} onClick={handleOpenModal} />
          <h3>Edit Post </h3>

          <div style={{ cursor: "pointer" }} onClick={handleOpenModal}>
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
            type="submit"
            onClick={handleSubmit}
          >
            Post
          </Button>
        </ModalTitle>
        <Rule />
        <ModalBody>
          {/* <Description>
            <img src={human} alt="human" />
          </Description> */}
          <FormBox>
            <InputBox>
              <textarea
                placeholder="Post a comment"
                rows="5"
                name="text"
                onChange={handleChange}
                value={formData.text}
                type="text"
              />
            </InputBox>

            <input
              type="file"
              id="photo"
              onChange={handleChange}
              //   value={formData.photo}
              name="photo"
            />
          </FormBox>

          {formData.photo && (
            <img src={formData.photo} alt="post visual description" />
          )}
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

            <Icon2 alt="link icon" src={hash} />
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
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
            >
              {!loading ? "Save" : "Saving"}
            </Button>
          </ButtonBox>
        </ModalFooter>
      </ModalBox>
    </ModalContainer>
  );
};

export default Index;
