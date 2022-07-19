import React, { useState, useEffect } from "react";

import {
  Container,
  BodyContainer,
  BodyBox,
  NewsFeedBox,
  DiscoverBox,
  ProfileBox,
  CardBody,
  CardImge,
  Body,
  Button,
  TextBox,
  LocationBox,
  LocationText,
  FollowBox,
  FollowText,
  NavigationBox,
  EditIcon,
  BioDescText,
} from "./profileStyles";

import Trending from "../../../constants/trending/trending";
import TagBox from "../../../constants/tagBox/tagBox";
import NewsFeed from "../../../constants/postCard/postCard";
import DiscoverPeople from "../../../constants/discoverPeople/discoverPeople";
import Modal from "./modal/modal";

import Avatar from "../../../assets/avatar.png";
import Location from "../../../assets/map-pin.png";
import editIcon from "../../../assets/edit.png";
import { DataContext } from "../../../api/context"

const Index = () => {
  const { state: {userData} } =DataContext()
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal((props) => !props);
  };

  useEffect(()=>{
    
  }, [])

  console.log(userData?.user?.id)

  return (
    <>
      {/* Modal Box */}
      {openModal && <Modal handleOpenModal={handleOpenModal} id={userData?.user?.id} />}
      <Container>
        <BodyContainer>
          <BodyBox>
            <NewsFeedBox>
              <ProfileBox>
                <CardBody>
                  <Body>
                    <div>
                      <CardImge alt="human" src={userData?.user?.photo_url || Avatar} />
                      <TextBox>
                        <p>{`${userData?.user?.first_name || ""} ${userData?.user?.last_name || ""}`}</p>
                        <span>{userData?.user?.username}</span>
                      </TextBox>
                    </div>

                    <Button
                      bc="white"
                      border="1px solid #29BB89"
                      width="120px"
                      height="28px"
                      color="#29BB89"
                      br="20px"
                      fw="500"
                      onClick={handleOpenModal}
                    >
                      Edit Profile
                    </Button>

                    <EditIcon onClick={handleOpenModal} alt="icon" src={editIcon} />
                  </Body>

                  <BioDescText>The social platform for african</BioDescText>
                  <LocationBox>
                    <img alt="location icon" src={Location} />
                    <LocationText>Lagos, Nigeria</LocationText>
                  </LocationBox>

                  <FollowBox>
                    <FollowText>
                      <h4
                        style={{
                          color: "black",
                          fontWeight: "600",
                          marginRight: "5px",
                        }}
                      >
                        118
                      </h4>
                      Following
                    </FollowText>

                    <FollowText ml="15px">
                      <h4
                        style={{
                          color: "black",
                          fontWeight: "600",
                          marginRight: "5px",
                        }}
                      >
                        118
                      </h4>
                      Followers
                    </FollowText>
                  </FollowBox>
                </CardBody>
              </ProfileBox>

              <NavigationBox>
                <p>Post</p>
                <p>Media</p>
                <p>Saved</p>
                <p>Draft</p>
              </NavigationBox>
              {/* News feed box below */}
              <NewsFeed />
            </NewsFeedBox>
            <DiscoverBox>
              <DiscoverPeople />
              <Trending />
              <TagBox />
            </DiscoverBox>
          </BodyBox>
        </BodyContainer>
      </Container>
    </>
  );
};

export default Index;
