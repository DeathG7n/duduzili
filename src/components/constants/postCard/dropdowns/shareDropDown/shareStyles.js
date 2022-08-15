import styled from "styled-components";

export const DropDownBox = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  background-color: rgba( 0 0 0 /0.6);
  position: fixed;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  z-index: 14;
`;

export const ShareDropDown = styled.div`
  width: 100%;
  background-color: white;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  padding: 15px 10px;
  box-sizing: border-box;

  > div {
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-top: 20px;

    > p {
      font-size: 14px;
      margin-left: 10px;
      cursor: pointer;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  background-color: #F1F5F4;
  color: black;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  margin-top: 30px;
`;