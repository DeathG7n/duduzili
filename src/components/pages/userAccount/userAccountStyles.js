import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #F7FCFA;
  position: relative;
`;

export const NavigationBox = styled.div`
  width: 100%;
  display: none;
  position: fixed;
  z-index: 10;
  bottom: 0%;

  > div {
    width: 100%;
    padding: 7%;
    height: 70px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    /* position: fixed; */
    z-index: 10;
  }

  > img {
    margin-left: 15px;
  }

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .notify {
    position: absolute;
    box-sizing: border-box;
    top: -10px;
    left: 4px;
    /* padding: 2px; */
    min-width: 20px;
    min-height: 20px;
    font-size: 13px;
    border-radius: 50%;
    background-color: red;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > p {
    font-size: 12px;
    margin-top: 7px;
  }
`;

export const Icon = styled.img`
  cursor: pointer;
`;
