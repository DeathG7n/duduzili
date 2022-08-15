import React, { useEffect } from "react";

import {
  Container,
  BodyContainer,
  BodyBox,
  NewsFeedBox,
  TitleBox,
  ContentBox,
} from "./repostStyles";

import { Link, useNavigate, useParams } from "react-router-dom";
import arrow from "../../../assets/arrow-right.png";
import PostStats from "../../../constants/postStatsCard/postStatsCard";
import { useGetRequest } from "../../../api/api";
import {Rings} from "react-loader-spinner";

const Index = () => {
  const history = useNavigate();
  const { getRequest, loading, data } = useGetRequest();

  const routeBack = () => {
    history(-1);
  };

  const id = useParams().id;

  useEffect(() => {
    getRequest(`post_repost/${id}/`);
  }, []);
  console.log(data)

  return (
    <Container>
      <BodyContainer>
        <BodyBox>
          <NewsFeedBox>
            <TitleBox>
              <div>
                <img alt="arrow icon" src={arrow} onClick={routeBack} />
                <h3>People who reposted</h3>
              </div>
            </TitleBox>

            {loading ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Rings type="Puff" color="#29bb89" height={60} width={60} />
              </div>
            ) : (
              <ContentBox>
                {data?.likers.map((item) => {
                  return (
                    <PostStats
                      key={item?.id}
                      firstName={item?.first_name}
                      userName={item?.username}
                      photo={item?.photo_url}
                      id={item?.id}
                    />
                  );
                })}
              </ContentBox>
            )}
          </NewsFeedBox>
        </BodyBox>
      </BodyContainer>
    </Container>
  );
};

export default Index;
