import React from "react"
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
} from "../emailModal/modalStyles";
import Cancel from "../../../../../../assets/x.png";

const Index = ({deactiveRef, inputRef, isConfirm, handleOpenModal})=>{
  
    return(
      <>
        <ModalContainer ref={deactiveRef}>
          <ModalBox>
            <ModalTitle>
                <h3>Deactivate account</h3>
                <div style={{ cursor: "pointer" }} onClick={handleOpenModal}>
                    <img src={Cancel} alt="cancel" />
                </div>
            </ModalTitle>
            <Rule />
            <ModalBody>
                <Description>
                    <p>Deactivate your account without removing all your data. To reactivate your account, you will have to send an email to accounts@duduzili.com. If you want to proceed with this action, re-enter your log in password and press proceed to delete your account.</p>
                </Description>
                <FormBox>
                    <InputBox>
                        <input placeholder="Enter your password" ref={inputRef} />
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
                    onClick={()=>isConfirm()}
                >
                    Continue
                </Button>
            </ModalFooter>
          </ModalBox>
        </ModalContainer>
      </>
      
    )
}

export default Index
  