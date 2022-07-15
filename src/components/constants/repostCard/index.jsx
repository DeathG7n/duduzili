import React from "react";

import {
  Container,
  TopBox,
  ProfileBox,
  Name,
  DateText,
  Content,
  ContentText,
  Card,
} from "./repostStyles";
import { Link } from "react-router-dom";

import { truncate } from "../../constants/textTruncate";
import { extractLinkText } from "../../constants/extractLinkText";
import Person from "../../assets/People.png";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

const Index = ({ repostDetails }) => {
  return (
    <Container>
      <TopBox>
        <ProfileBox>
          <Link
            to={`/user/${repostDetails?.user?.username}/${repostDetails?.user?.id}`}
            style={{ textDecoration: "#000", color: "#000" }}
            className="link"
          >
            <img src={repostDetails?.user?.photo_url || Person} alt="dp" />
          </Link>
          <div>
            {" "}
            <Name>
              <Link
                to={`/user/${repostDetails?.user?.username}/${repostDetails?.user?.id}`}
                style={{ textDecoration: "#000", color: "#000" }}
              >
                {repostDetails?.user?.first_name}
              </Link>
              <span style={{ marginLeft: "7px" }}>
                {repostDetails?.user?.username}
              </span>
            </Name>{" "}
            <DateText>{`${repostDetails?.date} ago`}</DateText>
          </div>
        </ProfileBox>
      </TopBox>

      <Content>
        <ContentText>
          <Link to={`/user${repostDetails?.post_url}`} className="link">
            {truncate(repostDetails?.text || null, 200)}
            <span
              style={{
                color: "#d0e2dc",
                fontWeight: 600,
                marginLeft: "10px",
              }}
            >
              {" "}
              {repostDetails?.text.length > 200 ? "See More" : ""}
            </span>
          </Link>
        </ContentText>

        {extractLinkText(repostDetails?.text) ? (
          <LinkPreview
            url={extractLinkText(repostDetails?.text)}
            width="100%"
          />
        ) : (
          ""
        )}

        <Link to={`/user${repostDetails?.post_url}`}>
          <Card>
            {/* Render image */}
            {repostDetails?.photo_url ? (
              <img alt="post" src={repostDetails?.photo_url} />
            ) : (
              ""
            )}

            {/* Render video */}
            {repostDetails?.audio_url ? (
              <audio controls>
                <source src={repostDetails?.audio_url} type="audio/mpeg" />
              </audio>
            ) : (
              ""
            )}

            {/* Render audio */}
            {repostDetails?.video_url ? (
              <video controls>
                <source src={repostDetails?.video_url} type="video/mp4" />
              </video>
            ) : (
              ""
            )}
          </Card>
        </Link>
      </Content>
    </Container>
  );
};

export default Index;
