import React, { useEffect }from 'react'
import {Link} from "react-router-dom"
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import Trending from "../../../constants/trending/trending";
import TagBox from "../../../constants/tagBox/tagBox";
import DiscoverPeople from "../../../constants/discoverPeople/discoverPeople";
import {
    TitleBox,
    BodyContainer,
    Container,
    PostBox,
    PostContainer,
    ProfileBox,
    Name,
    DateText,
    Card,
    Content,
    ContentText,
    CardContent,
    DiscoverBox
} from "./savedPostStyles"
import { extractLinkText } from "../../../constants/extractLinkText";
import Person from "../../../assets/person.png"

import { useGetRequest } from '../../../api/api'

export default function SavedPost() {
    const {getRequest, data} = useGetRequest()
    
    useEffect(()=>{
        getRequest("saved_list/")
    }, [])
    console.log(data?.saved)
  return (
    <>
        <Container>
            <BodyContainer>
                <PostContainer>
                    <TitleBox>
                    <h1>Saved Posts</h1>
                    </TitleBox>
                    <PostBox>
                        {data && data?.saved?.map((item, id)=>{
                            return(
                                <Card key={id}>
                                    <div style={{display: "flex", gap:"15px", padding: "0px 25px"}}>
                                        <ProfileBox>
                                        <img src={item?.user?.photo_url || Person} alt="dp" />
                                        </ProfileBox>
                                        <div>
                                            {" "}
                                            <Name>
                                            <Link
                                                to="/user/pro"
                                                style={{ textDecoration: "#000", color: "#000", fontWeight: "600" }}
                                            >
                                                {item?.user?.first_name}
                                            </Link>
                                            <span style={{ marginLeft: "7px", color: "#29BB89" }}>
                                                @{item?.user?.username}
                                            </span>
                                            </Name>{" "}
                                            <DateText>{`${item?.date} ago`}</DateText>
                                        </div>
                                        
                                    </div>
                                    <Content>
                                        <ContentText>
                                        <Link to={`/user${item?.post_url}`} className="link">
                                            {item?.text}
                                            <span
                                            style={{
                                                color: "#d0e2dc",
                                                fontWeight: 600,
                                                marginLeft: "10px",
                                            }}
                                            >
                                            {" "}
                                            {item?.text.length > 200 ? "See More" : ""}
                                            </span>
                                        </Link>
                                        </ContentText>

                                        {extractLinkText(item?.text) ? (
                                        <LinkPreview
                                            url={extractLinkText(item?.text)}
                                            width="100%"
                                        />
                                        ) : (
                                        ""
                                        )}

                                        <Link to={`/user${item?.post_url}`}>
                                        <Card>
                                            {/* Render image */}
                                            {item?.photo_url ? (
                                            <img alt="post" src={item?.photo_url} />
                                            ) : (
                                            ""
                                            )}

                                            {/* Render audio */}
                                            {item?.audio_url ? (
                                            <video controls>
                                                <source src={item?.audio_url} type="audio/mp3" />
                                            </video>
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
                                            <CardContent>
                                            {/* <CardTitle>New york</CardTitle> */}
                                            {/* <CardText>en.wikipedia.org . 81 min read</CardText> */}
                                            </CardContent>
                                        </Card>
                                        </Link>
                                    </Content>
                                </Card>
                                
                            )
                        })}
                    </PostBox>
                </PostContainer>
                <DiscoverBox>
                    <DiscoverPeople />
                    <Trending />
                    <TagBox />
                </DiscoverBox>
            </BodyContainer>
        </Container>
    </>
    
  )
}
