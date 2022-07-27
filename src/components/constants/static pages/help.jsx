import React from 'react'
import { BodyContainer, Container, DiscoverBox } from '../../pages/userAccount/feed/feedStyles'
import  {helpData}  from './helpdata.js'
import {
    Body,
    HelpImg,
    HelpTitle,
    FaqCard,
    FaqAnswer,
    LogoImg,
    Title,
    IconBox
} from "./staticPageStyles"
import Background from "../../assets/help-icon.png"

export default function Help() {
  return (
    <Container style={{overflowX: "hidden"}}>
        <BodyContainer style={{border: "1px solid"}}>
            <Body style={{border: "1px solid"}}>
                <HelpImg src={Background} alt="image"/>
            </Body>
            <DiscoverBox style={{width: "40%", border: "1px solid", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <HelpTitle>Help Centre for Duduzili</HelpTitle>
                <p>Commonly asked questions and answers.</p>
                {helpData.map((item, id)=>{
                    return(
                        <Faq key={id} item={item}/>
                    )
                    
                })}
            </DiscoverBox>
            
        </BodyContainer>
    </Container>
  )
}

export const Faq = ({item})=>{
    return(
        <>
            <FaqCard>
                <h4>{item?.question}</h4>
                <FaqAnswer>
                    <p>{item?.answer}</p>
                </FaqAnswer>
            </FaqCard>
        </>
    )
}
