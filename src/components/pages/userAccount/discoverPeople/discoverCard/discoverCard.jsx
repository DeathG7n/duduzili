import React from "react";

import {
  Card,
  CardBody,
 
} from "./discoverCardStyles";

import FollowCard from "./followCard/followCard";
import SkeletonLoader from "../../../../constants/skeletonLoaders/simpleLoader";
import { DataContext } from "../../../../api/context";

const Index = () => {
  const {
    state: { discoverPeople },
  } = DataContext();

  return (
    <>
      {discoverPeople === null ? (
        <SkeletonLoader />
        ) : 
      
        <Card>
          <CardBody>
            {discoverPeople?.users.map((item) => {
              return (
              <FollowCard item={item} key={item.id}/>
              );
            })}
          </CardBody>
        </Card>
      }
    </>
  );
};

export default Index;
