import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  background-color: white;
  border: 1px solid #d0e2dc;
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 15px;
  padding: 15px 15px 0 15px;
`;

export const ContentBox = styled.div`
width: 100%;
  display: flex;
  height: 200px;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  list-style: none;
  padding: 0 5px;
`;

export const Links = styled.a`
 font-size: 13px;
 margin: 6px 0px;
 text-decoration: none;
 width: 50%;
 cursor: pointer;
`
