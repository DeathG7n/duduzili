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
import { DataContext } from "../../../../api/context";
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Index = ({ handleOpenModal, id }) => {
  const { loading, updateRequest } = useUpdateRequest();
  const {
    state: { userData },
  } = DataContext();

  const handleFormData = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };

  const [formData, setFormData] = useReducer(handleFormData, {
    first_name: userData?.user?.first_name || "",
    last_name: userData?.user?.last_name || "",
    username: userData?.user?.username || "",
    country: userData?.user?.country || "",
    bio: userData?.user?.bio || "",
    photo: userData?.user?.photo_url || person,
  });

  // console.log(formData);

  const handleChange = (event) => {
    const fileType = event.target.type === "file";

    setFormData({
      name: event.target.name,
      value: fileType ? event.target.files[0] : event.target.value,
    });
  };

  // function reloads windows after operation is complete
  const reloadWindow = () => {
    window.location.reload(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postValues = new FormData();
    postValues.append(
      "first_name",
      formData.first_name === "" ? void 0 : formData.first_name
    );
    postValues.append(
      "last_name",
      formData.last_name === "" ? void 0 : formData.last_name
    );
    postValues.append(
      "username",
      formData.username === "" ? void 0 : formData.username
    );
    postValues.append("bio", formData.bio === "" ? void 0 : formData.bio);
    postValues.append(
      "country",
      formData.country === "" ? void 0 : formData.country
    );
    postValues.append("photo", formData.photo === "" ? void 0 : formData.photo);
    postValues.append("publish", "save");

    if (Object.keys(formData).length === 0) {
      console.log("Inputs are empty");
    } else {
      updateRequest("user", id, postValues, handleOpenModal, reloadWindow);
      console.log("inputs not empty");
    }
  };

  console.log(formData)

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
          <label htmlFor="photo" style={{position: "relative"}}>
            <ProfileImg
              alt="human"
              src={formData.photo !== null ? formData.photo : person}
            />
            <CameraAltIcon sx={{color: "#29bb89"}} style={{position: "absolute", bottom: "40px", right: "35px"}}/>
          </label>

          <FormBox>
            <Input
              type="file"
              id="photo"
              name="photo"
              onChange={handleChange}
            />


            <InputBox tp="10px">
              <label>First Name</label>
              <input
                placeholder="duduzilli"
                name="first_name"
                onChange={handleChange}
                value={formData.first_name}
              />
            </InputBox>

            <InputBox>
              <label>Last Name</label>
              <input
                placeholder="duduzilli"
                name="last_name"
                onChange={handleChange}
                value={formData.last_name}
              />
            </InputBox>

            <InputBox>
              <label>Username</label>
              <input
                placeholder="duduzilli"
                name="username"
                onChange={handleChange}
                value={formData.username}
              />
            </InputBox>

            <InputBox>
              <label>Bio</label>
              <textarea
                placeholder="The social platform for african people."
                rows="3"
                name="bio"
                onChange={handleChange}
                value={formData.bio}
              />
            </InputBox>

            <InputBox>
              <label>Country</label>
              <input
                placeholder="duduzilli"
                name="country"
                onChange={handleChange}
                value={formData.country}
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
