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
  width: 950px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  @media screen and (max-width: 900px) {
    justify-content: center;
    width: 99%;
  }
`;
export const MessageBox = styled.div`
  position: fixed;
  bottom: 0px;
  right: 7%;
`;
export const NewsFeedBox = styled.div`
  width: 70%;
  box-sizing: border-box;
  margin-top: 20px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const DiscoverBox = styled.div`
  width: 30%;
  box-sizing: border-box;
  margin-right: -50px;

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

export const TrendContainer = styled.div`
  width: 100%;
  height: 250px;
  box-sizing: border-box;
`;

export const TrendPost = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: url(${(props) => props.bimg}) center center no-repeat;
  background-repeat: no-repeat;
  background-size: cover;

  .holder {
    width: 100%;
    padding: 10px 15px;
  }
`;

export const Tag = styled.div`
  padding: 3px 10px;
  background-color: ${(props) => props.bc};
  border-radius: 8px;
  box-sizing: border-box;
  width: fit-content;

  > p {
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: white;
  }
`;

export const TagContent = styled.div`
  margin-top: 10px;

  > h4 {
    color: white;
    font-size: 17px;
    font-weight: 600;
  }

  > p {
    color: white;
    font-size: 14px;
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

  :hover{
    background-color: #29BB89;
    color: white;
  }
`;
