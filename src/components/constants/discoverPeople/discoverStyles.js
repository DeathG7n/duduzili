import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  background-color: white;
  border: 1px solid #d0e2dc;
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 15px;
`;

export const CardTitle = styled.p`
  padding: 15px 15px 7px 15px;
  color: #49665C;
  border-bottom: 1px solid #d0e2dc;
  font-weight: 600;
`;

export const CardBody = styled.div`
  margin: 10px 0px;
  padding: 0px 0px;
`;

export const Body = styled.div`
  display: flex;
  border-bottom: 1px solid #d0e2dc;
  padding: 10px 10px;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const CardImge = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const TextBox = styled.div`
  margin-left: 7px;

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
  font-size: 13px;
  cursor: pointer;
  transition: all 0.9s;

  :hover {
    background-color: #29bb89;
    color: white;
  }
`;
