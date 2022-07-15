import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  display: none;
  box-sizing: border-box;

  @media screen and (max-width: 900px) {
    display: block;
    display: flex;
    justify-content: center;
  }
`;

export const ContentBox = styled.div`
  width: 700px;
  margin: 20px 0px;
  display: flex;
  margin-top: 15px;
  border: 1px solid #d0e2dc;
  box-sizing: border-box;
  border-radius: 8px;
  /* padding: 15px; */
  background-color: #ffffff;
  overflow-y: hidden;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    width: 99%;
  }
`;

export const MessagesBox = styled.div`
  width: 100%;
  border-right: 1px solid #d0e2dc;
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

  > h3 {
    font-size: 16px;
    font-weight: 600;
    margin-left: 6px;
    color: #10221c;
  }
`;

export const ImgBox = styled.div`
  display: flex;
`;

export const CardBody = styled.div`
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
  align-items: flex-start;
  background-color: white;
  margin-top: 15px;
  cursor: pointer;

  > div {
    display: flex;
    align-items: flex-start;
  }
`;

export const CardImge = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const TextBox = styled.div`
  margin-left: 15px;

  > p {
    color: black;
    font-weight: 600;
    font-size: 13px;
  }

  > span {
    color: #49665c;
    font-size: 13px;
    font-weight: 500;
  }
`;

export const Text = styled.p`
  color: #49665c;
  font-weight: 400;
  font-size: 12px;
`;
