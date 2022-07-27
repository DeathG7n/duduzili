import React, { useState } from "react";

import {
  Card,
  CardTitle,
  CardBody,
  Button,
  ButtonBox,
} from "./discoverStyles";
import { Link } from "react-router-dom";
import SkeletonLoader from "../skeletonLoaders/simpleLoader";
import { DataContext } from "../../api/context";
import FollowCard from "./followCard/followCard"

const Index = () => {
  const {
    state: { discoverPeople },
  } = DataContext();

  const [selectValue, setSelectValue] = useState(null);

  console.log(selectValue);

  return (
    <>
      {discoverPeople === null ? (
        <SkeletonLoader />
      ) : (
        <Card>
          <CardTitle>Discover People</CardTitle>
          <CardBody>
            {discoverPeople?.users.slice(0, 3).map((item) => {
              console.log(item)
              return (
                <FollowCard item={item} key={item.id} />
              );
            })}

            <ButtonBox>
              <Link
                to="/user/discover"
                style={{ color: "#29BB89", textDecoration: "none" }}
              >
                <Button bc="transparent" color="#29BB89" border="none" fw="0">
                  Show More
                </Button>
              </Link>
            </ButtonBox>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default Index;
