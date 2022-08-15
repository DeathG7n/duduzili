import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 50px;
  padding-top: 30px;
  box-sizing: border-box;
  background: #fff;
  margin-top: 0;
`;

export const Content = styled.div`
  width: 100%;
  padding: 21px 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  margin-top: ${(props) => props.mt};
  border-bottom: 1px solid #d0e2dc;
`;

export const TextBox = styled.div`
  margin-left: 7px;
  width: 80%;

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
  padding: 0 15px 15px 15px;

  >p{
      padding-left: 10px;
      color: #10221C;
      font-size: 16px;
    font-weight: 600;
  }
`;
