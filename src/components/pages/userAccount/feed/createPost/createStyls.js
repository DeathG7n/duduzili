import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  background-color: white;
  border: 1px solid #d0e2dc;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 15px 0 30px 0;
  padding: 15px 15px 40px 15px;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  > div {
    margin-left: 18px;
    width: calc(100% - 50px);
    box-sizing: border-box;
    padding-right: 10px;
  }
`;

export const CardImge = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Input = styled.input`
  width: 98%;
  height: 50px;
  font-size: 16px;
  border: 1px solid #d0e2dc;
  box-sizing: border-box;
  border-radius: 16px;
  background: #F1F5F4;
  outline: none;
  padding-left: 20px;
`;

export const TagBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  margin-left: 20px;
  padding-right: 10px;
`;

export const Tag = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;

  > img {
    /* width: 20px;
    height: 20px; */
  }

  > p {
    font-size: 14px;
    margin-left: 7px;
  }

  .link {
    color: #000;
    text-decoration: none;
    display: flex;

    > p {
      font-size: 15px;
      margin-left: 7px;
    }
  }
`;

export const ToolTipBox = styled.div`
  padding: 3px 10px 5px 10px;
  width: 75px;
  background-color: #49665c;
  /* border: 1px solid white; */
  position: absolute;
  color: white;
  border-radius: 5px;
  top: 25px;
  z-index: 10;
  left: 10px;
  opacity: 0;
  transition: all 0.4s ease-in;

  > p {
    font-size: 12px;
    text-align: center;
  }
`;
