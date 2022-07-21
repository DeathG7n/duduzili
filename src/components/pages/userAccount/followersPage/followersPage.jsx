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
import { useGetRequest, useGetFollowingsRequest } from "../../../api/api";
import {Rings} from "react-loader-spinner";
import { DataContext } from "../../../api/context";

const Index = () => {
  const history = useNavigate();
  const { getRequest, loading, data } = useGetRequest();
  const { getFollowingsRequest } = useGetFollowingsRequest();

  const { state: { userData, followers, discoverPeople } } = DataContext();

  const routeBack = () => {
    history(-1);
  };

  const location = useLocation().pathname;

  const extractLocation = location.slice(6, -10);

  const followersData = discoverPeople && discoverPeople?.users?.find((item) => item?.username === extractLocation);
  const id = extractLocation === userData?.user?.username ? userData?.user?.id : followersData?.id

  useEffect(() => {
    getRequest(`user_followers/${userData?.user?.id}/`);
  }, []);

  useEffect(()=>{
    getFollowingsRequest(`user_followers/${id}/`)
  }, [followersData])

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
                 { followers?.followers.includes(userData?.user?.username) ?
                  data?.followers.map((item, id) => {
                   return <FollowCard key={id} item={item} />;
                  }) :
                  followers?.followers.map((item, id) => {
                   return <FollowCard key={id} item={item} />;
                  })
                }
                {followers?.followers?.length === 0 ? <h1>No Followers</h1> : ""}
              </ContentBox>
            )}
          </NewsFeedBox>
        </BodyBox>
      </BodyContainer>
    </Container>
  );
};

export default Index;
