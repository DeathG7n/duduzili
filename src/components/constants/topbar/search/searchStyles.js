import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: rgba(0 0 0/ 0.5);
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 20;

  @media screen and (max-width: 700px) {
    width: 95%;
  }
`;

export const Content = styled.div`
  width: 42%;
  height: 400px;
  background-color: white;
  border-radius: 8px;
  /* position: relative; */
  top: 17px;
  z-index: 2;
  margin-left: -140px;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
    border-radius: 0%;
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
    visibility: hidden;

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
    border-bottom: 1px solid #d0e2dc;
    padding: 14px 15px;
  }
`;

export const Topic = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    font-size: 13px;
    margin-left: 10px;
  }
`;
