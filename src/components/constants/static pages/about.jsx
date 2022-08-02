import React from 'react'
import Logo from "../../assets/new-logo.png"
import Trending from "../trending/trending";
import TagBox from "../tagBox/tagBox";
import DiscoverPeople from "../discoverPeople/discoverPeople";
import {
    Body,
    BodyContainer,
    LogoImg,
    Title,
    IconBox,
    Container,
    AboutContent
} from "./staticPageStyles"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function About() {
  return (
    <Container>
        <BodyContainer>
            <Body style={{padding: "5px 0 80px 0"}}>
                <LogoImg src={Logo} alt="logo" />
                <Title>Bringing people together</Title>
                <AboutContent>
                    <p>We are about bringing people together.</p>
                    <p>We are building tools for people with something to say and ideas to share, people who believe in authentic expression and want to control the value for their own creations without fear of censorship</p>
                    <p>Because everyone benefits when we have access to more ideas, diverse opinions and dialogue.</p>
                    <p>Join us we are on a mission to bring people together</p>
                    <IconBox>
                        <FacebookRoundedIcon sx={{color: "#289672"}}/>
                        <span>Follow us on Facebook</span>
                    </IconBox>
                    <IconBox>
                        <TwitterIcon sx={{color: "#289672"}}/>
                        <span>Follow us on Twitter</span>
                    </IconBox>
                </AboutContent>
                
            </Body>
        </BodyContainer>
      
    </Container>
  )
}
