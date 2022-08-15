import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 15px;
  margin-top: 60px;

  @media screen and (max-width: 900px){
    margin-top: 0;
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
    width: 99.5%;
  }
`;

export const NewsFeedBox = styled.div`
  width: 100%;
  border: 1px solid #d0e2dc;
  background-color: white;
  margin-top: 15px;
  border-radius: 8px;

  @media screen and (max-width: 900px) {
    width: 100%;
    margin-top: 0px;
  }
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

  > div {
    display: flex;
    align-items: center;

    > h3 {
      font-size: 20px;
      font-weight: 600;
      margin-left: 6px;
    }
  }
`;

export const ContentBox = styled.div`
   width: 100%;
   margin-top: 5px;
`