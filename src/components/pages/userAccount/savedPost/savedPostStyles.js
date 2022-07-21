import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 15px;
`;
export const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 60px;
  padding: 10px 0 ;
`;

export const PostContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const TitleBox = styled.div`
  width: 700px;
  text-indent: 10px;
  background-color: #fff;
  padding-bottom: 10px;
  margin-bottom: 40px;

  h1{
    color: #29bb89;
    font-weight: 100;
    font-size: 26px;
  }
  @media screen and (max-width: 900px) {
    justify-content: center;
    width: 99%;
  }
`;
export const PostBox = styled.div`
  width: 700px;
  padding-bottom: 15px;
  display: flex
  flex-direction: column;
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    margin: 10px 0;
    background-color: white;
`
export const ProfileBox = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 30px;

    > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    }

    > div {
    margin-left: 15px;
    }
`
export const Name = styled.div`
  font-size: 16px;
  color: black;

  > span {
    font-size: 14px;
    color: #49665c;
  }
`;
export const DateText = styled.p`
  font-size: 12px;
  color: #49665c;
  margin-top: 0px;
  font-weight: 500;
`;
export const Content = styled.div`
  margin-top: 15px;
  box-sizing: border-box;
  padding: 0px 0px;
`;

export const ContentText = styled.p`
  font-size: 16px;
  color: #49665C;
  line-height: 27px;
  word-wrap: break-word;
  padding: 0px 18px;
  margin-bottom: 15px;
  margin-left: 30px;

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
export const DiscoverBox = styled.div`
  width: 20%;
  box-sizing: border-box;
  margin-right: -50px;
  margin-top: -15px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const CardContent = styled.div`
  /* padding: 15px; */
`;