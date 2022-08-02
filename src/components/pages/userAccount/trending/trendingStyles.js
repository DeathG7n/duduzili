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
  width: auto;
  display: flex;
  gap: 15px;
  // align-items: center;
  overflow: auto;
  white-space: nowrap;
  box-sizing: border-box;
  padding: 20px 5px;
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
  width: 45%;
  border-radius: 8px;
  box-sizing: border-box;
  flex: 0 0 auto;
  // display: flex;
  // align-items: center;
  display: inline-block;
  background: url(${(props) => props.bimg}) center center no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
  height: 220px;
  
  @media screen and (min-width: 0px)and (max-width: 675px) {
    width: 74%;
  }

`;

export const Holder = styled.div`
  padding: 10px 15px 10px 15px;
  border-radius: 8px;
  background: #0f131280;
  height: 91%;
  width: auto;
`


export const Tag = styled.div`
  padding: 2px 10px;
  background-color: ${(props) => props.bc};
  border-radius: 5px;
  box-sizing: border-box;
  min-width: 50px;
  width: fit-content;
  margin-top: 50px;

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
  width: 100%;
  margin-top: 10px;
  white-space: normal;

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

  :hover{
    background-color: #29BB89;
    color: white;
  }
`;
