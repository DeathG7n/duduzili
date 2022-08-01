import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(208, 226, 220, 0.4);
  position: fixed;
  z-index: 100;
`;


export const NavBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 4%;
  align-items: center;

  @media screen and (min-width: 0px)and (max-width: 675px) {
    display: flex;
    padding: 0 10px;
  }
`;

export const LogoImg = styled.img`
  
  width: 30px;
  margin-bottom: 15px;

  @media screen and (max-width: 1100px) {
    width: 20px
  }
`;
export const LogoBox = styled.div`
    width: 9%;
    display: flex;
    gap: 5px;
    justify-content : center;
    align-self: center;
    margin-top: 18px;
    margin-left: 8%;
   
    @media screen and (min-width: 0px)and (max-width: 675px) {
      display: none;
    }
    

`
export const LogoText = styled.p`
    font-size: 20px;
    font-weight: 800;
    margin-top: -2px;
    cursor: pointer;

    @media screen and (max-width: 1100px) {
      font-size: 16px;
    }
`

export const SearchBox = styled.div`
  // width: 50%;
  // background: #f1f5f4;
  // border: 1px solid #d0e2dc;
  // box-sizing: border-box;
  // border-radius: 24px;
  // display: flex;
  // align-items: center;
  // padding-left: 5px;

  // @media screen and (max-width: 1100px) {
  //   width: 70%;
  //   border-radius: 10px;
  // }
`;

export const IconBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 1%;
  
  @media screen and (max-width: 1100px){
    left: 1%;
  }


  > img {
    width: 55px;
    height: 50px;
  }

  @media screen and (min-width: 0px)and (max-width: 675px) {
    left: 1%;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 45%;
  margin-left: 1%;
  margin-right: auto;
  position: relative;

  @media screen and (min-width: 0px)and (max-width: 675px) {
    width: 80%;
    margin: 0;
    justify-content: flex-start;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #d9dbe9;
  background: #f1f5f4;
  outline: none;
  font-size: 16px;
  
  font-weight: 400;
  box-sizing: border-box;
  border-radius: 24px;
  align-items: center;
  padding-left: 40px;

  @media screen and (max-width: 1100px) {
    height: 40px;
  }

  :focus{
    background-color: white;
    box-shadow: 0.1rem 0.1rem 0.4rem #29bb89;
    border: none;
  }
  ::placeholder{
    color: #a3c1be;
  }
  

`;

export const RegisterBox = styled.div`
  // width: 27%;
  // display: flex;
  // align-items: center;
`;

export const UserBox = styled.div`
  display: none;

  @media screen and (min-width: 0px)and (max-width: 675px) {
    display: block;
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
  font-weight: 600;
  cursor: pointer;
`;

export const ProfileIcon = styled.img`
  // width: 60px;
  // height: 30px;
  // margin-left: 20px;
`;

export const Icon = styled.img`
  margin-top: 10px;
  cursor: pointer;
  /* fill: "#fff"; */
  // filter: invert(1) sepia(1) saturate(5) hue-rotate(70deg);

  @media screen and (max-width: 1100px) {
    width: 20px;
  }

`;

export const NotificationBox = styled.div`
  position: relative;
  /* width: 40px; */
  // margin-left: ${(props) => props.ml};

`;

export const Notify = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: -6px;
  right: -7px;
  min-width: 80%;
  min-height: 40%;
  font-size: 10px;
  border-radius: 50%;
  background-color: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;


  @media screen and (max-width: 1100px) {
    width: 5px;
    height: 5px;
  }
`

export const NavigationBox = styled.div`
  width: 29%;
  display: flex;
  justify-content: flex-end;
  gap: 6%;
  align-items: center;
  margin-left: auto;

  

  @media screen and (max-width: 1100px) {
    gap: 5%;
  }
  @media screen and (min-width: 0px)and (max-width: 675px) {
    display: none;
  }
`;

export const ProfileDropDown = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;

  > p {
    font-size: 16px;
    margin-left: 10px;
    font-weight: 600;
  }

  > img {
    margin-left: 1%;
  }

  :hover p{
    color: #09ae82;
    transition: all 0.9s 
  }

  @media screen and (max-width: 1100px){
    font-size: 12px;
  }
`;

export const DropDownBox = styled.div`
  position: absolute;
  z-index: 11;
  top: 41px;
  right: 12px;
`;

export const ProfileImg = styled.img`
  width: 27px;
  height: 27px;
  border-radius: 50%;

  @media screen and (max-width: 1100px) {
    width: 20px;
    height: 20px;
  }
`;

export const MobileProfileImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: none;

  @media screen and (min-width: 0px)and (max-width: 675px) {
    display: block;
    width: 30px;
    height: 30px;
  }
`;

export const UserIcon = styled.img`
  width: 35px;
  height: 35px;
  display: none;
  cursor: pointer;

  @media screen and (min-width: 0px)and (max-width: 675px) {
    display: block;
    width: 30px;
    height: 30px;
  }
`;

export const SearchComp = styled.div`
  position: fixed;
  width: 100%;
  height: calc(100vh - 60px);
  top: 60px;
  z-index: 10;
  display: flex;
  justify-content: center;
`;
