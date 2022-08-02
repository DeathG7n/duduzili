import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 15px;
  margin-top: 60px;
`;

export const Body = styled.div`
    height: 100vh;
    margin: 20px;
    padding: 5px 30px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    overflow: hidden; 
`
export const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 0px) and (max-width: 750px){
    flex-direction: column;
  }
`;
export const PBody = styled.div`
    width: 46vw;
    margin-left: -80px;
    padding: 5px 30px 60px 30px;
    display: flex;
    gap: 20px;
    flex-direction: column;

    h5, h3{
        color: #49665c;
    }

    p{
        color: #49665c;
        font-size: 12px;
    }

    @media screen and (min-width: 0px) and (max-width: 750px) {
        width: 90%;
        margin-left: 0;
      }
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
    margin: 15px 0;
    gap: 10px;
`
export const HelpImg = styled.img`
    width: 100%;
    height: 80%;
`
export const HelpTitle = styled.h1`
    color: #2fdea2;
    text-align: center;
`
export const FaqCard = styled.div`
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #b0b0b0;
    background-color: white;
    cursor: pointer;
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
    padding: 0 5px 30px 0;
    background-color: white;
`
export const FaqQuestion = styled.div`
    display: flex;
    align-self: flex-start;
`
export const TitleBox = styled.div`
  width: 100%;
  text-indent: 10px;
  background-color: #fff;
  padding-bottom: 10px;
  text-align: left;

  h1{
    color: #29bb89;
    font-weight: 100;
    font-size: 26px;
  }

  @media screen and (min-width: 0px) and (max-width: 750px) {
    justify-content: center;
    width: 99%;
  }
`;

export const AboutContent = styled.div`
  padding: 0 300px;

  @media screen and (min-width: 0px) and (max-width: 750px){
    padding: 0;
  }
`
export const MainBody = styled.div`
`
export const Sections = styled.div`
  margin: 10px 0;
  ol{
      margin: 10px 30px;
  }
`

export const DiscoverBox = styled.div`
  width: 40%;
  box-sizing: border-box;
  margin-right: -95px;
  display: flex; 
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px 0 50px 0;

  > h3{
    @media screen and (max-width: 900px){
        margin-left: 25px;
    }
  }

  @media screen and (max-width: 900px) {
    width: 100%;
}
`;
