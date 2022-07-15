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
  width: 1000px;
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  margin-left: 200px;
  gap: 35px;

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
  width: 30%;
  box-sizing: border-box;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const ProfileBox = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 20px 15px;
  box-sizing: border-box;
  margin-top: 15px;
  border-radius: 5px;

  @media screen and (max-width: 650px) {
    padding: 10px;
  }
`;

export const CardBody = styled.div`
  width: 100%;
  padding: 0px 0px;
`;

export const Body = styled.div`
  display: flex;
  padding: 10px 10px;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 650px) {
    padding: 5px;
  }
`;

export const CardImge = styled.img`
  width: 144px;
  height: 144px;
  border-radius: 50%;

  @media screen and (max-width: 650px) {
    width: 64px;
    height: 64px;
  }
`;

export const TextBox = styled.div`
  margin-left: 15px;

  > p {
    color: black;
    font-weight: 600;
    font-size: 26px;
    display: flex;
    align-items: center;

    > h6 {
      color: #49665c;
      font-size: 18px;
      margin-left: 5px;
      font-weight: 100;
    }

    @media screen and (max-width: 650px) {
      font-size: 16px;
    }
  }

  > span {
    color: #49665c;
    font-size: 15px;
    font-weight: 500;
    /* margin-top: 15px; */

    @media screen and (max-width: 650px) {
      font-size: 14px;
    }
  }
`;

export const BioDescText = styled.p`
  color: #49665c;
  font-size: 15px;
  margin-top: 12px;
  margin-left: 12px;

  @media screen and (max-width: 650px) {
    margin-left: 5px;
  }
`;

export const LocationBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-left: 12px;

  @media screen and (max-width: 650px) {
    margin-left: 5px;
  }
`;

export const LocationText = styled.p`
  color: #49665c;
  font-size: 15px;
  margin-left: 10px;
  font-weight: 400;
`;

export const FollowBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 12px;

  @media screen and (max-width: 650px) {
    margin-left: 5px;
  }
`;

export const FollowText = styled.p`
  color: #49665c;
  margin-left: ${(props) => props.ml};
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

export const ButtonBox = styled.div`
  padding: 15px 10px;
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
  transition: all 0.3s ease-in;

  :hover{
    background-color: #29BB89;
    color: white;
  }

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const EditIcon = styled.img`
  display: none;

  @media screen and (max-width: 650px) {
    display: block;
  }
`;

export const NavigationBox = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #babec2;
  margin-top: 15px;

  > button {
    background-color: transparent;
    border: none;
    color: #49665c;
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 10px;
    cursor: pointer;
    /* border: 0.5px solid #29BB89 */
  }
`;
