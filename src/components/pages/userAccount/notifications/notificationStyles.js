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
  width: 950px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    justify-content: center;
    width: 99.5%;
  }
`;

export const NewsFeedBox = styled.div`
  width: 60%;
  border: 1px solid #d0e2dc;
  /* box-sizing: border-box; */
  background-color: #f7fcfa;
  margin-top: 15px;
  border-radius: 8px;
  margin-left: 105px;


  h2{
    margin-left: 20px;
  }

  @media screen and (max-width: 900px) {
    width: 90%;
    margin-top: 10px;
    margin-left: -5%;
  }
`;

export const TrendingBox = styled.div`
  width: 28%;
  box-sizing: border-box;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const TitleBox = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #f7fcfa;
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
      color: #49665C;
    }
  }
`;

export const IconBox = styled.div`
  position: relative;

  :hover .dropdown {
    display: block;

    @media screen and (max-width: 800px) {
      display: none;
    }
  }
`;

export const DropDownBox = styled.div`
  width: 230px;
  padding: 20px 0px;
  background-color: white;
  position: absolute;
  top: 20px;
  right: 0%;
  box-shadow: 0px 16px 64px rgba(16, 34, 28, 0.32);
  border-radius: 8px;
`;

export const DropDownContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 7%;

  > div {
    display: flex;
    align-items: flex-start;
    margin-top: 7px;

    > img {
      width: 16px;
      height: 16px;
      // border-radius: 50%;
    }
  }
`;

export const DropDownText = styled.p`
  display: flex;
  font-size: 15px;
  cursor: pointer;

  ::before {
    content: "";
    background: url("cross.png");
    display: block;
    width: 30px;
    height: 30px;
    /* background-color: red; */
  }
`;

export const CardBody = styled.div`
  border-bottom: 1px solid #d0e2dc;
  padding: 10px 15px;
  background-color: ${(props) => props.bc};

  .link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;

    > div {
      display: flex;
      align-items: center;
    }
  }
  
  :hover{
    border: 1px solid #dbe7e3;
  }
`;

export const NonLinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .target {
    display: flex;
    align-items: center;
  }
`;

export const CardImge = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media screen and (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;

export const TextBox = styled.div`
  margin-left: 17px;

  > p {
    color: black;
    font-weight: 600;
    font-size: 14px;
  }

  > span {
    color: #49665c;
    font-size: 14px;
    font-weight: 500;
    width: 70%;
  }
`;

export const Text = styled.p`
  color: #49665c;
  font-weight: 400;
  font-size: 16px;

  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  margin-top: 15px;
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
