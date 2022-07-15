import React, { useRef, useReducer } from "react";

import {
  ModalContainer,
  ModalBox,
  ModalTitle,
  Rule,
  ModalBody,
  ModalFooter,
  Input,
  FormBox,
  InputBox,
  Button,
  ButtonBox,
  IconBox,
  Icon,
  Icon2,
  ToolTipBox,
  ArrowBackIcon,
} from "./repostStyles";

import Cancel from "../../../../assets/x.png";
import hash from "../../../../assets/hash.png";
import image from "../../../../assets/image.png";
import back from "../../../../assets/back.svg";

import RepostCard from "../../../repostCard/index";
import { usePostComment } from "../../../../api/api";
import { DataContext } from "../../../../api/context";

const Index = ({ handleOpenModal }) => {
  const photoRef = useRef();

  const {
    state: { getRepostData },
  } = DataContext();

  const handleFormData = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };

  const [formData, setFormData] = useReducer(handleFormData, {
    text: null,
    parent: getRepostData?.id,
  });

  const { postComment, loading } = usePostComment();

  const handleChange = (event) => {
    const fileType = event.target.type === "file";

    setFormData({
      name: event.target.name,
      value: fileType
        ? URL.createObjectURL(event.target.files[0])
        : event.target.value,
    });
  };

  const reloadWindow = () => {
    window.location.reload(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const postValues = new FormData();

    postValues.append("text", formData.text);
    postValues.append("photo", formData.photo);
    // postValues.append("audio", formData.audio);
    postValues.append("parent", formData.parent);

    postComment("posts/", postValues, handleOpenModal, reloadWindow);
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
          <h3>Repost </h3>

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
          <FormBox>
            <InputBox>
              <textarea
                placeholder="Post a comment"
                rows="4"
                name="text"
                onChange={handleChange}
                value={formData.text}
                type="text"
              />
            </InputBox>

            {/* image preview in the modal */}
            {formData.photo && (
              <img src={formData.photo} alt="post visual description" />
            )}

            <Input
              id="photo"
              type="file"
              name="photo"
              onChange={handleChange}
            />

            {/* The repost card is a sub component that holds the single repost data */}
            <RepostCard repostDetails={getRepostData} />
          </FormBox>
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
              {!loading ? "Save" : "Saving..."}
            </Button>
          </ButtonBox>
        </ModalFooter>
      </ModalBox>
    </ModalContainer>
  );
};

export default Index;
