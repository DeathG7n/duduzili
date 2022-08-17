import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  margin-top: 70px;

  .btnBox {
    display: flex;
    justify-content: flex-end;
    grid-gap: 20px;
  }

  .title {
    width: 100%;
    height: 55px;
    border: 2px solid gray;
    padding-left: 15px;
    outline: none;
    font-size: 20px;
    color: gray;
    box-sizing: border-box;

    ::placeholder {
      font-size: 20px;
      color: gray;
    }

    @media screen and (max-width: 950%) {
      width: 100%;
    }
  }

  .select {
    width: 100%;
    height: 55px;
    border: 2px solid gray;
    padding-left: 15px;
    padding-right: 10px;
    outline: none;
    font-size: 20px;
    color: gray;
    box-sizing: border-box;
    margin-top: 20px;
    background-color: white;

    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }

  .photoBox {
    margin: 10px 0;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    overflow: scroll;
    position: relative;

    >div{
      position: absolute;
      top: 0;
      left: 30px;
      cursor: pointer;
    }

    .photo {
      display: none;
    }

    label{
      width: 100%;
      display: flex;
      justify-content: center;
    }

    label>img {
      max-width: 100%;
    }
  }

  .richText {
    width: 100%;
    margin-top: 25px;

    @media screen and (max-width: 950%) {
      width: 100%;
    }
  }
`;

export const Box = styled.div`
  width: 900px;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;

  @media screen and (max-width: 950%) {
    width: 100%;
  }
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
  transition: all 0.3s ease-in;

  :hover {
    background-color: #29bb89;
    color: white;
  }

  @media screen and (max-width: 650px) {
    display: none;
  }
`;
