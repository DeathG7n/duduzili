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
                <HelpImg src={Background} alt="image"/>
            </Body>
            <DiscoverBox style={{width: "40%", display: "flex", flexDirection: "column", alignItems: "center",gap: "10px", padding: "10px 0" }}>
                <HelpTitle>Help Centre for Duduzili</HelpTitle>
                <p>Commonly asked questions and answers.</p>
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
            <FaqCard>
                <FaqQuestion style={{borderBottom: showAnswer ? "1px solid #b0b0b0" : "none" }}>
                    <h4>{item?.question}</h4>
                    {showAnswer ? <ArrowDropUpIcon onClick={()=>setShowAnswer(!showAnswer)}/> : <ArrowDropDownIcon onClick={()=>setShowAnswer(!showAnswer)}/>}
                </FaqQuestion>
                
                <FaqAnswer style={{display: showAnswer ? "block" : "none"}}>
                    <p>{item?.answers}</p>
                </FaqAnswer>
            </FaqCard>
        </>
    )
}
