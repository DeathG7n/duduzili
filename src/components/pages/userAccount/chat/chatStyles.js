import styled from "styled-components";

export const OpenBox = styled.div`
  border: 1px solid #d0e2dc;
  box-sizing: border-box;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  width: 270px;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.75);
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 60px;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
`;
export const ChatTitle = styled.h3`
  font-size: 25px;
`;
export const ChatBox = styled.div`
  width: 340px;
  height: 560px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const MessageBox = styled.div`
  width: 340px;
  height: 520px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: white;
  box-sizing: border-box;
`;

export const WriteMessageBox = styled.div`
  width: 340px;
  height: 520px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: white;
  box-sizing: border-box;
`;

export const HeaderBox = styled.div`
  width: 90%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid #d0e2dc;
  align-self: center;

  > h3 {
    font-size: 16px;
    font-weight: 600;
    margin-left: 6px;
    color: #10221c;
  }
`;

export const HeaderIconBox = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBox = styled.div`
  width: 80%;
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
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-right: -5px;
  z-index: 1;

  > img {
    width: 90px;
    height: 80px;
  }
`;

export const Input = styled.input`
  width: calc(100% - 40px);
  border: none;
  background: #f1f5f4;
  outline: none;
  padding-left: 10px;
  height: 45px;
  font-size: 18px;

  ::placeholder{
    color: #D9DBE9;
  }
  
`;

export const ChatListBox = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: calc(520px - 90px);
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
  font-size: 12px;
`;

export const MessageTitleBox = styled.div`
  width: 100%;
  height: 60px;
  padding: 0px 10px;
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
    font-size: 13px;
    color: black;
    margin-left: 10px;
  }

  > p {
    color: #49665c;
    font-size: 11px;
    margin-left: 10px;
  }
`;

export const ProfileImg = styled.img`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  margin-left: 8px;
`;

export const ChatBody = styled.div`
  padding: 15px;
  width: 100%;
  height: 330px;
  overflow-y: scroll;
  box-sizing: border-box;
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

export const WriteBox = styled.div`
  position: absolute;
  bottom: 0px;
  border-top: 1px solid #d0e2dc;
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
`;

export const BottomContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WriteMessage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > input {
    width: 90%;
    height: 40px;
    background: white;
    outline: none;
    border: none;
    margin-bottom: 10px;
    box-sizing: border-box;
    border-radius: 24px;
    overflow-wrap: break-word;
  }

  >img{ 
    margin: 0%;
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
