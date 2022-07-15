import styled from "styled-components";

export const StatsBox = styled.div`
  width: 100%;
  padding: 6px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid #d0e2dc;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const DetailsBox = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;

  > h5 {
      margin-top: 3px;
      font-weight: 600;
      font-size: 18px;
  }

  p {
    margin-left: 5px;
  }
`;
