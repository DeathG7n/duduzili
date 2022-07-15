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
  width: 74%;
  box-sizing: border-box;
  margin-top: 15px;
  margin-left: 5px;
  

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const DiscoverBox = styled.div`
  width: 300px;
  box-sizing: border-box;
  margin-right: -90px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const TitleBox = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: white;
  margin-top: 15px;

  > h3 {
    font-size: 20px;
    font-weight: 600;
    margin-left: 6px;
  }
`;

export const MessageBox = styled.div`
  position: fixed;
  bottom: 0px;
  right: 7%;
`;

export const TrendContainer = styled.div`
  // width: 100%;
  display: flex;
  gap: 15px;
  // grid-gap: 15px;
  // grid-auto-flow: column;
  // grid-auto-columns: 60%;
  align-items: center;
  overflow-x: scroll;
  box-sizing: border-box;
  padding: 5px 5px 60px 5px;
  margin-bottom: 40px;
  background-color: white;

  ::-webkit-scrollbar {
    height: 1px;
  }

  ::-webkit-scrollbar-track {
    /* width: 1px; */
    background-color: #d0e2dc;
    /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  }

  ::-webkit-scrollbar-thumb {

    background-color: #29bb89;
  }
`;

export const TrendPost = styled.div`
  width: 90%;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: url(${(props) => props.bimg}) center center no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
  height: 220px;

  .holder {
    padding: 10px 15px;
  }
`;

export const Tag = styled.div`
  padding: 2px 10px;
  background-color: ${(props) => props.bc};
  border-radius: 5px;
  box-sizing: border-box;
  min-width: 50px;
  width: fit-content;

  > p {
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: white;
  }

  .link {
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: white;
    text-decoration: none;
  }
`;

export const TagContent = styled.div`
  margin-top: 10px;

  > h4 {
    color: white;
    font-size: 16px;
    font-weight: 600;
  }

  > p {
    color: white;
    font-size: 13px;
    margin-top: 5px;
  }
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
  cursor: pointer;
`;
