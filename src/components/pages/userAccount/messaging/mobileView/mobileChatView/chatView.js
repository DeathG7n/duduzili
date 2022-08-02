import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
    display: flex;
    justify-content: center;
  }
`;

export const ContentBox = styled.div`
  width: 900px;
  height: calc(100vh - 70px);
  display: flex;
  margin-top: 15px;
  border: 1px solid #d0e2dc;
  box-sizing: border-box;
  border-radius: 8px;
  /* padding: 15px; */
  background-color: #ffffff;
  overflow-y: hidden;

  @media screen and (max-width: 900px) {
    width: 700px;
  }

  @media screen and (max-width: 720px) {
    width: 95%;
  }
`;

export const ChatBox = styled.div`
  width: 100%;
  /* position: relative; */
`;

export const MessageTitleBox = styled.div`
  width: 100%;
  padding: 6.5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid #d0e2dc;
`;

export const MessageHeader = styled.div`
  display: flex;
  align-items: center;

  > h3 {
    font-size: 17px;
    color: black;
    margin-left: 10px;

    @media screen and (max-width: 500px) {
    font-size: 15px;
  }
  }

  > em {
    color: #49665c;
    font-size: 15px;
    margin-left: 10px;

    @media screen and (max-width: 500px) {
    font-size: 13px;
  }
  }
`;

export const ArrowImg = styled.img`
  margin: 1;
`;

export const ProfileImg = styled.img`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  margin-left: 12px;
`;

export const ChatBody = styled.div`
  padding: 0px 15px 10px 15px;
  height: calc(100vh - 230px);
  overflow-x: scroll;
`;

export const ChatMessage = styled.div`
  border: ${(props) => props.border};
  box-sizing: border-box;
  border-radius: 16px 16px 16px 0px;
  padding: 15px;
  max-width: 350px;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  padding: 15px;
  background-color: ${(props) => props.bc};
  width: ${(props) => props.width};
  margin-top: ${(props) => props.mt};
  box-shadow: ${(props) => props.bs};

  > p {
    color: #49665c;
    font-size: 12px;
    margin-top: 10px;
  }
`;

export const NameBox = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    color: #10221c;
    font-size: 13px;
  }

  > span {
    color: #49665c;
    font-size: 10px;
    font-weight: 400;
    margin-left: 1px;
  }

  > h6 {
    color: #49665c;
    font-size: 8px;
    font-weight: 600;
    margin-left: 5px;
  }
`;

export const IconBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 55px;
    height: 50px;
  }
`;

export const Input = styled.input`
  width: calc(100% - 40px);
  border: none;
  background: #f1f5f4;
  outline: none;
  padding-left: 10px;
`;

export const WriteBox = styled.div`
  position: fixed;
  z-index: 20;
  background: #fff;
  bottom: 0px;
  border-top: 1px solid #d0e2dc;
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  @media screen and (max-width: 900px) {
    width: 697px;
  }

  @media screen and (max-width: 720px) {
    width: 94%;
  }
`;

export const WriteMessage = styled.input`
  width: calc(100% - 260px);
  height: 40px;
  background: white;
  outline: none;
  padding-left: 10px;
  border: 1px solid #d0e2dc;
  box-sizing: border-box;
  border-radius: 24px;

  @media screen and (max-width: 720px) {
    width: calc(100% - 150px);
  }
`;

export const GifBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bc};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.br};
  margin: ${(props) => props.margin};
  font-weight: 600;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    display: ${(props) => props.smdisplay};
    width: ${(props) => props.smwidth};
    font-size: 12px;
  }
`;
