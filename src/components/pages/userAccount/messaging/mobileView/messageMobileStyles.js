import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  display: none;
  box-sizing: border-box;

  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    margin-top: 0;
    padding: 5px;
  }
`;

export const ContentBox = styled.div`
  width: 700px;
  margin: 20px 0px;
  display: flex;
  margin-top: 15px;
  border: 1px solid #d0e2dc;
  box-sizing: border-box;
  border-radius: 8px;
  /* padding: 15px; */
  background-color: #ffffff;
  overflow-x: hidden;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    width: 99%;
    margin-top: 0;
  }
`;

export const MessagesBox = styled.div`
  width: 100%;
  border-right: 1px solid #d0e2dc;
  overflow: hidden;
`;

export const TitleBox = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid #d0e2dc;

  > h3 {
    font-size: 16px;
    font-weight: 600;
    margin-left: 6px;
    color: #10221c;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  position: relative;
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

export const DropDownBox = styled.div`
  position: absolute;
  background-color: white;
  z-index: 100;
  width: 200px;
  padding: 20px 5px;
  left: -190px;
  top: 15px;
  box-shadow: 0px 16px 64px rgba(16, 34, 28, 0.32);
  border-radius: 8px;
`
export const DropDownContent = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`
export const DropDownText = styled.div``
  
export const DropDown = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba( 0 0 0 /0.6);
  position: fixed;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  z-index: 14;
`;
export const MDropDownBox = styled.div`
  width: 100%;
  background-color: white;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  padding: 15px 10px 30px 10px;
  box-sizing: border-box;
`;

export const MDropDownContent = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0 10px 10px;

  > p {
    color: #49665C;
    font-weight: 600;
    margin-left: 20px;
    font-size: 15px;
    cursor: pointer;
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
  margin-top: 20px;
`;
