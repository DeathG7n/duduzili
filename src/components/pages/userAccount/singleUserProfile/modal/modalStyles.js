import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #0f131280;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  z-index: 10;
`;

export const ModalBox = styled.div`
  width: 450px;
  height: 500px;
  /* overflow-y: scroll; */
  background-color: white;
  box-sizing: border-box;
  border-radius: 16px;

  @media screen and (max-width: 650px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px 0px 15px;
  box-sizing: border-box;
  height: 12%;
  /* background-color: blue; */

  > h3 {
    color: #10221c;
    font-weight: 700;
    font-size: 23px;

    @media screen and (max-width: 650px) {
      display: none;
    }
  }

  @media screen and (max-width: 650px) {
    align-items: center;
  }
`;

export const ModalContent = styled.div`

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const Rule = styled.hr`
  width: 100%;
  box-sizing: border-box;
  background-color: #d0e2dc;
`;

export const ModalBody = styled.div`
  height: 78%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 10px;
  box-sizing: border-box;

  @media screen and (max-width: 650px) {
    height: unset;
    padding: 20px;
  }
`;

export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 150px;
  position: relative;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const FormBox = styled.div`
  width: 100%;
  margin-top: 20px;

  @media screen and (max-width: 650px) {
    margin-top: 0px;
  }
`;

export const InputBox = styled.div`
  width: 100%;
  padding: 0px 15px;
  border: 2px solid #d0e2dc;
  box-sizing: border-box;
  border-radius: 16px;
  background: #ffffff;
  margin-top: 15px;
  display: ${(prop) => prop.display};

  > label {
    font-size: 13px;
    color: #769c8f;
    font-weight: 500;
    padding: 0%;
  }

  > input {
    background-color: white;
    width: 100%;
    border: none;
    height: 25px;
    outline: none;
    
    :focus{
      background: #ffffff;
      box-shadow: none;
    }
  }


  > textarea {
    background-color: white;
    width: 100%;
    border: none;
    outline: none;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const ModalFooter = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  justify-content: flex-end;
  box-sizing: border-box;

  > button {
    background-color: #29bb89;
    height: 35px;
    width: 120px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 20px;
  }

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 35px;
  box-sizing: border-box;
  background-color: #29bb89;
  color: white;
  border: none;
  border-radius: 15px;
  margin: ${(props) => props.margin};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 650px) {
    display: block;
  }
`;

export const TitleText = styled.div`
  display: flex;
  align-items: center;
  display: none;

  @media screen and (max-width: 650px) {
    display: block;
    display: flex;
    align-items: center;
  }

  > p {
    padding-left: 10px;
    color: #10221c;
    font-size: 16px;
    font-weight: 600;
  }
`;
