import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  background-color: white;
  border: none;
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 15px;
`;

export const CardBody = styled.div`
  margin: 10px 0px;
  padding: 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #f7fcfa;
`;

export const Body = styled.div`
  display: flex;
  padding: 15px 18px 40px 18px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 8px;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const CardImge = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const TextBox = styled.div`
  margin-left: 17px;

  > p {
    color: black;
    font-weight: 600;
    font-size: 18px;
    margin: 0%;
  }

  > span {
    color: #49665c;
    font-size: 15px;
    font-weight: 500;
    margin: 0%;
  }
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
  // transition: all 0.9s;

  :hover{
    background-color: #29BB89;
    color: white;
  }
`;

export const Text = styled.h4`
  color: #49665c;
  font-weight: 400;
  font-size: 13px;
  margin-top: 15px;
`;
