import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const ContentBox = styled.div`
  width: 900px;
  min-height: 100vh;
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 1px solid #d0e2dc;
  box-sizing: border-box;
  border-radius: 8px;
  /* padding: 15px; */
  background-color: #ffffff;
`;

export const SettingsBox = styled.div`
  width: 38%;
  border-right: 1px solid #d0e2dc;
`;

export const BodyBox = styled.div`
  width: 62%;
  position: relative;
`;

export const TitleBox = styled.div`
  width: 100%;
  padding: 9px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid #d0e2dc;

  > h3 {
    font-size: 23px;
    font-weight: 600;
    margin-left: 6px;
    color: #10221c;
  }
`;

export const BodyTitleBox = styled.div`
  width: 100%;
  padding: 8.5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid #d0e2dc;
`;

export const BodyHeader = styled.div`
  display: flex;
  align-items: center;

  > h3 {
    font-size: 24px;
    color: black;
    margin-left: 10px;
  }
`;

export const BodyContent = styled.div`
  padding: 20px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  border-bottom: 1px solid #d0e2dc;
  padding: 10px 20px;
  cursor: pointer;

  > p {
    font-weight: 500;
    font-size: 16px;
    color: #10221c;
  }
`;
