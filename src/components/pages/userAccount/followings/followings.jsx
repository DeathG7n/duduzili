import React, { useEffect , useState} from "react";

import {
  Container,
  BodyContainer,
  BodyBox,
  NewsFeedBox,
  TitleBox,
  ContentBox,
} from "./followingsStyles";
import { useLocation, useNavigate } from "react-router-dom";
import arrow from "../../../assets/arrow-right.png";
import FollowCard from "../discoverPeople/discoverCard/followCard/followCard";
import { useGetRequest, useGetFollowingsRequest } from "../../../api/api";
import {Rings} from "react-loader-spinner";
import { DataContext } from "../../../api/context";

const Index = () => {
  const [singleUserData, setSingleUserData] = useState(null)
  const history = useNavigate();
  const { getRequest, loading, data } = useGetRequest();

  const { getFollowingsRequest } = useGetFollowingsRequest();
  const {
    state: { userData, followings, discoverPeople },
  } = DataContext();

  const routeBack = () => {
    history(-1);
  };

  const location = useLocation().pathname;

  const extractLocation = location.slice(6, -11);

  const followingData = discoverPeople && discoverPeople?.users?.find((item) => item?.username === extractLocation);

  const id = extractLocation === userData?.user?.username ? userData?.user?.id : followingData?.id

  useEffect(() => {
    getRequest(`user_followings/${userData?.user?.id}/`);
  }, [userData]);
  
  useEffect(()=>{
    getFollowingsRequest(`user_followings/${id}/`)
    console.log("hi")
    console.log(followings)
  }, [followingData])

  console.log(followings?.followings)
  console.log(id)

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
                { followings?.followings.includes(userData?.user?.username) ?
                  data?.followings.map((item, id) => {
                   return <FollowCard key={id} item={item} />;
                  }) :
                  followings?.followings.map((item, id) => {
                   return <FollowCard key={id} item={item} />;
                  })
                }
                {followings?.followings?.length === 0 ? <h1>No Followings</h1> : ""}
              </ContentBox>
            )}
          </NewsFeedBox>
        </BodyBox>
      </BodyContainer>
    </Container>
  );
};

export default Index;
