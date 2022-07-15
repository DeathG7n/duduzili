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
  width: 900px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    justify-content: center;
    width: 99%;
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
  margin-top: 20px;

  > div {
    display: flex;
    align-items: center;

    > h3 {
      font-size: 18px;
      font-weight: 600;
      margin-left: 6px;
    }
  }
`;

export const IconBox = styled.div`
  position: relative;
`;

export const NavigationBox = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #babec2;
  margin-top: 30px;

  > button {
    background-color: transparent;
    border: none;
    color: #49665c;
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 10px;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    /* border: 0.5px solid #29BB89 */
  }
`;

export const ResultsBox = styled.div`
  background-color: white;
  margin-top: 20px;
  padding: 20px 10px;
`;
