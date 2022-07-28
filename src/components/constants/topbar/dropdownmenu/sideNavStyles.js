import styled from "styled-components";

export const NavBox = styled.div`
  width: 250px;
  padding: 15px 0px 0px 0px;
  background: white;
  box-shadow: 0px 16px 64px rgba(16, 34, 28, 0.32);
  border-radius: 8px;
  transition: all 0.9s ease-in;
  color: #29bb89;
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const CardBody = styled.div`
  width: 100%;
  padding: 10px 20px 25px 20px;
  border-bottom: 1px solid #d0e2dc;
  box-sizing: border-box;
`;

export const CardImge = styled.img`
  width: 47px;
  height: 47px;
  border-radius: 50%;
`;

export const TextBox = styled.div`
  margin-left: 15px;

  > p {
    color: black;
    font-weight: 600;
    font-size: 14px;
    display: flex;
    align-items: center;
  }

  > span {
    color: #49665c;
    font-size: 13px;
    font-weight: 500;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 35px;
  background-color: white;
  color: #29bb89;
  border: 1px solid #29bb89;
  border-radius: 30px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  margin-top: 20px;
`;

export const ListContainer = styled.div`
  padding: 0px 20px;
`;

export const ListBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 25px;

  > p {
    font-size: 14px;
    color: #10221c;
    margin-left: 15px;
  }
`;

export const ListImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.ml};
`;

export const TextStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0px 20px;

  > p {
    font-size: 15px;
    font-weight: 600;
  }
`;

export const Footer = styled.div`
  width: 100%;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 10px;
  background: #f7fcfa;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const Tagbox = styled.div`
  display: flex;
  align-items: center;

  > div {
    height: 3px;
    width: 3px;
    background-color: #29bb89;
    border-radius: 50%;
  }

  > p {
    font-size: 13px;
    color: black;
    margin-left: 7px;
  }
`;
