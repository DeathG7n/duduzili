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

const Index = ({deleteRef, inputRef, isConfirm, handleOpenModal})=>{
  
    return(
      <>
        <ModalContainer ref={deleteRef}>
          <ModalContainer>
            <ModalBox>
                <ModalTitle>
                    <h3>Delete account</h3>
                    <div style={{ cursor: "pointer" }} onClick={handleOpenModal}>
                        <img src={Cancel} alt="cancel" />
                    </div>
                </ModalTitle>
                <Rule />
                <ModalBody>
                    <Description>
                        <p>This action is irreversible and will permanently delete your account, records, files from Duduzili. If you want to proceed with this action, re-enter your log in password and press proceed to delete your account.</p>
                    </Description>
                    <FormBox>
                        <InputBox>
                            <input placeholder="Enter your password" ref={inputRef}/>
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
        </ModalContainer>
      </>
      
    )
}

export default Index