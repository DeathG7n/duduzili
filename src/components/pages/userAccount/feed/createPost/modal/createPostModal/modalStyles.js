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
  z-index: 100;
  overflow-y: scroll;
`;

export const ModalBox = styled.div`
  width: 550px;
  /* height: 450px; */
  overflow-y: scroll;
  padding-bottom: 15px;
  background-color: white;
  box-sizing: border-box;
  border-radius: 10px;
  position: relative;

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
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px 0px 15px;
  box-sizing: border-box;
  height: 55px;
  /* background-color: blue; */

  > h3 {
    color: #10221c;
    font-weight: 900;
    font-size: 23px;

    @media screen and (max-width: 700px) {
      font-size: 18px;
      margin-left: 20px;
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

export const TitleBox = styled.span`
  display: flex;
  align-items: center;
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
  flex-direction: column;
  padding: 0px 20px;
  margin-top: 10px;
  box-sizing: border-box;

  @media screen and (max-width: 700px) {
    padding-top: 13px;
    height: 70%;
  }
`;

export const Description = styled.div`
  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const FormBox = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;

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
    height: 30%;
  }
`;

export const InputBox = styled.div`
  width: 100%;
  background: #ffffff;
  margin-top: 7px;

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
      font-size: 18px;
    }
  }
`;

export const Input = styled.input`
  display: none;
`;

export const ImageBox = styled.div`
  height: calc(450px - 245px);
  box-sizing: border-box;
  overflow-y: scroll;

  @media screen and (max-width: 700px) {
    height: 60%;
  }

  > img {
    width: 100%;
    height: 200px;
  }

  > audio {
    width: 100%;
  }

  video {
    width: 100%;
  }

  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: #d0e2dc;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #29bb89;
  }
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
    top: 85%;
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
  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.fw};
  display: ${(props) => (props.display ? props.display : "block")};
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
