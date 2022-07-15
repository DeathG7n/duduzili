import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 50px;
  padding-top: 30px;
  box-sizing: border-box;
  background: #fff;
`;

export const Content = styled.div`
  width: 100%;
  padding: 15px 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  margin-top: ${(props) => props.mt};
  border-bottom: 1px solid #d0e2dc;
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
  border-bottom: 1px solid #d0e2dc;
  display: flex;
  align-items: center;
  padding: 15px;

  > p {
    padding-left: 10px;
    color: #10221c;
    font-size: 16px;
    font-weight: 600;
  }
`;
