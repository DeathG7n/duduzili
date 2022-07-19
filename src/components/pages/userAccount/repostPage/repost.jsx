import React, { useEffect } from "react";

import {
  Container,
  BodyContainer,
  BodyBox,
  NewsFeedBox,
  TitleBox,
//   ContentBox,
} from "./repostStyles";

import { Link, useNavigate, useParams } from "react-router-dom";
import arrow from "../../../assets/arrow-right.png";
// import PostStats from "../../../constants/postStatsCard";
// import { useGetRequest } from "../../../api/api";
// import Loader from "react-loader-spinner";

const Index = () => {
  const history = useNavigate();
//   const { getRequest, loading, data } = useGetRequest();

  const routeBack = () => {
    history.goBack();
  };

//   const id = useParams().id;

//   useEffect(() => {
//     getRequest(`post_likers/${id}/`);
//   }, []);

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

            {/* {loading ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Loader type="Puff" color="#29bb89" height={60} width={60} />
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
            )} */}
            <p>endpoint not found</p>
          </NewsFeedBox>
        </BodyBox>
      </BodyContainer>
    </Container>
  );
};

export default Index;
