import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 15px;
  margin-top: 60px;
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
    width: 99%;
  }
`;

export const NewsFeedBox = styled.div`
  width: 68%;
  box-sizing: border-box;
  margin-left: 75px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const DiscoverBox = styled.div`
  width: 30%;
  box-sizing: border-box;
  margin-right: -95px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const MessageBox = styled.div`
  position: fixed;
  bottom: 0px;
  right: 7%;
`;

export const CreatePostIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #29bb89;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  z-index: 10;
  bottom: 13%;
  right: 5%;
  cursor: pointer;
  box-sizing: border-box;
  visibility: hidden;

  > img {
    width: 20px;
    height: 20px;
  }

  > p {
    font-size: 14px;
    color: white;
    margin-top: 5px;
    font-weight: 600;
  }

  @media screen and (max-width: 700px) {
    visibility: visible;
  }
`;
