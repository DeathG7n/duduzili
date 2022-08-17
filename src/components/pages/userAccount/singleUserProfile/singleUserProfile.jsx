import React, { useEffect, useState } from "react";

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
  MediaCard,
  MediaBody,
  FollowIcon
} from "./profileStyles";

import Trending from "../../../constants/trending/trending";
import TagBox from "../../../constants/tagBox/tagBox";
import NewsFeed from "../../../constants/postCard/postCard";
import {Audio} from "../../../constants/postCard/postCard"
import Modal from "./modal/modal";
import DiscoverPeople from "../../../constants/discoverPeople/discoverPeople";

import Avatar from "../../../assets/avatar.png";
import Location from "../../../assets/map-pin.png";
import editIcon from "../../../assets/edit.png";
import { DataContext } from "../../../api/context";
import { useParams, Link } from "react-router-dom";
import { useGetRequest, useFollowGetRequest } from "../../../api/api";
import SkeletonLoader from "../../../constants/skeletonLoaders/postCardLoader";

const Index = () => {
  const [typeId, setTypeId] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const {
    state: { userData, discoverPeople, singleUser },
  } = DataContext();
  const { getRequest, loading, data } = useGetRequest();
  const { getFollowRequest } = useFollowGetRequest();

  const [isFollowing, setIsFollowing] = useState(singleUser?.i_am_following_this_user);
  const params = useParams();
  

  const multipleRequest = async () => {
    let promise = await Promise.all([
      //  await getRequest(`user/${params.id}/`),
      // 'Promise working##########################',
      // getRequest(`user_followers/2/`),
      // getRequest(`user_followings/2/`),
    ]).then((values) => {
      console.log(values);
    });

    return promise;
  };

  const singlUser = discoverPeople?.users?.find((user) => user?.username === params.username)
  const id = userData?.user?.username === params.username? userData?.user?.id : singlUser?.id

  useEffect(() => {
    // getRequest(`user/${singlUser?.id}/`);
    getRequest(`user/${id}/`);
    multipleRequest();
  }, [params.username, isFollowing]);
  console.log(data)

  const sendFollowRequest = (id) => {
    getFollowRequest(`follow/${id}/`, isFollowing);
    toggleFollowText();
  };

  const toggleFollowText = () => {
    setIsFollowing(prevState => !prevState);
  };

  const handleOpenModal = () => {
    setOpenModal((props) => !props);
  };

  const postTypes = [
    data?.posts,
    data?.medias,
    data?.saveds,
    data?.drafts,
  ];

  const handleChangePostType = (num) => {
    setTypeId(num);
  };

  const activeStyles = {
    color: " #29BB89",
    borderBottom: "3px solid #29BB89",
  };

  const inActiveStyles = {
    color: "#000",
    borderBottom: "none",
  };

  return (
    <>
      {/* Modal Box */}
      {openModal && (
        <Modal handleOpenModal={handleOpenModal} id={userData?.user?.id} />
      )}

      <Container>
        <BodyContainer>
          <BodyBox>
            <NewsFeedBox>
              {loading ? (
                <SkeletonLoader />
              ) : (
                <ProfileBox>
                  <CardBody>
                    <Body>
                      <div>
                        <CardImge
                          alt="human"
                          src={data?.user?.photo_url || Avatar}
                        />
                        <TextBox>
                          <p>{`${data?.user?.first_name || ""} ${
                            data?.user?.last_name || ""
                          }`}</p>
                          <span>{data?.user?.username}</span>
                        </TextBox>
                      </div>

                      {userData?.user?.id !== data?.user.id ? (
                        <>
                          <FollowIcon onClick={()=>sendFollowRequest(data?.user.id)}> {isFollowing ? "-" : "+"}</FollowIcon>
                          <Button
                            bc="white"
                            border="1px solid #29BB89"
                            width="120px"
                            height="28px"
                            color="#29BB89"
                            br="20px"
                            fw="500"
                            onClick={()=>sendFollowRequest(data?.user.id)}
                          >
                            {isFollowing ? "Unfollow" : "Follow"}
                          </Button>
                        </>
                      ) : (
                        // Edit button for personal user
                        <>
                        <EditIcon alt="icon" src={editIcon} onClick={handleOpenModal} />
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
                        </>
                      )}

                      
                    </Body>

                    <BioDescText>
                      {data?.bio || "The social platform for african"}
                    </BioDescText>
                    <LocationBox>
                      <img alt="location icon" src={Location} />
                      <LocationText>{`${data?.town} ${data?.country}`}</LocationText>
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
                          {data?.followings}
                        </h4>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to={{
                            pathname: `/user/${data?.user?.username}/followings`,
                            state: { id: data?.user?.id },
                          }}
                        >
                          Following
                        </Link>
                      </FollowText>

                      <FollowText ml="15px">
                        <h4
                          style={{
                            color: "black",
                            fontWeight: "600",
                            marginRight: "5px",
                          }}
                        >
                          {data?.followers}
                        </h4>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to={{
                            pathname: `/user/${data?.user?.username}/followers`,
                            state: { id: data?.user?.id },
                          }}
                        >
                          Followers
                        </Link>
                      </FollowText>
                    </FollowBox>
                  </CardBody>
                </ProfileBox>
              )}

              <NavigationBox>
                <button
                  style={typeId === 0 ? activeStyles : inActiveStyles}
                  onClick={() => handleChangePostType(0)}
                >
                  Post
                </button>
                <button
                  style={typeId === 1 ? activeStyles : inActiveStyles}
                  onClick={() => handleChangePostType(1)}
                >
                  Media
                </button>
                <button
                  style={typeId === 2 ? activeStyles : inActiveStyles}
                  onClick={() => handleChangePostType(2)}
                >
                  Saved
                </button>
                <button
                  style={typeId === 3 ? activeStyles : inActiveStyles}
                  onClick={() => handleChangePostType(3)}
                >
                  Drafts
                </button>
              </NavigationBox>
              {/* News feed box below */}
              {typeId === 1 ?
                <Media data={data?.medias}/>
               :  
               <NewsFeed postFeed={postTypes[typeId]} />}
              
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


const Media = ({data})=>{
  const media = data.filter((d) => (d.audio !== null || d.photo !== null || d.video !== null))
  console.log(media)
  return(
    <MediaBody>
      {media && media.map((item)=>{
      return(
        <Link to={`/user${item?.post_url}`}>
          <MediaCard>
            {/* Render image */}
            {item?.photo_url ? (
              <img alt="post" src={item?.photo_url} />
            ) : (
              ""
            )}
            {/* Render audio */}
            {item?.audio_url ? (
              <Audio sourceUrl={item?.audio_url} h="150px" mh="80px"/>
            ) : (
              ""
            )}
            {/* Render video */}
            {item?.video_url ? (
              <video controls>
                <source src={item?.video_url} type="video/mp4" />
              </video>
            ) : (
              ""
            )}
          </MediaCard> 
        </Link>
      )
    })
    }
    </MediaBody>
    
    
  )
}

