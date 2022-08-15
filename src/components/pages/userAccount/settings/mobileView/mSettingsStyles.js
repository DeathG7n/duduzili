import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  display: none;
  margin-top: 52px;

  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    margin-top: 0;
  }
`;

export const ContentBox = styled.div`
  width: 900px;
  margin: 20px 0px;
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
  border: 1px solid #d0e2dc;
  box-sizing: border-box;
  border-radius: 8px;
  padding-bottom: 60px;
  background-color: #fff;

  @media screen and (max-width: 900px) {
    width: 700px;
  }

  @media screen and (max-width: 720px) {
    width: 95%;
  }
`;

export const SettingsBox = styled.div`
  width: 100%;
`;


export const TitleBox = styled.div`
  width: 100%;
  padding: 15px 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid #d0e2dc;

  > h3 {
    font-size: 23px;
    font-weight: 600;
    margin-left: 5px;
    color: #10221c;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  border-bottom: 1px solid #d0e2dc;
  padding: 15px 20px;
  cursor: pointer;

  > p {
    font-weight: 500;
    font-size: 16px;
    color: #10221c;
  }
`;
