import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: rgba(0 0 0/ 0.5);
  position: fixed;
  z-index: 20;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 42%;
  min-height: 300px;
  background-color: white;
  border-radius: 8px;
  /* position: relative; */
  top: 17px;
  z-index: 2;
  margin: 0 auto 0 305px;

  @media screen and (max-width: 700px) {
    width: 95%;
    border-radius: 7px;
    margin: 0 auto;
    min-height: auto;
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid #d0e2dc;
  padding: 17px 15px;
  display: flex;
  justify-content: space-between;

  > h4 {
    color: "#49665C",
    font-size: "16px",
    font-weight: "800"
  }

  > h5 {
    font-size: 14px;
    cursor: pointer;

    @media screen and (max-width: 700px) {
      visibility: visible;
    }
  }
`;

export const Item = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 700px) {
    padding: 14px 15px;
  }
`;

export const Topic = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 90%;

  > h4 {
    font-size: 13px;
    margin-left: 10px;
  }
`;
