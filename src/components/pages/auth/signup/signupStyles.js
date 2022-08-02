import styled from "styled-components";
// import { theme } from "../../../constants/theme";

export const StyleButton = styled.button`
  color: #fff;
  background-color: #29BB89;
  border: none;
  height: 50px;
  width: 540px;
  border-radius: 50px;
  font-size: 20px;
  cursor: pointer;
  margin: 25px 0px;

  @media screen and (min-width: 0px) and (max-width: 750px) {
    margin: 25px 0px 10px 0px;
    font-size: 26px;
    height: 70px;
  }
`;


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 5px 0px;
  box-sizing: border-box;
  background-color : #F7FCFA;

  @media screen and (min-width: 0px) and (max-width: 750px) {
    padding: 0 15px 400px 15px;
    width: 100vh;
    height: 1500px;
  }

  > div {
    width: 400px;

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
`;

export const FormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
    
`;

export const InputBox = styled.div`
  position: relative;
`

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  width: 540px;
  height: 50px;
  border-radius: 16px;
  border: 1px solid #d0e2dc;
  box-sizing: border-box;
  background-color: #F1F5F4;
  padding-left: 13px;
  font-size : 16px;
  outline: none;
  margin-top: ${(props) => props.mt};
  align-self: center;
  padding-left: 40px;

  @media screen and (min-width: 0px) and (max-width: 750px) {
    width: 90vh;
    height: 70px;
    font-size: 24px;
  }


  :focus{
    background-color: white;
    box-shadow: 0.1rem 0.1rem 0.4rem #29bb89
  }

  @media screen and (max-width: 600px) {
    margin-top: ${(props) => props.smmt};
  }

  ::placeholder {
    color: rgba(163, 189, 180, 1);
  }
`;

export const ErrorText = styled.span`
 color: red;
 font-size: 12px;
`

export const GoogleButton = styled.button`
  border: 1px solid #29bb89;
  box-sizing: border-box;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: white;
  cursor: pointer;
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    margin-top: 15px;
  }

  > img {
    height: 28px;
    width: 28px;

    
  }

  > p {
    color: #10221c;
    font-weight: 600;
    margin-left: 35px;
    font-size: 15px;

    @media screen and (max-width: 600px) {
    margin-right: 10px;
  }
  }
`;

export const LogoImg = styled.img`
  width: 30px;
  margin-bottom: 15px;

  @media screen and (min-width: 0px) and (max-width: 750px){
    width: 50px;
  }
`;
export const LogoBox = styled.div`
    width: 170px;
    display: flex;
    gap: 15px;
    justify-content : center;
    align-self: center;
    margin-bottom: 45px;
`

export const LogoIcon = styled.img`
  height: 57px;
  width: 45px;
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const TitleText = styled.h2`
  color: #49665C;
  font-weight: 700;
  margin-top: 0px;
  margin-bottom: 60px;
  font-size: 30px;
  line-height: 34px;
  letter-spacing: 1px;

  @media screen and (min-width: 0px) and (max-width: 750px) {
    // font-size: 22px;
  }
`;
export const LogoText = styled.p`
    font-size: 20px;
    color: #49665C;
    font-weight: 800;
    margin-top: -2px;

    @media screen and (min-width: 0px) and (max-width: 750px){
      font-size: 30px;
    }
`
export const ResetText = styled.p`
    font-size: 16px;
    color: #49665C;
    text-align: center;
    width: 540px;

    @media screen and (min-width: 0px) and (max-width: 750px) {
      font-size: 18px;
    }
`

export const BottomText = styled.p`
  color: #49665c;
  text-align: center;
  font-family: Poppins;
  font-size: 13px;
  line-height: 28px;

  @media screen and (min-width: 0px) and (max-width: 750px) {
    font-size: 18px;
  }
`;

export const AltTextBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 0px;

  @media screen and (max-width: 600px) {
    margin: 0px 0px;
  }

  p {
    color: black;
    font-size: 16px;
    font-weight: 500;
    margin: 20px 10px;

    @media screen and (max-width: 600px) {
      margin: 5px 10px;
  }
  }

  hr {
    width: 45%;
    border: 0.01px solid #d0e2dc;
  }
`;

export const ForgotText = styled.p`
  font-size: 13px;
  color: #29bb89;
  margin-top: 20px;
  margin-bottom: -5px;
  cursor: pointer;

  @media screen and (min-width: 0px) and (max-width: 750px){
    font-size: 18px;
  }
`;

export const LinkText = styled.p`
  color: #29bb89;
  font-size: 13px;
  margin-left: ${(props) => props.ml};
  margin-left: ${(props) => props.mr};

  @media screen and (min-width: 0px) and (max-width: 750px){
    font-size: 18px;
  }
`;

export const VisibilityIconBox = styled.div`
  position: absolute;
  bottom: 10px;
  right: 25px;
  cursor: pointer;
`;
