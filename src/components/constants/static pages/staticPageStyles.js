import styled from "styled-components";


export const Body = styled.div`
    height: 100vh;
    margin: 20px;
    padding: 5px 30px;
    display: flex;
    flex-direction: column;
    text-align: center;
    overflow-x: hidden;
`
export const LogoImg = styled.img`
    width: 100px;
    align-self: center;
`
export const Title = styled.em`
    font-size: 24px;
    margin: 20px 0;
    align-self: center;
`
export const IconBox = styled.div`
    width: 100%;
    display: flex;
    margin: 10px 0;
    gap: 10px;
`
export const HelpImg = styled.img`
    width: 100%;
    height: 100%;
`
export const HelpTitle = styled.h2`
    color: #2fdea2;
`
export const FaqCard = styled.div`
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #b0b0b0;
    background-color: white;
`
export const FaqAnswer = styled.div`
    margin-top: 5px;
    padding: 15px 5px;
    display: none;
    transition: display 500ms ease;
`
export const FaqContainer = styled.div`
    width: 100%;
    height: 78vh;
    overflow-y: scroll;
    padding: 0 5px;
    background-color: white;
`
export const FaqQuestion = styled.div`
    display: flex;
`
