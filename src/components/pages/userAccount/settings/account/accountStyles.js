import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 padding-bottom: 50px;
`

export const Content = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: ${(props) => props.mt};
`

export const TextBox = styled.div`
  margin-left: 7px;
  width: 55%;

  > p {
    color: black;
    font-weight: 600;
    font-size: 14px;
  }

  > span {
    color: #49665c;
    font-size: 12px;
    font-weight: 500;
  }
`;


export const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bc};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.br};
  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.fw};
  font-size: ${(props) => props.fs};
  cursor: pointer;

  :hover{
    background-color: ${(props) => props.hbc};
    color: ${(props) => props.hc}
  }
`;

export const Accounts = styled.div`
 margin-top: 50px;


 >h4{
   color: #49665C;
   margin: 25px 0px;
   font-size: 13px;
   font-weight: 500;
 }
`

export const Rule = styled.hr`
 width: 100%;
 background-color: #49665C;
`

export const SocialBox = styled.div`
width: 100%;
 display: flex;
 align-items: center;
 margin-top: 25px;
`

export const Socials = styled.div`
 display: flex;
 align-items: center;

 >img{
   width: 20px;
   height: 20px;
 }

 >p{
   font-size: 13px;
   margin-left: 5px;
 }
`

export const SocialText = styled.p`
 font-size: 13px;
   margin-left: ${props=>props.ml};
   color: #29BB89;
   font-weight: 400;
`
