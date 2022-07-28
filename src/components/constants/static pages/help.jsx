import React, { useState } from 'react'
import { BodyContainer, Container, DiscoverBox } from '../../pages/userAccount/feed/feedStyles'
import  {helpData}  from './helpdata.js'
import {
    Body,
    HelpImg,
    HelpTitle,
    FaqCard,
    FaqAnswer,
    FaqContainer,
    FaqQuestion,
    LogoImg,
    Title,
    IconBox
} from "./staticPageStyles"
import Background from "../../assets/help-icon.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function Help() {
  return (
    <Container style={{overflowX: "hidden"}}>
        <BodyContainer>
            <Body>
                <HelpTitle>Help Centre for Duduzili</HelpTitle>
                <HelpImg src={Background} alt="image"/>
            </Body>
            <DiscoverBox style={{width: "40%", display: "flex", flexDirection: "column", alignItems: "center",gap: "10px", padding: "40px 0" }}>
                <h3>Commonly asked questions and answers.</h3>
                <FaqContainer>
                    {helpData.map((item, id)=>{
                    return(
                        <Faq key={id} item={item}/>
                    )
                })}
                </FaqContainer>
            </DiscoverBox>
            
        </BodyContainer>
    </Container>
  )
}

export const Faq = ({item})=>{
    const [showAnswer, setShowAnswer] = useState(false)
    return(
        <>
            <FaqCard onClick={()=>setShowAnswer(!showAnswer)}>
                <FaqQuestion style={{borderBottom: showAnswer ? "1px solid #b0b0b0" : "none" }} onClick={()=>setShowAnswer(!showAnswer)}>
                    <h4>{item?.question}</h4>
                    {showAnswer ? <ArrowDropUpIcon/> : <ArrowDropDownIcon />}
                </FaqQuestion>
                
                <FaqAnswer style={{display: showAnswer ? "block" : "none"}}>
                    <p>{item?.answers}</p>
                </FaqAnswer>
            </FaqCard>
        </>
    )
}
