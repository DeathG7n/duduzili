import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(15, 19, 18, 0.5);
  position: fixed;
  z-index: 20;
  top: 60px;
  transition: width 0.5s ease-out ;
`;

export const NavBox = styled.div`
  width: 85%;
  height: 100%;
  background: white;
  padding: 20px 0px;
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
  width: 54px;
  height: 54px;
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
  width: 75%;
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
