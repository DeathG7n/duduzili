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
  padding: 15px;
  color: black;
  border-bottom: 1px solid #d0e2dc;
  font-weight: 600;
`;

export const CardBody = styled.div`
  margin: 10px 0px -1px 0px;
  padding: 0px 5px;
`;

export const Body = styled.div`
  display: flex;
  border-bottom: 1px solid #d0e2dc;
  padding: 10px 0px;
  cursor: pointer;

  > img {
    width: 55px;
    height: 50px;
    border-radius: 4px;
  }
`;

export const TextBox = styled.div`
  margin-left: 10px;

  .link{
    color: black;
    font-weight: 600;
    font-size: 12px;
    text-decoration: none;
  }

  > span {
    color: #49665c;
    font-size: 10px;
    font-weight: 500;
  }
`;

export const ButtonBox = styled.div`
 padding: 15px 10px;
`

export const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bc};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.br};
  margin: ${(props) => props.margin};
  cursor: pointer;
`;