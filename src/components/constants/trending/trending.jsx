import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  Body,
  TextBox,
  ButtonBox,
  Button,
} from "./trendingStyles";
// import postimage from "../../assets/postImage.png";
import { Link } from "react-router-dom";
import SkeletonLoader from "../skeletonLoaders/simpleLoader";
import { DataContext } from "../../api/context";
import { truncate } from "../textTruncate";

const Index = () => {
  const {
    state: { trendingPosts },
  } = DataContext();

  console.log(trendingPosts?.trending);

  return (
    <>
      {trendingPosts === null ? (
        <SkeletonLoader />
      ) : (
        <Card>
          <CardTitle>Trending Post</CardTitle>
          <CardBody>
            {trendingPosts?.trending?.post.slice(0, 2).map((item, id) => {
              return (
                <Body key={id}>
                  <img alt="post" src={item.photo_url}/>
                  <TextBox>
                    <Link to={`/user${item.post_url}`} className="link">
                      <p>{truncate(item.text, 30)}...</p>
                    </Link>
                    <span>
                      {item.total_likes} likes {item.total_comments} comments
                    </span>
                  </TextBox>
                </Body>
              );
            })}
          </CardBody>

          {/* <ButtonBox>
            <Link
              to="/user/trending"
              style={{ color: "#29BB89", textDecoration: "none" }}
            >
              <Button bc="transparent" color="#29BB89" border="none">
                Show More
              </Button>
            </Link>
          </ButtonBox> */}
        </Card>
      )}
    </>
  );
};

export default Index;
