import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const ContentBox = styled.div`
  width: 850px;
  height: 545px;
  display: flex;
  margin-top: 15px;
  border: 1px solid #d0e2dc;
  box-sizing: border-box;
  border-radius: 8px;
  /* padding: 15px; */
  background-color: #ffffff;
  overflow-y: hidden;
`;

export const MessagesBox = styled.div`
  width: 40%;
  border-right: 1px solid #d0e2dc;
`;

export const ChatBox = styled.div`
  width: 62%;
  max-height: 100vh;
  position: relative;

  @media screen and (max-width: 900px) {
    width: 99%;
  }
`;

export const MessageList = styled.div`
  width: 100%;
  height: calc(650px - 115px);
  overflow-y: scroll;
`;

export const TitleBox = styled.div`
  width: 100%;
  padding: 5px 10px 7px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid #d0e2dc;

  > h3 {
    margin-top: -5px;
    font-size: 20px;
    font-weight: 100;
    font-family: poppins;
    margin-left: 6px;
    color: #49665c;
  }
`;

export const ImgBox = styled.div`
  position: relative;

  :hover .dropdown {
    display: block;

    @media screen and (max-width: 800px) {
      display: none;
    }
  }
`;

export const DropDownBox = styled.div`
  width: 230px;
  padding: 20px 0px;
  background-color: white;
  position: absolute;
  display: none;
  top: 20px;
  right: 0%;
  box-shadow: 0px 16px 64px rgba(16, 34, 28, 0.32);
  border-radius: 8px;
`;

export const DropDownContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 7%;

  > div {
    display: flex;
    align-items: flex-start;
    margin-top: 7px;

    > img {
      width: 15px;
      height: 15px;
      // border-radius: 50%;
    }
  }
`;

export const DropDownText = styled.p`
  display: flex;
  font-size: 14px;
  cursor: pointer;

  ::before {
    content: "";
    background: url("cross.png");
    display: block;
    width: 30px;
    height: 30px;
    /* background-color: red; */
  }
`;

export const CardBody = styled.div`
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
  align-items: flex-start;
  background-color: white;
  margin-top: 15px;
  cursor: pointer;

  > div {
    display: flex;
    align-items: flex-start;
  }
`;

export const CardImge = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const TextBox = styled.div`
  margin-left: 15px;

  > p {
    color: black;
    font-weight: 600;
    font-size: 13px;
  }

  > span {
    color: #49665c;
    font-size: 13px;
    font-weight: 500;
  }
`;

export const Text = styled.p`
  color: #49665c;
  font-weight: 400;
  font-size: 11px;
`;

export const MessageTitleBox = styled.div`
  width: 100%;
  padding: 26px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid #d0e2dc;
`;

export const SearchBox = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 15px;
  background: #f1f5f4;
  border: 1px solid #d0e2dc;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;

`;

export const SearchIconBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 24px;
  margin-left: 10px;

  > img {
    margin-left: 20px;
    width: 80px;
    height: 70px;
  }
`;

export const SearchInput = styled.input`
  // width: calc(100% - 40px);
  width: 70%;
  height: 45px;
  border: 1px solid #e0e2ed;
  border-radius: 10px;
  background: #f1f5f4;
  outline: none;
  padding-left: 45px;
  margin-left: 10px;
  margin-top: 20px;
  color: #a5bdb4;


  ::placeholder{
    font-size: 16px;
    color: #a5bdb4;
  }
`;

export const MessageHeader = styled.div`
  display: flex;
  align-items: center;

  > h3 {
    font-size: 17px;
    color: black;
    margin-left: 10px;
  }

  > p {
    color: #49665c;
    font-size: 15px;
    margin-left: 10px;
  }
`;

export const ProfileImg = styled.img`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  /* margin-left: 25px; */
`;

export const ChatBody = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  overflow-x: scroll;
  height: calc(650px - 173px);
`;

export const ChatMessage = styled.div`
  border: ${(props) => props.border};
  box-sizing: border-box;
  border-radius: 16px 16px 16px 0px;
  padding: 15px;
  max-width: 300px;
  box-sizing: border-box;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  padding: 15px;
  background-color: ${(props) => props.bc};
  width: unset;
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
  position: absolute;
  bottom: 0px;
  border-top: 1px solid #d0e2dc;
  padding: 10px 10px 40px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  box-sizing: border-box;
`;

export const WriteMessage = styled.input`
  // width: calc(100% - 260px);
  width: 60%;
  height: 40px;
  background: #e6ebea;
  outline: none;
  padding-left: 10px;
  border: 1px solid #d0e2dc;
  box-sizing: border-box;
  border-radius: 24px;
  font-size: 16px;
  color: #a5bdb4;


  ::placeholder{
    font-size: 16px;
    color: #a5bdb4;
  }
`;

export const GifBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
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
`;
