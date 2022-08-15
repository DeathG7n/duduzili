import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 4px;
  background-color: white;
  margin-top: 15px;
  box-sizing: border-box;
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
  margin-left: 30px;

  @media screen and (max-width: 800px) {
    margin-left: 5px;
  }

  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  > div {
    margin-left: 15px;
  }

  :hover .dropdown {
    display: block;

    @media screen and (max-width: 800px) {
      display: none;
    }
  }
`;

export const ProfileDropDown = styled.div`
  width: 280px;
  padding: 30px 0px;
  background-color: white;
  position: absolute;
  display: none;
  top: 25px;
  left: ${(props) => props.lf};
  box-shadow: 0px 16px 64px rgba(16, 34, 28, 0.32);
  border-radius: 8px;
  z-index: 1;
`;

export const ProfileDropDownContent = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  padding-left: 7%;

  > div {
    display: flex;
    align-items: flex-start;
    /* margin-left: 15px; */

    > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
`;

export const Name1 = styled.div`
  padding-left: 10px;

  > span {
    font-size: 14px;
    color: #29bb89;
  }
`;

export const ProfileText = styled.p`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  margin-top: ${(props) => props.mt};
`;

export const Button = styled.button`
  width: 80%;
  height: 37px;
  align-self: center;
  background-color: #f7fdfb;
  color: #29bb89;
  border: 1px solid #29BB89;
  margin-top: 20px;
  font-weight: 600;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 20px;

  :hover{
    color: white;
    background-color: #29bb89;
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

export const MoreBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  > span {
    height: 4px;
    width: 4px;
    border-radius: 50%;
    margin-left: 3px;
    margin-bottom: 40px;
    background-color: #769C8F;
  }

  :hover .dropdown {
    display: block;

    @media screen and (max-width: 800px) {
      /* display: none; */
    }
  }
`;

export const DropDown1 = styled.div`
  width: 230px;
  height: ${(props) => props.height};
  background-color: white;
  position: absolute;
  display: none;
  top: 10px;
  right: 0%;
  box-shadow: 0px 16px 64px rgba(16, 34, 28, 0.32);
  border-radius: 8px;
  padding-bottom: 10px;
  z-index: 2;

`;

export const DropDownContent = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-top: 20px;

  > p {
    color: #10221c;
    margin-left: 10px;
    font-size: 15px;
    cursor: pointer;
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

  @media screen and (max-width: 800px) {
    margin-left: 5px;
  }

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

export const HashTagBox = styled.div`
  display: flex;
  margin-top: 25px;
  flex-wrap: wrap;

  > p {
    color: #29bb89;
    font-weight: 600;
    font-size: 16px;
    margin-left: 5px;
  }
`;

export const ReactionBox = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  display: flex;
  align-items: center;
  padding: 0px 20px 15px 20px;
  box-sizing: border-box;

  @media screen and (max-width: 700px) {
    justify-content: space-between;
    width: 95%;
    margin-left: 5px;
  }
`;

export const Reaction = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.ml};

  > img {
    width: 17px;
    height: 17px;
    cursor: pointer;
  }

  > p {
    margin-left: 10px;
    color: #49665c;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const DropDownReaction = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.ml};
  position: relative;

  > img {
    width: 17px;
    height: 17px;
    cursor: pointer;
  }

  // :hover .dropdown {
  //   display: block;

  //   @media screen and (max-width: 800px) {
  //     display: none;
  //   }
  // }
`;

export const ShareDropDown = styled.div`
  width: 190px;
  height: 100px;
  background-color: white;
  position: absolute;
  display: none;
  top: 10px;
  left: 0%;
  box-shadow: 0px 16px 64px rgba(16, 34, 28, 0.32);
  border-radius: 8px;
  padding-bottom: 10px;

  > div {
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-top: 20px;

    > p {
      font-size: 13px;
      margin-left: 10px;
      cursor: pointer;
    }
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

export const CardContent = styled.div`
  /* padding: 15px; */
`;

export const CardTitle = styled.p`
  color: #10221c;
  font-size: 16px;
  font-weight: 600;
`;

export const CardText = styled.p`
  font-size: 14px;
  color: #49665c;
  margin-top: 10px;
`;

export const AudioBox = styled.div`
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: ${(props) => props.h};
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-top: ${(props) => props.m};

  > audio {
    width: 100%;
    margin-top: 100px;
  }

  @media screen and (max-width: 600px) {
    height: ${(props) => props.mh}
  }
`;
