import React, { useEffect } from "react";

import {
  Container,
  TopBox,
  ProfileBox,
  Name,
  MoreBox,
  DateText,
  Content,
  ContentText,
  HashTagBox,
  ReactionBox,
  Reaction,
  CommentBox,
  SingleCommentBox,
  CommentText,
  CommenterImg,
  CommenterPBox,
  CommenterName,
  CommentTopBox,
  DotBox,
  CommentDateText,
  CommentReaction,
  CommentReactionBox,
  Card,
  CardContent,
} from "./postStyles";
import Person from "../../../../assets/People.png";
import repost from "../../../../assets/repost.png";
import share from "../../../../assets/share.png";
import comment from "../../../../assets/comment.png";
import like from "../../../../assets/like.png";
// import postimage from "../../../../assets/postImage.png";
import SkeletonLoader from "../../../../constants/skeletonLoaders/postCardLoader";
import { useGetRequest } from "../../../../api/api";
import {Rings} from "react-loader-spinner";

const Index = ({ singleArticle }) => {
  console.log(singleArticle);
  const { data, loading, getRequest } = useGetRequest();

  console.log(data);
  console.log(singleArticle);

  useEffect(() => {
    setTimeout(() => {
      getRequest(`posts/${singleArticle?.id}/`);
    }, 2000);
  }, []);

  return (
    <>
      {singleArticle === null || singleArticle === undefined ? (
        <SkeletonLoader num="2" />
      ) : (
        <>
          <Container>
            <TopBox>
              <ProfileBox>
                <img src={singleArticle?.user?.photo_url || Person} alt="dp" />
                <div>
                  {" "}
                  <Name>
                    {singleArticle?.user?.first_name}{" "}
                    <span>{singleArticle?.user?.username}</span>
                  </Name>{" "}
                  <DateText>{singleArticle?.date}</DateText>
                </div>
              </ProfileBox>

              <MoreBox>
                <div></div>
                <div></div>
                <div></div>
              </MoreBox>
            </TopBox>

            <Content>
              <ContentText>{singleArticle?.text}</ContentText>

              <Card>
                {/* Render image */}
                {singleArticle?.photo_url ? (
                  <img alt="post" src={singleArticle?.photo_url} />
                ) : (
                  ""
                )}

                {/* Render video */}
                {singleArticle?.audio_url ? (
                  <audio controls>
                    <source src={singleArticle?.audio_url} type="audio/mpeg" />
                  </audio>
                ) : (
                  ""
                )}

                {/* Render audio */}
                {singleArticle?.video_url ? (
                  <video controls>
                    <source src={singleArticle?.video_url} type="video/mp4" />
                  </video>
                ) : (
                  ""
                )}
                <CardContent>
                  {/* <CardTitle>New york</CardTitle> */}
                  {/* <CardText>en.wikipedia.org . 81 min read</CardText> */}
                </CardContent>
              </Card>

              <HashTagBox>
                <p>#backend</p>
                <p>#infraengineers</p>
              </HashTagBox>
            </Content>
          </Container>

          <Container bb="1px solid #D0E2DC">
            <ReactionBox bb="1px solid #D0E2DC" mt="15px">
              <Reaction>
                <p style={{ fontWeight: "500" }}>
                  Likes{" "}
                  <span style={{ fontWeight: "600" }}>
                    {singleArticle?.total_likes}
                  </span>
                </p>
              </Reaction>

              <Reaction ml="10%">
                <p style={{ fontWeight: "500" }}>
                  Repost{" "}
                  <span style={{ fontWeight: "600" }}>
                    {singleArticle?.total_reposts}
                  </span>
                </p>
              </Reaction>

              <Reaction ml="10%">
                <p style={{ fontWeight: "500" }}>
                  Comments{" "}
                  <span style={{ fontWeight: "600" }}>
                    {singleArticle?.total_comments}
                  </span>
                </p>
              </Reaction>
            </ReactionBox>

            <ReactionBox>
              <Reaction>
                <img alt="icon" src={like} />
              </Reaction>

              <Reaction ml="13%">
                <img alt="icon" src={comment} />
              </Reaction>

              <Reaction ml="13%">
                <img alt="icon" src={repost} />
              </Reaction>

              <Reaction ml="13%">
                <img alt="icon" src={share} />
              </Reaction>
            </ReactionBox>
          </Container>

          {/* Loading spinner for comment section */}
          {loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Rings
                type="Puff"
                color="#29bb89"
                height={60}
                width={60}
                //   timeout={3000}
              />
            </div>
          )}

          <CommentBox>
            {data?.comments.map((item) => {
              return (
                <SingleCommentBox key={Math.random()}>
                  <CommentTopBox>
                    <CommenterPBox>
                      <CommenterImg
                        src={item?.user?.photo_url || Person}
                        alt="dp"
                      />
                      <div>
                        <CommenterName>
                          {item?.user?.first_name}{" "}
                          <span>{item?.user?.username}</span>
                        </CommenterName>
                        <CommentDateText>{item?.date}</CommentDateText>

                        <CommentText>{item?.content}</CommentText>

                        <CommentReactionBox mt="15px">
                          <CommentReaction>
                            <img alt="icon" src={like} />
                            <p style={{ fontWeight: "500" }}>
                              {" "}
                              {item?.total_number_of_likes}
                            </p>
                          </CommentReaction>

                          <CommentReaction ml="35%">
                            <img alt="icon" src={comment} />
                            <p style={{ fontWeight: "500" }}>
                              {item?.total_number_of_replies}
                            </p>
                          </CommentReaction>

                          {/* <CommentReaction ml="10%">
                            <img alt="icon" src={repost} />
                            <p style={{ fontWeight: "500" }}>300</p>
                          </CommentReaction>

                          <CommentReaction ml="10%">
                            <img alt="icon" src={share} />
                          </CommentReaction> */}
                        </CommentReactionBox>
                      </div>
                    </CommenterPBox>

                    <DotBox>
                      <div></div>
                      <div></div>
                      <div></div>
                    </DotBox>
                  </CommentTopBox>
                </SingleCommentBox>
              );
            })}
          </CommentBox>
        </>
      )}
    </>
  );
};

export default Index;
