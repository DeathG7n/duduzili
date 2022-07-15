import React, { useReducer } from "react";

import {
  ModalContainer,
  ModalBox,
  ModalTitle,
  ModalContent,
  Rule,
  ModalBody,
  ModalFooter,
  ProfileImg,
  FormBox,
  Button,
  InputBox,
  Input,
  TitleText,
} from "./modalStyles";

import person from "../../../../assets/People.png";
import Cancel from "../../../../assets/x.png";
import arrowBack from "../../../../assets/arrow-right.png";
import { useUpdateRequest } from "../../../../api/api";

const Index = ({ handleOpenModal, id }) => {
  const { loading, updateRequest } = useUpdateRequest();

  const handleFormData = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };

  const [formData, setFormData] = useReducer(handleFormData, {});

  console.log(formData);

  const handleChange = (event) => {
    const fileType = event.target.type === "file";

    setFormData({
      name: event.target.name,
      value: fileType
        ? URL.createObjectURL(event.target.files[0])
        : event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postValues = new FormData();
    postValues.append("first_name", formData.first_name === "" ? void(0) :  formData.first_name);
    postValues.append("last_name", formData.last_name === "" ? void(0) :  formData.last_name);
    postValues.append("username", formData.username === "" ? void(0) :  formData.username);
    postValues.append("bio", formData.bio === "" ? void(0) :  formData.bio);
    postValues.append("location", formData.location === "" ? void(0) :  formData.location);
    postValues.append("photo", formData.photo === "" ? void(0) :  formData.photo);
    postValues.append("publish", "save");

    if (Object.keys(formData).length === 0) {
      console.log("Inputs are empty");
    } else {
      updateRequest("user", id, postValues, handleOpenModal);
      console.log("inputs not empty")
    }
  };

  return (
    <ModalContainer>
      <ModalBox>
        <ModalTitle>
          <TitleText onClick={handleOpenModal}>
            <img src={arrowBack} alt="arrow back icon" />
            <p>Edit Profile</p>
          </TitleText>

          <h3>Edit Profile</h3>

          <ModalContent style={{ cursor: "pointer" }} onClick={handleOpenModal}>
            <img src={Cancel} alt="cancel" />
          </ModalContent>

          <Button>Save</Button>
        </ModalTitle>
        <Rule />
        <ModalBody>
          <label for="photo">
            <ProfileImg alt="human" src={formData.photo || person} />
          </label>

          <FormBox>
            <Input
              type="file"
              id="photo"
              name="photo"
              onChange={handleChange}
            />

            <InputBox>
              <label>First Name</label>
              <input
                placeholder="duduzilli"
                name="first_name"
                onChange={handleChange}
              />
            </InputBox>

            <InputBox>
              <label>Last Name</label>
              <input
                placeholder="duduzilli"
                name="last_name"
                onChange={handleChange}
              />
            </InputBox>

            <InputBox>
              <label>Username</label>
              <input
                placeholder="duduzilli"
                name="username"
                onChange={handleChange}
              />
            </InputBox>

            <InputBox>
              <label>Bio</label>
              <textarea
                placeholder="The social platform for african people."
                rows="3"
                name="bio"
                onChange={handleChange}
              />
            </InputBox>

            <InputBox>
              <label>Location</label>
              <input
                placeholder="duduzilli"
                name="location"
                onChange={handleChange}
              />
            </InputBox>
          </FormBox>
        </ModalBody>
        <ModalFooter>
          <button onClick={handleSubmit}>
            {!loading ? "Save" : "Saving..."}
          </button>
        </ModalFooter>
      </ModalBox>
    </ModalContainer>
  );
};

export default Index;
