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
  height: 430px;
  /* overflow-y: scroll; */
  background-color: white;
  box-sizing: border-box;
  border-radius: 16px;
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
    font-weight: 700;
    font-size: 23px;
  }
`;

export const Rule = styled.hr`
  width: 100%;
  box-sizing: border-box;
  background-color: #d0e2dc;
`;

export const ModalBody = styled.div`
  /* height: 78%; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 20px;
  margin-top: 30px;
  box-sizing: border-box;
`;

export const Description = styled.div`
  width: 100%;

  > p {
    color: #10221c;
    width: 90%;
    font-size: 13px;
  }
`;

export const FormBox = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const InputBox = styled.div`
  width: 100%;
  background: #ffffff;
  margin-top: 15px;

  > input {
    background-color: white;
    width: 100%;
    border: none;
    height: 50px;
    outline: none;
    border: 2px solid #d0e2dc;
    box-sizing: border-box;
    border-radius: 16px;
    padding-left: 15px;
    background: #f7fcfa;
  }
`;

export const ModalFooter = styled.div`
  /* height: 10%; */
  display: flex;
  align-items: center;
  padding: 0px 20px;
  justify-content: flex-end;
  box-sizing: border-box;
  margin-top: 70px;
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
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 20px;
`;
