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
  z-index: 11;
`;

export const ModalBox = styled.div`
  width: 550px;
  /* height: 450px; */
  overflow-y: scroll;
  padding-bottom: 15px;
  background-color: white;
  box-sizing: border-box;
  border-radius: 16px;
  transition: all 0.5s ease-in;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: #d0e2dc;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #29bb89;
  }

  @media screen and (max-width: 700px) {
    height: 100%;
    width: 100%;
    border-radius: 0px;
    position: relative;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px 10px 15px;
  box-sizing: border-box;
  height: 55px;
  /* background-color: blue; */

  > h3 {
    color: #10221c;
    font-weight: 900;
    font-size: 19px;

    @media screen and (max-width: 700px) {
      font-size: 18px;
      margin-left: 20px;
      display: none;
    }
  }

  > div {
    @media screen and (max-width: 700px) {
      display: none;
    }
  }
`;

export const ArrowBackIcon = styled.img`
  width: 40px;
  height: 20px;
  display: none;

  @media screen and (max-width: 700px) {
    display: block;
  }
`;

export const Rule = styled.hr`
  width: 100%;
  box-sizing: border-box;
  background-color: #d0e2dc;

  @media screen and (max-width: 700px) {
    display: ${(props) => (props.smdisplay ? props.smdisplay : "block")};
  }
`;

export const ModalBody = styled.div`
  /* height: 78%; */
  display: flex;
  /* flex-direction: column; */
  padding: 0px 0px;
  margin-top: 10px;
  box-sizing: border-box;

  @media screen and (max-width: 700px) {
    padding-top: 30px;
    padding-left: 15px;
  }
`;

export const Description = styled.div`
  visibility: hidden;
  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  @media screen and (max-width: 700px) {
    visibility: visible;
  }
`;

export const FormBox = styled.div`
  width: 100%;

  >input{
    display: none;
  }
`;

export const InputBox = styled.div`
  width: 100%;
  background: #ffffff;

  > textarea {
    background-color: transparent;
    width: 100%;
    border: none;
    outline: none;
    border: none;
    box-sizing: border-box;
    border-radius: 16px;
    padding-left: 15px;
    background: transparent;

    ::placeholder {
      color: #a3bdb4;
      font-size: 14px;
    }
  }
`;

export const Input = styled.input`
  display: none;
`;

export const ModalFooter = styled.div`
  /* height: 10%; */
  display: flex;
  align-items: center;
  padding: 0px 20px;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 10px;

  @media screen and (max-width: 700px) {
    border-top: 1px solid #d0e2dc;
    position: absolute;
    top: 72%;
    width: 100%;
    padding-top: 15px;
  }
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;

  > div {
    position: relative;
  }
`;

export const Icon = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.ml};
  cursor: pointer;
`;

export const Icon2 = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 20px;
  /* border-left: 1px solid black; */
  cursor: pointer;

  &:before {
    content: "🦄";
    height: 30px;
    width: 10px;
    background-color: black;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bc};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.br};
  display: ${(props) => (props.display ? props.display : "block")};
  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.fw};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 20px;

  @media screen and (max-width: 700px) {
    display: ${(props) => (props.smdisplay ? props.smdisplay : "block")};
  }
`;

export const ToolTipBox = styled.div`
  padding: 3px 10px 5px 10px;
  width: 75px;
  background-color: #49665c;
  /* border: 1px solid white; */
  position: absolute;
  color: white;
  border-radius: 5px;
  top: 25px;
  z-index: 10;
  left: 3px;
  opacity: 0;
  transition: all 0.4s ease-in;

  > p {
    font-size: 12px;
    text-align: center;
  }
`;
