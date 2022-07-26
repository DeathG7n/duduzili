import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 15px;
`;

export const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BodyBox = styled.div`
  margin-top: 55px;
  width: 900px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    justify-content: center;
    width: 99%;
    margin: 0;
  }
`;

export const NewsFeedBox = styled.div`
  width: 69%;
  box-sizing: border-box;
  margin-left: 90px;

  @media screen and (max-width: 900px) {
    width: 100%;
    margin: 0;
  }
`;

export const DiscoverBox = styled.div`
  width: 28%;
  box-sizing: border-box;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const TitleBox = styled.div`
  width: 100%;
  padding: 10px 15px 15px 10px;
  display: flex;
  align-items: center;
  border: none;
  box-sizing: border-box;
  background-color: white;
  margin-top: 15px;

  > img {
  }

  > h3 {
    font-size: 26px;
    font-weight: 100;
    margin-left: 0px;
    color: #29BB89;
  }

  @media screen and (max-width: 900px) {
    margin-top: 0px;
  }
`;
