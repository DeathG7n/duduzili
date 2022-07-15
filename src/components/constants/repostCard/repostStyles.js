import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  box-sizing: border-box;
  margin: 20px 0px;
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .link {
    > img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
  }

  > div {
    margin-left: 15px;
  }
`;

export const Name = styled.div`
  font-size: 16px;
  color: black;

  > span {
    font-size: 14px;
    color: #49665c;
  }
`;

export const DateText = styled.p`
  font-size: 14px;
  color: #49665c;
  margin-top: 3px;
  font-weight: 500;
`;

export const Content = styled.div`
  margin-top: 22px;
  box-sizing: border-box;
  padding: 0px 0px;
`;

export const ContentText = styled.p`
  font-size: 16px;
  color: #10221c;
  line-height: 27px;
  word-wrap: break-word;
  padding: 0px 18px 10px 18px;

  > span {
    color: #29bb89;
    font-weight: 500;
    font-size: 16px;
  }

  .link {
    font-size: 16px;
    color: #10221c;
    line-height: 27px;
    word-wrap: break-word;
    text-decoration: none;
  }
`;

export const Card = styled.div`
  margin-top: 10px;
  /* background-color: #f1f5f4; */
  position: relative;
  box-sizing: border-box;
  width: 100%;

  > img {
    width: 100%;
    height: auto;
    /* max-height: 350px; */
  }

  > video {
    width: 100%;
    height: auto;
  }

  > audio {
    width: 100%;
    margin-top: 20px;
  }
`;
