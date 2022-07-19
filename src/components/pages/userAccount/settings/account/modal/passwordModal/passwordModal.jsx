import React from "react";

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
} from "./modalStyles";

import Cancel from "../../../../../../assets/x.png";

const Index = ({ handleOpenModal }) => {
  return (
    <ModalContainer>
      <ModalBox>
        <ModalTitle>
          <h3>Update Password</h3>

          <div style={{ cursor: "pointer" }} onClick={handleOpenModal}>
            <img src={Cancel} alt="cancel" />
          </div>
        </ModalTitle>
        <Rule />
        <ModalBody>
          <FormBox>
            <InputBox>
              <input placeholder="Current Password" />
            </InputBox>

            <InputBox>
              <input placeholder="New Password" />
            </InputBox>

            <InputBox>
              <input placeholder="Confirm Password" />
            </InputBox>
          </FormBox>

          <Description>
            <h4>Log out everywhere</h4>
            <p>
              Changing your password logs you out of all browsers on your
              device(s).
            </p>

            <p>
              Checking this box also logs you out of all apps you have
              authorized.
            </p>
          </Description>
        </ModalBody>
        <ModalFooter>
          <Button
            height="35px"
            width="120px"
            color="black"
            border="none"
            bc="white"
            onClick={handleOpenModal}
          >
            Cancel
          </Button>
          <Button
            height="35px"
            width="120px"
            color="white"
            border="none"
            bc="#29bb89"
          >
            Save
          </Button>
        </ModalFooter>
      </ModalBox>
    </ModalContainer>
  );
};

export default Index;
