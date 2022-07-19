import React, { useEffect } from "react";

import {
  Container,
  BodyContainer,
  BodyBox,
  NewsFeedBox,
  TitleBox,
  ContentBox,
} from "./followersStyles";
import { useNavigate, useLocation } from "react-router-dom";
import arrow from "../../../assets/arrow-right.png";
import FollowCard from "../discoverPeople/discoverCard/followCard/followCard";
import { useGetRequest } from "../../../api/api";
import {Rings} from "react-loader-spinner";

const Index = () => {
  const history = useNavigate();
  const { getRequest, loading, data } = useGetRequest();

  const routeBack = () => {
    history.goBack();
  };

  const location = useLocation();

  const { id } = location.state;

  useEffect(() => {
    getRequest(`user_followers/${id}/`);
  }, []);

  return (
    <Container>
      <BodyContainer>
        <BodyBox>
          <NewsFeedBox>
            <TitleBox>
              <div>
                <img alt="arrow icon" src={arrow} onClick={routeBack} />
                <h3>People who follow you</h3>
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
                {data?.followers.map((item) => {
                  return <FollowCard key={item?.id} item={item} />;
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
