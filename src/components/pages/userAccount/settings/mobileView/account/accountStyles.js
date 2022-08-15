import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 50px;
  padding-top: 30px;
  box-sizing: border-box;
  background: #fff;
  margin-top: 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-top: ${(props) => props.mt}; */
  border-bottom: 1px solid #d0e2dc;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
`;

export const TextBox = styled.div`
  margin-left: 7px;

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

export const Accounts = styled.div`
  padding: 0 15px 15px 15px;
  border-bottom: 1px solid #d0e2dc;
  display: flex;
  align-items: center; 
  box-sizing: border-box;
  width: 100%;  
  background: #fff;

  >img{
  }

  > h4 {
    color: #10221C;
    font-size: 16px;
    font-weight: 600;
    margin-left: 10px;
  }
`;

export const SocialBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 15px;
  box-sizing: border-box;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  > p {
    font-size: 15px;
    color: #29bb89;
  }
`;

export const SocialText = styled.p`
  font-size: 15px;
  font-weight: 400;
`;

export const Text = styled.div`
  height: 67vh;
  font-size: 15px;
  text-indent: 10px;
  padding: 5px;
  background: #fff;
  border-bottom: 1px solid #d0e2dc;
`
