import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 15px;
  margin-top: 60px;

  @media screen and (max-width: 900px){
    margin-top: -5px;
  }
`;

export const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BodyBox = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    justify-content: center;
    width: 95%;
  }
`;

export const NewsFeedBox = styled.div`
  width: 70%;
  box-sizing: border-box;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const DiscoverBox = styled.div`
  width: 28%;
  box-sizing: border-box;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const MessageBox = styled.div`
  position: fixed;
  bottom: 0px;
  right: 9.3%;
`;
