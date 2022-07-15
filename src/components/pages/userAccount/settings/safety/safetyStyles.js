import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 50px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${(props) => props.mt};
`;

export const TextBox = styled.div`
  margin-left: 7px;
  width: 70%;

  > p {
    color: black;
    font-weight: 600;
    font-size: 14px;
  }

  > span {
    color: #49665c;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const TitleText = styled.div`
  border-bottom: 1px solid #D0E2DC;
  display: flex;
  align-items: center;

  >p{
      padding-left: 10px;
      color: #49665C;
      font-size: 14px;
      padding-bottom: 17px;
  }
`;
