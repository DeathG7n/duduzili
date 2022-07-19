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
          <h3>Update Email</h3>

          <div style={{ cursor: "pointer" }} onClick={handleOpenModal}>
            <img src={Cancel} alt="cancel" />
          </div>
        </ModalTitle>
        <Rule />
        <ModalBody>
          <Description>
            <p>
              Update your email below. There will be a new verification email
              sent that you will need to use to verify this new email.
            </p>
          </Description>
          <FormBox>
            <InputBox>
              <input placeholder="Current email" />
            </InputBox>

            <InputBox>
              <input placeholder="New email" />
            </InputBox>
          </FormBox>
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
