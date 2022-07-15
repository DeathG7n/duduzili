import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: ${(props) => props.padding};
  border-radius: 4px;
  background-color: white;
  margin-top: 15px;
  box-sizing: border-box;
  border-bottom: ${(props) => props.bb};
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 58px;
    height: 58px;
    border-radius: 50%;
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

export const MoreBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > div {
    height: 5px;
    width: 5px;
    border-radius: 50%;
    margin-left: 6px;
    background-color: #29bb89;
  }
`;

export const DateText = styled.p`
  font-size: 14px;
  color: #49665c;
  margin-top: 7px;
  font-weight: 500;
`;

export const Content = styled.div`
  margin-top: 15px;
`;

export const ContentText = styled.p`
  font-size: 16px;
  color: #10221c;
  line-height: 27px;
  word-wrap: break-word;
  padding: 10px 4px 12px 4px;

  > span {
    color: #29bb89;
    font-weight: 500;
    font-size: 16px;
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
  margin-top: ${(props) => props.mt};
  display: flex;
  align-items: center;
  padding: 20px 15px;
  border-bottom: ${(props) => props.bb};

  @media screen and (max-width: 700px) {
    justify-content: space-between;
    width: 95%;
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
    color: #49665c;
    font-size: 16px;
    font-weight: 600;
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

export const CommentBox = styled.div`
  width: 100%;
  padding: 0px 15px;
  border-radius: 4px;
  background-color: white;
  margin-top: 15px;
  box-sizing: border-box;
`;

export const CommentTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const SingleCommentBox = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const CommentText = styled.p`
  font-size: 14px;
  color: #10221c;
  word-wrap: break-word;
  margin-top: 15px;
`;

export const CommenterPBox = styled.div`
  display: flex;
  align-items: flex-start;

  > div {
    margin-left: 15px;
  }
`;

export const CommenterImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

export const CommenterName = styled.p`
  font-size: 14px;
  color: black;

  > span {
    font-size: 13px;
    color: #49665c;
  }
`;

export const CommentDateText = styled.p`
  font-size: 12px;
  color: #49665c;
  margin-top: 7px;
  font-weight: 500;
`;

export const DotBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;

  > div {
    height: 4px;
    width: 4px;
    border-radius: 50%;
    margin-left: 3px;
    background-color: #29bb89;
  }
`;

export const CommentReactionBox = styled.div`
  margin-top: ${(props) => props.mt};
  display: flex;
  align-items: center;
  padding: 5px 0px;
  width: 100%;

  @media screen and (max-width: 700px) {
    justify-content: space-between;
    width: 95%;
  }
`;

export const CommentReaction = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.ml};

  > img {
    width: 17px;
    height: 17px;
    cursor: pointer;
  }

  > p {
    color: #49665c;
    font-size: 16px;
    font-weight: 600;
    margin-left: 10px;
  }
`;
